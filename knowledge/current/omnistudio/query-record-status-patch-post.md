---
title: "Query Record Status (PATCH, POST)"
domain: omnistudio
topic: query-record-status-patch-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:49.057Z
estimatedTokens: 280
keywords: [Query, Record, Status, PATCH, POST, Update, processing, status, related, error, messages, query, data, records., Create, records]
---

# Query Record Status (PATCH, POST)

> Update the processing status and related error messages of query data records. Create
    the processing status and related error messages of query data records

# Query Record Status (PATCH, POST)

Update the processing status and related error messages of query data records. Create the processing status and related error messages of query data records

Resource

```

```

Example for PATCH

```

```

Example for POST

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

PATCH, POST

Response body for PATCH

[Context Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_output.htm "Output Representation of attributes associated with defined context.")

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| queryRecordStatusInput | Object | Input representation for context ID and the list of paths for querying the status. | Required | 59.0 |

JSON example

```

```

Response body for POST

[Query Record Status Result](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_query_record_status_result.htm "Output representation of query result status of context data records.")

## Code Examples

```
/connect/contexts/query-record-status
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/contexts/query-record-status/18732dfd
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/contexts/query-record-status/18732dfd
```

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

```
{
  "contextId": "3729ed60-d16d-41b8-8951-9ad4f6407ad2",
  "queryPaths": [
    {
      "dataPath": [
        "TestOrder123"
      ]
    }
  ]
}
```

## Related Topics

- Context
            Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_output.htm)
- Query
              Record Status Result (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_query_record_status_result.htm)
