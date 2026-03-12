---
title: "Create Gift Input"
domain: edu-cloud-dev-guide
topic: create-gift-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.768Z
estimatedTokens: 123
keywords: [Gift, Input, representation, gifts, including, donor, amount, payment]
---

# Create Gift Input

> Input representation of the request to create gifts, including donor details, amount, and
    payment method.

# Create Gift Input

Input representation of the request to create gifts, including donor details, amount, and payment method.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| gifts | Create Gift Request Input[] | Details of the request to create the gift. | Required | 60.0 |
| processing​Options | Processing Options Details Input | Options for the donor matching process. | Optional | 60.0 |

## Code Examples

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
                        Input[] (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_create_gift_request.htm)
- Processing
                        Options Details Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_processing_options_detail.htm)
