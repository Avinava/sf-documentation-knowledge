---
title: "Preview Approval Error"
domain: revenue-cloud
topic: preview-approval-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.035Z
estimatedTokens: 195
keywords: [Preview, Approval, Error, Output, representation, error, details, associated, API.]
---

# Preview Approval Error

> Output representation of the error details associated with the Preview Approval
    API.

# Preview Approval Error

Output representation of the error details associated with the Preview Approval API.

JSON example

This example shows a sample error scenario.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| correlationId | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Small, 65.0 | 65.0 |
| errorCode | String | Code for the resultant error. | Small, 65.0 | 65.0 |
| errorMessage | String | Error message for the resultant error. | Small, 65.0 | 65.0 |
| source | String | Details about the source of the error. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "approvalChainItems": [],
  "error": {
    "correlationId": "0Q0DU0000005HZC0A2",
    "errorCode": "[xmlrpc=-1, statusCode=INVALID_API_INPUT, exceptionCode=null, scope=PublicApi, http=400]",
    "errorMessage": "Looks like the flow associated with this approval workflow for the current record isn't active. Activate the flow and try again.",
    "source": "PreviewApprovalDataProcessingException"
  },
  "status": "Failure"
}
```
