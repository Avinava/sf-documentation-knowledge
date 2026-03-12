---
title: "Authorization Adjustment Output"
domain: chatterapi
topic: authorization-adjustment-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.288Z
estimatedTokens: 360
keywords: [Authorization, Adjustment, Output, representation]
---

# Authorization Adjustment Output

> Authorization adjustment output representation.

# Authorization Adjustment Output

Authorization adjustment output representation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account containing the payment authorization being adjusted. | Big, 51.0 | 51.0 |
| amount | Double | Amount of the payment authorization adjustment. | Big, 51.0 | 51.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the payment authorization adjustment. | Big, 51.0 | 51.0 |
| effectiveDate | String | Date when the authorization adjustment becomes effective. | Big, 51.0 | 51.0 |
| id | String | ID of the PaymentAuthAdjustment record. | Big, 51.0 | 51.0 |
| paymentAuthAdjustmentNumber | String | System-defined reference number. | Big, 51.0 | 51.0 |
| requestDate | String | Date when the authorization adjustment transaction occurred. | Big, 51.0 | 51.0 |
| status | String | Status of the payment authorization adjustment. Possible values are:Canceled: The payment authorization reversal has been canceled. The parent authorization has returned to its pre-reversal balance.Draft: The payment authorization reversal can be edited before applying it against the parent authorization.Processed: The payment authorization reversal has been finalized.Users can change the status as follows:Draft to ProcessedProcessed to CanceledDraft to Canceled | Big, 51.0 | 51.0 |
