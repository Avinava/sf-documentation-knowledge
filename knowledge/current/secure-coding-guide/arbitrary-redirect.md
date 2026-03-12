---
title: "Arbitrary Redirect"
domain: secure-coding-guide
topic: arbitrary-redirect
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.396Z
estimatedTokens: 1449
keywords: [Arbitrary, Redirect, sites, mechanism, redirecting, users, different, pages, site, server, side, PHP, JSP, ASP, etc]
---

# Arbitrary Redirect

> Many sites have a mechanism for redirecting users to different pages on the site, or
                even to pages on different sites, The redirect can be done server side (PHP, JSP,
                ASP, etc) or client side (JavaScript). For example, some sites use redirects to
                bring

# Arbitrary Redirect

## Arbitrary Redirect - What is it?

Many sites have a mechanism for redirecting users to different pages on the site, or even to pages on different sites, The redirect can be done server side (PHP, JSP, ASP, etc) or client side (JavaScript). For example, some sites use redirects to bring users back to where they were before in the event of an interruption in flow:

1.  Alice logs in, and begins using the site.
2.  Alice stops in the middle of some action A on page P. Alice heads out to lunch.
3.  Because the site has a 30-minute session expiration timeout, when Alice comes back her session has expired.
4.  Alice re-authenticates, and the login form contains a hidden field with the URL of page P: <form action="login.jsp" method="POST"\>

    ```

    ```

5.  When Alice logs in, the application sends a redirect response to P, so Alice can get right back to work: HTTP/1.1 302 Found

    ```

    ```


The problem arises when the application performs dynamic redirects to a user controlled value, which allows a malicious attacker redirect users to *any* URL indiscriminately.

This allows an attacker to perform phishing attacks that looks more legitimate, for example:

Legitimate redirect: https://www.example.com/home.jsp?retURL=login.jsp

The “retURL” parameter is dynamic and can be controlled by the user easily from the browser address bar, when replacing it’s value (login.jsp) with any other page or URL, instead of being redirected to the login page the user will be redirected to any valid page or URL it has been replaced with. Attacker crafted URL:

```

```

is not a real example.com URL, but what about

```

```

which decodes to

```

```

This URL looks like (and *is*) a true example.com URL but will actually send people to evil.com. If evil.com hosts a convincing phishing attack page for example.com, example.com users may very well be tricked into providing their credentials to evil.com.

Another risk is abusing redirects to leak sensitive data that is stored in GET requests using the referrer header.

This time let’s take a look at a client side redirect example:

https://example.com/index.jsp?secretToken=81dc9bdb52d04dc2003#auth.jsp

The redirect URL is a part of the hash fragment and is used by a client side javascript to perform the redirection to the desired page :

```

```

The value can be controlled by the user which means that an attacker can change the value to redirect to his own site. https://example.com/index.jsp?secretToken=81dc9bdb52d04dc2003#http://attacker.com

The request will now be sent to “attacker.com” along with the Referer header value which is the URL of the page that performed the redirect. In this case the Referer contains sensitive data that is now being sent to the attacker.

```

```

Depending on your application and on your application framework, arbitrary redirects may also cause a [response splitting vulnerability](http://en.wikipedia.org/wiki/HTTP_response_splitting): if the attacker provides %0d%0a (\\r ) in the right request parameter, and those characters make it into the HTTP Location: header, the attacker can control HTTP headers after the insertion point and can control the HTTP response body. If the malicious request is:

```

```

the server may be tricked into responding:

```

```

## Sample Vulnerability

This C# code shows a simple example of an arbitrary redirect:

```

```

## Is My Application Vulnerable?

If your application has a redirection mechanism and does not already address the problem by limiting redirection (preferably by means of an allowlist, a mechanism that restricts redirects to known-good URIs), then it is likely to be vulnerable.

## How Can I Test My Application?

Test your application by providing many different types of URLs for your redirection feature:

-   All URL schemes: http://, https://, ftp://, data://, javascript:, and so on.
-   URLs in many domains: example.com, www.example.com, subdom.other.example.com, evil.com, google.com, example.co.uk, and so on.

## How Do I Protect My Application?

Ideally, the application will only redirect clients that match a pattern of known-safe URLs or URIs. Define a function in your code that checks potential redirection URLs and URIs against this list.

**Apex and Visualforce Applications**

In Apex code, audit any usage of PageReference to make sure that it is on the allowlist (the list of page references that can be used). In client side code, make sure that assignments to window.location are on the allowlist (the list of usable assignments). **Do not assume that retUrl is sanitized by the platform**.

**General Guidance**

The general solution to the problem is to constrain the range of URLs to which your redirector will redirect. Constraining URLs by hostname is easy; the best way to do it is by keeping a list of known-good hostnames and checking that a URL’s hostname matches one in the list. You can also limit by known-good schemes and by known-good paths (perhaps using a regular expression).

This redirector is considerably more constrained than the completely arbitrary one shown above:

```

```

We can also add a check for known-good schemes:

```

```

****ASP.NET****

Follow general guidance and audit any usage of Response.Redirect().

****Java****

Follow general guidance and audit any usage of HttpServletResponse.sendRedirect().

****PHP****

Follow general guidance and audit any usage of header('location: <URL>') and fopen().

An additional protection step is a setting in php.ini called *allow\_url\_fopen* can be used to control if the fopen() is allowed to open URL schemes. If this is not being done in the code normally, it should be set to *off*.

****Ruby on Rails****

Follow general guidance and audit any usage of redirect\_to().

## Code Examples

```
<b><font color="red"><input </font></b><font color="red">
type="hidden" name="page" value="/someImportantAction.jsp" /></font>
<input type="text" name="name" value="Alice" 
/>
<input type="password" name="password" value="" />
<input type="submit" />
</form>
```

```
Location: <b><font color="red">/someImportantAction.jsp</font></b>
```

```
https://www.example.com.fake.bad.co.uk/login.jsp
```

```
https://www.example.com/login.jsp?page=%68%74%74%70%3a%2f%2f%65%76%69%6c%2e%63%6f%6d%2f%68%74%74%70%3a%2f%2f%65%76%69%6c%2e%63%6f%6d%2f
```

```
http://www.evil.com/
```
