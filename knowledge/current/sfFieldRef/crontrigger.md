---
title: "CronTrigger"
domain: sfFieldRef
topic: crontrigger
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.138Z
estimatedTokens: 355
keywords: [CronTrigger, schedule, scheduled, job, similar, cron, UNIX, systems, API, version, 17.0, later]
---

# CronTrigger

> Contains schedule information for a scheduled
    job. CronTrigger is similar to a cron job on UNIX systems. This object is available in API
   version 17.0 and later.

# CronTrigger

Contains schedule information for a scheduled job. CronTrigger is similar to a cron job on UNIX systems. This object is available in API version 17.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CronTrigger](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_crontrigger.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CronExpression | Cron Expression | string |  | 255 |  |  |
| CronJobDetailId | Job ID | reference |  | 18 |  |  |
| EndTime | End Time | datetime |  |  |  |  |
| Id | Scheduled Job ID | id |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| NextFireTime | Next Run Time | datetime |  |  |  |  |
| OwnerId | User ID | reference |  | 18 |  |  |
| PreviousFireTime | Previous Run Time | datetime |  |  |  |  |
| StartTime | Start Time | datetime |  |  |  |  |
| State | Job State | string |  | 16 |  |  |
| TimeZoneSidKey | Java Time Zone Id | picklist |  | 40 |  |  |
| TimesTriggered | Job Fired Count | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
