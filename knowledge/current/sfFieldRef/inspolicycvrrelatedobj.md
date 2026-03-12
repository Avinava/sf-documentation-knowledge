---
title: "InsPolicyCvrRelatedObj"
domain: sfFieldRef
topic: inspolicycvrrelatedobj
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.200Z
estimatedTokens: 381
keywords: [InsPolicyCvrRelatedObj, relationship, Insurance, Policy, Coverage, attributes, referenced, relevant, product, API, version, 63.0, later]
---

# InsPolicyCvrRelatedObj

> Represents the relationship between an Insurance Policy Coverage and a
         related object. The values of the attributes from the related object are referenced by the
         relevant product attributes on Insurance Policy Coverage. This object is available in
      API version 63.0 and later.

# InsPolicyCvrRelatedObj

Represents the relationship between an Insurance Policy Coverage and a related object. The values of the attributes from the related object are referenced by the relevant product attributes on Insurance Policy Coverage. This object is available in API version 63.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see InsPolicyCvrRelatedObj in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Insurance Policy Coverage Related Object ID | id |  | 18 |  |  |
| InsurancePolicyCoverageId | Insurance Policy Coverage ID | reference |  | 18 |  |  |
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
