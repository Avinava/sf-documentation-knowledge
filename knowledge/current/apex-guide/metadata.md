---
title: "Metadata"
domain: apex-guide
topic: metadata
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:33.729Z
estimatedTokens: 596
namespace: Metadata
keywords: [Metadata, Salesforce, uses, components, represent, org, configuration, customization, settings, admins, control, applied, installed, apps, packages]
---

# Metadata

> Salesforce uses metadata types and components to represent org configuration and
    customization. Metadata is used for org settings that admins control, or configuration
    information applied by installed apps and packages.

**Namespace:** `Metadata`

# Metadata

Salesforce uses metadata types and components to represent org configuration and customization. Metadata is used for org settings that admins control, or configuration information applied by installed apps and packages.

Use the classes in the Metadata namespace to access metadata from within Apex code for tasks that include:

-   Customizing app installs or upgrades—During or after an install (or upgrade), your app can create or update metadata to let users configure your app.
-   Customizing apps after installation—After your app is installed, you can use metadata in Apex to let admins configure your app using the UI that your app provides rather than having admins manually use the standard Salesforce setup UI.
-   Securely accessing protected metadata—Update metadata that your app uses internally without exposing these types and components to your users.
-   Creating custom configuration tools—Use metadata in Apex to provide custom tools for admins to customize apps and packages.

Metadata access in Apex is available for Apex classes using API version 40.0 and later.

For more information on metadata types and components, see the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm "HTML (New Window)") and [Custom Metadata Types](https://help.salesforce.com/s/articleView?id=platform.custommetadatatypes_overview.htm&language=en_US "HTML (New Window)").

-   **[Retrieving and Deploying Metadata](atlas.en-us.apexcode.meta/apexcode/apex_metadata_retrieve_deploy.htm)**
    Retrieve and deploy metadata by using the Metadata.Operations class.
-   **[Supported Metadata Types](atlas.en-us.apexcode.meta/apexcode/apex_metadata_supported_types.htm)**
    Apex supports a subset of metadata types and components.
-   **[Security Considerations](atlas.en-us.apexcode.meta/apexcode/apex_metadata_security.htm)**
    Be aware of security considerations when using Apex to access metadata.
-   **[Testing Metadata Deployments](atlas.en-us.apexcode.meta/apexcode/apex_metadata_testing.htm)**
    Apex code that accesses metadata must be properly tested.

#### See Also

-   [*Apex Reference Guide*: Metadata Namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_namespace_Metadata.htm "Apex Reference Guide: Metadata Namespace - HTML (New Window)")

## Related Topics

- Retrieving and Deploying Metadata (atlas.en-us.apexcode.meta/apexcode/apex_metadata_retrieve_deploy.htm)
- Supported Metadata Types (atlas.en-us.apexcode.meta/apexcode/apex_metadata_supported_types.htm)
- Security Considerations (atlas.en-us.apexcode.meta/apexcode/apex_metadata_security.htm)
- Testing Metadata Deployments (atlas.en-us.apexcode.meta/apexcode/apex_metadata_testing.htm)
