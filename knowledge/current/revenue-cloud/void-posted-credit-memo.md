---
title: "Void Posted Credit Memo"
domain: revenue-cloud
topic: void-posted-credit-memo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.639Z
estimatedTokens: 191
keywords: [Posted, Credit, Memo, Output, representation, request, posted, credit, memo.]
---

# Void Posted Credit Memo

> Output representation of the request to void a posted credit memo.

# Void Posted Credit Memo

Output representation of the request to void a posted credit memo.

JSON example

This example shows a sample success response.

```

```

This example shows a sample error response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| debitMemoId | String | ID of the created debit memo. | Big, 66.0 | 66.0 |
| errors | Error Response[] | List of errors specific to this API request that were encountered during voiding the credit memo. | Big, 66.0 | 66.0 |
| isSuccess | Boolean | Indicates whether the API request was successful (true) or not (false). | Big, 66.0 | 66.0 |
| statusURL | String | Status URL for tracking this operation. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "errors": null,
  "statusURL": "/services/data/v66.0/sobjects/AsyncOperationTracker/16Pxx0000004LdkEAE",
  "debitMemoId": "4Dmxx00000000XtAAK",
  "success": true
}
```

```
{
  "errors": [
    {
      "errorCode": "INVALID_STATUS",
      "message": "CreditMemo 50gxx00000000XtAAI is not in the Posted status."
    }
  ],
  "debitMemoId": "",
  "success": false
}
```

## Related Topics

- Error Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_error_response.htm)
