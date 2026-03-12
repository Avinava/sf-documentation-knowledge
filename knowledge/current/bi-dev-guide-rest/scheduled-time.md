---
title: "Scheduled Time"
domain: bi-dev-guide-rest
topic: scheduled-time
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.546Z
estimatedTokens: 121
keywords: [Scheduled, Time, base, schedule, data, refresh]
---

# Scheduled Time

> The base schedule for a data refresh.

# Scheduled Time

The base schedule for a data refresh.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| hour | Integer | The hour at which this schedule is run (0-23). | Small, 57.0 | 57.0 |
| minute | Integer | The minute at which this schedule is run (0-59). | Small, 57.0 | 57.0 |
| time​Zone | Scheduled​Time​Zone | The time zone of the hour at which the schedule is run. | Small, 57.0 | 57.0 |

## Related Topics

- Scheduled​Time​Zone (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_scheduled_timezone.htm)
