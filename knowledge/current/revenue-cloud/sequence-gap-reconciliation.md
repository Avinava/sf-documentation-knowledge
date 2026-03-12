---
title: "Sequence Gap Reconciliation"
domain: revenue-cloud
topic: sequence-gap-reconciliation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.949Z
estimatedTokens: 273
keywords: [Sequence, Gap, Reconciliation, Output, representation]
---

# Sequence Gap Reconciliation

> Output representation of the details of the sequence gap reconciliation.

# Sequence Gap Reconciliation

Output representation of the details of the sequence gap reconciliation.

JSON example

This example shows a sample successful response.

```

```

This example shows a sample error response for an invalid input.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Sequence Gap Reconciliation Error[] | List of errors encountered during the processing of the API request. | Big, 65.0 | 65.0 |
| jobId | String | Unique identifier assigned to the sequence gap reconciliation asynchronous process. | Big, 65.0 | 65.0 |
| sequence​PolicyIds | String[] | List of IDs of the sequence policies. | Big, 65.0 | 65.0 |
| status | String | Status of the sequence gap reconciliation API request. Valid values are:SubmittedNotSubmitted | Big, 65.0 | 65.0 |
| submitted​At | String | Date and time when the reconciliation request was submitted to the async job. | Big, 65.0 | 65.0 |
| target​Objects | String[] | List of objects to which the policies are applied. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "jobId": "0B1xx0000006P12",
  "sequencePolicyIds": [
    "1vdxx0000000uyr",
    "1vdxx0000000lrf"
  ],
  "targetObjects": [
    "Invoice"
  ],
  "status": "Submitted",
  "submittedAt": "2025-06-05T09:12:28Z",
  "error": {}
}
```

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
    "message": "Missing required field in the request."
  }
}
```

## Related Topics

- Sequence Gap Reconciliation Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_sequence_gap_reconciliation_error_output.htm)
