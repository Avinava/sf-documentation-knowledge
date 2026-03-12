---
title: "Period"
domain: sfFieldRef
topic: period
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:07.587Z
estimatedTokens: 281
keywords: [Period, fiscal, defined, FiscalYearSettings]
---

# Period

> Represents a fiscal period defined in FiscalYearSettings.

# Period

Represents a fiscal period defined in FiscalYearSettings.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Period](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_period.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| EndDate | End Date | date |  |  |  |  |
| FiscalYearSettingsId | Fiscal Year Settings ID | reference |  | 18 |  |  |
| FullyQualifiedLabel | Fully Qualified Label | string |  | 80 |  |  |
| Id | Period ID | id |  | 18 |  |  |
| IsForecastPeriod | Is Forecast Period | boolean |  |  |  |  |
| Number | Number | int | 9 |  |  |  |
| PeriodLabel | Period Name | picklist |  | 255 |  |  |
| QuarterLabel | Quarter Name | picklist |  | 255 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
