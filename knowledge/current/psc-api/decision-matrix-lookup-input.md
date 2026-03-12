---
title: "Decision Matrix Lookup Input"
domain: psc-api
topic: decision-matrix-lookup-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.943Z
estimatedTokens: 149
keywords: [Decision, Matrix, Lookup, Input, representation]
---

# Decision Matrix Lookup Input

> Input representation of the input for a decision matrix
    lookup.

# Decision Matrix Lookup Input

Input representation of the input for a decision matrix lookup.

JSON example

```

```

Here, Premium and Tenure are column headers in the matrix, and 2400 and 10 are values of a cell in the column.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| inputs | Decision Matrix Input | List of inputs passed to a decision matrix. An input may contain multiple variables. | Required | 55.0 |
| options | Decision Matrix Options Input | The lookup options for a decision matrix. | Optional | 55.0 |

## Code Examples

```
{
  "inputs": [
    {
      "input": [
        {
          "name": "Premium",
          "value": "2400"
        }
      ]
    },
    {
      "input": [
        {
          "name": "Tenure",
          "value": "10"
        }
      ]
    }
  ],
  "options": {
    "effectiveDate": "2022-12-03T10:15:30Z"
  }
}
```

## Related Topics

- Decision Matrix Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_decision_matrix_input.htm)
- Decision Matrix Options Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_decision_matrix_options.htm)
