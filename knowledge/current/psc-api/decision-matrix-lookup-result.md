---
title: "Decision Matrix Lookup Result"
domain: psc-api
topic: decision-matrix-lookup-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.671Z
estimatedTokens: 106
keywords: [Decision, Matrix, Lookup, Result, Output, representation, individual, version]
---

# Decision Matrix Lookup Result

> Output representation of the individual output of a decision matrix
      version lookup.

# Decision Matrix Lookup Result

Output representation of the individual output of a decision matrix version lookup.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| outputs | Decision Matrix Lookup Basic Result[] | List of outputs returned by a decision matrix. An output may contain multiple variables. | Small, 55.0 | 55.0 |

## Code Examples

```
{
  "outputs": [
    {
      "results": [],
      "error": "Input Data is Missing"
    },
    {
      "results": [
        {
          "name": "premium",
          "value": "2400"
        },
        {
          "name": "tax",
          "value": "300"
        }
      ]
    },
    {
      "results": [],
      "error": "There is no output for the given input data"
    }
  ]
}
```

## Related Topics

- Decision Matrix Lookup Basic Result (atlas.en-us.psc_api.meta/psc_api/connect_responses_decision_matrix_lookup_basic_result.htm)
