---
title: "Managed Content Document Clone"
domain: chatterapi
topic: managed-content-document-clone
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.487Z
estimatedTokens: 369
keywords: [Managed, Content, Document, Clone]
---

# Managed Content Document Clone

> Managed content document clone.

# Managed Content Document Clone

Managed content document clone.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | API name of the cloned content. | Small, 61.0 | 61.0 |
| cloneStatus | Managed Content Clone Status | Status of the cloned content. | Small, 61.0 | 61.0 |
| contentKey | String | Globally unique identifier (GUID) for the cloned content. | Small, 61.0 | 61.0 |
| errorMessage | String | Error message if the primary variant failed to clone. | Small, 61.0 | 61.0 |
| failedVariants | Managed Content Failed Variants[] | Information about failed cloned variants if cloning was partially successful. | Small, 61.0 | 61.0 |
| folder | Managed Content Folder Summary | Folder of the cloned content. | Small, 61.0 | 61.0 |
| managedContentId | String | ID of the cloned content in the authoring workspace. | Small, 61.0 | 61.0 |
| resourceURL | String | Resource URL of the cloned content. | Small, 61.0 | 61.0 |
| sourceContentKey​OrId | String | ID or content key of the source managed content in the authoring workspace. | Small, 61.0 | 61.0 |
| title | String | Title of cloned content. | Small, 61.0 | 61.0 |
| variants | Managed Content Cloned Variant[] | List of cloned variants. | Medium, 61.0 | 61.0 |

#### See Also

-   [CMS Content Clone](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_contents_content_clone.htm "Clone a piece of managed content.")

## Related Topics

- Managed Content Clone Status (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_clone_status.htm)
- Managed Content Failed Variants (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_failed_variants.htm)
- Managed Content Folder Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_folder_summary.htm)
- Managed Content Cloned Variant (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_cloned_variant.htm)
- CMS Content Clone (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_contents_content_clone.htm)
