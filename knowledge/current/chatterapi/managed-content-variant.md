---
title: "Managed Content Variant"
domain: chatterapi
topic: managed-content-variant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.631Z
estimatedTokens: 550
keywords: [Managed, Content, Variant]
---

# Managed Content Variant

> Managed content variant.

# Managed Content Variant

Managed content variant.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | API name of the managed content variant. | Small, 63.0 | 63.0 |
| contentBody | Map<String, Object> | Map of properties of the managed content with their values. | Big, 54.0 | 54.0 |
| contentFqn | String | Fully qualified name (FQN) of the managed content. | Small, 64.0 | 64.0 |
| contentKey | String | Globally unique identifier (GUID) for the managed content. | Small, 54.0 | 54.0 |
| contentSpace | Managed Content Space Summary | Content space of the managed content. | Small, 54.0 | 54.0 |
| contentType | Managed Content Type Summary | Type of managed content. | Small, 54.0 | 54.0 |
| createdBy | Managed Content User Summary | User who created the managed content variant. | Small, 54.0 | 54.0 |
| createdDate | String | Date when the managed content variant was created. | Small, 54.0 | 54.0 |
| externalId | String | External ID of the managed content. | Small, 58.0 | 58.0 |
| folder | Managed Content Folder Summary | Folder of the managed content. | Small, 54.0 | 54.0 |
| isPublished | Boolean | Specifies whether the managed content variant is published to a channel (true) or not (false). | Small, 54.0 | 54.0 |
| language | String | Language locale of the managed content. | Small, 54.0 | 54.0 |
| lastModifiedBy | Managed Content User Summary | User who last modified the managed content variant. | Small, 54.0 | 54.0 |
| lastModifiedDate | String | Date when the managed content variant was last modified. | Small, 54.0 | 54.0 |
| managedContentId | String | ID of the managed content. | Small, 54.0 | 54.0 |
| managedContent​VariantId | String | ID of the managed content variant. | Small, 54.0 | 54.0 |
| managedContent​VersionId | String | Managed content version ID. | Small, 54.0 | 54.0 |
| status | Managed Content Variant Status | Information about a managed content variant's status in the authoring space. | Small, 57.0 | 57.0 |
| title | String | Title of the managed content. | Small, 54.0 | 54.0 |
| urlName | String | URL name of the managed content. | Small, 54.0 | 54.0 |

## Related Topics

- Managed Content Space Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_space_summary.htm)
- Managed Content Type Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_type_summary.htm)
- Managed Content User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_user_summary.htm)
- Managed Content Folder Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_folder_summary.htm)
- Managed Content Variant Status (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_variant_status.htm)
