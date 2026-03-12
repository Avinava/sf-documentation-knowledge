---
title: "CMS Content Taxonomy Terms"
domain: chatterapi
topic: cms-content-taxonomy-terms
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.763Z
estimatedTokens: 475
keywords: [CMS, Content, Taxonomy, Terms, associated, managed, Add, remove, term, associations]
---

# CMS Content Taxonomy Terms

> Get taxonomy terms that are associated with managed content. Add or remove taxonomy
    term associations from managed content.

# CMS Content Taxonomy Terms

Get taxonomy terms that are associated with managed content. Add or remove taxonomy term associations from managed content.

Content admins use this resource to work with taxonomy term associations with CMS managed content. Content taxonomists use [Content Taxonomy Term Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_taxonomy_resources.htm "Create, get, update, delete, and search content taxonomy terms.") to create, get, update, delete, and search content taxonomy terms.

Resource

```

```

Available version

63.0

HTTP methods

GET, PATCH

Request body for PATCH

Root XML tag

<taxonomyTermsUpdates>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| termsToAdd | String[] | List of IDs of the taxonomy terms to associate with managed content. | Required if termsToRemove isn't specified | 63.0 |
| termsToRemove | String[] | List of IDs of the taxonomy terms to remove their association with managed content. | Required if termsToAdd isn't specified | 63.0 |

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| publish | Boolean | Specifies whether to publish the taxonomy term associations (true) or not (false). If unspecified, defaults to false.If content is published and has no outstanding changes, setting true publishes the taxonomy term association changes. Setting false saves the taxonomy term association changes and those changes are published along with the next content publish. | Optional | 63.0 |

Response body for GET and PATCH

[Managed Content Taxonomy Term Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_taxonomy_term_collection.htm "Collection of managed content taxonomy terms.")

## Code Examples

```
/connect/cms/contents/contentKeyOrId/taxonomy-terms
```

```
{
"termsToAdd" : [
   "15dxx000001X8UzBBJ",
   "15dxx000001X8UzBBJ",
   "15dxx000001X8UzDBK"
   ],
"termsToRemove" : [
   "15dxx000001X8UzBCI"
   ]
}
```

## Related Topics

- Content Taxonomy Term Resources (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_taxonomy_resources.htm)
- Managed Content Taxonomy Term Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_taxonomy_term_collection.htm)
