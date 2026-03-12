---
title: "Sequences Assignment"
domain: revenue-cloud
topic: sequences-assignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.476Z
estimatedTokens: 166
keywords: [Sequences, Assignment, Output, representation, status, assigned, sequence, pattern, values.]
---

# Sequences Assignment

> Output representation with the status of the assigned sequence pattern
    values.

# Sequences Assignment

Output representation with the status of the assigned sequence pattern values.

JSON example

This example shows a sample successful response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Sequence Error[] | Error encountered during the processing of the API request. | Big, 65.0 | 65.0 |
| sequencesAssignment | Sequences Assignment Result[] | Details of the sequence pattern values assignment. | Big, 65.0 | 65.0 |
| status | String | Status of the sequence policy assignment. Valid values are:PartialSuccessSuccessFailed | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "errors": null,
  "sequencesAssignment": [
    {
      "errors": null,
      "isSuccess": true,
      "sequencePatternValue": "INV-1234-2025-04-12-001",
      "targetObjectId": "3ttxx000000085dAAA"
    }
  ],
  "status": "Success"
}
```

## Related Topics

- Sequence Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_sequence_error_output.htm)
- Sequences Assignment Result (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_sequences_assignment_result_output.htm)
