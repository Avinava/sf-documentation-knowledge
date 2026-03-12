---
title: "Managed Content Space Channels Input"
domain: chatterapi
topic: managed-content-space-channels-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.048Z
estimatedTokens: 166
keywords: [Managed, Content, Space, Channels, Input, add, remove]
---

# Managed Content Space Channels Input

> Channels to add or remove from a managed content space.

# Managed Content Space Channels Input

Channels to add or remove from a managed content space.

Root XML tag

<ManagedContentSpaceChannelsInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| spaceChannels | Managed Content Space Channel Input[] | List of channels to add or remove from the managed content space. | Required | 62.0 |

#### See Also

-   [CMS Space Channels](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_space_channels.htm "Get channels for a managed content space. Add or remove channels from a managed content space.")

## Code Examples

```
{
  "spaceChannels": [
    {
      "channelId": "0ap000000000001",
      "operation": "Add"
    },
    {
      "channelId": "0ap000000000003",
      "operation": "Remove"
    },
    {
      "channelId": "0ap000000000004",
      "operation": "Remove"
    },
    {
      "channelId": "0ap000000000002",
      "operation": "Add"
    }
  ]
}
```

## Related Topics

- Managed Content Space Channel Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_space_channel_input.htm)
- CMS Space Channels (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_space_channels.htm)
