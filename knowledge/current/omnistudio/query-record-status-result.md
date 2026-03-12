---
title: "Query Record Status Result"
domain: omnistudio
topic: query-record-status-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.268Z
estimatedTokens: 167
keywords: [Query, Record, Status, Result, Output, representation, context, data, records]
---

# Query Record Status Result

> Output representation of query result status of context data records.

# Query Record Status Result

Output representation of query result status of context data records.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextRecordStatusListId | String | Unique ID associated with the list of context record status required for Lightning Data Service. | Small, 59.0 | 59.0 |
| isSuccess | Boolean | Indicates whether the status retrieval of context data query records was successful (true) or not (false). | Small, 59.0 | 59.0 |
| queryResult | Context Data Record Status[] | List containing the status of the queried context data records. | Small, 59.0 | 59.0 |

## Related Topics

- Context
                  Data Record Status (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_data_record_status.htm)
