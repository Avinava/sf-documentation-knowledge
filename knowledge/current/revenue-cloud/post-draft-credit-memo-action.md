---
title: "Post Draft Credit Memo Action"
domain: revenue-cloud
topic: post-draft-credit-memo-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.927Z
estimatedTokens: 301
keywords: [Post, Draft, Credit, Memo, Action, draft, credit, memo, record, review, approval., Supported, REST, HTTP, Inputs, Outputs, Example]
---

# Post Draft Credit Memo Action

> Post a draft credit memo to a credit memo record for review and
            approval.

# Post Draft Credit Memo Action

Post a draft credit memo to a credit memo record for review and approval.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/postDraftCreditMemo

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| correlationId | TypestringDescriptionSplunk correlation ID to use to track messages that are related to the request and logged in Splunk by the different services involved in the request. If not specified, the service creates a random Universally Unique Identifier (UUID). |
| creditMemoId | TypestringDescriptionRequired.ID of the credit memo record in Draft status to be posted. |

## Outputs

| Output | Details |
| --- | --- |
| requestIdentifier | TypestringDescriptionThe UUID that's used to track the status of the asynchronous action. |
| statusUrl | TypestringDescriptionThe URL to use to check the status of the request. |

## Example

POST

This example shows a sample request that contains the ID of the credit memo to be posted.

```

```

This example shows a sample successful response.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "creditMemoId": "50gDU00000001MdYAI"
    }
  ]
}
```

```
[
  {
    "actionName": "postDraftCreditMemo",
    "errors": [],
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "statusUrl": "/services/data/v66.0/sobjects/AsyncOperationTracker/16PDU000000A4nw2AC",
      "requestIdentifier": "d3a9d9ce-2a83-4a08-bcf3-df0348a0008c"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
