---
title: "Void Posted Credit Memo Action"
domain: revenue-cloud
topic: void-posted-credit-memo-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.080Z
estimatedTokens: 219
keywords: [Posted, Credit, Memo, Action, Invoke, API, providing, credit, memo, ID., Supported, REST, HTTP, Inputs, Outputs, Example]
---

# Void Posted Credit Memo Action

> Invoke the Void Posted Credit Memo API by providing a credit memo ID.

# Void Posted Credit Memo Action

Invoke the Void Posted Credit Memo API by providing a credit memo ID.

This action is available in API version 66.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/voidPostedCreditMemo

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| creditMemoId | TypestringDescriptionRequired. ID of the credit memo record in posted status to be voided. |

## Outputs

| Output | Details |
| --- | --- |
| debitMemoId | TypestringDescriptionID of the created debit memo record. |
| statusUrl | TypestringDescriptionURL to use to check the status of the request. |

## Example

POST

Here's a sample request for the Void Posted Credit Memo action.

```

```

Here's a sample response for the Void Posted Credit Memo action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "creditMemoId": "50gSG0000001y5NYAQ"
    }
  ]
}
```

```
[
  {
    "actionName": "voidPostedCreditMemo",
    "errors": [],
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "debitMemoId": "4DmSG000001YcIP0A0",
      "statusUrl": "/services/data/v66.0/sobjects/AsyncOperationTracker/16PSG000001qlyL2AQ"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
