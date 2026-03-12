---
title: "EnvironmentalRisk"
domain: sfFieldRef
topic: environmentalrisk
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.458Z
estimatedTokens: 391
keywords: [EnvironmentalRisk, risk, environmental, resources, organization]
---

# EnvironmentalRisk

> Represents information about the risk that the environmental resources create
         for an organization.

# EnvironmentalRisk

Represents information about the risk that the environmental resources create for an organization.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see EnvironmentalRisk in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Aquifer | Aquifer | string |  | 80 |  |  |
| BaselineStress | Baseline Stress | picklist |  | 255 |  |  |
| BusinessQuantifiedRisk | Business Quantified Risk | currency |  |  | 12 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| Id | Environmental Risk ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MajorBasin | Major Basin | string |  | 80 |  |  |
| MinorBasin | Minor Basin | string |  | 80 |  |  |
| Name | Name | string |  | 255 |  |  |
| OverallRisk | Overall Risk | picklist |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RiskType | Risk Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UpdateYear | Update Year | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
