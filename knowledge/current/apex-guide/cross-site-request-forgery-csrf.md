---
title: "Cross-Site Request Forgery (CSRF)"
domain: apex-guide
topic: cross-site-request-forgery-csrf
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.783Z
estimatedTokens: 799
keywords: [Cross-Site, Forgery, CSRF, words, attacker's, URL, performs, action, website, user, logged, web, they, visit, retrieved]
---

# Cross-Site Request Forgery (CSRF)

> In other words, the attacker's page contains a URL that performs an action on your
                website. If the user is still logged into your web page when they visit the
                attacker's web page, the URL is retrieved and the actions performed. This attack
                succeeds bec

# Cross-Site Request Forgery (CSRF)

Cross-Site Request Forgery (CSRF) flaws are less a programming mistake and more a lack of a defense. For example, an attacker has a web page at www.attacker.com that could be any web page, including one that provides valuable services or information that drives traffic to that site. Somewhere on the attacker's page is an HTML tag that looks like this:

```

```

In other words, the attacker's page contains a URL that performs an action on your website. If the user is still logged into your web page when they visit the attacker's web page, the URL is retrieved and the actions performed. This attack succeeds because the user is still authenticated to your web page. This attack is a simple example, and the attacker can get more creative by using scripts to generate the callback request or even use CSRF attacks against your AJAX methods.

For more information and traditional defenses:

-   [http://www.owasp.org/index.php/Cross-Site\_Request\_Forgery](http://www.owasp.org/index.php/Cross-Site_Request_Forgery "HTML (New Window)")
-   [http://www.cgisecurity.com/csrf-faq.html](http://www.cgisecurity.com/csrf-faq.html "HTML (New Window)")
-   [http://shiflett.org/articles/cross-site-request-forgeries](http://shiflett.org/articles/cross-site-request-forgeries "HTML (New Window)")

Within the Lightning Platform, Salesforce implemented an anti-CSRF token to prevent such an attack. Every page includes a random string of characters as a hidden form field. Upon the next page load, the application checks the validity of this string of characters and doesn’t execute the command unless the value matches the expected value. This feature protects you when using all of the standard controllers and methods.

Here again, the developer can bypass the built-in defenses without realizing the risk. For example, a custom controller takes the object ID as an input parameter and then uses that input parameter in a SOQL call.

```

```

The developer unknowingly bypassed the anti-CSRF controls by developing their own action method. The id parameter is read and used in the code. The anti-CSRF token is never read or validated. An attacking web page can send the user to this page by using a CSRF attack and providing any value for the id parameter.

There are no built-in defenses for such situations, and developers must be cautious about writing pages that act based on a user-supplied parameter like the id variable in the previous example. A possible work-around is to insert an intermediate confirmation page to make sure that the user intended to call the page. Other suggestions include shortening the idle session timeout and educating users to log out of their active session and not use their browser to visit other sites while authenticated.

Because of the Salesforce built-in defense against CSRF, your users can encounter an error when multiple Salesforce login pages are open. If the user logs in to Salesforce in one tab and then attempts to log in on another, they see this error: The page you submitted was invalid for your session. Users can successfully log in by refreshing the login page or by attempting to log in a second time.

## Code Examples

```
<img src="http://www.yourwebpage.com/yourapplication/createuser?email=attacker@attacker.com&type=admin....." height=1 width=1 />
```

```apex
<apex:page controller="myClass" action="{!init}"</apex:page>

public class myClass { 
  public void init() { 
    Id id = ApexPages.currentPage().getParameters().get('id'); 
    Account obj = [select id, Name FROM Account WHERE id = :id]; 
    delete obj; 
    return ; 
  }
}
```
