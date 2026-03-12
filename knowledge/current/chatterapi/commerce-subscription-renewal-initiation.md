---
title: "Commerce Subscription Renewal Initiation"
domain: chatterapi
topic: commerce-subscription-renewal-initiation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.087Z
estimatedTokens: 637
keywords: [Commerce, Subscription, Renewal, Initiation, Renew, active, API, registered, shoppers]
---

# Commerce Subscription Renewal Initiation

> Renew an active Commerce subscription. This API is available only
    to registered shoppers.

# Commerce Subscription Renewal Initiation

Renew an active Commerce subscription. This API is available only to registered shoppers.

When using this resource, keep the following considerations in mind:

-   Subscription renewal takes effect after the end date of subscription. You can renew only once before the subscription term ends. After the term ends, you can renew again.
-   Default pricing for renewals is based on the current list price of the digital product subscription.
-   An amended subscription can’t be renewed before its amendment start date.

Resource

```

```

Resource examples

```

```

```

```

Available version

65.0

HTTP methods

POST

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveAccountId | String | ID of the account for which the request is made. If not specified, it defaults to the account ID for the context user. | OptionalThis field is required if the buyer wants to cancel a subscription associated with a managed account other than their default account. | 65.0 |

Request body for POST

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

Response body for POST

[Commerce Subscription Renew](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_subscription_renew_output.htm "Representation for the Commerce subscription renew request.")

## Code Examples

```
/commerce/webstores/${webstoreId}/subscriptions/actions/initiate-renewal
```

```
https://yourInstance.salesforce.com/services/data/66.0/commerce/webstores​/0ZExx000000005rGAA/subscriptions/actions/initiate-renewal
```

```
https://yourInstance.salesforce.com/services/data/66.0/commerce/webstores​/0ZExx000000005rGAA/subscriptions/actions/initiate-renewal?effectiveAccountId=001xx000003DMe9
```

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

- Commerce Subscription Renew (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_subscription_renew_output.htm)
