---
title: "Subscription Resource"
domain: bi-dev-guide-rest
topic: subscription-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.829Z
estimatedTokens: 228
keywords: [Subscription, Resource, Retrieve]
---

# Subscription Resource

> Retrieve, update, or delete a subscription.

# Subscription Resource

Retrieve, update, or delete a subscription.

Resource URL

```

```

Formats

JSON

Available Version

47.0

HTTP Methods

GET DELETE PATCH

Request parameters for GET, PATCH, and DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| subscription​Id | Id | The ID of the subscription. | Required | 47.0 |

Response body for GET and PATCH

[Subscription](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_subscription.htm "An Analytics subscription.")

PATCH Request Body

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| run​Now | Boolean | Indicates whether the subscription should run now (true) or later (false). | Required | 47.0 |
| subscription | Subscription​Input | The subscription details to update. | Required | 47.0 |

## Code Examples

```
/wave/subscriptions/<subscriptionId>
```

## Related Topics

- Subscription (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_subscription.htm)
- Subscription​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_input.htm)
