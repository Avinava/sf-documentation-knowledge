---
title: "Commerce Subscription Billing Summary"
domain: chatterapi
topic: commerce-subscription-billing-summary
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:17.835Z
estimatedTokens: 329
keywords: [Commerce, Subscription, Billing, Summary, Representation]
---

# Commerce Subscription Billing Summary

> Representation for the Commerce subscription billing summary.

# Commerce Subscription Billing Summary

Representation for the Commerce subscription billing summary.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| billingMethod | String | Billing method associated with billing schedules. | Small, 63.0 | 63.0 |
| billingPeriod​Amount | String | Billing period amount associated with billing schedules. | Small, 63.0 | 63.0 |
| billingTerm | Integer | Billing term associated with billing schedules. For example, use the value “1” for a one-year or one-month billing term. | Small, 63.0 | 63.0 |
| billingTerm​Unit | String | Billing term unit associated with billing schedules. Possible values are:YearMonth | Small, 63.0 | 63.0 |
| billingType | String | Billing type associated with billing schedules. Possible values are:AdvanceArrear | Small, 63.0 | 63.0 |
| cancellationDate | String | Cancellation date associated with billing schedules. | Small, 63.0 | 63.0 |
| currencyIso​Code | String | Curency ISO Code associated with billing schedules. | Small, 63.0 | 63.0 |
| nextBilling​Date | String | Next billing date associated with billing schedules. | Small, 63.0 | 63.0 |
| savedPayment​Method | Saved Payment Method | Saved payment method associated with billing schedules. | Small, 63.0 | 63.0 |

## Related Topics

- Saved Payment Method (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payments_saved_payment_methods_output.htm)
