---
title: "Secure Coding Cross Site Request Forgery"
domain: secure-coding-guide
topic: secure-coding-cross-site-request-forgery
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.415Z
estimatedTokens: 2506
keywords: [Secure, Coding, Cross, Site, Forgery, how, protect, yourself, Cross-site, CSRF, security, threat, malicious, websites, manipulate]
---

# Secure Coding Cross Site Request Forgery

> Learn how to protect yourself from Cross-site Request Forgery (CSRF), a security
        threat where malicious websites can manipulate your browser to perform actions without your
        consent on other sites where you are logged in.

# Secure Coding Cross Site Request Forgery

Learn how to protect yourself from Cross-site Request Forgery (CSRF), a security threat where malicious websites can manipulate your browser to perform actions without your consent on other sites where you are logged in.

## Cross Site Request Forgery (CSRF) - What Is It?

Web browsers allow GET and POST requests to be made between different web sites. Cross-site request forgery (CSRF) occurs when a user visits a malicious web page that makes their browser send requests to your application that the user did not intend. This can be done with the src attribute of the IMG, IFRAME or other tags and more complicated requests, including POSTs, can be made using JavaScript. Because the browser always sends the relevant cookies when making requests, requests like this appear to originate from an authenticated user. The malicious site isn’t able to see the results of these requests, but if create, update or delete functionality can be triggered, the malicious site may be able to perform unauthorized actions.

## Sample Vulnerability

Consider a hypothetical contact management application at https://example.com/. Without CSRF protection, if a user visits a malicious website while still logged in to example.com, the following HTML in the malicious site’s page can cause all of their contacts to be deleted.

```

```

## Is My Application Vulnerable?

All web applications are vulnerable to CSRF by default. Unless you have specifically engineered protections or are automatically protected by your framework, your application is probably vulnerable. Applications built on the Apex and Visualforce platforms are protected by default. Anti-CSRF protections are available for most major application platforms but are often not enabled by default.

## How Can I Test My Application?

