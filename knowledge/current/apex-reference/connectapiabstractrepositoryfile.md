---
title: "ConnectApi.AbstractRepositoryFile"
domain: apex-reference
topic: connectapiabstractrepositoryfile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.093Z
estimatedTokens: 528
keywords: [ConnectApi.AbstractRepositoryFile, repository, file]
---

# ConnectApi.AbstractRepositoryFile

> A repository file.

# ConnectApi.AbstractRepositoryFile

A repository file.

This class is abstract.

Subclass of [ConnectApi.AbstractRepositoryItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_repository_item.htm "A repository item.").

Superclass of:

-   [ConnectApi.RepositoryFileDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm "A detailed description of a repository file.")
-   [ConnectApi.RepositoryFileSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_summary.htm "A summary of a repository file.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| checkinComment | String | Checkin comment of the file. | 39.0 |
| contentBody | String | Text of the file’s content if available, otherwise null. | 43.0 |
| contentItem​Size | Long Class | Length in bytes of the content of the file, including files that are larger than 2 GB. | 65.0 |
| contentSize | Integer | Length in bytes of the content of the file, for files that are smaller than 2 GB. | 39.0 |
| downloadUrl | String | URL to the repository file content. | 39.0 |
| external​ContentUrl | String | URL of this file’s content in the external system. | 39.0 |
| external​DocumentUrl | String | URL of this file in the external system. | 39.0 |
| external​FilePermission​Information | ConnectApi.​ExternalFile​PermissionInformation | External file permission information, such as available groups, available permission types, and current sharing status, or null if includeExternalFilePermissionsInfo is false. | 39.0 |
| mimeType | String | Mime type of the file. | 39.0 |
| previewUrl​Thumbnail | String | URL to the thumbnail preview (240 x 180 PNG). | 39.0 |
| previewUrl​ThumbnailBig | String | URL to the big thumbnail preview (720 x 480 PNG). | 39.0 |
| previewUrl​ThumbnailTiny | String | URL to the tiny thumbnail preview (120 x 90 PNG). | 39.0 |
| previewsUrl | String | URL to the previews. | 39.0 |
| title | String | Title of the file. | 39.0 |
| versionId | String | ID of the file version in the external system. | 39.0 |

## Related Topics

- ConnectApi.AbstractRepositoryItem (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_repository_item.htm)
- ConnectApi.RepositoryFileDetail (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm)
- ConnectApi.RepositoryFileSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_summary.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Long Class (atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.​ExternalFile​PermissionInformation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_file_permission_information.htm)
