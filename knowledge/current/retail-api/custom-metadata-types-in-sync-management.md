---
title: "Custom Metadata Types in Sync Management"
domain: retail-api
topic: custom-metadata-types-in-sync-management
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:36.681Z
estimatedTokens: 206
keywords: [Custom, Metadata, Sync, Management, help, deliver, additional, features, Consumer, Goods, Cloud]
---

# Custom Metadata Types in Sync Management

> Use custom metadata types and fields that help deliver additional features for Consumer
    Goods Cloud.

# Custom Metadata Types in Sync Management

Use custom metadata types and fields that help deliver additional features for Consumer Goods Cloud.

Fields and custom metadata types in the package have the \_\_c and \_\_mdt suffix respectively. For example, Client\_App\_Id\_\_c is a custom field on Sync Ignored Fields. Sync\_Ignored\_fields\_\_mdt is a custom metadata type.

Not all fields are listed for some custom metadata types. To verify the complete list of fields for a custom metadata type, use a describe call from the API, inspect the WSDL, or request the xml files from the developer.

-   **[Sync Ignored Fields Custom Metadata type](atlas.en-us.retail_api.meta/retail_api/meta_sync_ignored_fields__mdt.htm)**
    Represents the specific fields of Salesforce objects omitted during the synchronization process.

## Related Topics

- Sync Ignored Fields Custom Metadata type (atlas.en-us.retail_api.meta/retail_api/meta_sync_ignored_fields__mdt.htm)
