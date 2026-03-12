---
title: "Decision Matrix Columns Input"
domain: omnistudio
topic: decision-matrix-columns-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.235Z
estimatedTokens: 119
keywords: [Decision, Matrix, Columns, Input, representation, manage, relation]
---

# Decision Matrix Columns Input

> Input representation of the information to manage columns in relation
      to a decision matrix.

# Decision Matrix Columns Input

Input representation of the information to manage columns in relation to a decision matrix.

JSON example

Add a column:

```

```

Delete a column:

```

```

Update a column:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| columns | Decision Matrix Column Input[] | List of columns to be added, updated, or deleted in a decision matrix. | Required | 53.0 |

## Code Examples

```
{
   "columns" : [ {
      "apiName" : "Name",
      "columnType" : "Input",
      "dataType" : "Text",
      "displaySequence" : 4,
      "name" : "Name"
   }]
}
```

```
{
   "columns" : [ {
      "action" : "delete",
      "id" : "0lJR0000000014bMAA"
   }]
}
```

```
{
   "columns" : [ {
      "id" : "0lJR0000000014hMAA",
      "action" : "update",
      "columnType" : "Input",
      "name" : "First Name"
   }]
}
```

## Related Topics

- Decision Matrix
                                    Column Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_decision_matrix_column.htm)
