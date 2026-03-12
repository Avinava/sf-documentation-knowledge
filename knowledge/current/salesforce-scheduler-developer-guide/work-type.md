---
title: "Work Type"
domain: salesforce-scheduler-developer-guide
topic: work-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.494Z
estimatedTokens: 309
keywords: [Work, performed]
---

# Work Type

> Details about the type of work to be performed.

# Work Type

Details about the type of work to be performed.

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | String | Required if durationInMinutes is not given. | Id of the work type. |
| durationInMinutes | Integer | Required if id is not given. | Contains the event length, in minutes. |
| timeframeStartInMinutes | String | No | The beginning of the timeframe. |
| timeframeEndInMinutes | String | No | The end of the timeframe. |
| blockTimeBeforeAppointmentInMinutes | String | No | The time period before the appointment is considered as unavailable. |
| blockTimeAfterAppointmentInMinutes | String | No | The time period after the appointment is considered as unavailable. |
| operatingHoursId | String | No | The overlap of all operating hours from the account, work type, service territory, and service territory member are considered while determining time slots. |
| skillRequirements | Skill Requirement[] | No | List of skills that are required to complete a particular task for a work type. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

Provide either Id or durationInMinutes in the request body, but not both.

## Related Topics

- Skill Requirement (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/request_body_ls_skillrequirement.htm)
