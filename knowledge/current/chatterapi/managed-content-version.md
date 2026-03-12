---
title: "Managed Content Version"
domain: chatterapi
topic: managed-content-version
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.649Z
estimatedTokens: 415
keywords: [Managed, Content, Version]
---

# Managed Content Version

> Managed content version.

# Managed Content Version

Managed content version.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| associations | Managed Content Associations | Content topics associated with the managed content. | Small, 47.0 | 47.0 |
| contentKey | String | Content key of the managed content. | Small, 51.0 | 51.0 |
| contentNodes | Map<String, Managed Content Media Node Value>ORMap<String, Managed Content Text Node Value>ORMap<String, Managed Content Date and Time Node Value> (version 48.0 and later)ORMap<String, Managed Content Date Node Value> (version 48.0 and later)ORMap<String, Managed Content Media Source Node Value> (version 49.0 and later) | Map of content nodes. | Medium, 47.0 | 47.0 |
| contentUrlName | String | Content URL name of the managed content version. | Small, 48.0 | 48.0 |
| language | String | Language of the managed content version. | Small, 48.0 | 48.0 |
| managedContentId | String | ID of the managed content. | Small, 47.0 | 47.0 |
| publishedDate | String | Date when the managed content version was last published. | Small, 47.0 | 47.0 |
| title | String | Title of the managed content version. | Small, 47.0 | 47.0 |
| type | String | Type of managed content version. | Small, 47.0 | 47.0 |
| typeLabel | String | Type label of the managed content type. | Small, 47.0 | 47.0 |
| unauthenticatedUrl | String | Unauthenticated delivery URL. | Small, 50.0 | 50.0 |

#### See Also

-   [Managed Content Version Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_version_collection.htm "Collection of managed content versions.")

## Related Topics

- Managed Content Associations (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_associations.htm)
- Managed Content Media Node Value (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_media_node_value.htm)
- Managed Content Text Node Value (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_text_node_value.htm)
- Managed Content Date and Time Node Value (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_date_and_time_node_value.htm)
- Managed Content Date Node Value (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_date_node_value.htm)
- Managed Content Media Source Node Value (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_media_source_node_value.htm)
- Managed Content Version Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_version_collection.htm)
