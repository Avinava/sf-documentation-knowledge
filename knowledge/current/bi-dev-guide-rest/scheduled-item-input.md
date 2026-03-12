---
title: "Scheduled Item Input"
domain: bi-dev-guide-rest
topic: scheduled-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.849Z
estimatedTokens: 256
keywords: [Scheduled, Item, Input, base, schedule, data, refresh]
---

# Scheduled Item Input

> The base schedule for a data refresh.

# Scheduled Item Input

The base schedule for a data refresh.

Inherited by [DailyScheduledItemInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_daily_scheduled_item_input.htm "The daily schedule for a data refresh.") and [WeeklyScheduledItemInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_weekly_scheduled_item_input.htm "The weekly schedule for a data refresh.")

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| frequency | Connect​Schedule​Frequency​Type​Enum | Frequency on which this schedule is run. Valid values are:Daily (Run once per day)Monthly (Run on one or more specific numeric days per month)Monthly​Relative (Run on one or more relative days for month)Weekly (Run on one or more days each week) | Required | 57.0 |
| next​Scheduled​Run | Date | The next scheduled time for this schedule | Required | 57.0 |
| time | Scheduled​Time​Input | The scheduled run time. | Required | 57.0 |

## Related Topics

- DailyScheduledItemInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_daily_scheduled_item_input.htm)
- WeeklyScheduledItemInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_weekly_scheduled_item_input.htm)
- Scheduled​Time​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_scheduled_time_input.htm)
