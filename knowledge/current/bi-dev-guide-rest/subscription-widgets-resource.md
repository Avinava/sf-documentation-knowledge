---
title: "Subscription Widgets Resource"
domain: bi-dev-guide-rest
topic: subscription-widgets-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.837Z
estimatedTokens: 193
keywords: [Subscription, Widgets, Resource, widget]
---

# Subscription Widgets Resource

> Create a subscription for a widget.

# Subscription Widgets Resource

Create a subscription for a widget.

Resource URL

```

```

Formats

JSON

Available Version

47.0

HTTP Methods

POST

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| subscription​Id | Id | The ID of the subscription. | Required | 51.0 |

Request body for POST

[Subscription Widget Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_widget_input.htm "An Analytics widget subscription inherits properties from the base Dashboard Widget Item Input.")

Response body for POST

[Subscription](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_subscription.htm "An Analytics subscription.")

## Code Examples

```
/wave/subscriptions/<subscriptionId>/widgets
```

## Related Topics

- Subscription Widget Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_widget_input.htm)
- Subscription (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_subscription.htm)
