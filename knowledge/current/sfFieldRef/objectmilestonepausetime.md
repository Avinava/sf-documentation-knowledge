---
title: "ObjectMilestonePauseTime"
domain: sfFieldRef
topic: objectmilestonepausetime
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.963Z
estimatedTokens: 332
keywords: [ObjectMilestonePauseTime, duration, start, end, times, users, pause, resume, milestones, specific, API, version, 65.0, later]
---

# ObjectMilestonePauseTime

> Represents the details related to the duration, start and end times of when
         users pause and resume milestones for a specific object. This object is available in
      API version 65.0 and later.

# ObjectMilestonePauseTime

Represents the details related to the duration, start and end times of when users pause and resume milestones for a specific object. This object is available in API version 65.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ObjectMilestonePauseTime in the Agentforce IT Service Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EntityMilestoneId | Object Milestone ID | reference |  | 18 |  |  |
| Id | Milestone Pause Time Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Object Milestone Name | string |  | 255 |  |  |
| PauseDurationInSecs | Pause Duration In Secs | int | 9 |  |  |  |
| PauseEndTime | Pause End Time | datetime |  |  |  |  |
| PauseStartTime | Pause Start Time | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
