---
title: "Payment Method Output"
domain: chatterapi
topic: payment-method-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:20.241Z
estimatedTokens: 141
keywords: [Payment, Output]
---

# Payment Method Output

> Payment method response.

# Payment Method Output

Payment method response.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Salesforce Payments account to which this payment method is linked. | Big, 49.0 | 49.0 |
| id | String | ID of the payment method record. | Big, 49.0 | 49.0 |
| paymentMethod​Details | Payment Method Details | Details about the payment method. | Big, 56.0 | 56.0 |
| status | String | Status of the payment method as returned by the payment gateway. | Big, 49.0 | 49.0 |

## Related Topics

- Payment Method Details (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_method_details.htm)
