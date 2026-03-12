---
title: "Subscription Layout Resource"
domain: bi-dev-guide-rest
topic: subscription-layout-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.834Z
estimatedTokens: 198
keywords: [Subscription, Layout, Resource, grid]
---

# Subscription Layout Resource

> Update the grid layout for a subscription.

# Subscription Layout Resource

Update the grid layout for a subscription.

Resource URL

```

```

Formats

JSON

Available Version

47.0

HTTP Methods

PATCH

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| subscription​Id | Id | The ID of the subscription. | Required | 51.0 |

PATCH Request Body

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| grid​Layout | Grid​Layout​Input​Representation | The update to the grid layout for the subscription. | Required | 47.0 |

Response body for PATCH

[Subscription](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_subscription.htm "An Analytics subscription.")

## Code Examples

```
/wave/subscriptions<subscriptionId>/layout
```

## Related Topics

- Grid​Layout​Input​Representation (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboard_state_input_rep.htm)
- Subscription (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_subscription.htm)
