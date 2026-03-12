---
title: "Commerce Subscription Actions History"
domain: chatterapi
topic: commerce-subscription-actions-history
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.827Z
estimatedTokens: 85
keywords: [Commerce, Subscription, Actions, History, Representation]
---

# Commerce Subscription Actions History

> Representation for subscription actions history.

# Commerce Subscription Actions History

Representation for subscription actions history.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actions | Subscription Action[] | List of actions associated with a subscription. | Small, 66.0 | 66.0 |

## Code Examples

```
{
  "actions": [
    {
      "details": {
        "changes": [
          {
            "field": "quantity",
            "previousValue": 1,
            "newValue": 0
          },
          {
            "field": "subscriptionTerm",
            "previousValue": 2,
            "newValue": 0
          }
        ],
        "errors": null,
        "status": "Success"
      },
      "effectiveDateTime": "2026-01-21T23:59:59.000+0000",
      "performedDateTime": "2025-12-21T08:33:58.000Z",
      "type": "Cancel"
    },
    {
      "details": {
        "changes": [
          {
            "field": "quantity",
            "previousValue": 2,
            "newValue": 1
          },
          {
            "field": "subscriptionTerm",
            "previousValue": 4,
            "newValue": 4
          }
        ],
        "errors": null,
        "status": "Success"
      },
      "effectiveDateTime": "2025-12-20T00:00:00.000Z",
      "performedDateTime": "2025-11-20T09:39:59.000Z",
      "type": "Amend"
    }
  ]
}
```

## Related Topics

- Subscription Action (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_subscription_action.htm)
