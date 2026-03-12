---
title: "ConnectApi.ManagedContentSpaceChannelsRepresentation"
domain: apex-reference
topic: connectapimanagedcontentspacechannelsrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:27.862Z
estimatedTokens: 323
keywords: [ConnectApi.ManagedContentSpaceChannelsRepresentation, List, managed, content, space, channels.]
---

# ConnectApi.ManagedContentSpaceChannelsRepresentation

> List of managed content space channels.

# ConnectApi.ManagedContentSpaceChannelsRepresentation

List of managed content space channels.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currentPageUrl | String | URL to the current page of managed content space channels. | 62.0 |
| nextPageUrl | String | URL to the next page of Mmanaged content space channels. | 62.0 |
| previousPageUrl | String | URL to the previous page of managed content space channels. | 62.0 |
| spaceChannels | List<ConnectApi.​ManagedContent​SpaceChannel​Representation> | List of managed content space channels. | 62.0 |
| totalSpaceChannels | Integer | Total count of managed content space channels returned for the request. | 62.0 |

#### See Also

-   [patchManagedContentSpaceChannels(contentSpaceId, spaceChannels)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentSpaces_static_methods.htm#apex_ConnectAPI_ManagedContentSpaces_patchManagedContentSpaceChannels_2 "Add or remove channels from a managed content space.")

-   [getManagedContentSpaceChannels(contentSpaceId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentSpaces_static_methods.htm#apex_ConnectAPI_ManagedContentSpaces_getManagedContentSpaceChannels_1 "Get channels for a managed content space.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​ManagedContent​SpaceChannel​Representation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_space_channel.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- patchManagedContentSpaceChannels(contentSpaceId, spaceChannels) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentSpaces_static_methods.htm)
- getManagedContentSpaceChannels(contentSpaceId, pageParam, pageSize) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentSpaces_static_methods.htm)
