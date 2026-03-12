---
title: "OtherEmssnFctrSetItem"
domain: sfFieldRef
topic: otheremssnfctrsetitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.240Z
estimatedTokens: 596
keywords: [OtherEmssnFctrSetItem, individual, entries, emissions, conversion, factors, various, data, sources, neither, electricity, grid, nor, scope]
---

# OtherEmssnFctrSetItem

> Represents the individual entries for emissions and conversion factors for
         various data types and sources that are neither the electricity grid nor scope 3 data
         types.

# OtherEmssnFctrSetItem

Represents the individual entries for emissions and conversion factors for various data types and sources that are neither the electricity grid nor scope 3 data types.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see OtherEmssnFctrSetItem in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CalorificValue | Calorific Value | double |  |  | 16 | 6 |
| CalorificValueUnit | Calorific Value Unit | picklist |  | 255 |  |  |
| Ch4EmissionFactor | CH4 Emissions Factor | double |  |  | 17 | 7 |
| Ch4EmissionFactorUnit | CH4 Emissions Factor Unit | picklist |  | 255 |  |  |
| Co2EmissionFactor | CO2 Emissions Factor | double |  |  | 16 | 6 |
| Co2EmissionFactorUnit | CO2 Emissions Factor Unit | picklist |  | 255 |  |  |
| Co2eEmissionFactorInTco2eGj | CO2e Emissions Factor (tCO2e/GJ) | double |  |  | 18 | 6 |
| Co2eEmissionFactorInTco2eMwh | CO2e Emissions Factor (tCO2e/MWh) | double |  |  | 18 | 6 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExternalIdentifier | External Identifier | string |  | 255 |  |  |
| FuelType | Fuel Type | picklist |  | 255 |  |  |
| FuelTypeRefId | Fuel Type ID | reference |  | 18 |  |  |
| Id | Other Emissions Factor Set Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| N2oEmissionFactor | N2O Emissions Factor | double |  |  | 17 | 7 |
| N2oEmissionFactorUnit | N2O Emissions Factor Unit | picklist |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| ParentEmissionFactorId | Other Emissions Factor Set ID | reference |  | 18 |  |  |
| ReferenceDataLoadLogId | Reference Data Load Log ID | reference |  | 18 |  |  |
| SuppliedEmissionsFactor | Supplied CO2e Emissions Factor | double |  |  | 18 | 6 |
| SuppliedEmissionsFactorUnit | Supplied CO2e Emissions Factor Unit | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
