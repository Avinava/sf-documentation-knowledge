---
title: "Decision Table Rows List"
domain: psc-api
topic: decision-table-rows-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.893Z
estimatedTokens: 115
keywords: [Decision, Rows, Output, representation, relation, including, current, state, pagination]
---

# Decision Table Rows List

> Output representation of the rows in relation to the decision table, including current
    state of pagination.

# Decision Table Rows List

Output representation of the rows in relation to the decision table, including current state of pagination.

Sample Output

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| rows | Decision Table Row[] | List of rows returned in response to the API request. | Small, 62.0 | 62.0 |
| totalRows | Integer | Total number of rows. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "rows": [
    {
      "id": "1FIxx0000004CCG",
      "rowData": {
        "AssetLevel": "101",
        "City": "city1"
      }
    }
  ],
  "totalRows": 3
}
```

## Related Topics

- Decision Table Row (atlas.en-us.psc_api.meta/psc_api/connect_responses_decision_table_row_output.htm)
