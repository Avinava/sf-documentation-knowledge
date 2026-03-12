---
title: "Commerce Subscription Action"
domain: chatterapi
topic: commerce-subscription-action
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.239Z
estimatedTokens: 194
keywords: [Commerce, Subscription, Action, Output, representation, recent, performed]
---

# Commerce Subscription Action

> Output representation of the most recent action performed on the
    subscription.

# Commerce Subscription Action

Output representation of the most recent action performed on the subscription.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| details | Action Details | Details of the action performed on the subscription. | Small, 65.0 | 65.0 |
| effective​DateTime | String | Date and time when the subscription action takes effect. For example 2025-09-29T11:41:45.040Z. | Small, 65.0 | 65.0 |
| performed​DateTime | String | Date and time when the subscription action was performed. For example 2025-08-29T11:41:45.040Z. | Small, 65.0 | 65.0 |
| type | String | Specifies the type of action performed on the subscription. For example, Amend, Cancel, or Renew. | Small, 65.0 | 65.0 |

## Related Topics

- Action Details (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_subscription_action_details.htm)
