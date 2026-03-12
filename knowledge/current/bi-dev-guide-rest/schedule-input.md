---
title: "Schedule Input"
domain: bi-dev-guide-rest
topic: schedule-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:02.845Z
estimatedTokens: 532
keywords: [Schedule, Input, execute, Analytics, asset]
---

# Schedule Input

> A schedule on which to execute some type of Analytics asset.

# Schedule Input

A schedule on which to execute some type of Analytics asset.

Inherited by [DailyScheduleInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_daily_schedule_input.htm "Specify a daily schedule for an Analytics asset."), [EventBasedScheduleInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_event_based_schedule_input.htm "Specify an event-driven schedule for an Analytics asset."), [HourlyScheduleInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_hourly_schedule_input.htm "Specify a sub-daily schedule for an Analytics asset."), [MinutelyScheduleInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_minutely_schedule_input.htm "Specify a sub-hourly schedule for an Analytics asset."), [MonthlyRelativeScheduleInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_monthly_relative_schedule_input.htm "Specify a monthly schedule for an Analytics asset where the day are relative to their location in the week."), [MonthlySpecificScheduleInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_monthly_specific_schedule_input.htm "Specify a monthly schedule for an Analytics asset where the days are fixed by numerical date."), and [WeeklyScheduleInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_weekly_schedule_input.htm "Specify a weekly schedule for an Analytics asset.").

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| notification​Level | Connect​Email​Notification​Level​Enum | Valid types of email notification levels you can set. Valid values are:AlwaysFailuresNeverWarnings | Small, 42.0 | 42.0 |
| time | Time Input | Hour,minute, and timezone in which this schedule is run | Required | 39.0 |

The following JSON shows how to create an hourly schedule for an asset.

```

```

#### See Also

-   [Schedule Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_schedule.htm "Retrieve, create or delete a schedule for a dataflow, recipe, or connection sync.")

## Code Examples

```
{
    "daysOfWeek" : [
       "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    "lastHour" : 20,
    "hourlyInterval" : 3,
    "time" : {
       "hour" : 2,
       "minute" : 30,
       "timeZone" : "America/Los_Angeles"
    },
    "frequency" : "hourly"
}
```

## Related Topics

- DailyScheduleInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_daily_schedule_input.htm)
- EventBasedScheduleInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_event_based_schedule_input.htm)
- HourlyScheduleInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_hourly_schedule_input.htm)
- MinutelyScheduleInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_minutely_schedule_input.htm)
- MonthlyRelativeScheduleInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_monthly_relative_schedule_input.htm)
- MonthlySpecificScheduleInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_monthly_specific_schedule_input.htm)
- WeeklyScheduleInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_weekly_schedule_input.htm)
- Time Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_time_input.htm)
- Schedule Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_schedule.htm)
