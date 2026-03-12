---
title: "Gift Transactions Output"
domain: nonprofit-cloud
topic: gift-transactions-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.041Z
estimatedTokens: 133
keywords: [Gift, Transactions, Output, representation, associated, commitment, record]
---

# Gift Transactions Output

> Output representation of the gift transactions associated with a gift commitment
    record.

# Gift Transactions Output

Output representation of the gift transactions associated with a gift commitment record.

JSON examples

Here’s an example of a list of future gift transactions.

```

```

Here’s an example of a list of past gift transactions.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| gift​Transactions | Gift Transaction Record Output[] | List of gift transactions associated with a gift commitment record. | Small, 59.0 | 59.0 |

## Code Examples

```
{
   "giftTransactions":[
      {
         "amount":9999,
         "commitmentId":"6gcxx000004WhULAA0",
         "commitmentScheduleId":"6csxx000004WhULAA0",
         "paymentMethod":"Cash",
         "transactionDate":"2023-09-01T00:00:00.000Z"
      },
      {
         "amount":2099,
         "commitmentId":"6gcxx000004WhULAA0",
         "commitmentScheduleId":"6csxx000004UhUMAB0",
         "paymentMethod":"Cash",
         "transactionDate":"2023-10-01T00:00:00.000Z"
      }
   ]
}
```

```
{
   "giftTransactions":[
      {
         "amount":9999,
         "commitmentId":"6gcxx000004WhULAA0",
         "commitmentScheduleId":"6csxx000004WhULAA0",
         "paymentMethod":"Cash",
         "status":"Canceled"
      },
      {
         "amount":2099,
         "commitmentId":"6gcxx000004WhULAA0",
         "commitmentScheduleId":"6csxx000004UhUMAB0",
         "paymentMethod":"Cash",
         "status":"Canceled"
      }
   ]
}
```

## Related Topics

- Gift
                  Transaction Record Output (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_gift_transaction_record_output.htm)
