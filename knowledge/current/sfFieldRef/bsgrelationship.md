---
title: "BsgRelationship"
domain: sfFieldRef
topic: bsgrelationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.381Z
estimatedTokens: 426
keywords: [BsgRelationship, relationship, billing, schedule, groups, support, bundles, parent, group, multiple, child, API, version, 62.0, later]
---

# BsgRelationship

> Represents a relationship between billing schedule groups to support
         bundles where one parent billing schedule group has multiple child billing schedule
         groups. This object is available in API version 62.0 and later.

# BsgRelationship

Represents a relationship between billing schedule groups to support bundles where one parent billing schedule group has multiple child billing schedule groups. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BsgRelationship in the Billing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssociatedBsgId | Billing Schedule Group ID | reference |  | 18 |  |  |
| AssociatedBsgPricing | Associated Billing Sched Grp Pricing | picklist |  | 255 |  |  |
| AssociatedBsgRole | Associated Billing Schedule Group Role | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Billing Schedule Group Relationship ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MainBsgId | Billing Schedule Group ID | reference |  | 18 |  |  |
| MainBsgRole | Main Billing Schedule Group Role | picklist |  | 255 |  |  |
| Name | Billing Schedule Group Relationship Name | string |  | 255 |  |  |
| ProductRelationshipTypeId | Product Relationship Type ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
