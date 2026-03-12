---
title: "ConnectApi.ReadByCapability"
domain: apex-reference
topic: connectapireadbycapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.795Z
estimatedTokens: 254
keywords: [ConnectApi.ReadByCapability, feed, element, capability, context, user, mark]
---

# ConnectApi.ReadByCapability

> If a feed element has this capability, the context user can mark it as
        read.

# ConnectApi.ReadByCapability

If a feed element has this capability, the context user can mark it as read.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| isReadByMe | Boolean | Specifies whether the feed element has been read (true) or not (false) by the context user. | 40.0 |
| lastReadDateByMe | Datetime | Last date when the feed element was marked read for the context user in ISO 8601 format. Otherwise, null. | 40.0 |
| page | ConnectApi.​ReadByPage | First page of information about who read the feed element and when. | 40.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- ConnectApi.FeedElementCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​ReadByPage (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_read_by_collection.htm)
- ConnectApi.FeedElementCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
