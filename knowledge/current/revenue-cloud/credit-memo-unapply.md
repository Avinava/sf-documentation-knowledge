---
title: "Credit Memo Unapply"
domain: revenue-cloud
topic: credit-memo-unapply
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.360Z
estimatedTokens: 154
keywords: [Credit, Memo, Unapply, Output, representation, invoice, application, record, status]
---

# Credit Memo Unapply

> Output representation of the details of the credit memo invoice application record with
    the status of the request.

# Credit Memo Unapply

Output representation of the details of the credit memo invoice application record with the status of the request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response | List of errors encountered during the processing of the API request. | Big, 62.0 | 62.0 |
| id | String | ID of the credit memo invoice application record. | Small, 62.0 | 62.0 |
| success | Boolean | Indicates whether the credit memo is successfully unapplied (true) or not (false). | Small, 62.0 | 62.0 |

## Code Examples

```
{
    "errors": [],
    "id": "4sFxx00000002ppEAA",
    "success": true
}
```
