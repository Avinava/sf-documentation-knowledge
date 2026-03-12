---
title: "Managed Content Taxonomy Terms Input"
domain: chatterapi
topic: managed-content-taxonomy-terms-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.060Z
estimatedTokens: 215
keywords: [Managed, Content, Taxonomy, Terms, Input, Add, remove, term, associations]
---

# Managed Content Taxonomy Terms Input

> Add or remove taxonomy term associations from managed content.

# Managed Content Taxonomy Terms Input

Add or remove taxonomy term associations from managed content.

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

#### See Also

-   [CMS Content Taxonomy Terms](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_content_taxonomy_terms.htm "Get taxonomy terms that are associated with managed content. Add or remove taxonomy term associations from managed content.")

## Code Examples

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

- CMS Content Taxonomy Terms (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_content_taxonomy_terms.htm)
