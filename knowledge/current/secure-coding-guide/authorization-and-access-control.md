---
title: "Authorization and Access Control"
domain: secure-coding-guide
topic: authorization-and-access-control
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.399Z
estimatedTokens: 619
keywords: [Authorization, Access, Control, ensures, users, resources, they’re, permitted, web, application, Common, vulnerabilities, include, directory, traversal]
---

# Authorization and Access Control

> Authorization and access control ensures that your users can only access resources
        they’re permitted to use in a web application. Common vulnerabilities include directory
        traversal, insecure direct object reference, bypassing authorization mechanisms, and
        privilege escalation.

# Authorization and Access Control

Authorization and access control ensures that your users can only access resources they’re permitted to use in a web application. Common vulnerabilities include directory traversal, insecure direct object reference, bypassing authorization mechanisms, and privilege escalation.

## Understand User Roles and Access Control

User roles help in managing access rights and other privileges for your web applications.

-   Unauthenticated users can access only the login page.
-   Regular users can use most parts of the application but can’t access areas such as maintenance or setup pages.
-   Administrators have full access, including to the restricted areas of the application.

Sometimes users can gain unauthorized access, called an authorization bypass. A specific type of authorization bypass, called privilege escalation, happens when a user with limited access gains permissions for a higher-level role, like an administrator. This authorization bypass can result in access to sensitive or restricted features.

The way these vulnerabilities appear in a web application can be application-specific, but common authorization vulnerabilities exist and can be tested for [Authorization and access control](http://cwe.mitre.org/data/definitions/285.html) and are cited in the [CWE/SANS Top 25 Most Dangerous Programming Errors](http://cwe.mitre.org/top25/) report.

-   **[Test Your Application for Vulnerabilities](atlas.en-us.secure_coding_guide.meta/secure_coding_guide/secure_coding_access_control_test_for_vulnerabilities.htm)**
    Test your applications for authorization and access control vulnerabilities to ensure web application security.
-   **[Protect Your Application from CRUD/FLS Vulnerabilities](atlas.en-us.secure_coding_guide.meta/secure_coding_guide/secure_coding_access_control_protect_from_crud_fls_vulnerabilities.htm)**
    Implement secure coding practices in Apex and Visualforce by enforcing object-level, field-level, and record-level access controls to prevent unauthorized data exposure or manipulation. Follow your organization's security policy on both standard and custom objects while ensuring that your app adapts to users with limited access.
-   **[Protect Your Application from Sharing Violations](atlas.en-us.secure_coding_guide.meta/secure_coding_guide/secure_coding_access_control_protect_from_sharing_violations.htm)**
    Enforce sharing rules to prevent inadvertent exposure of sensitive data.

## Related Topics

- Test Your Application for Vulnerabilities (atlas.en-us.secure_coding_guide.meta/secure_coding_guide/secure_coding_access_control_test_for_vulnerabilities.htm)
- Protect Your Application from CRUD/FLS Vulnerabilities (atlas.en-us.secure_coding_guide.meta/secure_coding_guide/secure_coding_access_control_protect_from_crud_fls_vulnerabilities.htm)
- Protect Your Application from Sharing Violations (atlas.en-us.secure_coding_guide.meta/secure_coding_guide/secure_coding_access_control_protect_from_sharing_violations.htm)
