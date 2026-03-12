---
title: "Hourly Schedule"
domain: bi-dev-guide-rest
topic: hourly-schedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.331Z
estimatedTokens: 206
keywords: [Hourly, Schedule, Specify, Analytics, asset]
---

# Hourly Schedule

> Specify an hourly schedule for an Analytics asset.

# Hourly Schedule

Specify an hourly schedule for an Analytics asset.

Properties

Inherits notificationLevel, and time from [Schedule](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_schedule.htm "A schedule on which to execute some type of Analytics asset job.")

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| days​Of​Week | Connect​Wave​Day​Of​Week​Enum[] | Days of the week on which the schedule runs. Valid values are:MondayTuesdayWednesdayThursdayFridaySaturdaySunday | Small, 40.0 | 40.0 |
| hourly​Interval | Integer | Number of hours in between queuing or scheduling of an asset. | Small, 40.0 | 40.0 |
| last​Hour | Integer | Hour of day at which the schedule stops queuing the asset for processing. | Small, 40.0 | 40.0 |

## Related Topics

- Schedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_schedule.htm)
