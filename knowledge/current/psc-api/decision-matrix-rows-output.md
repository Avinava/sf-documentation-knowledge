---
title: "Decision Matrix Rows Output"
domain: psc-api
topic: decision-matrix-rows-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.843Z
estimatedTokens: 127
keywords: [Decision, Matrix, Rows, Output, representation, version]
---

# Decision Matrix Rows Output

> Output representation of rows of a decision matrix
    version.

# Decision Matrix Rows Output

Output representation of rows of a decision matrix version.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String | The error message in case of failure. | Small, 53.0 | 53.0 |
| rows | Decision Matrix Row Output[] | The list of rows in a decision matrix version. | Small, 53.0 | 53.0 |
| totalRows | Integer | The total count of rows retrieved. | Small, 53.0 | 53.0 |

## Code Examples

```
"message" : null,
   "rows" : [ {
      "id" : "a1j5w000005D04uAAC",
      "name" : "303b5c8988601647873b4ffd247d83cb",
      "rowData" : {
         "Age" : 45,
         "Gender" : "F",
         "Premium" : 2000
      }
   } ],
   "totalRows" : 1
}
```

## Related Topics

- Decision Matrix Row Output (atlas.en-us.psc_api.meta/psc_api/connect_responses_decision_matrix_row_output.htm)
