---
title: "Commitment Payment Updates Request Input"
domain: edu-cloud-dev-guide
topic: commitment-payment-updates-request-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.730Z
estimatedTokens: 238
keywords: [Commitment, Payment, Updates, Input, representation, gift, instrument]
---

# Commitment Payment Updates Request Input

> Input representation of the details of the gift commitment and payment
    instrument.

# Commitment Payment Updates Request Input

Input representation of the details of the gift commitment and payment instrument.

JSON example

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=edu_cloud_dev_guide)

#### Note

You can pass the campaign, donor, and designation IDs in an externalId object containing fieldName and fieldValue.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| gift​CommitmentId | String | ID of the gift commitment record for the payment update. This ID can also be passed as an externalID in the format given below: {             "externalId": {               "fieldName": "<EXTERNAL_ID_FIELD_NAME>",               "fieldValue": "<EXTERNAL_ID_FIELD_VALUE>"         }, | Required | 60.0 |
| payment​Instrument | Payment Instrument Details Input | Contains details about the payment instrument. | Required | 60.0 |

## Code Examples

```
{
  "giftCommitmentId": "6TR5500000WO1ZIFGE",
  "paymentInstrument": {
    "type": "Venmo",
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
    "processorName": "Centpro",
    "processorPaymentReference": "string",
    "gatewayReference": "string"
  }
}
```

```
{
            "externalId": {
              "fieldName": "<EXTERNAL_ID_FIELD_NAME>",
              "fieldValue": "<EXTERNAL_ID_FIELD_VALUE>"
        },
```

## Related Topics

- Payment
                        Instrument Details Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_payment_instrument_detail.htm)
