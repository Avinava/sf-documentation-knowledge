---
title: "CMS Delivery Channels"
domain: chatterapi
topic: cms-delivery-channels
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.668Z
estimatedTokens: 261
keywords: [CMS, Delivery, Channels, managed, content, context, user]
---

# CMS Delivery Channels

> Get managed content delivery channels for the context
    user.

# CMS Delivery Channels

Get managed content delivery channels for the context user.

Resource

```

```

Available version

48.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | Integer | Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned. | Optional | 48.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 250. If you don’t specify a value, the default size is 25. | Optional | 48.0 |

Response body for GET

[Managed Content Delivery Channels](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_delivery_channels.htm "Collection of managed content delivery channels.") in version 62.0 and later

[Managed Content Channel Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_channel_collection.htm "Collection of managed content channels.") in version 48.0–61.0

## Code Examples

```
/connect/cms/delivery/channels
```

## Related Topics

- Managed Content Delivery Channels (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_delivery_channels.htm)
- Managed Content Channel Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_channel_collection.htm)
