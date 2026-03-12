---
title: "Object Metadata"
domain: chatterapi
topic: object-metadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.036Z
estimatedTokens: 291
keywords: [Metadata, Search]
---

# Object Metadata

> Search metadata related to the object.

# Object Metadata

Search metadata related to the object.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| dataCategories | Map<String, Data Category Metadata> | Metadata on each data category for the object. | Small, 63.0 | 63.0 |
| fields | Map<String, Field Metadata> | Metadata on each field of the object. | Small, 63.0 | 63.0 |
| label | String | Name of the object. | Small, 63.0 | 63.0 |
| labelPlural | String | Plural name of the object. | Small, 63.0 | 63.0 |
| objectApiName | String | API name of the object. | Small, 63.0 | 63.0 |
| themeInfo | Theme Info | Theme of the object. | Small, 63.0 | 63.0 |

#### See Also

-   [Search Result Groups](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_result.htm "Results of searching objects using keywords.")

-   [Scoped Search Results](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_scoped_search_result.htm "Keyword search results for an object.")

-   [Search Answer](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_answe.htm "Results of searching objects using a natural language query.")

## Related Topics

- Data Category Metadata (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_data_category_metadat.htm)
- Field
                  Metadata (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_field_metadat.htm)
- Theme Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_theme_inf.htm)
- Search Result Groups (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_result.htm)
- Scoped Search Results (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_scoped_search_result.htm)
- Search Answer (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_answe.htm)
