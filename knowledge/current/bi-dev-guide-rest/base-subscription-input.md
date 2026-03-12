---
title: "Base Subscription Input"
domain: bi-dev-guide-rest
topic: base-subscription-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.658Z
estimatedTokens: 238
keywords: [Base, Subscription, Input]
---

# Base Subscription Input

> The base subscription request input.

# Base Subscription Input

The base subscription request input.

Inherited by [Subscription Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_input.htm "An Analytics subscription.") and [Watchlist Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_watchlist_schedule_input.htm "An Analytics watchlist schedule.").

Properties

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actions | Notification​Action​Input[] | The list of actions for the subscription | Required | 53.0 |
| active | Boolean | Indicates whether the subscription schedule is active (true) or not (false). | Required | 47.0 |
| schedule | Subscription​Schedule​Input[] | The schedule for the subscription | Required | 47.0 |
| source | Subscription​Source​Input[] | The information about the source and type for the subscription | Required | 522.0 |

## Related Topics

- Subscription Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_input.htm)
- Watchlist Schedule Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_watchlist_schedule_input.htm)
- Notification​Action​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_notification_action_input.htm)
- Subscription​Schedule​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_schedule_input.htm)
- Subscription​Source​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_source_input.htm)
