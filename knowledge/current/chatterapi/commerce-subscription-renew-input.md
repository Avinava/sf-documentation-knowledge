---
title: "Commerce Subscription Renew Input"
domain: chatterapi
topic: commerce-subscription-renew-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.343Z
estimatedTokens: 437
keywords: [Commerce, Subscription, Renew, Input, representation]
---

# Commerce Subscription Renew Input

> Input representation for the Commerce subscription renew request.

# Commerce Subscription Renew Input

Input representation for the Commerce subscription renew request.

Root XML tag

CommerceSubscriptionRenewInput

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| renewalEndDate | String | The date when the subscription renewal period ends. If renewalStartDate is present, you must specify either renewalEndDate or both renewalTermLength and renewalTermUnit. | Optional | 65.0 |
| renewalStartDate | String | The date when the subscription renewal period begins. Defaults to one day after the current subscription end date. | Required | 65.0 |
| renewalTermLength | Integer | The duration of the renewal term. If renewalStartDate is provided, you must specify either renewalEndDate or both renewalTermLength and renewalTermUnit. | Optional | 65.0 |
| renewalTermUnit | String | The unit of time for the renewal term. For example, days, months, or years. If renewalStartDate is present, you must specify either renewalEndDate or both renewalTermLength and renewalTermUnit. | Optional | 65.0 |
| subscriptionIds | String[] | The list of digital product subscription IDs to renew.Supports renewal of only one digital product subscription per request. | Required | 65.0 |

#### See Also

-   [Commerce Subscription Renewal Initiation](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_subscription_initiate_renewal.htm "Renew an active Commerce subscription. This API is available only to registered shoppers.")

-   [Commerce Subscription Renew](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_subscription_renew_output.htm "Representation for the Commerce subscription renew request.")

## Code Examples

```
{
  "renewalEndDate": "2025-12-31T23:59:59.000Z",
  "renewalStartDate": "2025-06-01T00:00:00.000Z",
  "renewalTermLength": 1,
  "renewalTermUnit": "Year",
  "subscriptionIds": [
    "02ixx0000004Hb4AAE"
  ]
}
```

## Related Topics

- Commerce Subscription Renewal Initiation (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_subscription_initiate_renewal.htm)
- Commerce Subscription Renew (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_subscription_renew_output.htm)
