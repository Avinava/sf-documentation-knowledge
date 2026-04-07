---
title: "Managed Content Space Channel Input"
domain: chatterapi
topic: managed-content-space-channel-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:08.960Z
estimatedTokens: 207
keywords: [Managed, Content, Space, Channel, add, remove]
---

> Channel to add or remove from a managed content space.

# Managed Content Space Channel Input

Channel to add or remove from a managed content space.

Root XML tag

<ManagedContentSpaceChannelInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| channelId | String | ID of the channel to add or remove from the managed content space. | Required | 62.0 |
| operation | String | Operation to perform on the channel and managed content space.Add—Add a channel to a managed content space.Remove—Remove a channel from a managed content space. | Required | 62.0 |

#### See Also

-   [Managed Content Space Channels Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_space_channels_input.htm "Channels to add or remove from a managed content space.")

## Code Examples

```
{
   "channelId": "0ap000000000001",
   "operation": "Add"
}
```

## Related Topics

- Managed Content Space Channels Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_space_channels_input.htm)
