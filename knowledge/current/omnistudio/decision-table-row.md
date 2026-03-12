---
title: "Decision Table Row"
domain: omnistudio
topic: decision-table-row
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.029Z
estimatedTokens: 101
keywords: [Decision, Table, Row, Output, representation, describe, output, decision, table, row.]
---

# Decision Table Row

> Output representation to describe the output of a decision table row.

# Decision Table Row

Output representation to describe the output of a decision table row.

Sample Output

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the decision table row. | Small, 62.0 | 62.0 |
| rowData | Map<String, Object> | Key value pair of the decision table row. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "rows": {
    "id": "1FIxx0000004CCG",
    "rowData": {
      "AssetLevel": "101",
      "City": "city1"
    }
  }
}
```
