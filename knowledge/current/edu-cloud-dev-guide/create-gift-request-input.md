---
title: "Create Gift Request Input"
domain: edu-cloud-dev-guide
topic: create-gift-request-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.776Z
estimatedTokens: 732
keywords: [Gift, Input, representation, data, new, accepts, standard, custom, donor, account, transaction, appear, include, customFields, relevant]
---

# Create Gift Request Input

> Input representation of the data required to create a new gift. This request body
    accepts both standard and custom fields for donor account and gift transaction. If a standard
    field does not appear in the request body, you can include it in the customFields section for
    the relevant object.

# Create Gift Request Input

Input representation of the data required to create a new gift. This request body accepts both standard and custom fields for donor account and gift transaction. If a standard field does not appear in the request body, you can include it in the customFields section for the relevant object.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountCustomFields | Custom Field Details Input[] | Custom fields for the donor account. The accountCustomFields property aslo accepts the standard fields for the donor account. | Optional | 60.0 |
| amount | Double | Original amount of the gift transaction. | Required | 60.0 |
| campaign | Campaign Details Input | Campaign that's associated with the gift transaction. | Optional | 60.0 |
| commitmentId | String | Gift commitment ID that's associated with the gift transaction. | Optional | 60.0 |
| currency​IsoCode | String | ISO code of the currency. | Optional | 60.0 |
| designations | Designation Details Input[] | Designations that are associated with the gift transaction. | Optional | 60.0 |
| donor | Donor Details Input | Donor details that are associated with the gift transaction. | Required | 60.0 |
| donorCover​Amount | Double | Amount that the donor added to their gift to cover fees. | Optional | 60.0 |
| gateway​Reference | String | Reference of the transaction to which the gateway is assigned. | Optional | 60.0 |
| gateway​TransactionFee | Double | Transaction fees charged by the gateway. | Optional | 60.0 |
| giftTransaction​CustomFields | Custom Field Details Input[] | Custom fields for the gift transaction. The giftTransactionCustomFields property also accepts the standard fields for the gift transaction. | Optional | 60.0 |
| lastGateway​ErrorMessage | String | Most recent error message received by the gateway. | Optional | 60.0 |
| lastGateway​ProcessedDate​Time | String | Last attempt made by the gateway. | Optional | 60.0 |
| lastGateway​ResponseCode | String | Most recent response code that was received by the gateway. | Optional | 60.0 |
| outreach​SourceCode | Outreach Source Code Details Input | Outreach source code that's associated with the gift transaction. | Optional | 60.0 |
| payment​Identifier | String | Unique ID for the payment transaction. | Optional | 60.0 |
| payment​Instrument | Payment Instrument Details Input | Payment instrument used for the gift transaction. | Required | 60.0 |
| processor​Reference | String | Reference of the transaction to which the payment processor is assigned. | Optional | 60.0 |
| processor​Transaction​Fee | Double | Transaction fees charged by the processor. | Optional | 60.0 |
| receivedDate | String | Date when the donor completed the gift transaction. | Required | 60.0 |
| transaction​Status | String | Status of the gift transaction. | Required | 60.0 |

## Code Examples

```
{
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
        "id": "0015500000WO1ZixxL",
        "firstName": "Daniel",
        "lastName": "Chavez",
        "phone": "510-432-1234",
        "email": "example@salesforce.com",
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
        "cardBrand": "visa",
        "bankName": "chase",
        "digitalWalletProvider": "Diner's Club",
        "bankAccountHolderType": "primary",
        "bankAccountType": "checking",
        "bankAccountNumber": "123456",
        "bankCode": "HBUK",
        "gatewayName": "Gateway",
        "processorName": "OptiSynth",
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

- Custom Field Details Input[] (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_custom_field_detail.htm)
- Campaign Details Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_campaign_detail.htm)
- Designation Details Input[] (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_designation_detail.htm)
- Donor
                        Details Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_donor_detail.htm)
- Outreach Source Code Details Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_outreach_source_code_detail.htm)
- Payment Instrument Details Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_payment_instrument_detail.htm)
