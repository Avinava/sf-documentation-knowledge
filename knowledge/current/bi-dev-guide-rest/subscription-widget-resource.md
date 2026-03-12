---
title: "Subscription Widget Resource"
domain: bi-dev-guide-rest
topic: subscription-widget-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.840Z
estimatedTokens: 216
keywords: [Subscription, Widget, Resource]
---

# Subscription Widget Resource

> Update or delete a subscription for a widget.

# Subscription Widget Resource

Update or delete a subscription for a widget.

Resource URL

```

```

Formats

JSON

Available Version

47.0

HTTP Methods

DELETE PATCH

Request parameters for PATCH and DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| subscription​Id | Id | The ID of the subscription. | Required | 47.0 |
| widget​Id | Id | The ID of the widget. | Required | 47.0 |

Request body for PATCH

[Subscription Widget Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_widget_input.htm "An Analytics widget subscription inherits properties from the base Dashboard Widget Item Input.")

Response body for PATCH

[Subscription](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_subscription.htm "An Analytics subscription.")

## Code Examples

```
/wave/subscriptions/<subscriptionId>/widgets/<widgetId>
```

## Related Topics

- Subscription Widget Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_widget_input.htm)
- Subscription (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_subscription.htm)
