---
title: "Subscription Schedule Input"
domain: bi-dev-guide-rest
topic: subscription-schedule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:54.974Z
estimatedTokens: 217
keywords: [Subscription, Schedule, Analytics]
---

> An Analytics subscription input.

# Subscription Schedule Input

An Analytics subscription input.

Properties

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| details | Schedule​Details​Input | The schedule details, including time and frequency details. Valid values are:Subscription​Daily​Schedule​InputSubscription​Weekly​Schedule​Input | Required | 47.0 |
| frequency | Connect​Wave​Schedule​Frequency​Type​Enum | The frequency on which this schedule is run. Valid values are:Daily (Run once per day)Event​Driven (Create Event Driven schedule)Hourly (Run on one or more hours each day)Minutely (Run subhourly each day)Monthly (Run on one or more specific numeric days per month)Monthly​Relative (Run on one or more relative days for month)None (Not scheduled to run)Weekly (Run on one or more days each week) | Required | 47.0 |

## Related Topics

- Schedule​Details​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_schedule_details_input.htm)
- Subscription​Daily​Schedule​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_daily_schedule_input.htm)
- Subscription​Weekly​Schedule​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_weekly_schedule_input.htm)
