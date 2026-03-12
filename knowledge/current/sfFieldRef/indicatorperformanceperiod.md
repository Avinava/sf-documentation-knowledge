---
title: "IndicatorPerformancePeriod"
domain: sfFieldRef
topic: indicatorperformanceperiod
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.922Z
estimatedTokens: 453
keywords: [IndicatorPerformancePeriod, time, period, including, frequency, indicator, results, calculated, baseline, API, version, 59.0, later]
---

# IndicatorPerformancePeriod

> Represents information about a specified time period including the
         frequency at which indicator results should be calculated and the baseline value of the
         indicator. This object is available in API version 59.0 and later.

# IndicatorPerformancePeriod

Represents information about a specified time period including the frequency at which indicator results should be calculated and the baseline value of the indicator. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see IndicatorPerformancePeriod in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BaselineDescription | Baseline Description | textarea |  | 1000 |  |  |
| BaselineValue | Baseline Value | double |  |  | 16 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| Id | Indicator Performance Period ID | id |  | 18 |  |  |
| IndicatorAssignmentId | Indicator Assignment ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastResultMeasurementDate | Last Result Measurement Date | date |  |  |  |  |
| LastResultValue | Last Result Value | double |  |  | 16 | 2 |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetProgress | Target Progress | picklist |  | 40 |  |  |
| TargetValue | Target Value | double |  |  | 16 | 2 |
| TimePeriodId | Time Period ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
