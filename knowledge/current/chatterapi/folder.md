---
title: "Folder"
domain: chatterapi
topic: folder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.965Z
estimatedTokens: 436
keywords: [Folder]
---

# Folder

> Description of a folder.

# Folder

Description of a folder.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| createdDate | String | ISO 8601 date string specifying the creation date of the folder. | Small, 30.0 | 30.0 |
| folderPaths | Folder Path[] | Collection of folder paths. | Medium, 40.0 | 40.0 |
| id | String | 18-character ID of the folder. | Small, 30.0 | 30.0 |
| isInMyFileSync | Boolean | true if the folder and all folders in this folder are synced with Salesforce Files Sync; false otherwise.NoteSalesforce Files Sync was retired on May 25, 2018. | Small, 33.0 | 33.0 |
| modifiedDate | String | ISO 8601 date string specifying the last modified date of the folder. | Small, 30.0 | 30.0 |
| motif | Motif | Small, medium, and large icon indicating the record’s type. The motif can also contain the record type’s base color. | Small, 30.0 | 30.0 |
| mySubscription | Reference | If the context user is following this record, this property contains information about the subscription; otherwise this property is null. | Medium, 30.0 | 30.0 |
| name | String | Folder name. | Small, 30.0 | 30.0 |
| parentFolder | Reference | Reference to the parent folder. | Small, 30.0 | 30.0 |
| path | String | Path to the folder. | Small, 30.0 | 30.0 |
| systemModstamp | String | ISO 8601 date string when a user or any automated system process, such as a trigger, updates the folder. | Small, 41.0 | 41.0 |
| type | String | Folder | Small, 30.0 | 30.0 |
| url | String | Connect REST API URL to this resource. | Small, 30.0 | 30.0 |

#### See Also

-   [Folder Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_folder_item.htm "Description of an item (file or folder) in a folder.")

## Related Topics

- Folder Path (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_folder_path.htm)
- Motif (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_motif.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- Folder Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_folder_item.htm)
