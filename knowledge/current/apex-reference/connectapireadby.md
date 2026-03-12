---
title: "ConnectApi.ReadBy"
domain: apex-reference
topic: connectapireadby
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.792Z
estimatedTokens: 140
keywords: [ConnectApi.ReadBy, feed, element]
---

# ConnectApi.ReadBy

> Information about who read the feed element and when.

# ConnectApi.ReadBy

Information about who read the feed element and when.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| lastReadDateByUser | Datetime | When the user last read the feed element in ISO 8601 format. | 40.0 |
| user | ConnectApi.​UserSummary | Information about the user who read the feed element. | 40.0 |

#### See Also

-   [ConnectApi.ReadByPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_read_by_collection.htm "A collection of information about who read the feed element and when.")

## Related Topics

- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​UserSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_summary.htm)
- ConnectApi.ReadByPage (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_read_by_collection.htm)
