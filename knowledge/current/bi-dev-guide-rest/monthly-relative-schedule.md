---
title: "Monthly Relative Schedule"
domain: bi-dev-guide-rest
topic: monthly-relative-schedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.435Z
estimatedTokens: 196
keywords: [Monthly, Relative, Schedule, Specify, runs, day, month, Analytics, asset]
---

# Monthly Relative Schedule

> Specify a schedule that runs monthly on a relative day within the month for an Analytics asset.

# Monthly Relative Schedule

Specify a schedule that runs monthly on a relative day within the month for an Analytics asset.

Properties

Inherits notificationLevel, and time from [Schedule](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_schedule.htm "A schedule on which to execute some type of Analytics asset job.")

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| days​Of​Week | Connect​Wave​Day​Of​Week​Enum[] | Days of the week on which the schedule runs. Valid values are:MondayTuesdayWednesdayThursdayFridaySaturdaySunday | Small, 39.0 | 39.0 |
| week​In​Month | Connect​Wave​Relative​Week​Enum | Week within a month. Values values are:FirstSecondThirdFourthLast | Small, 39.0 | 39.0 |

## Related Topics

- Schedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_schedule.htm)
