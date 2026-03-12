---
title: "Commitments Payment Updates (POST)"
domain: edu-cloud-dev-guide
topic: commitments-payment-updates-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.894Z
estimatedTokens: 313
keywords: [Commitments, Payment, Updates, POST, metadata, instruments, active, gift]
---

# Commitments Payment Updates (POST)

> Update the metadata for your payment instruments for all active gift
    commitments.

# Commitments Payment Updates (POST)

Update the metadata for your payment instruments for all active gift commitments.

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

You can pass the commitment ID in an externalId object containing fieldName and fieldValue.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| updates | Commitment Payment Updates Request Input[] | Contains the request details to update the commitment payment. | Required | 60.0 |

Response body for POST

[Commitment Payment Updates](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_commitment_payment_updates_output.htm "Output representation of the request to update the commitment payment for a fundraising commitment.")

#### See Also

-   [*Nonprofit Cloud Developer Guide*: Fundraising](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_dev_guide.htm "Nonprofit Cloud Developer Guide: Fundraising - HTML (New Window)")

## Code Examples

```
/connect/fundraising/commitments/payment-updates
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/fundraising/commitments/payment-updates
```

```
{
  "updates": [
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
  ]
}
```

## Related Topics

- Commitment Payment Updates Request Input[] (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_commitment_payment_updates_request.htm)
- Commitment Payment Updates (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_commitment_payment_updates_output.htm)
