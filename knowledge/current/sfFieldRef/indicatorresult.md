---
title: "IndicatorResult"
domain: sfFieldRef
topic: indicatorresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:00.940Z
estimatedTokens: 443
keywords: [IndicatorResult, result, indicator, assignment, time, period, track, performance, API, version, 59.0, later]
---

# IndicatorResult

> Represents the result of an indicator assignment for the specified
         time period that can be used to track the performance of the indicator. This object is
      available in API version 59.0 and later.

# IndicatorResult

Represents the result of an indicator assignment for the specified time period that can be used to track the performance of the indicator. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see IndicatorResult in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CalculationMethod | Calculation Method | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Denominator | Denominator | double |  |  | 16 | 2 |
| Description | Description | textarea |  | 1000 |  |  |
| FlowDefinitionApiName | Flow Definition API Name | string |  | 80 |  |  |
| FlowVersion | Flow Version | int | 9 |  |  |  |
| Id | Indicator Result ID | id |  | 18 |  |  |
| IndicatorPerformancePeriodId | Indicator Performance Period ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MeasurementDate | Measurement Date | date |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Numerator | Numerator | double |  |  | 16 | 2 |
| ResultValue | Result Value | double |  |  | 16 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Result Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
