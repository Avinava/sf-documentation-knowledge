---
title: "ConnectApi.LinkCapabilityInput"
domain: apex-reference
topic: connectapilinkcapabilityinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.250Z
keywords: [ConnectApi.LinkCapabilityInput, See]
---

# ConnectApi.LinkCapabilityInput

# ConnectApi.LinkCapabilityInput

Create or update a link on a feed element.

This class is a subclass of [ConnectApi.FeedElementCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capability.htm#apex_connectapi_input_feed_element_capability "A feed element capability.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| url | String | Link URL. The URL can be to an external site. | Required | 32.0 |
| urlName | String | Description of the link. | Optional | 32.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilitiesInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capabilities.htm "A container for all capabilities that can be included when creating a feed element.")