---
title: "ConnectApi.ReadByCapabilityInput"
domain: apex-reference
topic: connectapireadbycapabilityinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.501Z
keywords: [ConnectApi.ReadByCapabilityInput, See]
---

# ConnectApi.ReadByCapabilityInput

# ConnectApi.ReadByCapabilityInput

Mark feed elements as read by the context user.

This class is a subclass of [ConnectApi.FeedElementCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capability.htm#apex_connectapi_input_feed_element_capability "A feed element capability.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isReadByMe | Boolean | Specifies to mark the feed element as read (true) for the context user. | Required | 40.0 |
| lastReadDateByMe | Datetime | Specifies the last date, in ISO 8601 format, when the feed element is marked as read for the context user. If you don’t specify a date or you specify a future date, the current system date is used. | Optional | 40.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilitiesInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capabilities.htm "A container for all capabilities that can be included when creating a feed element.")