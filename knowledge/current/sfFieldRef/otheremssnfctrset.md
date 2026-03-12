---
title: "OtherEmssnFctrSet"
domain: sfFieldRef
topic: otheremssnfctrset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.219Z
estimatedTokens: 473
keywords: [OtherEmssnFctrSet, collection, emissions, conversion, factors, various, data, sources, neither, electricity, grid, nor, scope]
---

# OtherEmssnFctrSet

> Represents a collection of emissions and conversion factors for various data
         types and sources that are neither the electricity grid nor scope 3 data types.

# OtherEmssnFctrSet

Represents a collection of emissions and conversion factors for various data types and sources that are neither the electricity grid nor scope 3 data types.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see OtherEmssnFctrSet in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Ch4GlblWarmingPot | CH4 Global Warming Potential | double |  |  | 10 | 0 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EmissionFactorDataSource | Emissions Factor Data Source | textarea |  | 32000 |  |  |
| EmissionFactorUpdateYear | Emissions Factor Update Year | picklist |  | 255 |  |  |
| ExternalIdentifier | External Identifier | string |  | 255 |  |  |
| Id | Other Emissions Factor Set ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| N2oGlblWarmingPot | N2O Global Warming Potential | double |  |  | 10 | 0 |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ReferenceDataLoadLogId | Reference Data Load Log ID | reference |  | 18 |  |  |
| RefrigerantLeakageRtInKgItKwh | Data Center Refrigerant Leakage Rate (kg/IT kWh) | double |  |  | 18 | 10 |
| RefrigerantLeakageRtInKgM2 | Refrigerant Leakage Rate (kg/m2) | double |  |  | 18 | 8 |
| RefrigerantLeakageRtInKgSqft | Refrigerant Leakage Rate (kg/sqft) | double |  |  | 18 | 8 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
