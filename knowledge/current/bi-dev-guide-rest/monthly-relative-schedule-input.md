---
title: "Monthly Relative Schedule Input"
domain: bi-dev-guide-rest
topic: monthly-relative-schedule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.795Z
estimatedTokens: 199
keywords: [Monthly, Relative, Schedule, Input, Specify, Analytics, asset, day, their, location, week]
---

# Monthly Relative Schedule Input

> Specify a monthly schedule for an Analytics asset where the day are relative to their
  location in the week.

# Monthly Relative Schedule Input

Specify a monthly schedule for an Analytics asset where the day are relative to their location in the week.

Properties

Inherits notification, and time from [Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_schedule_input.htm "A schedule on which to execute some type of Analytics asset.")

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| days​Of​Week | Connect​Wave​Day​Of​Week​Enum[] | Days of the week on which the schedule runs. Valid values are:MondayTuesdayWednesdayThursdayFridaySaturdaySunday | Required | 39.0 |
| week​In​Month | Connect​Wave​Relative​Week​Enum | Week within a month. Values values are:FirstSecondThirdFourthLast | Required | 39.0 |

## Related Topics

- Schedule
       Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_schedule_input.htm)
