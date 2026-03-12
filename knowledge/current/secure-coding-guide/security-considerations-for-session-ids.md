---
title: "Security Considerations for Session IDs"
domain: secure-coding-guide
topic: security-considerations-for-session-ids
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:44.406Z
estimatedTokens: 1213
keywords: [Security, Considerations, Session, IDs, Improper, handling, managed, packages, bypass, protections, pose, risks, Follow, established, guidelines]
---

# Security Considerations for Session IDs

> Improper handling of session IDs in managed packages can bypass namespace protections and
  pose security risks. Follow established guidelines to mitigate threats and ensure secure
  usage.

# Security Considerations for Session IDs

Improper handling of session IDs in managed packages can bypass namespace protections and pose security risks. Follow established guidelines to mitigate threats and ensure secure usage.

When a Salesforce admin installs a managed package, the package can access the admin's session ID to bypass namespace protections. This access allows the package to perform Setup actions, such as uninstalling other packages or changing organization-wide security settings. Because the admin isn't notified and no audit trail exists, these actions aren't traceable to the managed package. Addressing these risks is critical to maintaining trust in AppExchange, especially for regulated sectors such as financial services and government. To ensure secure use of session IDs, follow the Salesforce Security team guidelines.

## Supported Session ID Use Cases

You can use session IDs for client-side code or server-side Apex in these scenarios:

-   Standard UI XHR calls, such as CometD or AJAX Toolkit
-   SOAP and REST Data API calls for accessing org data
-   Metadata API read operations
-   Metadata API write operations for metadata owned by the managed package. For example, updating field help text, picklist values for packaged custom fields, or custom layouts associated with partner-owned fields and objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=secure_coding_guide)

#### Note

Notify the Salesforce admin to use a session ID for write operations. When submitting a request to the Security team, include screenshots and code references with your documentation.

## Prohibited Session ID Use Cases

Session IDs aren't allowed in these use cases.

-   Exporting session IDs to third-party systems or external websites.
-   Editing sensitive org-wide settings, for example, password policies, using the Metadata API or Tooling API.
-   Creating or modifying named credentials, connected apps, or external client apps via the Metadata API or Tooling API.
-   Enabling Send Session ID in Outbound Message Actions. See [Security Updates to the "Outbound Message with Session ID"](https://help.salesforce.com/s/articleView?id=005232763&type=1&language=en_US).

## Alternatives to Session IDs

Salesforce offers several secure alternatives to session IDs in managed packages.

-   JWT-Based External Client App (ECA): Package a JWT-based ECA with your solution. Because JWT authentication doesn't require a callback URL, you can use a dummy URL. Store the private key securely using protected custom metadata or protected custom settings. For implementation examples, see the [sample connected app code](https://resources.docs.salesforce.com/rel1/doc/en-us/static/misc/jwtDemo_connectedapp.zip) and [sample ECA code](https://resources.docs.salesforce.com/rel1/doc/en-us/static/misc/jwtDemo_ECA_app.zip).
-   Subscriber-Provided ECA: Ask the Salesforce admin to create an ECA and provide the client key and client secret. Include a setup page in your package that explains the configuration steps, outlines the necessary changes, and clearly defines required OAuth scopes and permissions.
-   Admin-Driven Manual Configuration: For sensitive changes, for example, IP allowlist entries, ask the Salesforce admin to make the changes manually. To maintain transparency and trust, don't automate security-sensitive tasks in the package.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=secure_coding_guide)

#### Note

All new implementations must use External Client Apps (ECA) with distribution set to Local. Existing implementations can continue using Connected Apps.

You can use one of the preceding alternatives for these use cases:

-   Org-wide configuration changes, such as changes to Remote Site Settings.
-   Modifying metadata not owned by the managed package.

To discuss your specific use case or other authentication options, contact the Security team during [Office Hours](https://security.my.salesforce-sites.com/sourcescanner/SourceScannerHelp).

For additional guidance and best practices, refer:

-   [External Client Apps](https://help.salesforce.com/s/articleView?id=xcloud.external_client_apps.htm&type=5&language=en_US)

-   [Partner Third-Party Connections Recommended Security Settings](https://help.salesforce.com/s/articleView?id=005225370&type=1&language=en_US)

-   [Prepare for Connected App Usage Restrictions Change](https://help.salesforce.com/s/articleView?id=005132365&type=1&language=en_US)

-   [Protect Secrets Using Platform Features](https://trailhead.salesforce.com/content/learn/modules/secure-secrets-storage/protect-secrets-using-platform-features)

-   [Connected App & External Client App Security Requirements for AppExchange](https://help.salesforce.com/s/articleView?id=005232552&type=1&language=en_US)
