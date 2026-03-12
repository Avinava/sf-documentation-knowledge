---
title: "Transaction Details Input"
domain: nonprofit-cloud
topic: transaction-details-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.774Z
estimatedTokens: 338
keywords: [Transaction, Input, representation]
---

# Transaction Details Input

> Input representation of the transaction details.

# Transaction Details Input

Input representation of the transaction details.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Original amount of the gift transaction. | Optional | 60.0 |
| donor​CoverAmount | Double | Amount that the donor added to their gift to cover fees. | Optional | 60.0 |
| gateway​Reference | String | Reference of the transaction to which the gateway is assigned. | Optional | 60.0 |
| gateway​TransactionFee | Double | Transaction fees charged by the gateway. | Optional | 60.0 |
| lastGateway​ErrorMessage | String | Most recent error message received by the gateway. | Optional | 60.0 |
| lastGatewayProcessedDateTime | String | Last attempt made by the gateway. | Optional | 60.0 |
| lastGateway​ResponseCode | String | Most recent response code that was received by the gateway. | Optional | 60.0 |
| processor​Reference | String | Reference of the transaction to which the payment processor is assigned. | Optional | 60.0 |
| processor​TransactionFee | Double | Transaction fees charged by the processor. | Optional | 60.0 |
| received​Date | String | Date when the donor completed the gift transaction. | Optional | 60.0 |
| transaction​Status | String | Transaction status of the gift. | Optional | 60.0 |

## Code Examples

```
{
  "amount": 150.25,
  "receivedDate": "2024-07-06",
  "donorCoverAmount": 0.25,
  "transactionStatus": "Unpaid",
  "gatewayTransactionFee": 0.75,
  "processorTransactionFee": 0.45,
  "processorReference": "cls-1247586928747",
  "gatewayReference": "102656693ac3ca6e0cdafbfe89ab99",
  "lastGatewayResponseCode": "invalid_cvc",
  "lastGatewayErrorMessage": "The card’s security code is invalid. Check the card’s security code or use a different card.",
  "lastGatewayProcessedDateTime": "2023-07-06T21:57:51Z"
}
```
