---
title: "FrgtHaulingEmssnFctr"
domain: sfFieldRef
topic: frgthaulingemssnfctr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.671Z
estimatedTokens: 491
keywords: [FrgtHaulingEmssnFctr, emissions, factors, scope, freight, hauling]
---

# FrgtHaulingEmssnFctr

> Represents the emissions factors for scope 3 freight hauling.

# FrgtHaulingEmssnFctr

Represents the emissions factors for scope 3 freight hauling.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see FrgtHaulingEmssnFctr in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Ch4EmissionsFactor | CH4 Emissions Factor | double |  |  | 16 | 6 |
| Ch4EmissionsFactorUnit | CH4 Emissions Factor Unit | picklist |  | 255 |  |  |
| Co2EmissionsFactor | CO2 Emissions Factor | double |  |  | 16 | 6 |
| Co2EmissionsFactorUnit | CO2 Emissions Factor Unit | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EmissionFactorDataSource | Emissions Factor Data Source | textarea |  | 32000 |  |  |
| EmissionFactorUpdateYear | Emissions Factor Update Year | picklist |  | 255 |  |  |
| ExternalIdentifier | External Identifier | string |  | 255 |  |  |
| FreightHaulingMode | Freight Hauling Mode | picklist |  | 40 |  |  |
| Id | Freight Hauling Emissions Factor ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| N2oEmissionsFactor | N2O Emissions Factor | double |  |  | 16 | 6 |
| N2oEmissionsFactorUnit | N2O Emissions Factor Unit | picklist |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| OtherEmssnFctrId | Other Emissions Factor Set ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ReferenceDataLoadLogId | Reference Data Load Log ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
