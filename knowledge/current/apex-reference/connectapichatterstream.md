---
title: "ConnectApi.ChatterStream"
domain: apex-reference
topic: connectapichatterstream
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.838Z
keywords: [ConnectApi.ChatterStream, See]
---

# ConnectApi.ChatterStream

# ConnectApi.ChatterStream

A Chatter feed stream.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| community | ConnectApi.CommunitySummary | Experience Cloud site where the stream is. | 41.0 |
| createdDate | Datetime | Date the stream was created. | 39.0 |
| description | String | Description of the stream. | 39.0 |
| id | String | 18-character ID of the stream. | 39.0 |
| name | String | Name of the stream. | 39.0 |
| subscriptions | List<ConnectApi.FeedEnabledEntity> | List of entities whose feeds are included in the stream. | 39.0 |
| url | String | URL to the stream. | 39.0 |

#### See Also

-   [ConnectApi.ChatterStreamPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm "A collection of Chatter feed streams.")