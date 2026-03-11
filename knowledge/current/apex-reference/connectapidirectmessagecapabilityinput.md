---
title: "ConnectApi.DirectMessageCapabilityInput"
domain: apex-reference
topic: connectapidirectmessagecapabilityinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.087Z
keywords: [ConnectApi.DirectMessageCapabilityInput, See]
---

# ConnectApi.DirectMessageCapabilityInput

# ConnectApi.DirectMessageCapabilityInput

Create or update the members of a direct message.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| membersToAdd | List<String> | List of user IDs for members to include in the direct message. | Required when creating a direct message (POST)Optional when updating a direct message (PATCH) | 39.0 |
| membersToRemove | List<String> | List of user IDs for members to remove from the direct message. | Optional when updating a direct message (PATCH)Not supported when creating a direct message (POST) | 40.0 |
| subject | String | Subject of the direct message. | Optional when creating a direct message (POST)Not supported when updating a direct message (PATCH) | 39.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilitiesInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capabilities.htm "A container for all capabilities that can be included when creating a feed element.")