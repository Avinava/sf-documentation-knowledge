---
title: "ConnectApi.ChatterStreamPage"
domain: apex-reference
topic: connectapichatterstreampage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.473Z
estimatedTokens: 131
keywords: [ConnectApi.ChatterStreamPage, collection, Chatter, feed, streams]
---

# ConnectApi.ChatterStreamPage

> A collection of Chatter feed streams.

# ConnectApi.ChatterStreamPage

A collection of Chatter feed streams.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currentPageUrl | String | URL to the current page of streams. | 39.0 |
| items | List<ConnectApi.​ChatterStream> | List of streams. | 39.0 |
| nextPageUrl | String | URL to the next page of streams.In version 39.0, all streams are included in currentPageUrl and nextPageUrl is null. | 39.0 |
| total | Integer | Total number of streams in the collection. | 39.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​ChatterStream (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
