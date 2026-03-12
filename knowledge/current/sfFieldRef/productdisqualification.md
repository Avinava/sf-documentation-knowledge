---
title: "ProductDisqualification"
domain: sfFieldRef
topic: productdisqualification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:09.438Z
estimatedTokens: 394
keywords: [ProductDisqualification, disqualification, rules, products, determine, product, doesn’t, qualify, users, user, context, API, version, 60.0, later]
---

# ProductDisqualification

> Represents disqualification rules for products. The rules determine when the
         product doesn’t qualify to be displayed to users. The rules are based on user context.
      This object is available in API version 60.0 and later.

# ProductDisqualification

Represents disqualification rules for products. The rules determine when the product doesn’t qualify to be displayed to users. The rules are based on user context. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ProductDisqualification in the Product Catalog Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveFromDate | Effective From | date |  |  |  |  |
| EffectiveToDate | Effective To | date |  |  |  |  |
| Id | Product Disqualification ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsDisqualified | Disqualified | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentProductId | Product ID | reference |  | 18 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| Reason | Reason | textarea |  | 3200 |  |  |
| RootProductId | Product ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
