---
title: "Create Commitment Request Input"
domain: edu-cloud-dev-guide
topic: create-commitment-request-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.764Z
estimatedTokens: 949
keywords: [Commitment, Input, representation, recurring, gift, accepts, array, requests, However, API, version, 60.0, commitments, per, request.<]
---

# Create Commitment Request Input

> Input representation of the request to create a recurring gift commitment. This request
    body accepts an array of commitment requests. However, for the API version 60.0, up to 100
    commitments is supported per request.<

# Create Commitment Request Input

Input representation of the request to create a recurring gift commitment. This request body accepts an array of commitment requests. However, for the API version 60.0, up to 100 commitments is supported per request.<

To include the standard fields for the donor account , use the [Create Commitment Input](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_create_commitment_input.htm "Input representation of the request to create commitments.") request body to specify the standard fields.

JSON example

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=edu_cloud_dev_guide)

#### Note

You can pass the campaign, donor, and designation IDs in an externalId object containing fieldName and fieldValue.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountCustomFields | Custom Field Details Input[] | Standard and custom fields for the donor account. | Optional | 60.0 |
| amount | Double | Expected amount of the gift transaction in the commitment schedule. | Required | 60.0 |
| campaign | Campaign Details Input | Campaign that's associated with the commitment. | Optional | 60.0 |
| currency​IsoCode | String | Currency ISO code for the commitment. | Optional | 60.0 |
| designations | Designation Details Input[] | Default gift designations that are associated with the commitment. | Optional | 60.0 |
| donor | Donor Details Input | Person, household, or organization account that's associated with the commitment. | Required | 60.0 |
| endDate | String | Date when the total amount of the commitment is expected to be paid. The default format is YYYY-MM-DD. | Required | 60.0 |
| first​Transaction | Transaction Details Input | First transaction of the commitment. Note: When type is pledge, this property cannot be included. | Optional | 60.0 |
| giftCommitment​CustomFields | Custom Field Details Input[] | Standard and custom fields of the gift commitment. | Optional | 60.0 |
| giftCommitment​Schedule​CustomFields | Custom Field Details Input[] | Standard and custom fields of the gift commitment schedule. | Optional | 60.0 |
| giftTransaction​CustomFields | Custom Field Details Input[] | Custom fields for the gift transaction. The giftTransactionCustomFields property also accepts the standard fields for the gift transaction. | Optional | 60.0 |
| outreach​SourceCode | Outreach Source Code Details Input | Outreach source code that's associated with the campaign for the gift commitment schedule. | Optional | 60.0 |
| payment​Instrument | Payment Instrument Details Input | Payment instrument that's used to complete the transaction. | Required | 60.0 |
| payment​Processor​CommitmentId | String | Reference number of the commitment that was assigned by the processor. | Optional | 60.0 |
| startDate | String | Date from when the commitment is in effect. The default format is YYYY-MM-DD. | Required | 60.0 |
| transaction​Day | String | Day of the month to create gift transaction in the future for a monthly transaction period. If you select the day as 29 or 30, the gift transaction is created on the last day for months that don't have that many days. | Optional | 60.0 |
| transaction​Interval | Integer | Transaction interval that's applicable to the incoming transaction in the commitment. | Optional | 60.0 |
| transaction​Period | String | Transaction period that's applicable to the incoming transaction in the commitment. When type is pledge, this property must be set to Custom. If transactionPeriod is not provided, the default isCustom. | Required | 60.0 |
| type | String | Type of transaction. Possible values are:PledgeRecurringThe default value is the Recurring. | Optional | 62.0 |

## Code Examples

```
{
  "commitments": [
    {
      "amount": 15,
      "type": "pledge",
      "currencyIsoCode": "USD",
      "transactionInterval": 1,
      "transactionDay": "1",
      "startDate": "2023-11-01",
      "endDate": "",
      "outreachSourceCode": {
        "sourceCode": "AnimalEmailCampaign2023"
      },
      "donor": {
        "donorType": "individual",
        "id": "0015500000WO1ZixxL",
        "firstName": "Daniel",
        "lastName": "Chavez",
        "phone": "510-432-1234",
        "email": "d.chavez@salesforce.com",
        "address": [
          {
            "street": "123 Main Street",
            "city": "Tardis",
            "state": "NJ",
            "postalCode": "08638",
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
        "digitalWalletProvider": "",
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
          "designationId": "0gd0030f0303xx4",
          "percent": 0
        }
      ],
      "firstTransaction": {
        "amount": 15,
        "receivedDate": "2023-11-02",
        "donorCoverAmount": 0.25,
        "transactionStatus": "Paid",
        "gatewayTransactionFee": 0.75,
        "processorTransactionFee": 0.045,
        "processorReference": "cls-1247586928747",
        "gatewayReference": "102656693ac3ca6e0cdafbfe89ab99",
        "lastGatewayResponseCode": "",
        "lastGatewayErrorMessage": "",
        "lastGatewayProcessedDateTime": "2023-11-02T21:57:51Z"
      }
    }
  ]
}
```

## Related Topics

- Create Commitment
        Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_create_commitment_input.htm)
- Custom Field Details Input[] (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_custom_field_detail.htm)
- Campaign Details Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_campaign_detail.htm)
- Designation Details Input[] (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_designation_detail.htm)
- Donor
                        Details Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_donor_detail.htm)
- Transaction Details Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_transaction_detail.htm)
- Outreach Source Code Details Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_outreach_source_code_detail.htm)
- Payment Instrument Details Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_payment_instrument_detail.htm)
