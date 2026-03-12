---
title: "Content Taxonomy, Term"
domain: chatterapi
topic: content-taxonomy-term
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.777Z
estimatedTokens: 471
keywords: [Content, Taxonomy, Term]
---

# Content Taxonomy, Term

> Get, update, or delete a term within a content taxonomy.

# Content Taxonomy, Term

Get, update, or delete a term within a content taxonomy.

Resource

```

```

Available version

63.0

HTTP methods

GET, PATCH, DELETE

Response body for GET

[Content Taxonomy Term](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_taxonomy_term.htm "Content taxonomy term.")

Request body for PATCH

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

Response body for PATCH

[Content Taxonomy Term](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_taxonomy_term.htm "Content taxonomy term.")

Request parameters for DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| deleteChildren | Boolean | Specifies whether to delete the child terms of the term (true) or not (false). | Required | 63.0 |
| newParentTerm | String | ID of the term that becomes the parent term if deleteChildren is false. If unspecified and deleteChildren is false, the child terms become root terms. | Optional | 63.0 |

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/content-taxonomy/taxonomyId/terms/termId
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
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Content
                  Taxonomy User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_taxonomy_user_summar.htm)
- Content Taxonomy
                  Path (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_taxonomy_path.htm)
- Content Taxonomy, Term (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_taxonomy_term.htm)
- Content Taxonomy, Create a Term (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_taxonomy_terms_create_term.htm)
- Content Taxonomy Term Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_taxonomy_term_collection.htm)
