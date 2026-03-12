---
title: "CMS Delivery Content"
domain: chatterapi
topic: cms-delivery-content
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.822Z
estimatedTokens: 497
keywords: [CMS, Delivery, Content, piece, published, channel, Experience, Cloud, site]
---

# CMS Delivery Content

> Get a piece of published content for a channel or Experience Cloud
      site.

# CMS Delivery Content

Get a piece of published content for a channel or Experience Cloud site.

Resource

```

```

```

```

Available version

54.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| expandReferences | Boolean | Specifies whether to include details of references (true) or summaries of references (false) in the response body. If unspecified, the default value is false. | Optional | 54.0 |
| language | String | Language locale for the managed content, for example, en_US. To get content for a channel in the specified language, that language must be added to the channel. If you don’t specify a language or if the requested translation isn’t available, the language defaults to the channel or site’s default language. If the channel or site’s default language isn’t available, the language defaults to the primary language of the content space. | Optional | 54.0 |
| referenceDepth | Integer | An integer 0–3 specifying the depth of references. If you specify 0, the references property of the Managed Content Delivery Document response body is null. If unspecified, the default value is 0. | Optional | 54.0 |
| referencesAsList | Boolean | Specifies whether to return the references as a list in the referencesList property of the Managed Content Delivery Document response body (true). If you specify false, the references are returned as key value pairs in the references property. If unspecified, the default value is false. | Optional | 54.0 |
| showAbsoluteUrl | Boolean | For public channels only, specifies whether to return the absolute unauthenticatedUrl in the response body. If you don’t specify a value, the default is false. | Optional | 54.0 |

Response body for GET

[Managed Content Delivery Document](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_delivery_document.htm "Managed content in delivery scope.")

## Code Examples

```
/connect/cms/delivery/channels/channelId/contents/contentKeyOrId
```

```
/connect/sites/siteId/cms/delivery/contents/contentKeyOrId
```

## Related Topics

- Managed Content Delivery Document (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_delivery_document.htm)
