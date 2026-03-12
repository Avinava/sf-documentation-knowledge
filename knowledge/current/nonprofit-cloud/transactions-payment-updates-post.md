---
title: "Transactions Payment Updates (POST)"
domain: nonprofit-cloud
topic: transactions-payment-updates-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.902Z
estimatedTokens: 351
keywords: [Transactions, Payment, Updates, POST, gateway, processor, metadata, gift, API, supports, updating, reuest, include, any, standard]
---

# Transactions Payment Updates (POST)

> Update the gateway and processor metadata for gift transactions. This API supports
    updating only the properties that are specified in the reuest body. If you include any other
    standard or custom fields in the request body beyond the specified properties, an error is
    shown.

# Transactions Payment Updates (POST)

Update the gateway and processor metadata for gift transactions. This API supports updating only the properties that are specified in the reuest body. If you include any other standard or custom fields in the request body beyond the specified properties, an error is shown.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=nonprofit_cloud)

#### Note

You can pass the transaction ID in an externalId object containing fieldName and fieldValue..

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| updates | Transaction Payment Update Request Input[] | Contains the details of the request to update the transaction payment. | Required | 60.0 |

Response body for POST

[Transaction Payment Updates](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_transaction_payment_updates_output.htm "Output representation of the transaction payment updates.")

#### See Also

-   [*Nonprofit Cloud Developer Guide*: Fundraising](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_dev_guide.htm "Nonprofit Cloud Developer Guide: Fundraising - HTML (New Window)")

## Code Examples

```
/connect/fundraising/transactions/payment-updates
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/fundraising/transactions/payment-updates
```

```
{
  "updates": [
    {
      "giftTransactionId": "6TR5500000WO1ZIFGE",
      "transactionStatus": "Unpaid",
      "processorReference": "string",
      "gatewayReference": "string",
      "lastGatewayResponseCode": "invalid_cvc",
      "lastGatewayErrorMessage": "The card’s security code is invalid. Check the card’s security code or use a different card.",
      "lastGatewayProcessedDateTime": "2023-07-06T21:57:51Z"
    }
  ]
}
```

## Related Topics

- Transaction Payment Update Request Input[] (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_transaction_payment_update_request.htm)
- Transaction Payment Updates (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_transaction_payment_updates_output.htm)
