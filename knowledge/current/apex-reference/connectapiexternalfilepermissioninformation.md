---
title: "ConnectApi.ExternalFilePermissionInformation"
domain: apex-reference
topic: connectapiexternalfilepermissioninformation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.747Z
keywords: [ConnectApi.ExternalFilePermissionInformation, See]
---

# ConnectApi.ExternalFilePermissionInformation

# ConnectApi.ExternalFilePermissionInformation

External file permission information.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| external​FilePermission​Types | List<ConnectApi.​ContentHub​PermissionType> | Available permission types for the parent folder of the external file, or null for non-external files or when includeExternalFilePermissionsInfo is false. | 39.0 |
| external​FilePermissions​Failure | Boolean | true if the retrieval of external file information failed or if includeExternalFilePermissionsInfo is false; false otherwise. | 39.0 |
| external​FilePermissions​InfoFailureReason | String | Explanation of the failure if a failure occurred and includeExternalFilePermissionsInfo is true; null otherwise. | 39.0 |
| external​FileSharing​Status | ConnectApi.​ContentHub​ExternalItem​SharingType | Sharing status for the external file. Values are:DomainSharing—File is shared with the domain.PrivateSharing—File is private or shared only with individuals.PublicSharing—File is publicly shared.Value is null for non-external files or when includeExternalFilePermissionsInfo is false. | 39.0 |
| repository​PublicGroups | List<ConnectApi.​RepositoryGroupSummary> | Available public groups in the external repository or null for non-external files or when includeExternalFilePermissionsInfo is false. | 39.0 |

#### See Also

-   [ConnectApi.AbstractRepositoryFile](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_repository_file.htm "A repository file.")