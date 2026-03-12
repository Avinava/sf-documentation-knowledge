---
title: "Checkout Payment"
domain: chatterapi
topic: checkout-payment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.683Z
estimatedTokens: 196
keywords: [Checkout, Payment, Commerce, store]
---

# Checkout Payment

> Payment response for a Commerce store checkout.

# Checkout Payment

Payment response for a Commerce store checkout.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Checkout Error[] | A list of errors, if any. | Small, 55.0 | 55.0 |
| payment​Data | String | Additional data from a payment request for custom checkout implementations. Supports up to four key-value pairs. paymentData is only applicable to requests with a requestType of Auth or PostAuth. Simple purchase orders don’t support paymentData. | Small, 55.0 | 55.0 |
| salesforce​Result​Code | String | Salesforce payment result code. Valid values are:Decline—Payment was declinedSuccess—Payment succeeded.SystemError—System error.ValidationError—Validation error. | Small, 55.0 | 55.0 |

## Related Topics

- Checkout
                  Error (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_checkout_error.htm)
