---
title: "External File Permission Information"
domain: chatterapi
topic: external-file-permission-information
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.574Z
estimatedTokens: 419
keywords: [External, File, Permission, permissions]
---

# External File Permission Information

> External file permissions information.

# External File Permission Information

External file permissions information.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| external​FilePermission​Types | Files Connect Permission Type[] | Available permission types for the parent folder of the external file, or null for non-external files or when includeExternalFilePermissionsInfo is false. | Small, 35.0 | 35.0 |
| external​FilePermissions​Failure | Boolean | true if the retrieval of external file information failed or if includeExternalFilePermissionsInfo is false; false otherwise. | Small, 35.0 | 35.0 |
| external​FilePermissions​InfoFailureReason | String | Explanation of the failure if a failure occurred and includeExternalFilePermissionsInfo is true; null otherwise. | Small, 35.0 | 35.0 |
| external​FileSharing​Status | String | Sharing status for the external file. Values are:DomainSharing—File is shared with the domain.PrivateSharing—File is private or shared only with individuals.PublicSharing—File is publicly shared.Value is null for non-external files or when includeExternalFilePermissionsInfo is false. | Small, 35.0 | 35.0 |
| repositoryPublic​Groups | Repository Group Summary[] | Available public groups in the external repository or null for non-external files or when includeExternalFilePermissionsInfo is false. | Small, 35.0 | 35.0 |

#### See Also

-   [File Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file.htm "Description of a file.")

-   [Repository File Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_repository_file_summary.htm "Description of a repository file.")

## Related Topics

- Files Connect Permission Type (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_hub_permission_type.htm)
- Repository Group Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_repository_group_summary.htm)
- File Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file.htm)
- Repository File Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_repository_file_summary.htm)
