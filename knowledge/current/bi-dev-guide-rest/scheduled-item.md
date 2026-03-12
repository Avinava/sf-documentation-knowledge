---
title: "Scheduled Item"
domain: bi-dev-guide-rest
topic: scheduled-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.543Z
estimatedTokens: 251
keywords: [Scheduled, Item, base, schedule, data, refresh]
---

# Scheduled Item

> The base schedule for a data refresh.

# Scheduled Item

The base schedule for a data refresh.

Inherited by [DailyScheduledItem](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_daily_scheduled_item.htm "The daily schedule for a data refresh.") and [WeeklyScheduledItem](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_weekly_scheduled_item.htm "The weekly schedule for a data refresh.")

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| frequency | Connect​Schedule​Frequency​Type​Enum | Frequency on which this schedule is run. Valid values are:Daily (Run once per day)Monthly (Run on one or more specific numeric days per month)Monthly​Relative (Run on one or more relative days for month)Weekly (Run on one or more days each week) | Small, 57.0 | 57.0 |
| next​Scheduled​Run | Date | The next scheduled time for this schedule | Small, 57.0 | 57.0 |
| time | Scheduled​Time | The scheduled run time. | Small 57.0 | 57.0 |

## Related Topics

- DailyScheduledItem (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_daily_scheduled_item.htm)
- WeeklyScheduledItem (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_weekly_scheduled_item.htm)
- Scheduled​Time (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_scheduled_time.htm)
