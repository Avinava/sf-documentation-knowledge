---
title: "Payment Instrument Details Input"
domain: nonprofit-cloud
topic: payment-instrument-details-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.746Z
estimatedTokens: 455
keywords: [Payment, Instrument, Input, representation]
---

# Payment Instrument Details Input

> Input representation of the payment instrument used for the request.

# Payment Instrument Details Input

Input representation of the payment instrument used for the request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| account​HolderName | String | Name of the payment instrument holder. | Optional | 60.0 |
| bankAccount​HolderType | String | Specifies if the bank account holder is an individual or a company. | Optional | 60.0 |
| bankAccount​Number | String | Bank account number associated with the payment instrument. | Optional | 60.0 |
| bankAccount​Type | String | Type of the bank account. | Optional | 60.0 |
| bankCode | String | Code of the bank that's associated with the bank account. | Optional | 60.0 |
| bankName | String | Bank name that’s associated with the bank account. | Optional | 60.0 |
| cardBrand | String | Brand, network, or issuer of the credit card. | Optional | 60.0 |
| digital​WalletProvider | String | Provider of the digital wallet. | Optional | 60.0 |
| expiryMonth | String | Expiration month if the payment method is credit card. | Optional | 60.0 |
| expiryYear | String | Expiration year if the payment method is credit card. | Optional | 60.0 |
| gatewayName | String | Name of the payment gateway. | Optional | 60.0 |
| gateway​Reference | String | Reference number of the gateway for this payment instrument. | Optional | 60.0 |
| last4 | String | Last four digits of the account number for the payment method. | Optional | 60.0 |
| processorName | String | Name of the payment processor. | Optional | 60.0 |
| processor​Payment​Reference | String | Reference of the payment processor that's associated with the payment instrument. | Optional | 60.0 |
| type | String | Type of the payment instrument used for the request. | Required | 60.0 |

## Code Examples

```
{
  "type": "Credit Card",
  "accountHolderName": "Diana Gómez",
  "expiryMonth": "10",
  "expiryYear": "2026",
  "last4": "4321",
  "cardBrand": "Diner's Club",
  "bankName": "chase",
  "digitalWalletProvider": "",
  "bankAccountHolderType": "",
  "bankAccountType": "",
  "bankAccountNumber": "",
  "bankCode": "",
  "gatewayName": "Gateway",
  "processorName": "Centpro",
  "processorPaymentReference": "string",
  "gatewayReference": "string"
}
```
