---
title: "QuoteAction"
domain: sfFieldRef
topic: quoteaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.071Z
estimatedTokens: 357
keywords: [QuoteAction, sales, transaction, that’s, quoted, renewal, sale, API, version, 59.0, later]
---

# QuoteAction

> Indicates the type of sales transaction that’s being quoted; for
         example, a renewal sale. This object is available in API version 59.0 and
      later.

# QuoteAction

Indicates the type of sales transaction that’s being quoted; for example, a renewal sale. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [QuoteAction](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_quoteaction.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Transaction Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Quote Action ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| QuoteId | Quote ID | reference |  | 18 |  |  |
| SourceAssetId | Asset ID | reference |  | 18 |  |  |
| Subtype | Subtype | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
