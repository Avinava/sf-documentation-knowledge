---
title: "Subscription Weekly Schedule"
domain: bi-dev-guide-rest
topic: subscription-weekly-schedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.612Z
estimatedTokens: 200
keywords: [Subscription, Weekly, Schedule, execute, Analytics]
---

# Subscription Weekly Schedule

> The weekly schedule on which to execute an Analytics subscription.

# Subscription Weekly Schedule

The weekly schedule on which to execute an Analytics subscription.

Properties

SubscriptionWeeklySchedule inherits properties from the abstract [ScheduleDetails](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_schedule_details.htm "The base Analytics schedule details, inherited by SubscriptionDailySchedule and SubscriptionWeeklySchedule."). These base properties appear in SubscriptionWeeklySchedule alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| days​Of​Week | Subscription​Schedule​Day​Of​Week | The days of the week for schedule frequency. Valid values are:FriMonSatSunThuTueWed | Small, 47.0 | 47.0 |

## Related Topics

- ScheduleDetails (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_schedule_details.htm)
