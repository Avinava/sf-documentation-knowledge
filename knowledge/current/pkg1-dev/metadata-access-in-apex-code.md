---
title: "Metadata Access in Apex Code"
domain: pkg1-dev
topic: metadata-access-in-apex-code
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.573Z
estimatedTokens: 413
namespace: Metadata
keywords: [Metadata, Access, Apex, Code, package]
---

# Metadata Access in Apex Code

> Use the Metadata namespace in Apex to access
    metadata in your package.

**Namespace:** `Metadata`

# Metadata Access in Apex Code

Use the Metadata namespace in Apex to access metadata in your package.

Your package may need to retrieve or modify metadata during installation or update. The Metadata namespace in Apex provides classes that represent metadata types, as well as classes that let you retrieve and deploy metadata components to the subscriber org. These considerations apply to metadata in Apex:

-   You can create, retrieve, and update metadata components in Apex code, but you can’t delete components.
-   You can currently access records of custom metadata types and page layouts in Apex.
-   Managed packages not approved by Salesforce can’t access metadata in the subscriber org, unless the subscriber org enables the **Allow metadata deploy by Apex from non-certified Apex package version** org preference. Use this org preference when doing test or beta releases of your managed packages.

If your package accesses metadata during installation or update, or contains a custom setup interface that accesses metadata, you must notify the user. For installs that access metadata, notify the user in the description of your package. The notice should let customers know that your package has the ability to modify the subscriber org’s metadata.

You can write your own notice, or use this sample:

This package can access and change metadata outside its namespace in the Salesforce org where it’s installed.

Salesforce verifies the notice during the security review.

For more information, see [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_metadata.htm) in the Apex Developer Guide.
