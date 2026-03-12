---
title: "Content Taxonomy, Search Terms"
domain: chatterapi
topic: content-taxonomy-search-terms
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.789Z
estimatedTokens: 329
keywords: [Content, Taxonomy, Search, Terms, query, text]
---

# Content Taxonomy, Search Terms

> Search content taxonomy terms for specified query text.

# Content Taxonomy, Search Terms

Search content taxonomy terms for specified query text.

Resource

```

```

Available version

63.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| includeMetadata | Boolean | Specifies whether to include metadata, such as created date, last modified date, and description, in the results (true) or not (false). If unspecified, defaults to (false). | Optional | 63.0 |
| page | Integer | Number of the page you want returned. Starts at 0. If you don’t specify a value or if you specify 0, the first page is returned. | Optional | 63.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 250. If you don’t specify a value, the default size is 25. | Optional | 63.0 |
| queryText | String | Word or phrase to find in the content taxonomy term labels. Only “starts with” search is supported. | Required | 63.0 |
| taxonomyIds | String[] | List of IDs of the content taxonomies to search for the query text. | Required | 63.0 |

Response body for GET

[Content Taxonomy Term Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_taxonomy_term_collection.htm "Collection of content taxonomy terms.")

## Code Examples

```
/connect/content-taxonomy/terms/search
```

## Related Topics

- Content Taxonomy Term Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_taxonomy_term_collection.htm)
