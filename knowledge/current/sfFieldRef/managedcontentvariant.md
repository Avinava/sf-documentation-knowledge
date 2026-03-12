---
title: "ManagedContentVariant"
domain: sfFieldRef
topic: managedcontentvariant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.670Z
estimatedTokens: 449
keywords: [ManagedContentVariant, variant, managed, content, item, API, version, 56.0, later]
---

# ManagedContentVariant

> Represents a variant of a managed content item. This object is available
      in API version 56.0 and later.

# ManagedContentVariant

Represents a variant of a managed content item. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ManagedContentVariant](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_managedcontentvariant.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ContentTypeFullyQualifiedName | Content Type Fully Qualified Name | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| HasLocks | Locked for Updates | boolean |  |  |  |  |
| Id | Managed Content Variant ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPrimary | Is Primary Variant | boolean |  |  |  |  |
| IsPublished | Published | boolean |  |  |  |  |
| IsReady | Ready to Publish | boolean |  |  |  |  |
| Language | Language | picklist |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ManagedContentId | Managed Content ID | reference |  | 18 |  |  |
| ManagedContentKey | Content Key | string |  | 80 |  |  |
| ManagedContentVariantStatus | Status | picklist |  | 255 |  |  |
| Name | Title | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UrlName | Content Slug | string |  | 80 |  |  |
| VariantType | Variant Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
