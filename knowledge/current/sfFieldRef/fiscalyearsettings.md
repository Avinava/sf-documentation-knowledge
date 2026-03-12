---
title: "FiscalYearSettings"
domain: sfFieldRef
topic: fiscalyearsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.199Z
estimatedTokens: 370
keywords: [FiscalYearSettings, Settings, define, custom, standard, fiscal, year, organization, parent-child, relationship, Period]
---

# FiscalYearSettings

> Settings to define a custom or standard fiscal year for your
   organization. This object has a parent-child relationship with the Period
  object.

# FiscalYearSettings

Settings to define a custom or standard fiscal year for your organization. This object has a parent-child relationship with the Period object.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FiscalYearSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_fiscalyearsettings.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Description | Description | string |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Fiscal Year Settings ID | id |  | 18 |  |  |
| IsStandardYear | Is Standard Year | boolean |  |  |  |  |
| Name | Name | string |  | 80 |  |  |
| PeriodId | Period ID | reference |  | 18 |  |  |
| PeriodLabelScheme | Period Name Scheme | picklist |  | 40 |  |  |
| PeriodPrefix | Period Prefix | picklist |  | 255 |  |  |
| QuarterLabelScheme | Quarter Name Scheme | picklist |  | 40 |  |  |
| QuarterPrefix | Quarter Prefix | picklist |  | 255 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WeekLabelScheme | Week Name Scheme | picklist |  | 40 |  |  |
| WeekStartDay | Week Start Day | int | 9 |  |  |  |
| YearType | Year Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
