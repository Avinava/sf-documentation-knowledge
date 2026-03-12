---
title: "Content Taxonomy, Get Terms"
domain: chatterapi
topic: content-taxonomy-get-terms
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.786Z
estimatedTokens: 318
keywords: [Content, Taxonomy, Terms, child]
---

# Content Taxonomy, Get Terms

> Get terms and child terms for a content taxonomy.

# Content Taxonomy, Get Terms

Get terms and child terms for a content taxonomy.

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
| depth | Integer | Number of levels of the tree to retrieve. If you specify 0, you get the details for the specified initial terms or the root terms only. | Required | 63.0 |
| includeMetadata | Boolean | Specifies whether to include metadata, such as created date, last modified date, and description, in the results (true) or not (false). If unspecified, defaults to (false). | Optional | 63.0 |
| includePaths | Boolean | Specifies whether to include paths in the results (true) or not (false). If unspecified, defaults to false. | Optional | 63.0 |
| initialTerms | String[] | List of IDs of terms to get, with child terms to the specified depth. If unspecified, defaults to the root terms. | Optional | 63.0 |
| taxonomyId | String | ID of the content taxonomy. | Required | 63.0 |

Response body for GET

[Content Taxonomy Term Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_taxonomy_term_collection.htm "Collection of content taxonomy terms.")

## Code Examples

```
/connect/content-taxonomy/terms
```

## Related Topics

- Content Taxonomy Term Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_taxonomy_term_collection.htm)
