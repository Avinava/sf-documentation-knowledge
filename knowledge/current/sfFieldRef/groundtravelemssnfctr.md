---
title: "GroundTravelEmssnFctr"
domain: sfFieldRef
topic: groundtravelemssnfctr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:59.794Z
estimatedTokens: 485
keywords: [GroundTravelEmssnFctr, emissions, factors, scope, ground, travel]
---

# GroundTravelEmssnFctr

> Represents the emissions factors for scope 3 ground travel.

# GroundTravelEmssnFctr

Represents the emissions factors for scope 3 ground travel.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see GroundTravelEmssnFctr in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyCode | Currency Code | picklist |  | 255 |  |  |
| DistanceUnit | Distance Unit | picklist |  | 255 |  |  |
| EmissionFactorDataSource | Emissions Factor Data Source | textarea |  | 32000 |  |  |
| EmissionFactorUpdateYear | Emissions Factor Update Year | picklist |  | 255 |  |  |
| ExternalIdentifier | External Identifier | string |  | 255 |  |  |
| Id | Ground Travel Emissions Factor ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PersCarEmssnInKgCo2eDstnUnit | Personal Car Emissions (kg CO2e/Distance Unit) | double |  |  | 18 | 7 |
| ReferenceDataLoadLogId | Reference Data Load Log ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxiEmssnInKgCo2eDstnUnit | Taxi Emissions (kg CO2e/Distance Unit) | double |  |  | 18 | 7 |
| TaxiRateForDstnUnit | Taxi Rate (Cost/Distance Unit) | double |  |  | 18 | 2 |
| TrainEmssnInKgCo2eDstnUnit | Train Emissions (kg CO2e/Distance Unit) | double |  |  | 18 | 7 |
| TrainRateForDstnUnit | Train Rate (Cost/Distance Unit) | double |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
