---
title: "ClaimItemRelatedObject"
domain: sfFieldRef
topic: claimitemrelatedobject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.077Z
estimatedTokens: 363
keywords: [ClaimItemRelatedObject, relationship, claim, item, attributes, referenced, relevant, product, API, version, 65.0, later]
---

# ClaimItemRelatedObject

> Represents the relationship between a claim item and a related object. The
         values of the attributes from the related object are referenced by the relevant product
         attributes on the claim item. This object is available in API version 65.0 and later.

# ClaimItemRelatedObject

Represents the relationship between a claim item and a related object. The values of the attributes from the related object are referenced by the relevant product attributes on the claim item. This object is available in API version 65.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ClaimItemRelatedObject in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ClaimItemId | Claim Item ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Claim Item Related Object ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| RelatedRecordIdentifier | Related Record Identifier | string |  | 255 |  |  |
| RelatedRecordObjectName | Related Record Object Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
