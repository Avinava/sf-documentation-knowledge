---
title: "CMS Delivery Contents"
domain: chatterapi
topic: cms-delivery-contents
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.830Z
estimatedTokens: 775
keywords: [CMS, Delivery, Contents, collection, published, channel, Experience, Cloud, site]
---

# CMS Delivery Contents

> Get a collection of published contents for a channel or Experience
      Cloud site.

# CMS Delivery Contents

Get a collection of published contents for a channel or Experience Cloud site.

Resource

```

```

```

```

Available version

55.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contentKeys | String[] | Comma-separated list of up to 50 content keys. Specify either managed content IDs or content keys. | Optional | 55.0 |
| contentTypeFQN | String | Fully qualified name of the managed content type. | Optional | 55.0 |
| expandReferences | Boolean | Specifies whether to include details of references (true) or summaries of references (false) in the response body. If unspecified, the default value is false. | Optional | 55.0 |
| includeContentBody | Boolean | Specifies whether to return the content body (true) or the content summary (false). If unspecified, the default value is false. | Optional | 55.0 |
| language | String | Language locale for the managed content, for example, en_US. If the requested translation isn’t available, the language defaults to the configured fallback language or the channel’s default language. If the content isn’t available in the fallback language and the channel’s default language, we return an error. | Optional | 55.0 |
| managedContentIds | String[] | Comma-separated list of up to 100 managed content IDs. Specify either managed content IDs or content keys. | Optional | 55.0 |
| page | Integer | Number of the page you want returned. Starts at 0. If you don’t specify a value or if you specify 0, the first page is returned. | Optional | 55.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 250. If unspecified, the default size is 25. If you specify true for expandReferences or includeContentBody, the maximum page size you can specify is 25. | Optional | 55.0 |
| publishEndDate | String | ISO 8601 formatted publish end date. | Optional | 55.0 |
| publishStartDate | String | ISO 8601 formatted publish start date. | Optional | 55.0 |
| referenceDepth | Integer | An integer 0–3 specifying the depth of references. If you specify 0, the references property of the Managed Content Delivery Document Collection response body is null. If unspecified, the default value is 0. | Optional | 55.0 |
| referencesAsList | Boolean | Specifies whether to return the references as a list in the referencesList property of the Managed Content Delivery Document Collection response body (true). If you specify false, the references are returned as key value pairs in the references property. If unspecified, the default value is false. | Optional | 55.0 |
| showAbsoluteUrl | Boolean | Specifies whether to show absolute URLs in the response body (true) or not (false). If you don’t specify a value, the default is false. | Optional | 58.0 |

Response body for GET

[Managed Content Delivery Document Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_delivery_document_collection.htm "Managed content delivery document collection.")

## Code Examples

```
/connect/cms/delivery/channels/channelId/contents
```

```
/connect/sites/siteId/cms/delivery/contents
```

## Related Topics

- Managed Content Delivery Document Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_delivery_document_collection.htm)
