---
title: "Subscription Weekly Schedule Input"
domain: bi-dev-guide-rest
topic: subscription-weekly-schedule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.881Z
estimatedTokens: 189
keywords: [Subscription, Weekly, Schedule, Input, execute, Analytics]
---

# Subscription Weekly Schedule Input

> The weekly schedule on which to execute an Analytics subscription.

# Subscription Weekly Schedule Input

The weekly schedule on which to execute an Analytics subscription.

Properties

SubscriptionWeeklyScheduleInput inherits properties from the abstract [ScheduleDetailsInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_schedule_details_input.htm "The base Analytics schedule details."). These base properties appear in SubscriptionWeeklyScheduleInput alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| days​Of​Week | Subscription​Schedule​Day​Of​Week | The days of the week for schedule frequency. Valid values are:FriMonSatSunThuTueWed | Small, 47.0 | 47.0 |

## Related Topics

- ScheduleDetailsInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_schedule_details_input.htm)
