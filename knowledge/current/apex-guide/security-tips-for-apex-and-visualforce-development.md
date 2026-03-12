---
title: "Security Tips for Apex and Visualforce Development"
domain: apex-guide
topic: security-tips-for-apex-and-visualforce-development
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:34.788Z
estimatedTokens: 796
keywords: [Security, Tips, Apex, Visualforce, Development, powerful, combination, pages, Lightning, Platform, developers, provide, custom, functionality, business]
---

# Security Tips for Apex and Visualforce Development

> The powerful combination of Apex and Visualforce pages allows Lightning Platform developers to
    provide custom functionality and business logic to Salesforce or to create a new standalone
    product running inside the Lightning Platform. But as with any programming language, developers
    must 

# Security Tips for Apex and Visualforce Development

## Understanding Security

The powerful combination of Apex and Visualforce pages allows Lightning Platform developers to provide custom functionality and business logic to Salesforce or to create a new standalone product running inside the Lightning Platform. But as with any programming language, developers must be cognizant of potential security-related pitfalls.

Salesforce has incorporated several security defenses in the Lightning Platform. But careless developers can still bypass the built-in defenses and then expose their applications and customers to security risks. Many of the coding mistakes a developer can make on the Lightning Platform are similar to general web application security vulnerabilities, while others are unique to Apex.

To certify an application for AppExchange, it’s important for developers to learn and understand the security flaws described. For more information, see the Lightning Platform Security Resources page on Salesforce Developers. [https://developer.salesforce.com/page/Security](https://developer.salesforce.com/page/Security "HTML (New Window)").

## Open Redirects Through Static Resources

URL redirects automatically send a user to a different web page. Redirects are often used to guide navigation to a website, or refer multiple domain names belonging to the same owner to refer to a single website. Unfortunately for developers, attackers can exploit URL redirects when not implemented properly. Open redirect (also known as “arbitrary redirect”) is a common web application vulnerability where values controlled by the user determine where the app redirects.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexcode)

#### Warning

Open redirects through static resources can expose users to the risk of unintended, and possibly malicious, redirects.

Only admins with “Customize Application” permissions can upload static resources within an organization. Admins with this permission must use caution to ensure that static resources don’t contain malicious content. To learn how to help guard against static resources that were obtained from third parties, see [Referencing Untrusted Third-Party Content with iframes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_resources_iframe.htm) .

-   **[Cross Site Scripting (XSS)](atlas.en-us.apexcode.meta/apexcode/pages_security_tips_xss.htm)**

-   **[Unescaped Output and Formulas in Visualforce Pages](atlas.en-us.apexcode.meta/apexcode/pages_security_tips_scontrols.htm)**
    When using components that have set the escape attribute to false, or when including formulas outside of a Visualforce component, output is unfiltered and must be validated for security. This is especially important when using formula expressions.
-   **[Cross-Site Request Forgery (CSRF)](atlas.en-us.apexcode.meta/apexcode/pages_security_tips_csrf.htm)**

-   **[SOQL Injection](atlas.en-us.apexcode.meta/apexcode/pages_security_tips_soql_injection.htm)**

-   **[Data Access Control](atlas.en-us.apexcode.meta/apexcode/pages_security_tips_data_access_control.htm)**

## Related Topics

- Cross Site Scripting (XSS) (atlas.en-us.apexcode.meta/apexcode/pages_security_tips_xss.htm)
- Unescaped Output and Formulas in Visualforce Pages (atlas.en-us.apexcode.meta/apexcode/pages_security_tips_scontrols.htm)
- Cross-Site Request Forgery (CSRF) (atlas.en-us.apexcode.meta/apexcode/pages_security_tips_csrf.htm)
- SOQL Injection (atlas.en-us.apexcode.meta/apexcode/pages_security_tips_soql_injection.htm)
- Data Access Control (atlas.en-us.apexcode.meta/apexcode/pages_security_tips_data_access_control.htm)
