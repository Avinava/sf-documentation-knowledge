---
title: "UninstallHandler Example Implementation"
domain: apex-reference
topic: uninstallhandler-example-implementation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.348Z
keywords: [UninstallHandler, Example, Implementation, Uninstall, Script]
---

# UninstallHandler Example Implementation

## UninstallHandler Example Implementation

### Example of an Uninstall Script

This sample uninstall script performs the following actions on package uninstall.

-   Inserts an entry in the feed describing which user did the uninstall and in which organization
-   Creates and sends an email message confirming the uninstall to that user

```

```

You can test an uninstall script using the testUninstall method of the Test class. This method takes as its argument a class that implements the UninstallHandler interface.

This sample shows how to test an uninstall script implemented in the UninstallClass Apex class.

```

```