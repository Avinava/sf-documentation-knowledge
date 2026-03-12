---
title: "Commerce Subscription Saved Payment Method Input"
domain: chatterapi
topic: commerce-subscription-saved-payment-method-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.346Z
estimatedTokens: 153
keywords: [Commerce, Subscription, Saved, Payment, Input, representation, updating, associated]
---

# Commerce Subscription Saved Payment Method Input

> Input representation for updating a saved payment method associated with a
    subscription.

# Commerce Subscription Saved Payment Method Input

Input representation for updating a saved payment method associated with a subscription.

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

## Code Examples

```
{
  "merchantAccountId": "8zbxx00000000ODAAY",
  "savedPaymentMethodId": "12qxx000002pmjEAAQ"
}
```
