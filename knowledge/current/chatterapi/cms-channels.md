---
title: "CMS Channels"
domain: chatterapi
topic: cms-channels
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.757Z
estimatedTokens: 827
keywords: [CMS, Channels, managed, content]
---

# CMS Channels

> Get and create managed content channels.

# CMS Channels

Get and create managed content channels.

To get managed content delivery channels, see [CMS Delivery Channels](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_content_delivery_channels.htm "Get managed content delivery channels for the context user.").

Resource

```

```

Available version

62.0

HTTP methods

GET, POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | Integer | Number of the page you want returned. Starts at 0. If you don’t specify a value or if you specify 0, the first page is returned. | Optional | 62.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 250. If you don’t specify a value, the default size is 25. | Optional | 62.0 |
| showDetails | Boolean | Specifies whether to show the channels’ detailed information (true) or summary information only (false). If you don't specify a value, the default is false. | Optional | 62.0 |

Response body for GET

[Managed Content Channels](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_channels.htm "Collection of managed content channels.")

Request body for POST

[Managed Content Channel Create](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_channel_create.htm "Input body to create a managed content channel.")

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

Response body for POST

[Managed Content Channel](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_channel.htm "Managed content channel.")

## Code Examples

```
/connect/cms/channels
```

```
{
"name": "New Channel",
"targetId": "0DBxx0000004ExEGAU",
"type": "Community"
}
```

## Related Topics

- CMS
          Delivery Channels (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_content_delivery_channels.htm)
- Managed Content Channels (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_channels.htm)
- Managed Content Channel Create (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_channel_create.htm)
- Managed Content Channel (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_channel.htm)
