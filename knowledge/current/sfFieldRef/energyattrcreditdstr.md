---
title: "EnergyAttrCreditDstr"
domain: sfFieldRef
topic: energyattrcreditdstr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.172Z
estimatedTokens: 372
keywords: [EnergyAttrCreditDstr, junction, energy, attribute, credits, stationary, asset, indicating, quantity, distributed, specific]
---

# EnergyAttrCreditDstr

> Represents a junction between energy attribute credits and stationary
         asset energy use indicating the quantity of credits distributed for a specific energy
         use.

# EnergyAttrCreditDstr

Represents a junction between energy attribute credits and stationary asset energy use indicating the quantity of credits distributed for a specific energy use.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see EnergyAttrCreditDstr in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EnergyAttrCertCreditId | Energy Attribute Certificate Credit ID | reference |  | 18 |  |  |
| EnrgyAttrCreditsAlloc | Energy Attribute Credits Allocated | double |  |  | 18 | 4 |
| EnrgyAttrCreditsUnit | Energy Attribute Credits Unit | picklist |  | 255 |  |  |
| Id | Energy Attribute Credit Distribution ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| StnryAssetEnergyUseId | Stationary Asset Energy Use ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
