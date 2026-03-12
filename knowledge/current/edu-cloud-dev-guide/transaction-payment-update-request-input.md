---
title: "Transaction Payment Update Request Input"
domain: edu-cloud-dev-guide
topic: transaction-payment-update-request-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.860Z
estimatedTokens: 345
keywords: [Transaction, Payment, Input, representation, gateway, processor, metadata, include, any, standard, custom, beyond, error, shown]
---

# Transaction Payment Update Request Input

> Input representation of the details of the gateway and processor metadata to update the
    transaction payment. If you include any other standard or custom fields in the request body
    beyond the specified properties, an error is shown.

# Transaction Payment Update Request Input

Input representation of the details of the gateway and processor metadata to update the transaction payment. If you include any other standard or custom fields in the request body beyond the specified properties, an error is shown.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| gateway​Reference | String | Reference of the transaction to which the gateway is assigned. | Optional | 60.0 |
| gift​Transaction​Id | String | ID of the gift transaction record. This ID can also be passed as an externalID in the format given below: {             "externalId": {               "fieldName": "<EXTERNAL_ID_FIELD_NAME>",               "fieldValue": "<EXTERNAL_ID_FIELD_VALUE>"         } | Required | 60.0 |
| lastGateway​Error​Message | String | Most recent error message received by the gateway. | Optional | 60.0 |
| lastGateway​Processed​DateTime | String | Last attempt made by the gateway. | Optional | 60.0 |
| lastGateway​Response​Code | String | Most recent response code that was received by the gateway. | Optional | 60.0 |
| processor​Reference | String | Reference of the transaction to which the payment processor is assigned. | Optional | 60.0 |
| transaction​Status | String | Gift status of the transaction. | Required | 60.0 |

## Code Examples

```
{
  "giftTransactionId": "6TR5500000WO1ZIxxE",
  "transactionStatus": "Unpaid",
  "processorReference": "string",
  "gatewayReference": "string",
  "lastGatewayResponseCode": "invalid_cvc",
  "lastGatewayErrorMessage": "The card’s security code is invalid. Check the card’s security code or use a different card.",
  "lastGatewayProcessedDateTime": "2023-07-06T21:57:51Z"
}
```

```
{
            "externalId": {
              "fieldName": "<EXTERNAL_ID_FIELD_NAME>",
              "fieldValue": "<EXTERNAL_ID_FIELD_VALUE>"
        }
```
