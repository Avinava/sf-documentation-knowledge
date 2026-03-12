---
title: "Prevent Secure Coding Violations"
domain: packagingGuide
topic: prevent-secure-coding-violations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.127Z
estimatedTokens: 1585
keywords: [Prevent, Secure, Coding, Violations, solutions, listed, AppExchange, adhere, security, requirements, likely, appear, why, they, pose]
---

# Prevent Secure Coding Violations

> All solutions listed on AppExchange must adhere to these AppExchange security
  requirements. Learn which violations are most likely to appear in AppExchange solutions, why they
  pose security risks, and how to create a solution that helps avoid them.

# Prevent Secure Coding Violations

All solutions listed on AppExchange must adhere to these AppExchange security requirements. Learn which violations are most likely to appear in AppExchange solutions, why they pose security risks, and how to create a solution that helps avoid them.

-   **[Load JavaScript Files from Third-Party Endpoints](atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_third_party_js.htm)**
    Avoid dynamically loading third-party JavaScript files from content delivery networks (CDNs). Instead, load the code from the static resources folder of your package.
-   **[Load Third-Party CSS in Lightning Components](atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_third_party_css.htm)**
    Include cascading style sheets (CSS) and other resources in static resources rather than loading from a third party.
-   **[Use CSS Outside Components](atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_css_outside_components.htm)**
    The Salesforce Platform tries to ensure that each namespace is an isolated sandbox, but isolation can’t always be guaranteed. Where a namespace isolation breach occurs, one component can steal clicks from another component, or otherwise interfere with another component’s intended use. To prevent this type of abuse, don’t use CSS directives known to be incompatible with style isolation in your components.
-   **[Running JavaScript in the Salesforce Domain](atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_js_in_sforce_domain.htm)**
    JavaScript code from multiple vendors can run in the same origin. To prevent code interference, vendor JavaScript code is sandboxed. Don’t attempt to break out of a sandbox or run code outside your origin. Use Visualforce, Aura, or Lightning Web Components, which run in the proper origin.
-   **[Expose Secret Data When Debugging](atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_secret_data_debug.htm)**
    In production environments, logging secret data with debug statements is a security vulnerability. Don’t log secret data, sensitive information, passwords, keys, or stack traces in production environments. Redact the data or omit it from the logs.
-   **[Store Sensitive Data Insecurely](atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_storing_sensitive_data.htm)**
    Follow enterprise security standards when you export data from the Salesforce Platform and when you store secret data in the platform.
-   **[Using Software That Has Known Vulnerabilities](atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_software_has_vulnerabilities.htm)**
    Using software that has documented common vulnerabilities and exposures (CVE) related to your use cases is a security vulnerability. If your solution has known vulnerabilities, test and deploy security patches as soon as they’re available. If your solution uses software that has CVE-documented vulnerabilities unrelated to your use cases, prepare false positive documentation.
-   **[Use Sample Code in Production](atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_sample_code.htm)**
    Only use sample code as an educational tool in preparation for developing your own application. When building your production code, always write the code yourself. Avoid copying code from sources that you don’t directly control.
-   **[Bypass Object-Level and Field-Level Access Settings](atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_access_settings.htm)**
    Design your solutions to enforce the org’s create, read, update, and delete (CRUD) and field-level security (FLS) settings on standard and custom objects.
-   **[Bypass Sharing Rules in Apex](atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_sharing_rules.htm)**
    Respect profile-based permissions, field-level security, sharing rules, and org-wide defaults in your Apex code.
-   **[SOQL Injection Due to Insecure Database Query Construction](atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_soql_injection.htm)**
    To prevent Salesforce Object Query Language (SOQL) injection, use bind variables and input sanitation.
-   **[Cross-Site Request Forgery](atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_request_forgery.htm)**
    A cross-site request forgery (CSRF) is an attack that forces an end user to execute unwanted actions during their authenticated web application session. To protect against CSRF, use confirmationTokenRequired, or trigger state changes with user actions.
-   **[Open Redirects](atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_open_redirects.htm)**
    An open redirect occurs when an application dynamically redirects to a user-controlled parameter value without any validation. Prevent open redirects by using hardcoded redirects.
-   **[Lightning LockerService Disabled](atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_locker_disabled.htm)**
    Lightning LockerService is a critical security feature for Lightning code. It provides component isolation that allows code from many sources to execute and interact using safe, standard APIs and event mechanisms. Enable Lightning Locker for AppExchange packages that contain Lightning components or applications.
-   **[Insufficient Escaping in Lightning Components](atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_escaping_in_components.htm)**
    Each component in a bundle is responsible for sanitizing the input provided to it by parent components, apps, or in URL parameters.
-   **[Asynchronous Code in Components](atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_asynchronous_components.htm)**
    Hackers can manipulate the timing of asynchronous code to produce malicious results. To preserve current execution context, wrap asynchronous function calls or batch actions into a single request.
-   **[Secure Communication](atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_communication.htm)**
    Ensure that your solution is reachable exclusively over secure connections such as SFTP and HTTPS. Avoid using HTTP and FTP because these protocols don’t encrypt the information that flows over the internet.

## Related Topics

- Load JavaScript Files from Third-Party Endpoints (atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_third_party_js.htm)
- Load Third-Party CSS in Lightning Components (atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_third_party_css.htm)
- Use CSS Outside Components (atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_css_outside_components.htm)
- Running JavaScript in the Salesforce Domain (atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_js_in_sforce_domain.htm)
- Expose Secret Data When Debugging (atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_secret_data_debug.htm)
- Store Sensitive Data Insecurely (atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_storing_sensitive_data.htm)
- Using Software That Has Known Vulnerabilities (atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_software_has_vulnerabilities.htm)
- Use Sample Code in Production (atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_sample_code.htm)
- Bypass Object-Level and Field-Level Access Settings (atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_access_settings.htm)
- Bypass Sharing Rules in Apex (atlas.en-us.packagingGuide.meta/packagingGuide/secure_code_violation_sharing_rules.htm)
