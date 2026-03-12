---
title: "AdvAccountForecastSet"
domain: sfFieldRef
topic: advaccountforecastset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.558Z
estimatedTokens: 557
keywords: [AdvAccountForecastSet, collection, advanced, account, forecast]
---

# AdvAccountForecastSet

> Represents a collection of fields to set up an advanced account forecast
         set.

# AdvAccountForecastSet

Represents a collection of fields to set up an advanced account forecast set.

For more information, see AdvAccountForecastSet in the Manufacturing Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountFieldName | Custom Field Definition ID | picklist |  | 255 |  |  |
| CalculationFrequency | Calculation Frequency | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 255 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| ForecastFactObjectName | Custom Object Definition ID | picklist |  | 255 |  |  |
| ForecastPeriodGroupId | Advanced Account Forecast Period Group ID | reference |  | 18 |  |  |
| ForecastQuantityFieldName | Custom Field Definition ID | picklist |  | 255 |  |  |
| ForecastRevenueFieldName | Custom Field Definition ID | picklist |  | 255 |  |  |
| ForecastSetFieldName | Custom Field Definition ID | picklist |  | 255 |  |  |
| ForecastSetName | Forecast Set Name | string |  | 80 |  |  |
| ForecastStatusFieldName | Custom Field Definition ID | picklist |  | 255 |  |  |
| GenerationDpeDefNameId | Batch Calculation Job Definition ID | reference |  | 18 |  |  |
| Id | Advanced Account Forecast Set ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| PeriodFieldName | Custom Field Definition ID | picklist |  | 255 |  |  |
| RecalculateDpeDefNameId | Batch Calculation Job Definition ID | reference |  | 18 |  |  |
| RegenerationDpeDefNameId | Batch Calculation Job Definition ID | reference |  | 18 |  |  |
| RolloverDpeDefNameId | Batch Calculation Job Definition ID | reference |  | 18 |  |  |
| RolloverFrequency | Rollover Frequency | picklist |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
