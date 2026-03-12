---
title: "Schedule"
domain: bi-dev-guide-rest
topic: schedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.536Z
estimatedTokens: 712
keywords: [Schedule, execute, Analytics, asset, job]
---

# Schedule

> A schedule on which to execute some type of Analytics asset job.

# Schedule

A schedule on which to execute some type of Analytics asset job.

Inherited by [DailySchedule](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_daily_schedule.htm "Specify a daily schedule for an Analytics asset."), [EmptySchedule](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_empty_schedule.htm "Specify an empty schedule for an Analytics asset."), [EventDrivenSchedule](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_event_driven_schedule.htm "Specify an event-driven schedule for an Analytics asset."), [HourlyScheduleInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_hourly_schedule.htm "Specify an hourly schedule for an Analytics asset."), [MinutelyScheduleInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_minutely_schedule.htm "Specify a schedule that runs multiple times an hour for an Analytics asset."), [MonthlyRelativeScheduleInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_monthly_relative_schedule.htm "Specify a schedule that runs monthly on a relative day within the month for an Analytics asset."), [MonthlySpecificScheduleInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_monthly_specific_schedule.htm "Specify a schedule that runs monthly on a specific day within the month for an Analytics asset."), and [WeeklyScheduleInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_weekly_schedule.htm "Specify a schedule that runs weekly for an Analytics asset.")

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| asset​Id | String | The asset ID that this schedule belongs to. | Small, 52.0 | 52.0 |
| frequency | Connect​Wave​Schedule​Frequency​Type​Enum | Frequency on which this schedule is run. Valid values are:Daily (Run once per day)Event​Driven (Create Event Driven schedule)Hourly (Run on one or more hours each day)Minutely (Run subhourly each day)Monthly (Run on one or more specific numeric days per month)Monthly​Relative (Run on one or more relative days for month)None (Not scheduled to run)Weekly (Run on one or more days each week) | Small, 39.0 | 39.0 |
| next​Scheduled​Date | Date | Next scheduled time (in UTC) for this schedule | Small, 43.0 | 43.0 |
| notification​Level | Connect​Email​Notification​Level​Enum | Email notification level of dataflow associated with this schedule. Valid values are:AlwaysFailuresNeverWarnings | Small, 43.0 | 43.0 |
| time | Time | Hour,minute, and timezone in which this schedule is run | Small 39.0 | 39.0 |

#### See Also

-   [Schedule Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_schedule.htm "Retrieve, create or delete a schedule for a dataflow, recipe, or connection sync.")

## Related Topics

- DailySchedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_daily_schedule.htm)
- EmptySchedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_empty_schedule.htm)
- EventDrivenSchedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_event_driven_schedule.htm)
- HourlyScheduleInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_hourly_schedule.htm)
- MinutelyScheduleInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_minutely_schedule.htm)
- MonthlyRelativeScheduleInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_monthly_relative_schedule.htm)
- MonthlySpecificScheduleInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_monthly_specific_schedule.htm)
- WeeklyScheduleInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_weekly_schedule.htm)
- Time (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_time.htm)
- Schedule Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_schedule.htm)
