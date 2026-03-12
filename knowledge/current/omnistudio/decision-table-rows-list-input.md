---
title: "Decision Table Rows List Input"
domain: omnistudio
topic: decision-table-rows-list-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.300Z
estimatedTokens: 88
keywords: [Decision, Table, Rows, List, Input, representation, request, update, rows, CSV, based, decision, table.]
---

# Decision Table Rows List Input

> Input representation of the request to update rows in a CSV based
      decision table.

# Decision Table Rows List Input

Input representation of the request to update rows in a CSV based decision table.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| rows | Decision Table Row Input[] | List of rows to be updated or added. | Required | 62.0 |

## Code Examples

```
{
  "rows": [
    {
      "id": "1FIxx0000004CSOGA2",
      "rowData": {
        "City": "City3",
        "AssetLevel": "300"
      },
      "action": "update"
    }
  ]
}
```

## Related Topics

- Decision Table Row Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_decision_table_row_list_input.htm)
