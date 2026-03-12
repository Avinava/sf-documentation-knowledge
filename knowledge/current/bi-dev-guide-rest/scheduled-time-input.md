---
title: "Scheduled Time Input"
domain: bi-dev-guide-rest
topic: scheduled-time-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.852Z
estimatedTokens: 121
keywords: [Scheduled, Time, Input, base, schedule, data, refresh]
---

# Scheduled Time Input

> The base schedule for a data refresh.

# Scheduled Time Input

The base schedule for a data refresh.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| hour | Integer | The hour at which this schedule is run (0-23). | Required | 57.0 |
| minute | Integer | The minute at which this schedule is run (0-59). | Required | 57.0 |
| time​Zone | Scheduled​Time​Zone​Input | The time zone of the hour at which the schedule is run. | Required | 57.0 |

## Related Topics

- Scheduled​Time​Zone​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_scheduled_timezone_input.htm)
