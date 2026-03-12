---
title: "Gifts Transactions (POST)"
domain: nonprofit-cloud
topic: gifts-transactions-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.867Z
estimatedTokens: 351
keywords: [Gifts, Transactions, POST, gift, new, matched, donor, transaction, designations, payment-instrument, metadata, API, supports, custom, account]
---

# Gifts Transactions (POST)

> Create gift transactions with related new or matched donor, optional transaction
    designations, and payment-instrument metadata. This API supports custom fields for the donor
    account and gift transaction.

# Gifts Transactions (POST)

Create gift transactions with related new or matched donor, optional transaction designations, and payment-instrument metadata. This API supports custom fields for the donor account and gift transaction.

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

You can pass the campaign, donor, and designation IDs in an externalId object containing fieldName and fieldValue.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| gifts | Create Gift Request Input[] | Details of the request to create the gift. | Required | 60.0 |
| processing​Options | Processing Options Details Input | Options for the donor matching process. | Optional | 60.0 |

Response body for POST

[Create Gift](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_create_gift_output.htm "Output representation of the details of the created gift transaction response.")

#### See Also

-   [*Nonprofit Cloud Developer Guide*: Fundraising](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_dev_guide.htm "Nonprofit Cloud Developer Guide: Fundraising - HTML (New Window)")

## Code Examples

```
/connect/fundraising/gifts
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/fundraising/gifts
```

```
{
  "processingOptions": {
    "donorOptions": {
      "defaultUpdateLogic": "update_all"
    }
  },
  "gifts": [
    {
      "amount": 150.25,
      "currencyIsoCode": "USD",
      "receivedDate": "2024-07-06",
      "donorCoverAmount": 0.25,
      "transactionStatus": "Unpaid",
      "commitmentId": "00x324303243fsfd",
      "paymentIdentifier": "1234",
      "gatewayTransactionFee": 0.75,
      "processorTransactionFee": 0.45,
      "processorReference": "cls-1247586928747",
      "gatewayReference": "102656693ac3ca6e0cdafbfe89ab99",
      "lastGatewayResponseCode": "invalid_cvc",
      "lastGatewayErrorMessage": "The card’s security code is invalid. Check the card’s security code or use a different card.",
      "lastGatewayProcessedDateTime": "2023-07-06T21:57:51Z",
      "campaign": {
        "id": "701y0030d0zk6t06f4"
      },
      "outreachSourceCode": {
        "id": "0gx000d0d0d0FD",
        "sourceCode": "AnimalEmailCampaign2023"
      },
      "donor": {
        "donorType": "individual",
        "id": "0015500000WO1ZiAAL",
        "firstName": "Daniel",
        "lastName": "Chavez",
        "phone": "510-432-1234",
        "email": "danielchavez@salesforce.com",
        "address": [
          {
            "street": "123 Main Street",
            "city": "Oakland",
            "state": "CA",
            "postalCode": "94610",
            "country": "US"
          }
        ],
        "accountCustomFields": [
          {
            "fieldName": "string",
            "fieldValue": "string"
          }
        ]
      },
      "paymentInstrument": {
        "type": "credit card",
        "accountHolderName": "Daniel Chavez",
        "expiryMonth": "10",
        "expiryYear": "2026",
        "last4": "4321",
        "cardBrand": "Diners club",
        "bankName": "chase",
        "digitalWalletProvider": "Diner's Club",
        "bankAccountHolderType": "primary",
        "bankAccountType": "checking",
        "bankAccountNumber": "123456",
        "bankCode": "HBUK",
        "gatewayName": "Gateway",
        "processorName": "centpro",
        "processorPaymentReference": "string",
        "gatewayReference": "string"
      },
      "designations": [
        {
          "designationId": "0gd0030f0303024",
          "percent": 10,
          "amount": 150.25
        }
      ],
      "giftTransactionCustomFields": [
        {
          "fieldName": "string",
          "fieldValue": "string"
        }
      ]
    }
  ]
}
```

## Related Topics

- Create Gift Request
                        Input[] (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_create_gift_request.htm)
- Processing
                        Options Details Input (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_processing_options_detail.htm)
- Create Gift (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_create_gift_output.htm)
