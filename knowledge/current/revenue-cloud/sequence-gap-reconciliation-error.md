---
title: "Sequence Gap Reconciliation Error"
domain: revenue-cloud
topic: sequence-gap-reconciliation-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.463Z
estimatedTokens: 119
keywords: [Sequence, Gap, Reconciliation, Error, Output, representation, errors, encountered, during, processing, API, request.]
---

# Sequence Gap Reconciliation Error

> Output representation of the errors encountered during the processing of the API
    request.

# Sequence Gap Reconciliation Error

Output representation of the errors encountered during the processing of the API request.

JSON example

This example shows a sample error response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error​Code | String | Code for the resultant error. | Big, 65.0 | 65.0 |
| error​Message | String | Error message for the resultant error. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "jobId": "",
  "sequencePolicyIds": [
    "1vdxx0000000abc",
    "1vdxx0000000def"
  ],
  "targetObjects": [
    "Invoice"
  ],
  "status": "NotSubmitted",
  "submittedAt": "",
  "error": {
    "errorCode": "INVALID_INPUT",
    "message": "Specify a value for either sequencePolicyIds or targetObjects."
  }
}
```
