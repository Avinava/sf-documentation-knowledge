---
title: "Commerce Subscription Action Details"
domain: chatterapi
topic: commerce-subscription-action-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.242Z
estimatedTokens: 144
keywords: [Commerce, Subscription, Action]
---

# Commerce Subscription Action Details

> Details of the subscription action.

# Commerce Subscription Action Details

Details of the subscription action.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| changes | Field Change[] | Details the changes made during a subscription action, including the affected fields along with their previous and updated values. | Small, 65.0 | 65.0 |
| errors | Error Response | Error details, if any. | Small, 65.0 | 65.0 |
| status | String | Specifies the status of the subscription action. For example, Success or Failed. | Small, 65.0 | 65.0 |

## Related Topics

- Field Change (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_subscription_action_field_changes.htm)
- Error Response (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
