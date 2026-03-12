---
title: "Content Taxonomy, Create a Term"
domain: chatterapi
topic: content-taxonomy-create-a-term
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.782Z
estimatedTokens: 225
keywords: [Content, Taxonomy, Term]
---

# Content Taxonomy, Create a Term

> Create a term within a content taxonomy.

# Content Taxonomy, Create a Term

Create a term within a content taxonomy.

Resource

```

```

Available version

63.0

HTTP methods

POST

Request body for POST

Root XML tag

<term>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the term. | Required when creating a termOptional when updating a term | 63.0 |
| label | String | Label of the term. | Required when creating a termOptional when updating a term | 63.0 |
| parentTermId | String | ID of the parent term. If unspecified when creating a term, creates a root term. If unspecified when updating a term, no changes are made. | Optional | 63.0 |

Response body for POST

[Content Taxonomy Term](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_taxonomy_term.htm "Content taxonomy term.")

## Code Examples

```
/connect/content-taxonomy/taxonomyId/terms
```

```
{
"label" : "Fruit",
"description" : "The seed-bearing part of a flowering plant.",
"parentTermId" : ""
}
```

## Related Topics

- Content Taxonomy Term (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_taxonomy_term.htm)
