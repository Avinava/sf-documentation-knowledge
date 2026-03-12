---
title: "UsagePrdGrantBindingPolicy"
domain: sfFieldRef
topic: usageprdgrantbindingpolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.852Z
estimatedTokens: 325
keywords: [UsagePrdGrantBindingPolicy, association, usage, resource's, grants, sellable, product, API, version, 63.0, later]
---

# UsagePrdGrantBindingPolicy

> Represents the association of a usage resource's grants with a
         sellable product. This object is available in API version 63.0 and later.

# UsagePrdGrantBindingPolicy

Represents the association of a usage resource's grants with a sellable product. This object is available in API version 63.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see UsagePrdGrantBindingPolicy in the Usage Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| GrantBindingTargetType | Grant Binding Target | picklist |  | 255 |  |  |
| GrantBindingType | Grant Binding Type | picklist |  | 255 |  |  |
| Id | Usage Product Grant Binding Policy ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Usage Product Grant Binding Policy Name | string |  | 255 |  |  |
| Product2Id | Product ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
