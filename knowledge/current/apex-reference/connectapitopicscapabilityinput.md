---
title: "ConnectApi.TopicsCapabilityInput"
domain: apex-reference
topic: connectapitopicscapabilityinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.637Z
keywords: [ConnectApi.TopicsCapabilityInput, See]
---

# ConnectApi.TopicsCapabilityInput

# ConnectApi.TopicsCapabilityInput

Assign topics to a feed element.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextTopic​Name | String | Name of the parent topic in the site to which the feed element belongs. | Optional | 38.0 |
| topics | List<String> | List of topics to assign to the feed element. | Required | 38.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilitiesInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capabilities.htm "A container for all capabilities that can be included when creating a feed element.")