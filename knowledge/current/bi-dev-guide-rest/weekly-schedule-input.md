---
title: "Weekly Schedule Input"
domain: bi-dev-guide-rest
topic: weekly-schedule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.958Z
estimatedTokens: 147
keywords: [Weekly, Schedule, Input, Specify, Analytics, asset]
---

# Weekly Schedule Input

> Specify a weekly schedule for an Analytics asset.

# Weekly Schedule Input

Specify a weekly schedule for an Analytics asset.

Properties

Inherits notification, and time from [Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_schedule_input.htm "A schedule on which to execute some type of Analytics asset.")

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| days​Of​Week | Connect​Wave​Day​Of​Week​Enum[] | Days of the week on which the schedule runs. Valid values are:MondayTuesdayWednesdayThursdayFridaySaturdaySunday | Required | 39.0 |

## Related Topics

- Schedule
       Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_schedule_input.htm)
