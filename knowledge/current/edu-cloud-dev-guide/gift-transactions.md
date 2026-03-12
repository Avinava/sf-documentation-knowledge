---
title: "Gift Transactions"
domain: edu-cloud-dev-guide
topic: gift-transactions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.925Z
estimatedTokens: 320
keywords: [Gift, Transactions, associated, commitment, record]
---

# Gift Transactions

> Get gift transactions associated with a gift commitment record.

# Gift Transactions

Get gift transactions associated with a gift commitment record.

Resource

```

```

Resource examples

```

```

```

```

```

```

Available version

59.0

HTTP methods

GET

Query parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| count | Integer | Number of gift transactions to be retrieved.You can get a maximum of 12 transactions in one request.By default, the API returns 12 transactions. | Optional | 59.0 |
| fromDate | String | Date (yyyy-MM-dd'T'HH:mm:ss.SSSX) from when you want to get the transactions. This field is not applicable if period is Recent. | Optional | 59.0 |
| period | String | Period for getting gift transactions. possible values are:FuturePastRecentThe default period is Future. | Optional | 59.0 |
| status | String[] | Comma-separated list of gift-transactions statuses. Possible values are:CanceledFailedFully RefundedPaidUnpaidWritten-OffThe default status is Unpaid. | Optional | 59.0 |

Response body for GET

[Gift Transactions Output](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_gift_transactions_output.htm "Output representation of the gift transactions associated with a gift commitment record.")

## Code Examples

```
/connect/fundraising/gift-commitments/${commitmentId}/gift-transactions
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/fundraising/gift-commitments/6gcxx000004WhULAA0/gift-transactions
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/fundraising/gift-commitments/6gcxx000004WhULAA0/gift-transactions?count=2&period=Recent&status=Canceled,Failed
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/fundraising/gift-commitments/6gcxx000004WhULAA0/gift-transactions?count=2&period=Past&fromDate=2023-02-11T13:05:23.000Z
```

## Related Topics

- Gift Transactions Output (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_gift_transactions_output.htm)
