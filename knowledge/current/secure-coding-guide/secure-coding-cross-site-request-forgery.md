---
title: "Secure Coding Cross Site Request Forgery"
domain: secure-coding-guide
topic: secure-coding-cross-site-request-forgery
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:39:21.872Z
estimatedTokens: 443
keywords: [Secure, Coding, Cross, Site, Forgery, how, protect, AppExchange, solutions, Cross-Site, CSRF, security, threat, malicious, website, manipulates, user's, browser, perform, unauthorized, actions, their, knowledge, implement, Salesforce-specific, defense, strategies, across, Aura, Lightning, Web, LWC, Visualforce, Flows, Understand]
---

> Learn how to protect your AppExchange solutions from Cross-Site Request Forgery
        (CSRF), a security threat where a malicious website manipulates a user's browser to perform
        unauthorized actions without their knowledge. You can implement Salesforce-specific defense
        strategies across Aura, Lightning Web Components (LWC), Visualforce, and Flows.

# Secure Coding Cross Site Request Forgery

Learn how to protect your AppExchange solutions from Cross-Site Request Forgery (CSRF), a security threat where a malicious website manipulates a user's browser to perform unauthorized actions without their knowledge. You can implement Salesforce-specific defense strategies across Aura, Lightning Web Components (LWC), Visualforce, and Flows.

## Understand Cross Site Request Forgery (CSRF)

Cross-Site Request Forgery (CSRF) is a security vulnerability where an attacker tricks a logged-in user into performing unintended actions in a web application. In Salesforce, an attacker can abuse an authenticated user's session to modify records, change settings, or trigger business logic without the user's consent.

Here are a few threats that CSRF poses.

-   Any exposed Visualforce pages, Lightning components, or custom Apex endpoints in your package can be misused if unprotected.
-   CSRF attacks can cause unauthorized changes in Salesforce, harming data integrity and user trust.

For additional guidance and best practices, refer:

-   [Cross Site Request Forgery (CSRF)](http://www.owasp.org/index.php/Cross-Site_Request_Forgery)
-   [The Cross-Site Request Forgery (CSRF/XSRF) FAQ](http://www.cgisecurity.com/csrf-faq.html)
-   [Cross-Site Request Forgeries](http://shiflett.org/articles/cross-site-request-forgeries)

-   **[Protect Your Application from CSRF Vulnerabilities](atlas.en-us.secure_coding_guide.meta/secure_coding_guide/security_protect_application_from_csrf_vulnerabilities.htm)**
    Secure your applications against CSRF vulnerabilities. While Salesforce automatically protects components built with Apex and Visualforce, verify that protections are enabled when using other development frameworks.

## Related Topics

- Protect Your Application from CSRF Vulnerabilities (atlas.en-us.secure_coding_guide.meta/secure_coding_guide/security_protect_application_from_csrf_vulnerabilities.htm)
