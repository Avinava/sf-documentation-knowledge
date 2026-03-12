---
title: "Update Commitment Input"
domain: nonprofit-cloud
topic: update-commitment-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.793Z
estimatedTokens: 568
keywords: [Commitment, Input, representation]
---

# Update Commitment Input

> Input representation of the request to update a commitment.

# Update Commitment Input

Input representation of the request to update a commitment.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Gift amount of each transaction associated with the gift commitment schedule. | Required | 60.0 |
| campaign | Campaign Details | Campaign that's associated with the gift commitment. | Optional | 60.0 |
| currency​IsoCode | String | Currency ISO code of the gift commitment. | Optional | 60.0 |
| donorId | Donor Details Input | Person, household, or organization account associated with the commitment. | Optional | 60.0 |
| endDate | String | End date of the new schedule for this gift commitment. The format is YYYY-MM-DD. | Optional | 60.0 |
| giftCommitment​Custom​Fields | Custom Field Details[] | Custom fields of the gift commitment. | Optional | 60.0 |
| giftCommitment​Schedule​CustomFields | Custom Field Details[] | Custom fields of the gift commitment schedule. | Optional | 60.0 |
| outreach​Source​Code | Outreach Source Code Details | Outreach source code that's associated with the campaign for the gift commitment. | Optional | 60.0 |
| payment​Instrument | Payment Instrument Details | Payment instrument that's used to complete the transaction. | Required | 60.0 |
| startDate | String | Start date of the new schedule for this gift commitment. The format is YYYY-MM-DD. | Required | 60.0 |
| transaction​Day | String | Specifies the day of the month to create gift transactions in the future for a monthly transaction period. If you select the day as 29 or 30, the gift transaction is created on the last day for the months that don't have that many days. | Optional | 60.0 |
| transaction​Interval | Integer | Transaction interval that's applicable to an incoming transaction in the commitment. | Optional | 60.0 |
| transaction​Period | String | Transaction period that's applicable to the incoming transaction in the commitment. When type is pledge, this property must be set to Custom. If transactionPeriod is not provided, the default isCustom. | Required | 60.0 |
| type | String | Type of transaction. Possible values are:PledgeRecurringThe default value is the Recurring. | Optional | 62.0 |

## Code Examples

```
{
  "amount": 150.25,
  "type": "pledge",
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
    "organizationName": "ABC Inc.",
    "firstName": "Daniel",
    "lastName": "Chavez",
    "phone": "510-434-8920",
    "email": "d.chavez@salesforce.com",
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
    ],
    "paymentInstrument": {
      "type": "Credit Card",
      "accountHolderName": "Daniel Chavez",
      "expiryMonth": "10",
      "expiryYear": "2026",
      "last4": "4321",
      "cardBrand": "Diner's Club",
      "bankName": "chase",
      "digitalWalletProvider": "EProvider",
      "bankAccountHolderType": "primary",
      "bankAccountType": "checking",
      "bankAccountNumber": "123456",
      "bankCode": "HBUK",
      "gatewayName": "Gateway",
      "processorName": "Centpro",
      "processorPaymentReference": "string",
      "gatewayReference": "string"
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
    ]
  }
}
```

## Related Topics

- Campaign Details (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_campaign_detail.htm)
- Donor
                        Details Input (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_donor_detail.htm)
- Custom Field Details[] (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_custom_field_detail.htm)
- Custom
                        Field Details[] (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_custom_field_detail.htm)
- Outreach Source Code Details (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_outreach_source_code_detail.htm)
- Payment Instrument Details (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_payment_instrument_detail.htm)
