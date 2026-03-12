---
title: "Managed Content Document"
domain: chatterapi
topic: managed-content-document
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.482Z
estimatedTokens: 621
keywords: [Managed, Content, Document]
---

# Managed Content Document

> Managed content document.

# Managed Content Document

Managed content document.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | API name of the managed content. | Small, 61.0 | 61.0 |
| contentBody | Map<String, Object> | Map of properties of the managed content with their values. | Big, 54.0 | 54.0 |
| contentFqn | String | Fully qualified name (FQN) of the managed content. | Small, 64.0 | 64.0 |
| contentKey | String | Globally unique identifier (GUID) for the managed content. | Small, 54.0 | 54.0 |
| contentSpace | Managed Content Space Summary | Content space of the managed content. | Small, 54.0 | 54.0 |
| contentType | Managed Content Type Summary | Type of managed content. | Small, 54.0 | 54.0 |
| contentVersion | Integer | Content version of the managed content. | Small, 66.0 | 66.0 |
| createdBy | Managed Content User Summary | User who created the managed content. | Small, 54.0 | 54.0 |
| createdDate | String | Date when the managed content was created. | Small, 54.0 | 54.0 |
| externalId | String | External ID of the managed content. | Small, 58.0 | 58.0 |
| folder | Managed Content Folder Summary | Folder of the managed content. | Small, 54.0 | 54.0 |
| isPublished | Boolean | Specifies whether the managed content variant is published to a channel (true) or not (false). | Small, 54.0 | 54.0 |
| language | String | Language locale of the managed content. | Small, 54.0 | 54.0 |
| lastModifiedBy | Managed Content User Summary | User who last modified the managed content. | Small, 54.0 | 54.0 |
| lastModifiedDate | String | Date when the managed content was last modified. | Small, 54.0 | 54.0 |
| managedContentId | String | ID of the managed content. | Small, 54.0 | 54.0 |
| managedContent​VariantId | String | Managed content variant ID. | Small, 54.0 | 54.0 |
| managedContent​VersionId | String | Managed content version ID. | Small, 54.0 | 54.0 |
| status | Managed Content Variant Status | Status of the managed content variant. | Small, 58.0 | 58.0 |
| title | String | Title of the managed content. | Small, 54.0 | 54.0 |
| urlName | String | URL name of the managed content. | Small, 54.0 | 54.0 |
| variantVersion | Integer | Variant version of the managed content. | Small, 66.0 | 66.0 |
| versionNumber | String | Version number of the managed content. In version 66.0 and later, use contentVersion and variantVersion for version information. | Small, 57.0 | 57.0–65.0 |

## Related Topics

- Managed Content Space Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_space_summary.htm)
- Managed Content Type Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_type_summary.htm)
- Managed Content User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_user_summary.htm)
- Managed Content Folder Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_folder_summary.htm)
- Managed Content Variant Status (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_variant_status.htm)
