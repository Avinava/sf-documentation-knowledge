---
title: "Experience Cloud CMS Content Search Resource"
domain: chatterapi
topic: experience-cloud-cms-content-search-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.646Z
estimatedTokens: 392
keywords: [Experience, Cloud, CMS, Content, Search, Resource, site]
---

# Experience Cloud CMS Content Search Resource

> Search an Experience Cloud site.

# Experience Cloud CMS Content Search Resource

Search an Experience Cloud site.

This resource is available only for sites with Enhanced CMS Workspaces. Make sure your content is indexed with the [CMS Channel Search Indexes](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_channel_search_indexes.htm "Get the latest live and non-live search indexes or trigger incremental or full search indexing for a channel.") resource before searching your site.

Resource

```

```

Available version

54.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| language | String | Language locale for the context user. If unspecified or if the specified language locale isn’t available, the default value is en_US. | Optional | 54.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 240. If unspecified, defaults to 25. | Optional | 54.0 |
| pageToken | String | Specifies the base64 encoded page token. Page tokens are returned as part of the response. If unspecified, the first page is returned. | Optional | 54.0 |
| queryTerm | String | White-space separated words used to search for relevant content. Provide a maximum of 1024 characters, composed of up to 32 words and white spaces. Logical operators aren’t supported. | Required | 54.0 |

Response body for GET

[CMS Content Search Result](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_site_search_result.htm "CMS Content Search result.")

## Code Examples

```
/connect/sites/siteId/search
```

## Related Topics

- CMS Channel Search Indexes (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_channel_search_indexes.htm)
- CMS Content Search Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_site_search_result.htm)
