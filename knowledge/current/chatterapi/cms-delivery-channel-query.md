---
title: "CMS Delivery, Channel Query"
domain: chatterapi
topic: cms-delivery-channel-query
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.665Z
estimatedTokens: 593
keywords: [CMS, Delivery, Channel, Query, published, managed, content, versions]
---

# CMS Delivery, Channel Query

> Get published managed content versions for a
    channel.

# CMS Delivery, Channel Query

Get published managed content versions for a channel.

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
| contentKeys | String[] | List of up to 50 content keys for the managed content. A content key is a universally unique identifier (UUID) such as MCA4CCV5QS2BAB5H7YRCRPTCWGZQ.Specify either contentKeys or managedContentIds. | Optional | 51.0 |
| endDate | String | Publish end date in ISO 8601 format, for example, 2011-02-25T18:24:31.000Z. | Optional | 48.0 |
| includeMetadata | Boolean | Specifies whether to include metadata in the response (true) or not (false). The default value is false. | Optional | 48.0 |
| language | String | Language locale for the managed content, for example, en_US. If the requested translation isn’t available, the language defaults to the context user’s language. If the context user’s language isn’t available, the language defaults to the content type’s original language. | Optional | 48.0 |
| managedContent​Ids | String[] | Comma-separated list of managed content IDs. HTTP/2 clients support up to 200 IDs. HTTP/1.1 clients don’t.Specify either contentKeys or managedContentIds. | Optional | 48.0 |
| managedContent​Type | String | Developer name of the content type, such as cms_document or cms_image. | Optional | 48.0 |
| page | Integer | Number of the page you want returned. Starts at 0. If you don’t specify a value or if you specify 0, the first page is returned. | Optional | 48.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 250. For performance reasons, we recommend 25 or fewer items per page. If you don’t specify a value, the default size is 25. | Optional | 48.0 |
| showAbsoluteUrl | Boolean | Specifies whether to show absolute URLs in the response body (true) or not (false). If you don’t specify a value, the default is false. | Optional | 50.0 |
| startDate | String | Publish start date in ISO 8601 format, for example, 2011-02-25T18:24:31.000Z. | Optional | 48.0 |

Response body for GET

[Managed Content Version Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_version_collection.htm "Collection of managed content versions.")

## Code Examples

```
/connect/cms/delivery/channels/channelId/contents/query
```

## Related Topics

- Managed Content Version Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_version_collection.htm)
