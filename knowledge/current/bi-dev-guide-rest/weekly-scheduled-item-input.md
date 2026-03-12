---
title: "Weekly Scheduled Item Input"
domain: bi-dev-guide-rest
topic: weekly-scheduled-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.961Z
estimatedTokens: 142
keywords: [Weekly, Scheduled, Item, Input, schedule, data, refresh]
---

# Weekly Scheduled Item Input

> The weekly schedule for a data refresh.

# Weekly Scheduled Item Input

The weekly schedule for a data refresh.

Properties

Inherits properties from [Scheduled Item Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_scheduled_item_input.htm "The base schedule for a data refresh.")

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| days​Of​Week | Connect​JsonXform​Day​Of​Week​Enum[] | Days of the week on which the schedule runs. Valid values are:MondayTuesdayWednesdayThursdayFridaySaturdaySunday | Required | 57.0 |

## Related Topics

- Scheduled Item Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_scheduled_item_input.htm)
