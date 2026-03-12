---
title: "ConnectApi.ManagedContentDocument"
domain: apex-reference
topic: connectapimanagedcontentdocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:27.795Z
estimatedTokens: 564
keywords: [ConnectApi.ManagedContentDocument, Information, piece, managed, content, authoring, space.]
---

# ConnectApi.ManagedContentDocument

> Information about a piece of managed content in an authoring space.

# ConnectApi.ManagedContentDocument

Information about a piece of managed content in an authoring space.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| apiName | String | API name of the managed content. | 61.0 |
| contentBody | Map<String, Object> | Map of properties of the managed content with their values. | 60.0 |
| contentFqn | String | Fully qualified name (FQN) of the managed content. | 64.0 |
| contentKey | String | Globally unique identifier (GUID) for the managed content. | 60.0 |
| contentSpace | ConnectApi.​ManagedContent​SpaceSummary | Content space of the managed content. | 60.0 |
| contentType | ConnectApi.​ManagedContent​TypeSummary | Type of managed content. | 60.0 |
| contentVersion | Integer | Content version of the managed content. | 66.0 |
| createdBy | ConnectApi.​ManagedContent​UserSummary | User who created the managed content. | 60.0 |
| createdDate | Datetime | Date when the managed content was created. | 60.0 |
| externalId | String | External ID of the managed content. | 60.0 |
| folder | ConnectApi.​ManagedContent​FolderSummary | Folder of the managed content. | 60.0 |
| isPublished | Boolean | Specifies whether the managed content variant is published to a channel (true) or not (false). | 60.0 |
| language | String | Language locale of the managed content. | 60.0 |
| lastModifiedBy | ConnectApi.​ManagedContent​UserSummary | User who last modified the managed content. | 60.0 |
| lastModifiedDate | Datetime | Date when the managed content was last modified. | 60.0 |
| managedContentId | String | ID of the managed content. | 60.0 |
| managedContent​VariantId | String | Managed content variant ID. | 60.0 |
| managedContent​VersionId | String | Managed content version ID. | 60.0 |
| status | ConnectApi.​ManagedContent​VariantStatus​Output | Status of the managed content variant. | 60.0 |
| title | String | Title of the managed content. | 60.0 |
| urlName | String | URL name of the managed content. | 60.0 |
| variantVersion | Integer | Variant version of the managed content. | 66.0 |
| versionNumber | String | Version number of the managed content. In version 66.0 and later, use contentVersion and variantVersion for version information. | 60.0–65.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- ConnectApi.​ManagedContent​SpaceSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_space_summary.htm)
- ConnectApi.​ManagedContent​TypeSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_type_summary.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.​ManagedContent​UserSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_user_summary.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​ManagedContent​FolderSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_folder_summary.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.​ManagedContent​VariantStatus​Output (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_variant_status.htm)
