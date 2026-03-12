---
title: "Record Rollup Result Row"
domain: omnistudio
topic: record-rollup-result-row
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.688Z
estimatedTokens: 100
keywords: [Record, Rollup, Result, Row, Output, representation, consolidated, view, table, row, data.]
---

# Record Rollup Result Row

> Output representation of the consolidated view of the table row data.

# Record Rollup Result Row

Output representation of the consolidated view of the table row data.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| rowData | Map<String, Object> | Map of key-value pairs, where key represents the field API name and value represents the field value. | Small, 61.0 | 61.0 |

## Code Examples

```
"rows": [
    {
      "rowData": {
        "Status": "Active",
        "Type": "Savings",
        "Id": "0c7xx000000006TAAQ",
        "FinancialAccountNumber": "*********0001",
        "Name": "John Doe",
        "Case__c": {
          "Id": "Some ID",
          "CaseNumber": "000001"
        }
      }
    }
  ]
```
