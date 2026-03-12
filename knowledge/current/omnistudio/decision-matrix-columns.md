---
title: "Decision Matrix Columns"
domain: omnistudio
topic: decision-matrix-columns
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:47.991Z
estimatedTokens: 336
keywords: [Decision, Matrix, Columns, Retrieve, manage, resource, add, new]
---

# Decision Matrix Columns

> Retrieve a list of or manage columns in a decision matrix. Use this
      resource to add new columns, or update or delete existing columns in a decision
    matrix.

# Decision Matrix Columns

Retrieve a list of or manage columns in a decision matrix. Use this resource to add new columns, or update or delete existing columns in a decision matrix.

Resource

```

```

Example

```

```

Available version

53.0

Requires Chatter

No

HTTP methods

GET, POST

Path parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| matrixId | String | The ID of the decision matrix record. | Required | 53.0 |

Response body for GET

[Decision Matrix Columns Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_matrix_columns_output.htm "Output representation of columns of a decision matrix.")

Request body for POST

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

Response body for POST

[Decision Matrix Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_matrix_output.htm "Output representation the action performed on a decision matrix version.")

## Code Examples

```
/connect/omnistudio/decision-matrices/${matrixId}/columns
```

```
/services/data/v53.0/connect/omnistudio/decision-matrices/0lIR000000000u0MAA/columns
```

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

- Decision Matrix Columns Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_matrix_columns_output.htm)
- Decision Matrix
                                    Column Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_decision_matrix_column.htm)
- Decision Matrix Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_matrix_output.htm)
