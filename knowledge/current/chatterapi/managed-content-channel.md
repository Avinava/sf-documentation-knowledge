---
title: "Managed Content Channel"
domain: chatterapi
topic: managed-content-channel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.390Z
estimatedTokens: 900
keywords: [Managed, Content, Channel]
---

# Managed Content Channel

> Managed content channel.

# Managed Content Channel

Managed content channel.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cacheControl​MaxAge | Long | HTTP cache control max age response header for content delivered from the channel. | Small, 55.0 | 55.0 |
| channelId | String | ID of the managed content channel. | Small, 48.0 | 48.0–61.0 |
| channelName | String | Name of the managed content channel. | Small, 48.0 | 48.0–61.0 |
| channelType | String | Type of managed content channel. Values are:CloudToCloud—Cloud-to-Cloud integrated channel.Community—Experience Cloud site channel.ConnectedApp—Channel served by a connected app.PublicUnauthenticated—Public channel. All published content is publicly available.UserPermission—Channel backed by a system permission. All published content is available only to users with the permission. | Small, 48.0 | 48.0–61.0 |
| domain | String | ID or name of the domain assigned to the channel. | Small, 52.0 | 52.0–61.0 |
| domainId | String | ID of the domain assigned to the channel.In version 52.0 and later, this information is returned in the domain property. | Small, 50.0 | 50.0–51.0 |
| domainName | String | Name of the domain assigned to the channel. | Small, 50.0 | 50.0–61.0 |
| id | String | ID of the managed content channel. | Small, 62.0 | 62.0 |
| isChannel​Searchable | Boolean | Specifies whether the text contents of the channel are searchable (true) or not (false). | Small, 48.0 | 48.0–61.0 |
| isDedicated​ContentDelivery | Boolean | Specifies whether the channel has off-core dedicated content delivery enabled (true) or not (false). Orgs hosted on Hyperforce use off-core dedicated content delivery to deliver content in public channels with high performance and low latency. | Small, 63.0 | 63.0 |
| isDomain​Locked | Boolean | Specifies whether the domain is locked and can’t be changed (true) or not (false). | Small, 50.0 | 50.0–61.0 |
| isSearchable | Boolean | Specifies whether the text contents of the channel are searchable (true) or not (false). | Small, 62.0 | 62.0 |
| managedContent​ChannelDomain | Managed Content Channel Domain | Domain associated with the channel. | Small, 62.0 | 62.0 |
| mediaCacheControl​MaxAge | Long | HTTP cache control max age response header for media delivered from the channel. | Small, 57.0 | 57.0 |
| name | String | Name of the managed content channel. | Small, 62.0 | 62.0 |
| targetId | String | ID of the target associated with the channel. | Small, 62.0 | 62.0 |
| type | String | Type of managed content channel. Values are:CloudToCloud—Cloud-to-Cloud integrated channel.Community—Experience Cloud site channel.ConnectedApp—Channel served by a connected app.PublicUnauthenticated—Public channel. All published content is publicly available.UserPermission—Channel backed by a system permission. All published content is available only to users with the permission. | Small, 62.0 | 62.0 |

#### See Also

-   [Managed Content Channel Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_channel_collection.htm "Collection of managed content channels.")

-   [Managed Content Channels](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_channels.htm "Collection of managed content channels.")

-   [CMS Channel](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_channel.htm "Get, update, or delete a managed content channel.")

-   [CMS Channels](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_channels.htm "Get and create managed content channels.")

## Related Topics

- Managed Content Channel Domain (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_channel_domain.htm)
- Managed Content Channel Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_channel_collection.htm)
- Managed Content Channels (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_channels.htm)
- CMS Channel (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_channel.htm)
- CMS Channels (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_channels.htm)
