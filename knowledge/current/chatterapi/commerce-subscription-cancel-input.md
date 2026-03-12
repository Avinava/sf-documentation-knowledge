---
title: "Commerce Subscription Cancel Input"
domain: chatterapi
topic: commerce-subscription-cancel-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.337Z
estimatedTokens: 119
keywords: [Commerce, Subscription, Cancel, Input, representation]
---

# Commerce Subscription Cancel Input

> Input representation for the Commerce subscription cancel
    request.

# Commerce Subscription Cancel Input

Input representation for the Commerce subscription cancel request.

Root XML tag

CommerceSubscriptionCancelInput

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| subscriptions | String[] | List of digital product subscription IDs to cancel.Currently supports canceling only one digital product subscription per request. | Required | 63.0 |

## Code Examples

```
{
  "subscriptionIds": [
    "02ixx0000004Hb4AAE"
  ]
}
```
