---
title: "Derive and Copy Promotions with MetadataWizard and Business Object API"
domain: retail-api
topic: derive-and-copy-promotions-with-metadatawizard-and-business-object-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.798Z
estimatedTokens: 293
keywords: [Derive, Copy, Promotions, MetadataWizard, Business, API, Promotion, features, Metadata, wizard, customization, Wizards, Apex, processes, leveraging]
---

# Derive and Copy Promotions with MetadataWizard and Business Object API

> The Derive and Copy Promotion  features use Metadata wizard and Business Object API.
    This allows complete customization of the UI Wizards, and the Derive and Copy Apex processes for
    promotions by leveraging MetadataWizard and Business Object API customization
    capabilities.

# Derive and Copy Promotions with MetadataWizard and Business Object API

The Derive and Copy Promotion features use Metadata wizard and Business Object API. This allows complete customization of the UI Wizards, and the Derive and Copy Apex processes for promotions by leveraging MetadataWizard and Business Object API customization capabilities.

Licensing

In order to use this feature, your users must have the TPM License.

CGCloud System Configuration

To enable this feature, the required configuration records need to be created for your sales orgs. They can be created with the following Apex commands:

```

```

```

```

Details

When executing Derive or Copy functionalities, the system checks for the following conditions:

-   The selected promotion is a TPM Promotion
-   A BO API Workflow for Promotion, the user current Sales Org and for the operation exists
-   A MetadataWizard configuration, the user current Sales Org and for the operation exists

If the above conditions are met, the system will execute the Derive or Copy Process by using MetadataWizard and Business Object API. If the conditions are not met, the legacy wizards are used instead.

## Code Examples

```
cgcloud.TPMSetupData.setupMetadataWizard('<sales org name>');
```

```
cgcloud.TPMSetupData.setupBOApi('<sales org name>');
```
