---
title: "Commerce Subscription IDs List Input"
domain: chatterapi
topic: commerce-subscription-ids-list-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.348Z
estimatedTokens: 113
keywords: [Commerce, Subscription, IDs, Input, representation, canceled]
---

# Commerce Subscription IDs List Input

> Input representation of Commerce subscription IDs to be
    canceled.

# Commerce Subscription IDs List Input

Input representation of Commerce subscription IDs to be canceled.

Root XML tag

SubscriptionsIds

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| ids | String[] | IDs of the digital product subscriptions.Currently supports canceling or amending only one digital product subscription per request. | Required | 63.0 |

## Code Examples

```
{
  "ids": [
    "02ixx0000004Hb4AAE"
  ]
}
```
