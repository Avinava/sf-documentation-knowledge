---
title: "Credit Memo Apply"
domain: revenue-cloud
topic: credit-memo-apply
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.638Z
estimatedTokens: 164
keywords: [Credit, Memo, Apply, Output, representation, list, applied, credit, memo, results.]
---

# Credit Memo Apply

> Output representation of the list of applied credit memo results.

# Credit Memo Apply

Output representation of the list of applied credit memo results.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| appliedToId | String | ID of the invoice record that the credit is applied to. | Big, 62.0 | 62.0 |
| errors | Error Response | List of errors encountered during the processing of the API request. | Big, 62.0 | 62.0 |
| id | String | ID of the credit memo invoice application. | Big, 62.0 | 62.0 |
| success | Boolean | Indicates whether the credit memo is successfully applied (true) or not (false). | Big, 62.0 | 62.0 |

## Code Examples

```
"applyCreditResults" : [ {
    "appliedToId" : "3ttxx000000003FAAQ",
    "errors" : null,
    "id" : "4sFxx00000002ppEAA",
    "success" : true
  }, {
    "appliedToId" : "3ttxx0000000001AAA",
    "errors" : null,
    "id" : "4sFxx00000002pqEAA",
    "success" : true
  } ]
```
