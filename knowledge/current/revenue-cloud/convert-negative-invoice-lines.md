---
title: "Convert
    Negative Invoice Lines"
domain: revenue-cloud
topic: convert-negative-invoice-lines
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.591Z
estimatedTokens: 159
keywords: [Convert, Negative, Invoice, Lines, Output, representation, details, created, memo, along, status, request.]
---

# Convert
    Negative Invoice Lines

> Output representation of the details of the created memo along with the status of the
    request.

# Convert Negative Invoice Lines

Output representation of the details of the created memo along with the status of the request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response | List of errors encountered during the processing of the API request. | Big, 62.0 | 62.0 |
| id | String | ID of the credit memo that’s created after the conversion of the negative invoice lines. | Small, 62.0 | 62.0 |
| success | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "id": "50gxx000000g0WwAAI",
  "success": true,
  "errors": []
  }
```
