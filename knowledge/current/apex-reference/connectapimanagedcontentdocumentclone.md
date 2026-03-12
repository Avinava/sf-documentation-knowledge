---
title: "ConnectApi.ManagedContentDocumentClone"
domain: apex-reference
topic: connectapimanagedcontentdocumentclone
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:27.799Z
estimatedTokens: 364
keywords: [ConnectApi.ManagedContentDocumentClone, Managed, content, document, clone.]
---

# ConnectApi.ManagedContentDocumentClone

> Managed content document clone.

# ConnectApi.ManagedContentDocumentClone

Managed content document clone.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| apiName | String | API name of the cloned content. | 61.0 |
| cloneStatus | ConnectApi.​ManagedContent​CloneStatus | Status of the cloned content. | 61.0 |
| contentKey | String | Globally unique identifier (GUID) for the cloned content. | 61.0 |
| errorMessage | String | Error message if the primary variant failed to clone. | 61.0 |
| failedVariants | List<ConnectApi.​ManagedContent​FailedVariants> | Information about failed cloned variants if cloning was partially successful. | 61.0 |
| folder | ConnectApi.​ManagedContent​FolderSummary | Folder of the cloned content. | 61.0 |
| managedContentId | String | ID of the cloned content in the authoring workspace. | 61.0 |
| resourceURL | String | Resource URL of the cloned content. | 61.0 |
| sourceContentKey​OrId | String | ID or content key of the source managed content in the authoring workspace. | 61.0 |
| title | String | Title of cloned content. | 61.0 |
| variants | List<ConnectApi.​ManagedContent​ClonedVariants> | List of cloned variants. | 61.0 |

#### See Also

-   [cloneManagedContentDocument(contentKeyOrId, ManagedContentCloneInputParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_cloneManagedContentDocument_1 "Clone a piece of managed content.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ManagedContent​CloneStatus (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_clone_status.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​ManagedContent​FailedVariants (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_failed_variants.htm)
- ConnectApi.​ManagedContent​FolderSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_folder_summary.htm)
- ConnectApi.​ManagedContent​ClonedVariants (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_cloned_variant.htm)
- cloneManagedContentDocument(contentKeyOrId, ManagedContentCloneInputParam) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm)
