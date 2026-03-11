---
title: "Backward Compatibility"
domain: service-cloud
topic: backward-compatibility
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.742Z
keywords: [Backward, Compatibility]
---

# Backward Compatibility

# Backward Compatibility

Salesforce strives to make backward compatibility easy when using the Salesforce Console Integration Toolkit.

Each new Salesforce release consists of two components:

-   A new release of platform software that resides on Salesforce systems
-   A new version of the API

The Salesforce Console Integration Toolkit matches the API version for any given release. For example, if the current version of SOAP API is 66.0, then there’s also a version 66.0 of Salesforce Console Integration Toolkit.

We maintain support for each Salesforce Console Integration Toolkit version across releases of the platform. The Salesforce Console Integration Toolkit is backward compatible in that an application created to work with a given Salesforce Console Integration Toolkit version will continue to work with that same Salesforce Console Integration Toolkit version in future platform releases.

Salesforce doesn't guarantee that an application written against one Salesforce Console Integration Toolkit version will work with future Salesforce Console Integration Toolkit versions: Changes in method signatures and data representations are often required as we continue to enhance the Salesforce Console Integration Toolkit. However, we strive to keep the Salesforce Console Integration Toolkit consistent from version to version with minimal changes required to port applications to newer Salesforce Console Integration Toolkit versions.

For example, an application written using Salesforce Console Integration Toolkit version 37.0, which shipped with the Summer ’16 release, will continue to work with Salesforce Console Integration Toolkit version 37.0 on the Winter ’17 release and on future releases. However, that same application may not work with Salesforce Console Integration Toolkit version 38.0 without modifications to the application.