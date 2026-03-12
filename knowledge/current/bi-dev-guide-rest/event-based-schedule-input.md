---
title: "Event Based Schedule Input"
domain: bi-dev-guide-rest
topic: event-based-schedule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.740Z
estimatedTokens: 155
keywords: [Event, Schedule, Input, Specify, event-driven, Analytics, asset]
---

# Event Based Schedule Input

> Specify an event-driven schedule for an Analytics asset.

# Event Based Schedule Input

Specify an event-driven schedule for an Analytics asset.

Properties

Inherits notificationLevel, and time from [Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_schedule_input.htm "A schedule on which to execute some type of Analytics asset.")

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| trigger​Rule | String | The expression defining the events that trigger the schedule of the target asset. Currently accepts scheduling of Dataflows and Recipes as the target. | Required | 53.0 |

## Related Topics

- Schedule Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_schedule_input.htm)
