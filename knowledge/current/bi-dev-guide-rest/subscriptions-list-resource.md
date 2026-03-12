---
title: "Subscriptions List Resource"
domain: bi-dev-guide-rest
topic: subscriptions-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.822Z
estimatedTokens: 300
keywords: [Subscriptions, Resource, creates, subscription, schedule]
---

# Subscriptions List Resource

> Returns a list of subscriptions or creates a subscription schedule.

# Subscriptions List Resource

Returns a list of subscriptions or creates a subscription schedule.

Resource URL

```

```

Formats

JSON

Available Version

47.0

HTTP Methods

GET POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| type | Connect​Subscription​Source​Type​Enum | Filters the collection by the subscription source type. Valid values are:CollectionDashboardWidget | Optional | 47.0 |

Response body for GET

[Subscription Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_subscription_collection.htm "A collection of Analytics subscriptions.")

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| run​Now | Boolean | Indicates whether to run the subscription schedule now (true) or not (false). | Required | 47.0 |
| subscription | Subscription Input | The subscription schedule to create | Required | 47.0 |

Response body for POST

[Subscription](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_subscription.htm "An Analytics subscription.")

## Code Examples

```
/wave/subscriptions
```

## Related Topics

- Subscription Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_subscription_collection.htm)
- Subscription Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_input.htm)
- Subscription (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_subscription.htm)
