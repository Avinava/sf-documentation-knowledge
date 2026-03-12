---
title: "Commerce Subscriptions, Saved Payment Method"
domain: chatterapi
topic: commerce-subscriptions-saved-payment-method
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.095Z
estimatedTokens: 559
keywords: [Commerce, Subscriptions, Saved, Payment, associated, specific, subscription, API, registered, buyers]
---

# Commerce Subscriptions, Saved Payment Method

> Update the saved payment method associated with a specific Commerce
      subscription. This API is available only to registered buyers.

# Commerce Subscriptions, Saved Payment Method

Update the saved payment method associated with a specific Commerce subscription. This API is available only to registered buyers.

In the out-of-the-box Commerce solution, this API is implemented on the My Subscriptions page, enabling buyers to update saved payment methods for their subscriptions through My Subscription experience.

To access this API, users must have the following licenses and permissions:

-   B2B Commerce, or D2C Commerce
-   Revenue Lifecycle Management

Resource

```

```

Resource examples

```

```

Available version

63.0

HTTP methods

PATCH

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveAccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | OptionalFor the account switcher, if the user provides a valid effectiveAccountId, the API updates the saved payment method associated with a Commerce subscription for that account ID. The account switcher feature is only applicable to B2B Commerce. | 63.0 |

Request body for PATCH

Root XML tag

commerceSubscriptionSavedPaymentMethodInput

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| merchant​AccountId | String | Salesforce Payments merchant account ID associated with the saved payment method. | Required | 63.0 |
| savedPayment​MethodId | String | ID of the saved payment method record associated with the Commerce subscription. | Required | 63.0 |

Response body for PATCH

Here’s a sample response for the Commerce Subscription Detail in the Saved Payment Method PATCH request:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The PATCH API populates only the billing, endDate, id, and startDate field values in the response. Other fields are ignored by the PATCH API.

```

```

[Commerce Subscription Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_subscription_detail.htm "Representation for the Commerce subscription details.")

## Code Examples

```
/commerce/webstores/webstoreId/subscriptions/subscriptionId/saved-payment-methods
```

```
https://yourInstance.salesforce.com/services/data/66.0/commerce/webstores​/0ZExx00000003NhGAI/subscriptions/02ixx0000004HJKAA2/saved-payment-methods
```

```
{
  "merchantAccountId": "8zbxx00000000ODAAY",
  "savedPaymentMethodId": "12qxx000002pmjEAAQ"
}
```

```
{
  "billing": {
    "billingMethod": "OrderAmount",
    "billingPeriodAmount": null,
    "billingTerm": 1,
    "billingTermUnit": "Month",
    "billingType": "Arrears",
    "cancellationDate": null,
    "currencyIsoCode": "USD",
    "nextBillingDate": "2024-10-10",
    "savedPaymentMethod": {
      "gatewayResponse": {},
      "id": "12qxx000002pmmSAAQ",
      "merchantAccountId": "8zbxx00000000ODAAY",
      "name": "Ra*****"
    }
  },
  "cancelStatus": null,
  "endDate": "2025-09-10T23:59:59.000Z",
  "id": "02ixx0000004HJKAA2",
  "product": null,
  "quantity": null,
  "sellingModel": null,
  "startDate": "2024-09-10T00:00:00.000Z",
  "subscriptionTerm": null
}
```

## Related Topics

- Commerce Subscription Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_subscription_detail.htm)
