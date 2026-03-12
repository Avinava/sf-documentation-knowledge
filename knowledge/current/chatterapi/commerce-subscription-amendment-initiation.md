---
title: "Commerce Subscription Amendment Initiation"
domain: chatterapi
topic: commerce-subscription-amendment-initiation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.081Z
estimatedTokens: 575
keywords: [Commerce, Subscription, Amendment, Initiation, Amend, active, API, registered, shoppers]
---

# Commerce Subscription Amendment Initiation

> Amend an active Commerce subscription. This API is available only
    to registered shoppers.

# Commerce Subscription Amendment Initiation

Amend an active Commerce subscription. This API is available only to registered shoppers.

Amendments allow you to modify the digital product quantity of an active subscription. When a customer needs quantity changes to their subscription, you can apply them through an amendment.

When using this resource, keep the following considerations in mind:

-   For positive amendments, changes can be done anytime before the next billing date. By default, pricing is based on the current list price of the digital product subscription.
-   For negative amendments, changes are allowed only on the next billing date. By default, pricing is based on the last transaction price of the digital product subscription.
-   A renewed subscription can’t be amended before its renewal start date.

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

Response body for POST

[Commerce Subscription Amend](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_subscription_amend_output.htm "Representation for the Commerce subscription amend request.")

## Code Examples

```
/commerce/webstores/${webstoreId}/subscriptions/actions/initiate-amendment
```

```
https://yourInstance.salesforce.com/services/data/66.0/commerce/webstores​/0ZExx000000005rGAA/subscriptions/actions/initiate-amendment
```

```
https://yourInstance.salesforce.com/services/data/66.0/commerce/webstores​/0ZExx000000005rGAA/subscriptions/actions/initiate-amendment?effectiveAccountId=001xx000003DMe9
```

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

- Commerce Subscription Amend (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_subscription_amend_output.htm)
