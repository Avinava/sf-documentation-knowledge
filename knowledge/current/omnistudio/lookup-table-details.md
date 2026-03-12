---
title: "Lookup Table Details"
domain: omnistudio
topic: lookup-table-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.044Z
estimatedTokens: 183
keywords: [Lookup, Output, representation, basic]
---

# Lookup Table Details

> Output representation of the basic details of a lookup
    table.

# Lookup Table Details

Output representation of the basic details of a lookup table.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | Unique developer name of the Decision Table or Decision Matrix. | Small, 59.0 | 59.0 |
| id | String | ID of the lookup table record. | Small, 59.0 | 59.0 |
| lookupTable​DefinitionId | String | ID of the Decision Table or Decision Matrix record. | Small, 59.0 | 59.0 |
| lookupTable​Type | String | Type of the lookup table, such as Decision Table or Decision Matrix. | Small, 59.0 | 59.0 |
| name | String | Name of the Decision Table or Decision Matrix. | Small, 59.0 | 59.0 |

## Code Examples

```
"lookupTables":[{
    "apiName":"DM_1",
    "id":"0lIxx0000000001EAA",
    "lookupTableDefinitionId":"9QNxx0000004C92GAE",
    "lookupTableType":"DecisionMatrix",
    "name":"DM_1"
  },
  {
    "apiName":"DT_2",
    "id":"0lIxx000000003FEAQ",
    "lookupTableDefinitionId":"0lDxx000000001dEAA",
    "lookupTableType":"DecisionTable",
    "name":"DT_2"
  }]
```
