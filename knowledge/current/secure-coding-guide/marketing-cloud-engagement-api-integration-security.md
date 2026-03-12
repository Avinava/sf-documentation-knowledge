---
title: "Marketing Cloud Engagement API Integration Security"
domain: secure-coding-guide
topic: marketing-cloud-engagement-api-integration-security
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.503Z
estimatedTokens: 1949
keywords: [Marketing, Cloud, Engagement, API, Integration, Security, part, treat, any, integrate, Salesforce, apps, few, additional, things]
---

# Marketing Cloud Engagement API Integration Security

> For the most part we treat the Marketing Cloud Engagement API as any other API that you
            can integrate your Salesforce apps with. Here are a few additional things to keep in
            mind as you design and develop your integration:

# Marketing Cloud Engagement API Integration Security

For the most part we treat the Marketing Cloud Engagement API as any other API that you can integrate your Salesforce apps with. Here are a few additional things to keep in mind as you design and develop your integration:

**Enforce least privilege**

Make sure to request minimum required scope for the OAuth token for your app API token. This would follow the principle of least privilege and reduce the risk associated with the API token.

**Secure storage**

Make sure to only store the refresh token on your external web server. Make sure to keep the access token only in memory and requesting a new access token when needed. Make sure to follow industry best practice for secure storage of refresh token on the external platform you are using. The refresh token should be treated like a Salesforce credential.

**Secure in transit**

Make sure to always enforce TLS when making API calls to the MC APIs. Make sure to only provide the access token as the Authorization header and never as query parameters. Make sure to maintain up to date TLS configurations on your external web server.

**Prohibited API endpoints**

Please do not make use of the XML API. This API is no longer supported and is not compatible with Enterprise 2.0 accounts. The AppExchange does not allow apps that make use of the XML API on the marketplace. [https://help.exacttarget.com/en/technical\_library/xml\_api/exacttarget\_xml\_api\_technical\_reference/](https://help.exacttarget.com/en/technical_library/xml_api/exacttarget_xml_api_technical_reference/)

For general guidelines around web application pentesting for your composite app, review the OWASP Top Ten [checklist.](https://www.owasp.org/index.php/Top_10_2010-Main) Here are some specific issues to look out for when building composite apps:

**Authentication (Session management)**

Authentication and session management needs to be correctly implemented. That means using secure procedures to create, manage and end a session for each authorized user. Session IDs should be properly rotated out and set with the correct cookie flags. Always prefer to use your framework’s session management features as they’re thoroughly tested and more frequently updated.

[https://www.owasp.org/index.php/Top\_10\_2013-A2-Broken\_Authentication\_and\_Session\_Management](https://www.owasp.org/index.php/Top_10_2013-A2-Broken_Authentication_and_Session_Management)

**Access Control**

The app needs to verify the user’s session and permission levels before giving access to any restricted data or function. For example, this could be a standard user accessing admin-level setting pages, or user A viewing user B’s purchase history.

-   [https://www.owasp.org/index.php/Top\_10\_2013-A7-Missing\_Function\_Level\_Access\_Control](https://www.owasp.org/index.php/Top_10_2013-A7-Missing_Function_Level_Access_Control)
-   [https://www.owasp.org/index.php/Top\_10\_2013-A4-Insecure\_Direct\_Object\_References](https://www.owasp.org/index.php/Top_10_2013-A4-Insecure_Direct_Object_References)

**Sensitive Information in errors**

The correct handling of errors and responses are critical in avoiding most of the fingerprinting and enumeration process by a possible attacker. Common error responses such as stack traces and debug logs should be hidden from the user because an attacker can use this to gain more information about the server/application.

[https://www.owasp.org/index.php/Improper\_Error\_Handling](https://www.owasp.org/index.php/Improper_Error_Handling)

**Cross Site Request Forgery (CSRF)**

This vulnerability is used by attackers to trick an authenticated user to perform an unwanted action on the target vulnerable server. To achieve this, the attacker crafts a URL or a FORM inside a malicious page, and trick the target victim to access to it. CSRF attacks typically target state-changing requests as there is no way for the attacker to see the response of the forged request.

[https://www.owasp.org/index.php/Cross-Site\_Request\_Forgery\_(CSRF)](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_\(CSRF\))

**HTML injection and Cross Site Scripting (XSS)**

HTML injection vulnerabilities occur when an attacker can inject their own HTML code in a vulnerable website, and make it appear as if it is originally there. For example, the attacker may be able to inject an <iframe> and display a completely different page. Cross Site Scripting is a vulnerability where an attacker can inject their own javascript (instead of just HTML) that executes in the context of a vulnerable domain. The attacker can then craft a payload and trick a victim to visit the link and the attacker’s Javascript will execute on the victim’s browser.

[https://www.owasp.org/index.php/Top\_10\_2013-A3-Cross-Site\_Scripting\_(XSS)](https://www.owasp.org/index.php/Top_10_2013-A3-Cross-Site_Scripting_\(XSS\))

**Arbitrary Redirects**

The vulnerable server perform a redirect function using user controlled data in some URL. This allows the attacker to use a normal-looking server URL to redirect a victim to a malicious site. In addition, if your site uses one page to perform forwards to other resources, an attacker could modify the input parameter and bypass permission checks.

[https://www.owasp.org/index.php/Top\_10\_2013-A10-Unvalidated\_Redirects\_and\_Forwards](https://www.owasp.org/index.php/Top_10_2013-A10-Unvalidated_Redirects_and_Forwards)

**Remote Code Execution**

The web app or server is running some code vulnerable to specially crafted input data, that entails the execution of commands in the target machine. This can be achieved normally from three basic sources: Web server is running some vulnerable service listening to open ports on the internet: Check if every service that is listening at a port on your web server is not vulnerable or it has any public working exploit. Web app is using vulnerable components: Double check every software package (gems, nodes,libraries...) that you are using in your app to support functionality like process documents, process images, open connections (like external URI), parse XML. Application is processing user input as serialized data. Execute deserialized user data with caution as it could lead to remote code execution.

[https://www.owasp.org/index.php/Command\_Injection](https://www.owasp.org/index.php/Command_Injection)

**Using Insecure Software**

Most applications use some kind of third-party components, such as Javascript libraries, server side frameworks and application servers. Ensure you are using the latest available version with no known security vulnerabilities. Vulnerable versions are easy to identify and can open up your application to a broader attack surface.

[https://www.owasp.org/index.php/Top\_10\_2013-A9-Using\_Components\_with\_Known\_Vulnerabilities](https://www.owasp.org/index.php/Top_10_2013-A9-Using_Components_with_Known_Vulnerabilities)

**SQL Injection**

A SQL injection attack consists of insertion, or "injection", of a SQL query via the input data from the client to the application. SQL injection attacks are a type of injection attack, in which SQL commands are injected as a part of user supplied input in order to effect the execution of predefined SQL commands.

[https://www.owasp.org/index.php/Top\_10\_2013-A1-Injection](https://www.owasp.org/index.php/Top_10_2013-A1-Injection)

**Storage of sensitive Data**

Sensitive data such as passwords, credit card information, Social Security Numbers and other PII need to be securely stored on the server using the industry best practice for secure storage on your platform.

[https://www.owasp.org/index.php/Top\_10\_2013-A6-Sensitive\_Data\_Exposure](https://www.owasp.org/index.php/Top_10_2013-A6-Sensitive_Data_Exposure)
