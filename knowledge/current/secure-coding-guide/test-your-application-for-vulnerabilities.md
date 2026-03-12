---
title: "Test Your Application for Vulnerabilities"
domain: secure-coding-guide
topic: test-your-application-for-vulnerabilities
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.388Z
estimatedTokens: 408
keywords: [Test, Application, Vulnerabilities, applications, authorization, access, control, ensure, web, security]
---

# Test Your Application for Vulnerabilities

> Test your applications for authorization and access control vulnerabilities to ensure web
  application security.

# Test Your Application for Vulnerabilities

Test your applications for authorization and access control vulnerabilities to ensure web application security.

To see how authorization and access control work in a web application, use a proxy. Stay alert about the data being passed, such as logical roles, accounts, and groups. Ask questions to investigate the web application.

-   Which pages are used for authenticating a user?
-   What roles or groups exist for the web application?
-   What are the capabilities and resources of each role or group?
-   How do you grant access to a role or group?
-   When granting access do you verify whether the requests come from an authenticated role or group member?
-   What happens when incorrect role or group data is used for access?
-   What happens when information from an external role or group is used for access?
-   What happens when a user of the site modifies their own role or group data with a proxy before submission to a mechanism?
-   What assumptions are being made, and does the product security team agree with these assumptions?

For Salesforce applications, ensure that the data operations enforce CRUD, FLS, and Sharing checks for the objects and fields.

To learn more about CRUD and FLS enforcement, check out the [Secure Server-Side Development module](https://trailhead.salesforce.com/content/learn/modules/secure-serverside-development/) on Trailhead. To detect CRUD and FLS violations in your code, consider using a code scanner such as [Salesforce Code Analyzer](https://developer.salesforce.com/docs/platform/salesforce-code-analyzer/guide/migrate.html).
