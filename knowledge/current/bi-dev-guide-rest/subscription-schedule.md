---
title: "Subscription Schedule"
domain: bi-dev-guide-rest
topic: subscription-schedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.606Z
estimatedTokens: 214
keywords: [Subscription, Schedule, Analytics]
---

# Subscription Schedule

> An Analytics subscription schedule.

# Subscription Schedule

An Analytics subscription schedule.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| details | Schedule​Details | The schedule details, including time and frequency details. Valid values are:Subscription​Daily​ScheduleSubscription​Weekly​Schedule | Small, 47.0 | 47.0 |
| frequency | Connect​Wave​Schedule​Frequency​Type​Enum | The frequency on which this schedule is run. Valid values are:Daily (Run once per day)Event​Driven (Create Event Driven schedule)Hourly (Run on one or more hours each day)Minutely (Run subhourly each day)Monthly (Run on one or more specific numeric days per month)Monthly​Relative (Run on one or more relative days for month)None (Not scheduled to run)Weekly (Run on one or more days each week) | Small, 47.0 | 47.0 |

## Related Topics

- Schedule​Details (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_schedule_details.htm)
- Subscription​Daily​Schedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_subscription_daily_schedule.htm)
- Subscription​Weekly​Schedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_subscription_weekly_schedule.htm)
