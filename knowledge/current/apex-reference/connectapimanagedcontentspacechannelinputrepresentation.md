---
title: "ConnectApi.ManagedContentSpaceChannelInputRepresentation"
domain: apex-reference
topic: connectapimanagedcontentspacechannelinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.288Z
keywords: [ConnectApi.ManagedContentSpaceChannelInputRepresentation, See]
---

# ConnectApi.ManagedContentSpaceChannelInputRepresentation

# ConnectApi.ManagedContentSpaceChannelInputRepresentation

Channel to add or remove from a managed content space.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| channelId | String | ID of the channel to add or remove from the managed content space. | Required | 62.0 |
| operation | ConnectApi.​ManagedContent​SpaceChannel​Operation | Operation to perform on the channel and managed content space.Add—Add a channel to a managed content space.Remove—Remove a channel from a managed content space. | Required | 62.0 |

#### See Also

-   [ConnectApi.ManagedContentSpaceChannelsInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_space_channels.htm "Channels to add or remove from the managed content space.")