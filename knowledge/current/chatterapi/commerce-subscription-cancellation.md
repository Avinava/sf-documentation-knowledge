---
title: "Commerce Subscription Cancellation"
domain: chatterapi
topic: commerce-subscription-cancellation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.068Z
estimatedTokens: 642
keywords: [Commerce, Subscription, Cancellation, Cancel, active, API, registered, shoppers]
---

# Commerce Subscription Cancellation

> Cancel an active Commerce subscription. This API is available
    only to registered shoppers.

# Commerce Subscription Cancellation

Cancel an active Commerce subscription. This API is available only to registered shoppers.

This API cancels a Commerce subscription for a registered shopper using the account ID specified in the effectiveAccountId parameter. If no account ID is provided as a query parameter, the API defaults to the user’s context to cancel the specified subscription.

When using this resource, keep the following considerations in mind:

-   A subscription cancellation takes effect only on the subscription’s next billing date.
-   A subscription that has been amended or renewed cannot be canceled before the amendment or renewal start date. To cancel such a subscription, you must first revert the amendment or renewal using the [Initiate Rollback on Last Action](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_initiate_rollback_last_action.htm "HTML (New Window)"). Once the rollback is complete, you can cancel the subscription using the Commerce Webstore Subscription Cancellation API. For example, if you amend your current subscription by increasing its quantity from 5 to 10 and later decide to cancel the subscription, you can't cancel it directly. Instead, first initiate a rollback to revert the amendment, and then proceed with the cancellation using the API.

Resource

```

```

Resource examples

```

```

Available version

63.0

HTTP methods

POST

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveAccountId | String | ID of the account for which the request is made. If not specified, it defaults to the account ID for the context user. | OptionalThis field is required if the buyer wants to cancel a subscription associated with a managed account other than their default account. | 63.0 |

Request body for POST

Root XML tag

CommerceSubscriptionCancelInput

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| subscriptions | String[] | List of digital product subscription IDs to cancel.Currently supports canceling only one digital product subscription per request. | Required | 63.0 |

Response body for POST

[Commerce Subscription Cancel Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_subscription_cancel_output.htm "Representation for the Commerce subscription cancellation request.")

## Code Examples

```
/commerce/webstores/webstoreId/subscriptions/actions/initiate-cancellation
```

```
https://yourInstance.salesforce.com/services/data/66.0/commerce/webstores/0ZExx000000005rGAA/subscriptions/actions/initiate-cancellation
```

```
{
  "subscriptionIds": [
    "02ixx0000004Hb4AAE"
  ]
}
```

## Related Topics

- Commerce Subscription Cancel
              Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_subscription_cancel_output.htm)
