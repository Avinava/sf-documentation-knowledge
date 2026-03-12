---
title: "Query Record Status Input"
domain: omnistudio
topic: query-record-status-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.698Z
estimatedTokens: 98
keywords: [Query, Record, Status, Input, representation, status, related, error, messages, query, data, records.]
---

# Query Record Status Input

> Input representation of status and related error messages of query data
    records.

# Query Record Status Input

Input representation of status and related error messages of query data records.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| queryRecordStatusInput | Object | Input representation for context ID and the list of paths for querying the status. | Required | 59.0 |

## Code Examples

```
{
    "queryRecordStatusInput": {
        "contextId": "3729ed60-d16d-41b8-8951-9ad4f6407ad2",
        "queryPaths": [
            {
                "dataPath": [
                    "TestOrder123"
                ]
            }
        ]
    }
}
```
