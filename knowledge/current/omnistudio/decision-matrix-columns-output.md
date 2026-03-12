---
title: "Decision Matrix Columns Output"
domain: omnistudio
topic: decision-matrix-columns-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:49.952Z
estimatedTokens: 86
keywords: [Decision, Matrix, Columns, Output, representation, columns, decision, matrix.]
---

# Decision Matrix Columns Output

> Output representation of columns of a decision
    matrix.

# Decision Matrix Columns Output

Output representation of columns of a decision matrix.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| columns | Decision Matrix Column Output[] | The list of columns in a decision matrix. | Small, 53.0 | 53.0 |

## Code Examples

```
{
   "columns" : [ {
      "apiName" : “Age”,
      "columnType" : "Input",
      "dataType" : "Number",
      "displaySequence" : 1,
      "id" : "0lJR0000000014aMAA",
      "name" : “Age”,
      "rangeValues" : null
   }, {
      "apiName" : “Gender”,
      "columnType" : "Input",
      "dataType" : "Text",
      "displaySequence" : 2,
      "id" : "0lJR0000000014bMAA",
      "name" : “Gender”,
      "rangeValues" : null
   }, {
      "apiName" : “Premium”,
      "columnType" : "Output",
      "dataType" : "Number",
      "displaySequence" : 3,
      "id" : "0lJR0000000014fMAA",
      "name" : "Premium",
      "rangeValues" : null
   } ]
}
```

## Related Topics

- Decision
                  Matrix Column Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_matrix_column_output.htm)
