---
title: "Credit Memo Post"
domain: revenue-cloud
topic: credit-memo-post
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.356Z
estimatedTokens: 182
keywords: [Credit, Memo, Post, Output, representation]
---

# Credit Memo Post

> Output representation of the request to post a credit memo.

# Credit Memo Post

Output representation of the request to post a credit memo.

JSON example

This example shows a sample successful response.

```

```

This example shows a sample error response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors |  | List of errors encountered during the processing of the API request. | Big, 65.0 | 65.0 |
| requestIdentifier | String | Unique request identifier for the request. | Big, 65.0 | 65.0 |
| statusURL | String | Status URL for tracking this operation. | Big, 65.0 | 65.0 |
| success | Boolean | Indicates whether the API request was successful (true) or not (false). | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "errors": [],
  "requestIdentifier": "d3a9d9ce-2a83-4a08-bcf3-df0348a0008c",
  "statusURL": "/services/data/v66.0/sobjects/AsyncOperationTracker/16PDU000000A4oz2AC",
  "success": true
}
```

```
{
  "errors": [
    {
      "errorCode": "BAD_REQUEST",
      "message": "You can post up to 1 credit memo at a time."
    }
  ],
  "requestIdentifier": "9065b043-dcc3-4dcf-b5a1-55fdf5a79f7b",
  "statusURL": "",
  "success": false
}
```
