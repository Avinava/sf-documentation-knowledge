---
title: "Commitments (POST)"
domain: edu-cloud-dev-guide
topic: commitments-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.899Z
estimatedTokens: 370
keywords: [Commitments, POST, recurring, gift, schedules, along, associated, new, matched, donor, Customize, accounts]
---

# Commitments (POST)

> Create recurring gift commitments and schedules, along with associated new or matched
    donor. Customize fields for donor accounts, gift commitments, and schedules.

# Commitments (POST)

Create recurring gift commitments and schedules, along with associated new or matched donor. Customize fields for donor accounts, gift commitments, and schedules.

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

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=edu_cloud_dev_guide)

#### Note

You can pass the campaign, donor, and designation IDs in an externalId object containing fieldName and fieldValue.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| commitments | Create Commitment Request Input[] | Details of the request to create the commitment.Limited to 100 commitments in a single request. | Required | 60.0 |
| processing​Options | Processing Options Details Input | Options for the donor matching process. | Optional | 60.0 |

Response body for POST

[Create Commitment](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_create_commitment_output.htm "Output representation of the fundraising commitment request that contains the commitment ID and associated links.")

#### See Also

-   [*Nonprofit Cloud Developer Guide*: Fundraising](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_dev_guide.htm "Nonprofit Cloud Developer Guide: Fundraising - HTML (New Window)")

## Code Examples

```
/connect/fundraising/commitments
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/fundraising/commitments
```

```
{
  "processingOptions": {
    "donorOptions": {
      "defaultUpdateLogic": "update_all"
    }
  },
  "commitments": [
    {
      "amount": 150.25,
      "type": "pledge",
      "currencyIsoCode": "USD",
      "transactionPeriod": "monthly",
      "transactionInterval": 3,
      "transactionDay": "5",
      "startDate": "2024-07-06",
      "endDate": "2024-07-06",
      "campaign": {
        "id": "701y0030d0zk6t06f4"
      },
      "outreachSourceCode": {
        "id": "0gx000d0d0d0FD",
        "sourceCode": "AnimalEmailCampaign2023"
      },
      "donor": {
        "donorType": "individual",
        "id": "0015500000WO1ZxxAL",
        "organizationName": "mini cat town",
        "firstName": "Daniel",
        "lastName": "Chavez",
        "phone": "510-432-9876",
        "email": "d.chavez.com",
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
        "type": "Credit Card",
        "accountHolderName": "Daniel Chavez",
        "expiryMonth": "10",
        "expiryYear": "2026",
        "last4": "4321",
        "cardBrand": "Diner's Club",
        "bankName": "chase",
        "digitalWalletProvider": "EwalletProvider",
        "bankAccountHolderType": "primary",
        "bankAccountType": "checking",
        "bankAccountNumber": "123456",
        "bankCode": "HBUK",
        "gatewayName": "Gateway",
        "processorName": "Centpro",
        "processorPaymentReference": "string",
        "gatewayReference": "string"
      },
      "designations": [
        {
          "designationId": "0gd0030f0303024",
          "percent": 10
        }
      ],
      "firstTransaction": {
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
      },
      "giftCommitmentCustomFields": [
        {
          "fieldName": "string",
          "fieldValue": "string"
        }
      ],
      "giftCommitmentScheduleCustomFields": [
        {
          "fieldName": "string",
          "fieldValue": "string"
        }
      ],
    "giftTransactionCustomFields": [
        {
          "fieldName": "string",
          "fieldValue": "string"
        }
]
```

## Related Topics

- Create Commitment Request Input[] (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_create_commitment_request.htm)
- Processing
                        Options Details Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_processing_options_detail.htm)
- Create
              Commitment (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_create_commitment_output.htm)
