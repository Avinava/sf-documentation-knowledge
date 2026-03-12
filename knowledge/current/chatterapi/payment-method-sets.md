---
title: "Payment Method Sets"
domain: chatterapi
topic: payment-method-sets
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.166Z
estimatedTokens: 263
keywords: [Payment, Retrieve, configured, Retrieved, Salesforce, Payments, merchant, accounts]
---

# Payment Method Sets

> Retrieve a list of all configured payment method
    sets.

# Payment Method Sets

Retrieve a list of all configured payment method sets.

To access this resource, you need the following license and permissions.

-   Salesforce Payments License
-   Payments Administrator permission set

Resource

```

```

```

```

Available version

58.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| developerName | String | Developer-assigned unique name to identify a payment method set. You can use this query parameter instead of the payment method set ID path variable. | Optional | 58.0 |
| paymentMethodSetID | String | Unique identifier for the payment method set. You can use the developerName query parameter in place of this path variable. | Required | 58.0 |

Response body for GET

[Payment Method Sets](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payments_payment_method_sets_output.htm "Retrieved list of payment method sets in use for Salesforce Payments merchant accounts.")

## Code Examples

```
/payments/payment-method-sets/paymentMethodSetId
```

```
/payments/payment-method-sets?developerName=XYZ
```

## Related Topics

- Payment Method Sets (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payments_payment_method_sets_output.htm)
