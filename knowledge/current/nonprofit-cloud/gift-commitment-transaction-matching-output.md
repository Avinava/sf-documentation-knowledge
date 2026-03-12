---
title: "Gift Commitment Transaction Matching Output"
domain: nonprofit-cloud
topic: gift-commitment-transaction-matching-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.027Z
estimatedTokens: 94
keywords: [Gift, Commitment, Transaction, Matching, Output, representation, transactions]
---

# Gift Commitment Transaction Matching Output

> Output representation of a list of gift transactions.

# Gift Commitment Transaction Matching Output

Output representation of a list of gift transactions.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| giftTransactions | Standard Object Details[] | List of gift transactions associated with a gift commitment. | Small, 59.0 | 59.0 |

## Code Examples

```
{
   "giftTransactions":[
      {
         "fields":[
            {
               "fieldApiName":"GiftCommitmentId",
               "label":"Gift Commitment ID",
               "type":"String",
               "value":"6gcRM0000004CD0YAM"
            },
            {
               "fieldApiName":"Id",
               "label":"Gift Transaction ID",
               "type":"String",
               "value":"6trRM00000000CwYAI"
            },
            {
               "fieldApiName":"Name",
               "label":"Name",
               "type":"String",
               "value":"Tom C3 - Tom C3 GT 7"
            },
            {
               "fieldApiName":"GiftType",
               "label":"Gift Type",
               "type":"String",
               "value":"Individual"
            },
            {
               "fieldApiName":"TransactionDueDate",
               "label":"Transaction Due Date",
               "type":"DateOnlyWrapper",
               "value":"Thu Aug 31 00:00:00 GMT 2023"
            },
            {
               "fieldApiName":"DonorId",
               "label":"Donor ID",
               "type":"String",
               "value":"001RM000005bZRUYA2"
            },
            {
               "fieldApiName":"OwnerId",
               "label":"Owner ID",
               "type":"String",
               "value":"005RM0000027gL8YAI"
            },
            {
               "fieldApiName":"RefundedAmount",
               "label":"Refunded Amount",
               "type":"Double",
               "value":"0.0"
            },
            {
               "fieldApiName":"Status",
               "label":"Status",
               "type":"String",
               "value":"Unpaid"
            },
            {
               "fieldApiName":"IsDeleted",
               "label":"Deleted",
               "type":"Boolean",
               "value":"false"
            },
            {
               "fieldApiName":"IsPartiallyRefunded",
               "label":"Partially Refunded",
               "type":"Boolean",
               "value":"false"
            },
            {
               "fieldApiName":"CurrentAmount",
               "label":"Current Amount",
               "type":"Double",
               "value":"2.2222222E7"
            },
            {
               "fieldApiName":"AcknowledgementStatus",
               "label":"Acknowledgement Status",
               "type":"String",
               "value":"To Be Sent"
            },
            {
               "fieldApiName":"OriginalAmount",
               "label":"Original Amount",
               "type":"Double",
               "value":"2.2222222E7"
            },
            {
               "fieldApiName":"IsWrittenOff",
               "label":"Written Off",
               "type":"Boolean",
               "value":"false"
            },
            {
               "fieldApiName":"IsFullyRefunded",
               "label":"Fully Refunded",
               "type":"Boolean",
               "value":"false"
            },
            {
               "fieldApiName":"PaymentMethod",
               "label":"Payment Method",
               "type":"String",
               "value":"Cash"
            },
            {
               "fieldApiName":"IsPaid",
               "label":"Paid",
               "type":"Boolean",
               "value":"false"
            }
         ],
         "objectApiName":"GiftTransaction"
      },
      {
         "fields":[
            {
               "fieldApiName":"GiftCommitmentId",
               "label":"Gift Commitment ID",
               "type":"String",
               "value":"6gcRM0000004CD0YAM"
            },
            {
               "fieldApiName":"Id",
               "label":"Gift Transaction ID",
               "type":"String",
               "value":"6trRM00000000CxYAI"
            },
            {
               "fieldApiName":"Name",
               "label":"Name",
               "type":"String",
               "value":"Tom C3 - Tom C3 GT 6"
            },
            {
               "fieldApiName":"GiftType",
               "label":"Gift Type",
               "type":"String",
               "value":"Individual"
            },
            {
               "fieldApiName":"TransactionDueDate",
               "label":"Transaction Due Date",
               "type":"DateOnlyWrapper",
               "value":"Wed Aug 30 00:00:00 GMT 2023"
            },
            {
               "fieldApiName":"DonorId",
               "label":"Donor ID",
               "type":"String",
               "value":"001RM000005bZRUYA2"
            },
            {
               "fieldApiName":"OwnerId",
               "label":"Owner ID",
               "type":"String",
               "value":"005RM0000027gL8YAI"
            },
            {
               "fieldApiName":"RefundedAmount",
               "label":"Refunded Amount",
               "type":"Double",
               "value":"0.0"
            },
            {
               "fieldApiName":"Status",
               "label":"Status",
               "type":"String",
               "value":"Unpaid"
            },
            {
               "fieldApiName":"IsDeleted",
               "label":"Deleted",
               "type":"Boolean",
               "value":"false"
            },
            {
               "fieldApiName":"IsPartiallyRefunded",
               "label":"Partially Refunded",
               "type":"Boolean",
               "value":"false"
            },
            {
               "fieldApiName":"CurrentAmount",
               "label":"Current Amount",
               "type":"Double",
               "value":"11111.0"
            },
            {
               "fieldApiName":"AcknowledgementStatus",
               "label":"Acknowledgement Status",
               "type":"String",
               "value":"To Be Sent"
            },
            {
               "fieldApiName":"OriginalAmount",
               "label":"Original Amount",
               "type":"Double",
               "value":"11111.0"
            },
            {
               "fieldApiName":"IsWrittenOff",
               "label":"Written Off",
               "type":"Boolean",
               "value":"false"
            },
            {
               "fieldApiName":"IsFullyRefunded",
               "label":"Fully Refunded",
               "type":"Boolean",
               "value":"false"
            },
            {
               "fieldApiName":"PaymentMethod",
               "label":"Payment Method",
               "type":"String",
               "value":"Cash"
            },
            {
               "fieldApiName":"IsPaid",
               "label":"Paid",
               "type":"Boolean",
               "value":"false"
            }
         ],
         "objectApiName":"GiftTransaction"
      }
   ]
}
```

## Related Topics

- Standard Object
                           Details (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_standard_object_detail.htm)
