---
title: "Managed Content Channel Create"
domain: chatterapi
topic: managed-content-channel-create
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.005Z
estimatedTokens: 488
keywords: [Managed, Content, Channel, Input]
---

# Managed Content Channel Create

> Input body to create a managed content channel.

# Managed Content Channel Create

Input body to create a managed content channel.

Root XML tag

<ManagedContentChannelCreateRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cacheControl​MaxAge | Long | Cache control max age value in seconds. | Optional | 62.0 |
| domain | String | ID or name of the domain assigned to the public channel. | Optional | 62.0 |
| isDedicated​ContentDelivery | Boolean | Specifies whether the channel has off-core dedicated content delivery enabled (true) or not (false). Orgs hosted on Hyperforce use off-core dedicated content delivery to deliver content in public channels with high performance and low latency. | Optional | 63.0 |
| isDomainLocked | Boolean | Specifies whether the domain is locked and can’t be changed (true) or not (false). | Optional | 62.0 |
| isSearchable | Boolean | Specifies whether the text contents of the channel are searchable (true) or not (false). | Optional | 62.0 |
| mediaCache​ControlMaxAge | Long | Media cache control max age value in seconds. | Optional | 62.0 |
| name | String | Name of the managed content channel. | Required | 62.0 |
| targetId | String | ID of the target associated with the managed content channel. | Required for all channel types except Public​Unauthenticated | 62.0 |
| type | String | Type of managed content channel. Values are:CloudToCloud—Cloud-to-Cloud integrated channel.Community—Experience Cloud site channel.ConnectedApp—Channel served by a connected app.PublicUnauthenticated—Public channel. All published content is publicly available.UserPermission—Channel backed by a system permission. All published content is available only to users with the permission. | Required | 62.0 |

#### See Also

-   [CMS Channels](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_channels.htm "Get and create managed content channels.")

## Code Examples

```
{
"name": "New Channel",
"targetId": "0DBxx0000004ExEGAU",
"type": "Community"
}
```

## Related Topics

- CMS Channels (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_channels.htm)
