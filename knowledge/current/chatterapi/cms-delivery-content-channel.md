---
title: "CMS Delivery Content, Channel"
domain: chatterapi
topic: cms-delivery-content-channel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.671Z
estimatedTokens: 226
keywords: [CMS, Delivery, Content, Channel, binary, stream, media, node, published]
---

# CMS Delivery Content, Channel

> Get the binary stream of a media node of published content in a
      channel.

# CMS Delivery Content, Channel

Get the binary stream of a media node of published content in a channel.

Resource

```

```

The mediaGUID parameter uniquely identifies the media node.

Available version

49.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| language | String | Language locale for the managed content, for example, en_US. To get content for a channel in the specified language, that language must be added to the channel. If you don’t specify a language or if the requested translation isn’t available, the language defaults to the channel or site’s default language. If the channel or site’s default language isn’t available, the language defaults to the primary language of the content space. | Optional | 54.0 |

Response body for GET

Binary stream of the content

## Code Examples

```
/connect/cms/delivery/channels/channelId/media/mediaGUID/content
```
