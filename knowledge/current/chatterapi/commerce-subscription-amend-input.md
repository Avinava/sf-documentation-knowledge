---
title: "Commerce Subscription Amend Input"
domain: chatterapi
topic: commerce-subscription-amend-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.335Z
estimatedTokens: 310
keywords: [Commerce, Subscription, Amend, Input, representation]
---

# Commerce Subscription Amend Input

> Input representation for the Commerce subscription amend
    request.

# Commerce Subscription Amend Input

Input representation for the Commerce subscription amend request.

Root XML tag

CommerceSubscriptionAmendInput

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amendStartDate | Date | The date when the subscription amendment takes effect.The specified date must not be in the past and cannot be later than the subscription end date. | Required | 65.0 |
| quantityChange | Double | The change in digital product quantity for the existing subscription. | Required | 65.0 |
| subscriptionIds | String[] | List of digital product subscription IDs to amend.Currently supports amending only one digital product subscription per request. | Required | 65.0 |

#### See Also

-   [Commerce Subscription Amendment Initiation](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_subscription_initiate_amendment.htm "Amend an active Commerce subscription. This API is available only to registered shoppers.")

-   [Commerce Subscription Amend](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_subscription_amend_output.htm "Representation for the Commerce subscription amend request.")

## Code Examples

```
{
  "amendStartDate": "2025-08-01T00:00:00.000Z",
  "quantityChange": 50,
  "subscriptionIds": [
    "02ixx0000004Hb4AAE"
  ]
}
```

## Related Topics

- Commerce Subscription Amendment Initiation (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_subscription_initiate_amendment.htm)
- Commerce Subscription Amend (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_subscription_amend_output.htm)
