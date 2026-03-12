---
title: "HierCondHlthCodeMapping"
domain: sfFieldRef
topic: hiercondhlthcodemapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.480Z
estimatedTokens: 399
keywords: [HierCondHlthCodeMapping, how, Hierarchical, Condition, Category, HCC, codes, map, specific, year, API, version, 61.0, later]
---

# HierCondHlthCodeMapping

> Represents how Hierarchical Condition Category (HCC) codes map to condition
         codes for a specific year. This object is available in API version 61.0 and later.

# HierCondHlthCodeMapping

Represents how Hierarchical Condition Category (HCC) codes map to condition codes for a specific year. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see HierCondHlthCodeMapping in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ConditionCodeId | HierCondHlthCodeMapping_ConditionCode/> ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveEndYear | Effective End Year | int | 8 |  |  |  |
| EffectiveStartYear | Effective Start Year | int | 8 |  |  |  |
| HchcKey | HCHC Key | string |  | 255 |  |  |
| HierarchicalCondCategoryCodeId | Code Set ID | reference |  | 18 |  |  |
| Id | Hierarchical Condition Health Code Mapping ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PublishedYear | Published Year | int | 8 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
