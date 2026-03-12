---
title: "Decision Table Data"
domain: omnistudio
topic: decision-table-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:49.991Z
estimatedTokens: 108
keywords: [Decision, Table, Data, Output, representation, status, action, performed.]
---

# Decision Table Data

> Output representation of the status of an action performed.

# Decision Table Data

Output representation of the status of an action performed.

Sample Output

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error​FileId | String | Error code if transaction failed for any reason. | Small, 62.0 | 62.0 |
| errors | String[] | List of error messages if transaction failed for any reason. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "errors": [],
  "errorFileId": "string_value"
}
```
