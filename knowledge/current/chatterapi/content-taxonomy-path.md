---
title: "Content Taxonomy Path"
domain: chatterapi
topic: content-taxonomy-path
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.015Z
estimatedTokens: 187
keywords: [Content, Taxonomy, Path, term]
---

# Content Taxonomy Path

> Path to a term in a content taxonomy.

# Content Taxonomy Path

Path to a term in a content taxonomy.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| label | String | Text representation of the path from the root, joined with a delimiter, such as Fruit>Citrus>Orange. | Small, 63.0 | 63.0 |
| taxonomyFragment | Content Taxonomy Path Fragment | Path fragment representing the taxonomy. | Small, 63.0 | 63.0 |
| termFragments | Content Taxonomy Path Fragment[] | Path fragments representing the terms from root term to the term, inclusive. | Small, 63.0 | 63.0 |

#### See Also

-   [Content Taxonomy Term](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_taxonomy_term.htm "Content taxonomy term.")

## Related Topics

- Content
                  Taxonomy Path Fragment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_taxonomy_path_fragment.htm)
- Content Taxonomy Term (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_taxonomy_term.htm)