If you are not using a framework that provides CSRF protection, or don’t know, the best way to test your applications is to use a proxy like [Burp](http://portswigger.net/suite/) or [Fiddler](http://www.fiddler2.com/fiddler2/) to manually examine the form data sent to your application.

Do actions that create, update or delete data or cause side-effects have completely predictable parameters? To be protected from CSRF, forms targeting these actions should include an un-guessable parameter. Removing or changing this parameter should cause the form submission to fail.

![Burp suite proxy setting](/docs/resources/img/en-us/260.0?doc_id=images%2FBurp_00.PNG&folder=secure_coding_guide)

This screen shot of the Burp proxy shows an example of a request vulnerable to CSRF. All of the parameters to the application (*action, confirm*) are predictable.

The next screen shot has a parameter named *antiForgery* that looks hard to guess:

![Burp suite proxy setting](/docs/resources/img/en-us/260.0?doc_id=images%2FBurp_01.PNG&folder=secure_coding_guide)

But if we log out as “bob” and log back in as “charlie”, we see that the antiForgery value stays the same.

![Burp suite - proxy setting](/docs/resources/img/en-us/260.0?doc_id=images%2FBurp_02.PNG&folder=secure_coding_guide)

This application global anti-forgery token could be observed by one user and used to attack other users.

A secure anti-CSRF mechanism should create a different and unpredictable token *for each user session* — Bob should get a different *antiforgery* value each time he logs in, and so should Charlie. Be sure to use the capabilities of the proxy to test that actions fail if the token is removed or changed, or a valid token for another user is substituted.

Additional information on testing for CSRF can be found at: [http://www.owasp.org/index.php/Testing\_for\_CSRF\_(OWASP-SM-005)](http://www.owasp.org/index.php/Testing_for_CSRF_\(OWASP-SM-005\))

## How Do I Protect My Application?

Apex and Visualforce Applications

Within the Lightning Platform, we have implemented an anti-CSRF token to prevent this attack. Every form includes a parameter containing a random string of characters as a hidden field. When the user submits the form, the platform checks the validity of this string and will not execute the command unless the given value matches the expected value. This feature will protect you when using all of the standard controllers and methods — but only for POST requests. GET requests are not protected with the anti-forgery token.

(By protecting only POST requests, Salesforce follows the convention and recommendation that GET requests be *safe* in that they do not alter significant data on the server side or have other significant side-effects. That is, you should not be using GET requests to change application state, and so GET requests should not need CSRF protection. See [Section 9.1 of RFC 2616, HTTP 1.1](http://www.ietf.org/rfc/rfc2616.txt) for more discussion of this distinction.)

By making a non-safe action formulation with a GET request, the developer might bypass our built-in defenses without realizing the risk. For example, let’s say you have a custom controller where you take the object ID as an input parameter, then use that input parameter in your own SOQL call, and then delete the resulting object (a non-safe, state-changing action). Consider the following Visualforce code snippet:

```

```

In this case, the developer has unknowingly bypassed the anti-CSRF controls by writing code that changes state on a GET request. The id parameter is read and used in the code. The anti-CSRF token is never read or validated. An attacker web page may have sent the user to this page via CSRF attack and could have provided any value they wish for the id parameter.

Instead, use an <apex:form> block, as described in the [developer documentation](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_controller_custom.htm). Note how it is safe to use getParameters to select the account, but that the update account; statement — a non-safe state change — is done in an <apex:form> action. The form is POSTed and the anti-forgery token validated implicitly.

```

```

General Guidance

All requests that create, update or delete data or have side-effects require protection against CSRF.

The most reliable method is to include an anti-CSRF token as a hidden input with every application action.

This token should be included in all forms built by the genuine application and validated to be present and correct before form data is accepted and acted upon.

Use the POST method for requests requiring protection to avoid disclosing the token value in Referer headers.

Token values must be unique *per user session* and unpredictable.

For more information and traditional defenses, see the following articles:

-   [http://www.owasp.org/index.php/Cross-Site\_Request\_Forgery](http://www.owasp.org/index.php/Cross-Site_Request_Forgery)
-   [http://www.cgisecurity.com/csrf-faq.html](http://www.cgisecurity.com/csrf-faq.html)

ASP.NET

ASP.NET provides two strategies for preventing CSRF. Applications that use the ASP.NET ViewState mechanism can protect against CSRF by setting a ViewStateUserKey during Page\_Init.

See the following articles at MSDN for more information on using ViewStateUserKey:Be sure to set the value to a per-user, unique and unpredictable value.

-   [http://msdn.microsoft.com/en-us/library/system.web.ui.page.viewstateuserkey.aspx](http://msdn.microsoft.com/en-us/library/system.web.ui.page.viewstateuserkey.aspx)
-   [http://msdn.microsoft.com/en-us/library/ms972969.aspx](http://msdn.microsoft.com/en-us/library/ms972969.aspx)

ASP.NET applications that do not use the ViewState mechanism can use the AntiForgeryToken feature from the System.Web.Mvc package. See the following MSDN documentation:

-   [http://msdn.microsoft.com/en-us/library/system.web.mvc.htmlhelper.antiforgerytoken.aspx](http://msdn.microsoft.com/en-us/library/system.web.mvc.htmlhelper.antiforgerytoken.aspx)

If using the AntiForgeryToken, it must be added to and validated for every sensitive action in the application. Again, a “sensitive” action for these purposes is one that changes server-side state, like creating, updating, or deleting data.

Java

Several libraries are available for protecting Java applications from CSRF. The HDIV (HTTP Data Integrity Validator) framework’s Anti-Cross Site Request Forgery Token feature can be easily integrated into Struts 1.x, Struts 2.x, Spring MVC and JSTL applications. The Spring Webflow system includes a unique identifier with each request, but this identifier is not sufficiently random to provide CSRF protection, so use of HDIV is recommended. Download it at:

-   [GitHub Repository: HDIV](https://github.com/hdiv)

The OWASP CSRFGuard Project also provides an anti-CSRF token mechanism implemented as a filter and set of JSP tags applicable to a wide range of J2EE applications. Download it at:

-   [https://github.com/OWASP/www-project-csrfguard](https://github.com/OWASP/www-project-csrfguard)

PHP

General guidance on CSRF and PHP sample code demonstrating the vulnerability and countermeasures can be found at:

-   [http://shiflett.org/articles/cross-site-request-forgeries](http://shiflett.org/articles/cross-site-request-forgeries)

The “csrf-magic” library can provide anti-CSRF tokens for many PHP applications. Download it at:

-   [http://csrf.htmlpurifier.org/](http://csrf.htmlpurifier.org/)

Ruby on Rails

Ruby on Rails 2.0 provides a protect\_from\_forgery feature. This implementation does not meet Salesforce's requirements for CSRF protection if used with the :secret option because the token value will be the same for all users. See General Guidance, above, for anti-CSRF token requirements. Use of the protect\_from\_forgery feature without the :secret option with Ruby on Rails 3.3 and above creates a random token that meets Salesforce security requirements. See the documentation for [ActionController::RequestForgeryProtection](http://api.rubyonrails.org/classes/ActionController/RequestForgeryProtection/ClassMethods.html) for more information.

## Code Examples

```
<iframe src="https://example.com/addressBook?action=deleteAll&confirm=yes">
```

```apex
<apex:page controller="myClass" action="{!init}"></apex:page>

public with sharing class myClass {
    public void init() {
        Id id = ApexPages.currentPage().getParameters().get('id');
        Account obj = [select id, Name FROM Account WHERE id =&nbsp;:id];
        if (Account.sObjectType.getDescribe().isDeletable()){
            delete obj;
        }
        return&nbsp;;
    }
}
```

```apex
public with sharing class MyController {

    private final Account account;

    public MyController() {
        account = [select id, name, site from Account
            where id =:ApexPages.currentPage().getParameters().get('id')];
    }

    public Account getAccount() {
        return account;
    }

    public PageReference save() {
        if (Schema.sObjectType.Account.fields.Name.isUpdateable()){
            update account;
        }
        return null;
    }
}

<apex:page controller="myController" tabStyle="Account">
   <apex:form>
      <apex:pageBlock title="Congratulations {!$User.FirstName}">
         You belong to the Account Name: <apex:inputField value="{!account.name}"/>
         <apex:commandButton action="{!save}" value="save"/>
      </apex:pageBlock>
   </apex:form>
</apex:page>
```
