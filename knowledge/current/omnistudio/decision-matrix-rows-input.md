---
title: "Decision Matrix Rows Input"
domain: omnistudio
topic: decision-matrix-rows-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.249Z
estimatedTokens: 186
keywords: [Decision, Matrix, Rows, Input, representation, information, manage, rows, relation, decision, matrix, version.]
---

# Decision Matrix Rows Input

> Input representation of the information to manage rows in relation to
      the decision matrix version.

# Decision Matrix Rows Input

Input representation of the information to manage rows in relation to the decision matrix version.

JSON Example

Add a row:

```

```

Delete a row:

```

```

Update a row:

```

```

Add row using a CSV file:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fileId | String | The ID of the Content Document Version that contains the rows details to be added or updated in a decision matrix version. | OptionalNoteThis field is required if you’re using a CVS file to add or update rows. | 53.0 |
| rows | Decision Matrix Row Input[] | List of rows to be added, updated, or deleted in a decision matrix version. | Required | 53.0 |

## Code Examples

```
{
  "rows": [
    {
      "rowData": {
        "Age": "45",
        "Gender": "F",
        "Premium": "2000"
      }
    }
  ]
}
```

```
{
  "rows": [
    {
      "id": "a1j5w000006D04uAAC",
      "action": "delete",
      "rowData": {
        "Age": "45",
        "Gender": "F",
        "Premium": "2000"
      }
    }
  ]
}
```

```
{
  "rows": [
    {
      "id": "a1j5w000006D04uAAC",
      "action": "update",
      "rowData": {
        "Age": "45",
        "Gender": "F",
        "Premium": "1500"
      }
    }
  ]
}
```

```
{
   "fileId" : "f1j5w000005D04uFGC"
}
```

## Related Topics

- Decision Matrix Row Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_decision_matrix_row_input.htm)
