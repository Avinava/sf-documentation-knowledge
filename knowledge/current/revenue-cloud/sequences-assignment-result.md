---
title: "Sequences Assignment Result"
domain: revenue-cloud
topic: sequences-assignment-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.482Z
estimatedTokens: 218
keywords: [Sequences, Assignment, Result, Output, representation, details, assigned, sequence, values, target, objects.]
---

# Sequences Assignment Result

> Output representation of the details of the assigned sequence values to target
    objects.

# Sequences Assignment Result

Output representation of the details of the assigned sequence values to target objects.

JSON example

This example shows a sample successful response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Sequence Error[] | Error encountered during the processing of the API request. | Big, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the sequence pattern value is assigned (true) or not (false). | Big, 65.0 | 65.0 |
| sequencePatternValue | String | Sequence pattern value assigned to the target object. | Big, 65.0 | 65.0 |
| sequencePolicyId | String | ID of the sequence policy assigned to the target object. | Big, 65.0 | 65.0 |
| targetObjectId | String | Record to which the sequence pattern value is assigned. | Big, 65.0 | 65.0 |

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
