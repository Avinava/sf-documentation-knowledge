---
title: "Content Taxonomy Term Input"
domain: chatterapi
topic: content-taxonomy-term-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.417Z
estimatedTokens: 257
keywords: [Content, Taxonomy, Term, Input]
---

# Content Taxonomy Term Input

> Create or update a term within a content taxonomy.

# Content Taxonomy Term Input

Create or update a term within a content taxonomy.

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

#### See Also

-   [Content Taxonomy, Term](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_taxonomy_term.htm "Get, update, or delete a term within a content taxonomy.")

-   [Content Taxonomy, Create a Term](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_taxonomy_terms_create_term.htm "Create a term within a content taxonomy.")

## Code Examples

```
{
"label" : "Fruit",
"description" : "The seed-bearing part of a flowering plant.",
"parentTermId" : ""
}
```

## Related Topics

- Content Taxonomy, Term (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_taxonomy_term.htm)
- Content Taxonomy, Create a Term (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_taxonomy_terms_create_term.htm)
