---
title: "Transaction Payment Updates Response Link"
domain: nonprofit-cloud
topic: transaction-payment-updates-response-link
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.096Z
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
                  Details (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_link_detail.htm)
