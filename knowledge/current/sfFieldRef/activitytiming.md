---
title: "ActivityTiming"
domain: sfFieldRef
topic: activitytiming
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.446Z
estimatedTokens: 705
keywords: [ActivityTiming, detailed, activity, that’s, repeated, regular, intervals, over, period, time, API, version, 52.0, later]
---

# ActivityTiming

> Represents detailed information about an activity that’s repeated in regular
         intervals over a period of time. This object is available in API version 52.0 and
      later.

# ActivityTiming

Represents detailed information about an activity that’s repeated in regular intervals over a period of time. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ActivityTiming in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActivityCountPerRepetition | Activity Count in Repetition Cycle | double |  |  | 18 | 2 |
| ActivityDuration | Activity Duration | double |  |  | 18 | 2 |
| ActivityDurationUnitId | Unit of Measure ID | reference |  | 18 |  |  |
| ActivityTime | Activity Time | multipicklist |  | 4099 | 0 |  |
| ActivityTimeOffset | Activity Time Offset | int | 9 |  |  |  |
| CountInPeriod | Activity Count in Period | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Activity Timing ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaxActivityCountPerRepetition | Maximum Activity Count in Repetition Cycle | int | 9 |  |  |  |
| MaxActivityDuration | Maximum Activity Duration | double |  |  | 18 | 2 |
| MaxCountInPeriod | Maximum Activity Count in Period | int | 9 |  |  |  |
| MaxRepetitionCycleLength | Maximum Repetition Cycle Length | double |  |  | 18 | 2 |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PeriodEndDateTime | Period End Date | datetime |  |  |  |  |
| PeriodLength | Period Length | int | 9 |  |  |  |
| PeriodLengthLowerLimit | Period Length Lower Limit | double |  |  | 18 | 2 |
| PeriodLengthUnitId | Unit of Measure ID | reference |  | 18 |  |  |
| PeriodLengthUpperLimit | Period Length Upper Limit | double |  |  | 18 | 2 |
| PeriodStartDateTime | Period Start Date | datetime |  |  |  |  |
| RepetitionCycleLength | Repetition Cycle Length | double |  |  | 18 | 2 |
| RepetitionCycleUnitId | Unit of Measure ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System ID | string |  | 255 |  |  |
| SourceSystemModified | Source System Modified | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimingCodeId | Code Set ID | reference |  | 18 |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |
| WeeklyActivityTimeId | Operating Hour ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
