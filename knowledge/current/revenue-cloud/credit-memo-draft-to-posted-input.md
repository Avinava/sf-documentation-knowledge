---
title: "Credit Memo Draft to Posted Input"
domain: revenue-cloud
topic: credit-memo-draft-to-posted-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.010Z
estimatedTokens: 172
keywords: [Credit, Memo, Draft, Posted, Input, representation, request, post, draft, credit, memo.]
---

# Credit Memo Draft to Posted Input

> Input representation of the request to post a draft credit memo.

# Credit Memo Draft to Posted Input

Input representation of the request to post a draft credit memo.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlationId | String | Splunk correlation ID to use to track messages that are related to the request and logged in Splunk by the different services involved in the request. If not specified, the service creates a random Universally Unique Identifier (UUID). | Optional | 65.0 |
| creditMemoIds | String[] | ID of the credit memo record in Draft status to be posted. You can post one draft credit memo per API request. | Required | 65.0 |

## Code Examples

```
{
"creditMemoIds": ["50gDU00000001MnYAI"]
}
```
