---
title: "Managed Content Variant Search Result"
domain: chatterapi
topic: managed-content-variant-search-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.640Z
estimatedTokens: 674
keywords: [Managed, Content, Variant, Search, Result, Keyword-based]
---

# Managed Content Variant Search Result

> Keyword-based search result for a managed content
    variant.

# Managed Content Variant Search Result

Keyword-based search result for a managed content variant.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contentKey | String | Content key of the managed content variant. | Small, 57.0 | 57.0 |
| contentType | Managed Content Search Result Content Type | Content type of the managed content variant. | Small, 57.0 | 57.0 |
| createdBy | Managed Content User Summary | User who created the managed content variant. | Small, 57.0 | 57.0 |
| createdDate | String | Date and time when the managed content variant was created. | Small, 57.0 | 57.0 |
| folder | Managed Content Folder Summary | Folder that the managed content variant resides in. | Small, 57.0 | 57.0 |
| id | String | ID of the managed content variant. | Small, 57.0 | 57.0 |
| language | Managed Content Language Summary | Language summary of the managed content variant. | Small, 57.0 | 57.0 |
| lastModifiedBy | Managed Content User Summary | User who last modified the managed content variant. | Small, 57.0 | 57.0 |
| lastModifiedDate | String | Last date and time when the managed content variant was modified. | Small, 57.0 | 57.0 |
| lastPublishedDate | String | Most recent publish date of the managed content variant. | Small, 57.0 | 57.0 |
| managedContentId | String | ID of the managed content parent of the managed content variant. | Small, 58.0 | 58.0 |
| managedContent​SpaceId | String | ID of the content space of the managed content variant. | Small, 57.0 | 57.0 |
| mimeType | String | MIME type of the managed content variant. | Small, 57.0 | 57.0 |
| status | String | Status of the managed content variant. Values are:Draft—Content isn’t published.Published—Content is published and available for use in your live sites.Revised—Content that’s published and edited. Publish this content to make the changes available for use in your live sites. | Small, 57.0 | 57.0 |
| title | String | Title of the managed content variant. | Small, 57.0 | 57.0 |
| type | String | Type of search result: ManagedContentVariant​SearchResultRepresentation. | Small, 57.0 | 57.0 |
| urlName | String | URL of the managed content variant. | Small, 57.0 | 57.0 |
| urlValue | String | URL value for the managed content variant. | Small, 57.0 | 57.0 |
| variantType | String | Type of the managed content variant. Values are:ContentTranslationVariation | Small, 57.0 | 57.0 |

#### See Also

-   [Managed Content Search Result Items Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_search_result_items_collection.htm "Paginated collection of CMS keyword-based search result items.")

## Related Topics

- Managed Content Search Result Content Type (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_search_result_content_type.htm)
- Managed Content User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_user_summary.htm)
- Managed Content Folder Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_folder_summary.htm)
- Managed Content Language Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_language_summary.htm)
- Managed Content Search Result Items Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_search_result_items_collection.htm)
