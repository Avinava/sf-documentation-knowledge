---
title: "CMS Delivery Collection"
domain: chatterapi
topic: cms-delivery-collection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.817Z
estimatedTokens: 302
keywords: [CMS, Delivery, Collection, items, channel, Experience, Cloud, site]
---

# CMS Delivery Collection

> Get collection items for a channel or Experience Cloud
    site.

# CMS Delivery Collection

Get collection items for a channel or Experience Cloud site.

Resource

```

```

```

```

Available version

56.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| language | String | Language locale for the managed content, for example, en_US. If you don’t specify a language or if the requested translation isn’t available, the language defaults to the channel or site’s default language. If the channel or site’s default language isn’t available, the language defaults to the primary language of the content space. | Optional | 56.0 |
| pageSize | Integer | Number of items per page. Valid values are from 1 through 250. If you don't specify a value, the default size is 50. | Optional | 63.0 |
| pageToken | Integer | Integer specifying a page token of items. If you don't specify a value, the default value is 0, which returns the first page token. | Optional | 63.0 |

Response body for GET

[Managed Content Collection Items](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_collection_items.htm "Managed content collection Items.")

## Code Examples

```
/connect/cms/delivery/channels/channelId/collections/collectionKeyOrId
```

```
/connect/sites/siteId/cms/delivery/collections/collectionKeyOrId
```

## Related Topics

- Managed Content Collection Items (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_collection_items.htm)
