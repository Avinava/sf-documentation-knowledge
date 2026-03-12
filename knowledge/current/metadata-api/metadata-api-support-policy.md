---
title: "Metadata API Support Policy"
domain: metadata-api
topic: metadata-api-support-policy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:42.369Z
estimatedTokens: 410
keywords: [Metadata, API, Support, Policy, Salesforce, supports, previous, versions, However, new, client, applications, recent, version, Lightning]
---

# Metadata API Support Policy

> Salesforce supports previous versions of Metadata API. However, your new client applications
   should use the most recent version of the Lightning Platform Metadata API WSDL file to fully
   exploit the benefits of richer features and greater efficiency.

# Metadata API Support Policy

Salesforce supports previous versions of Metadata API. However, your new client applications should use the most recent version of the Lightning Platform Metadata API WSDL file to fully exploit the benefits of richer features and greater efficiency.

## Backward Compatibility

Salesforce strives to make backward compatibility easy when using the Lightning Platform.

Each new Salesforce release consists of two components:

-   A new release of platform software that resides on Salesforce systems
-   A new version of the API

For example, the Spring '07 release included API version 9.0 and the Summer '07 release included API version 10.0.

We maintain support for each API version across releases of the platform software. The API is backward compatible in that an application created to work with a given API version will continue to work with that same API version in future platform software releases.

Salesforce does not guarantee that an application written against one API version will work with future API versions: Changes in method signatures and data representations are often required as we continue to enhance the API. However, we strive to keep the API consistent from version to version with minimal, if any, changes required to port applications to newer API versions.

For example, an application written using API version 9.0, which shipped with the Spring ’07 release, will continue to work with API version 9.0 on the Summer ’07 release, and on future releases beyond that. However, that same application might not work with API version 10.0 without modifications to the application.
