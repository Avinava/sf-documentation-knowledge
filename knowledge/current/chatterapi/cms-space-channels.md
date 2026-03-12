---
title: "CMS Space Channels"
domain: chatterapi
topic: cms-space-channels
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.856Z
estimatedTokens: 358
keywords: [CMS, Space, Channels, managed, content, Add, remove]
---

# CMS Space Channels

> Get channels for a managed content space. Add or remove channels from a managed content
    space.

# CMS Space Channels

Get channels for a managed content space. Add or remove channels from a managed content space.

Resource

```

```

Available version

62.0

HTTP methods

GET, PATCH

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | Integer | Number of the page you want returned. Starts at 0. If you don’t specify a value or if you specify 0, the first page is returned. | Optional | 62.0 |
| pageSize | Integer | Number of items per page. Valid values are from 1 through 250. If you don't specify a value, the default size is 25. | Optional | 62.0 |

Request body for PATCH

[Managed Content Space Channels Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_space_channels_input.htm "Channels to add or remove from a managed content space.")

Root XML tag

<ManagedContentSpaceChannelsInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| spaceChannels | Managed Content Space Channel Input[] | List of channels to add or remove from the managed content space. | Required | 62.0 |

Response body for Get and PATCH

[Managed Content Space Channels](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_space_channels.htm "List of managed content space channels.")

## Code Examples

```
/connect/cms/spaces/contentSpaceId/channels
```

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

- Managed Content Space Channels Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_space_channels_input.htm)
- Managed Content Space Channel Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_space_channel_input.htm)
- Managed Content Space Channels (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_space_channels.htm)
