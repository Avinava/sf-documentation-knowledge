---
title: "Decision Matrix Version Rows"
domain: omnistudio
topic: decision-matrix-version-rows
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:49.101Z
estimatedTokens: 514
keywords: [Decision, Matrix, Version, Rows, Retrieve, paginated, list, manage, rows, decision, matrix, version., resource, add, new, update, delete, existing]
---

# Decision Matrix Version Rows

> Retrieve a paginated list of or manage rows in a decision matrix
      version. Use this resource to add new rows, or update or delete existing rows in a decision
      matrix version.

# Decision Matrix Version Rows

Retrieve a paginated list of or manage rows in a decision matrix version. Use this resource to add new rows, or update or delete existing rows in a decision matrix version.

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
| versionId | String | The ID of the decision matrix version record. | Required | 53.0 |

Query parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| file | Boolean | Indicates whether to get the rows by generating a CSV file for downloading (true) or fetching the rows in JSON format (false). The default value is false. | Optional | 53.0 |

Response body for GET

[Decision Matrix Rows Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_matrix_rows_output.htm "Output representation of rows of a decision matrix version.")

Request body for POST

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

Response body for POST

[Decision Matrix Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_matrix_output.htm "Output representation the action performed on a decision matrix version.")

## Code Examples

```
/connect/omnistudio/decision-matrices/${matrixId}/versions/${versionId}/rows
```

```
/services/data/v53.0/connect/omnistudio/decision-matrices/0lIR000000000u0MAA
/versions/0lNR000000000rFMAQ/rows
```

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

## Related Topics

- Decision Matrix Rows Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_matrix_rows_output.htm)
- Decision Matrix Row Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_decision_matrix_row_input.htm)
- Decision Matrix Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_matrix_output.htm)
