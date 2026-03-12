---
title: "Hourly Schedule Input"
domain: bi-dev-guide-rest
topic: hourly-schedule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.748Z
estimatedTokens: 206
keywords: [Hourly, Schedule, Input, Specify, sub-daily, Analytics, asset]
---

# Hourly Schedule Input

> Specify a sub-daily schedule for an Analytics asset.

# Hourly Schedule Input

Specify a sub-daily schedule for an Analytics asset.

Properties

Inherits notification, and time from [Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_schedule_input.htm "A schedule on which to execute some type of Analytics asset.")

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| days​Of​Week | Connect​Wave​Day​Of​Week​Enum[] | Days of the week on which the schedule runs. Valid values are:MondayTuesdayWednesdayThursdayFridaySaturdaySunday | Required | 39.0 |
| hourly​Interval | Integer | Number of hours in between queuing or scheduling of an asset. | Required | 39.0 |
| last​Hour | Integer | Hour of day at which the schedule stops queuing the asset for processing. | Required | 39.0 |

## Related Topics

- Schedule
       Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_schedule_input.htm)
