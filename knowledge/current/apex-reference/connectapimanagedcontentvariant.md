---
title: "ConnectApi.ManagedContentVariant"
domain: apex-reference
topic: connectapimanagedcontentvariant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.930Z
estimatedTokens: 492
keywords: [ConnectApi.ManagedContentVariant, Managed, content, variant]
---

# ConnectApi.ManagedContentVariant

> Managed content variant.

# ConnectApi.ManagedContentVariant

Managed content variant.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| apiName | String | API name of the managed content variant. | 63.0 |
| contentBody | Map<String, Object> | Map of properties of the managed content with their values. | 60.0 |
| contentFqn | String | Fully qualified name (FQN) of the managed content. | 64.0 |
| contentKey | String | Globally unique identifier (GUID) for the managed content. | 60.0 |
| contentSpace | ConnectApi.​ManagedContent​SpaceSummary | Content space of the managed content. | 60.0 |
| contentType | ConnectApi.​ManagedContent​TypeSummary | Type of managed content. | 60.0 |
| createdBy | ConnectApi.​ManagedContent​UserSummary | User who created the managed content variant. | 60.0 |
| createdDate | Datetime | Date when the managed content variant was created. | 60.0 |
| externalId | String | External ID of the managed content. | 60.0 |
| folder | ConnectApi.​ManagedContent​FolderSummary | Folder of the managed content. | 60.0 |
| isPublished | Boolean | Specifies whether the managed content variant is published to a channel (true) or not (false). | 60.0 |
| language | String | Language locale of the managed content. | 60.0 |
| lastModifiedBy | ConnectApi.​ManagedContent​UserSummary | User who last modified the managed content variant. | 60.0 |
| lastModifiedDate | Datetime | Date when the managed content variant was last modified. | 60.0 |
| managedContentId | String | ID of the managed content. | 60.0 |
| managedContent​VariantId | String | ID of the managed content variant. | 60.0 |
| managedContent​VersionId | String | Managed content version ID. | 60.0 |
| status | ConnectApi.​ManagedContent​VariantStatus​Output | Information about a managed content variant's status in the authoring space. | 60.0 |
| title | String | Title of the managed content. | 60.0 |
| urlName | String | URL name of the managed content. | 60.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- ConnectApi.​ManagedContent​SpaceSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_space_summary.htm)
- ConnectApi.​ManagedContent​TypeSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_type_summary.htm)
- ConnectApi.​ManagedContent​UserSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_user_summary.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​ManagedContent​FolderSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_folder_summary.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.​ManagedContent​VariantStatus​Output (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_variant_status.htm)
