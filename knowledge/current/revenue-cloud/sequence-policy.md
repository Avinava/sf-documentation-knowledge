---
title: "Sequence Policy"
domain: revenue-cloud
topic: sequence-policy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.471Z
estimatedTokens: 170
keywords: [Sequence, Policy, Output, representation, shows, status, assigned, sequence, pattern, values.]
---

# Sequence Policy

> Output representation that shows the status of the assigned sequence pattern
    values.

# Sequence Policy

Output representation that shows the status of the assigned sequence pattern values.

JSON example

This example shows a sample successful response.

```

```

This example shows a sample error response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Sequence Error[] | Details of any error that encountered during the processing of the API request. | Big, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the sequence policy is generated (true) or not (false). | Big, 65.0 | 65.0 |
| sequencePolicyId | String | ID of the sequence policy. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "error": null,
  "isSuccess": true,
  "sequencePolicyId": "1Vdxx0000000GRNAA2"
}
```

```
{
  "error": {
    "errorCode": "INVALID_INPUT",
    "message": "Specify a valid selectionLogic."
  },
  "isSuccess": false,
  "sequencePolicyId": null
}
```

## Related Topics

- Sequence Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_sequence_error_output.htm)
