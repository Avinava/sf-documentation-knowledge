---
title: "PcmtEmssnFctrSetItem"
domain: sfFieldRef
topic: pcmtemssnfctrsetitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:07.511Z
estimatedTokens: 450
keywords: [PcmtEmssnFctrSetItem, individual, emissions, factors, scope, procurement, analysis, environmentally, extended, input-output, EEIO, model, outputs, emission, units]
---

# PcmtEmssnFctrSetItem

> Represents the individual emissions factors for scope 3 procurement analysis.
         Here, the environmentally extended input-output (EEIO) model outputs are used as the
         emission factors in units of tCO₂e per million spent (currency not specified).

# PcmtEmssnFctrSetItem

Represents the individual emissions factors for scope 3 procurement analysis. Here, the environmentally extended input-output (EEIO) model outputs are used as the emission factors in units of tCO₂e per million spent (currency not specified).

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PcmtEmssnFctrSetItem in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EconomicSector | Economic Sector | string |  | 255 |  |  |
| EconomicSectorCategory | Economic Sector Category | string |  | 255 |  |  |
| EconomicSectorCode | Economic Sector Code | string |  | 255 |  |  |
| ExternalIdentifier | External Identifier | string |  | 255 |  |  |
| Id | Procurement Emissions Factor Set Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PcmtEmssnFctrSetId | Procurement Emissions Factor Set ID | reference |  | 18 |  |  |
| ReferenceDataLoadLogId | Reference Data Load Log ID | reference |  | 18 |  |  |
| Scope3GhgCategory | Scope 3 GHG Category | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotScpe3EmssnPerMillionSpent | Total Scope 3 Emissions per Million Spent (tCO2e) | double |  |  | 18 | 8 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
