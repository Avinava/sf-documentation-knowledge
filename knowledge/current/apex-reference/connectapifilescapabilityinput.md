---
title: "ConnectApi.FilesCapabilityInput"
domain: apex-reference
topic: connectapifilescapabilityinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.318Z
keywords: [ConnectApi.FilesCapabilityInput, See]
---

# ConnectApi.FilesCapabilityInput

# ConnectApi.FilesCapabilityInput

Attach up to 10 files that have already been uploaded or remove one or more files from a feed element.

This class is a subclass of [ConnectApi.FeedElementCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capability.htm#apex_connectapi_input_feed_element_capability "A feed element capability.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| items | List<ConnectApi.​FileIdInput> | List of file IDs and operations to be carried out on those files. | Required | 36.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilitiesInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capabilities.htm "A container for all capabilities that can be included when creating a feed element.")