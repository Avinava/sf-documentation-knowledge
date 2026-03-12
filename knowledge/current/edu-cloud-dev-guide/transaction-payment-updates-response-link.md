---
title: "Transaction Payment Updates Response Link"
domain: edu-cloud-dev-guide
topic: transaction-payment-updates-response-link
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.125Z
estimatedTokens: 96
keywords: [Transaction, Payment, Updates, Link, Output, representation, links]
---

# Transaction Payment Updates Response Link

> Output representation of the links to the response object for the transaction payment
    updates.

# Transaction Payment Updates Response Link

Output representation of the links to the response object for the transaction payment updates.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| gift​transaction | Link Details | Link to the gift transaction details. | Small, 60.0 | 60.0 |

## Code Examples

```
{
  "gifttransaction": {
    "href": "/services/data/vXX.X/sobjects/sObject/...",
    "id": "string"
  }
}
```

## Related Topics

- Link
                  Details (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_link_detail.htm)
