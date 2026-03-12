---
title: "Watchlist Schedule Resource"
domain: bi-dev-guide-rest
topic: watchlist-schedule-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.888Z
estimatedTokens: 176
keywords: [Watchlist, Schedule, Resource]
---

# Watchlist Schedule Resource

> Update a watchlist schedule.

# Watchlist Schedule Resource

Update a watchlist schedule.

Resource URL

```

```

Formats

JSON

Available Version

53.0

HTTP Methods

PATCH

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| schedule​Id | ID | The ID of the schedule to update. | Required | 53.0 |

Request body for PATCH

[Watchlist Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_watchlist_schedule_input.htm "An Analytics watchlist schedule.")

Response body for PATCH

[Watchlist](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_watchlist.htm "An Analytics watchlist collection.")

## Code Examples

```
/wave/watchlist/schedules/<scheduleId>
```

## Related Topics

- Watchlist Schedule
      Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_watchlist_schedule_input.htm)
- Watchlist (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_watchlist.htm)
