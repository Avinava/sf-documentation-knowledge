---
title: "ConnectApi.PaymentAuthAdjustmentResponse"
domain: apex-reference
topic: connectapipaymentauthadjustmentresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.308Z
estimatedTokens: 331
keywords: [Authorization, Adjustment, output, representation]
---

# ConnectApi.PaymentAuthAdjustmentResponse

> Authorization Adjustment output representation.

# ConnectApi.PaymentAuthAdjustmentResponse

Authorization Adjustment output representation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| accountId | String | ID of the account containing the payment authorization being adjusted. | 51.0 |
| amount | Double | Amount of the payment authorization adjustment. | 51.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the payment authorization adjustment. | 51.0 |
| effectiveDate | Datetime | Date when the authorization adjustment becomes effective. | 51.0 |
| id | String | ID of the PaymentAuthAdjustment record. | 51.0 |
| paymentAuthAdjustmentNumber | String | System-defined reference number. | 51.0 |
| requestDate | Datetime | Date when the authorization adjustment transaction occurred. | 51.0 |
| status | String | Status of the payment authorization adjustment.Possible values are:Canceled: The payment authorization reversal has been canceled. The parent authorization has returned to its pre-reversal balance.Draft: The payment authorization reversal can be edited before applying it against the parent authorization.Processed: The payment authorization reversal has been finalized.Users can change the status as follows:Draft to ProcessedProcessed to CanceledDraft to Canceled | 51.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
