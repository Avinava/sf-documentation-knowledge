---
title: "ConnectApi.AbstractRepositoryItem"
domain: apex-reference
topic: connectapiabstractrepositoryitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.923Z
estimatedTokens: 303
keywords: [ConnectApi.AbstractRepositoryItem, repository, item.]
---

# ConnectApi.AbstractRepositoryItem

> A repository item.

# ConnectApi.AbstractRepositoryItem

A repository item.

This class is abstract.

Superclass of:

-   [ConnectApi.AbstractRepositoryFile](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_repository_file.htm "A repository file.")
-   [ConnectApi.AbstractRepositoryFolder](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_repository_folder.htm "A repository folder.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| createdBy | String | Name of the user who created the item. | 39.0 |
| createdDate | Datetime | Date the item was created. | 39.0 |
| description | String | Description of the Item. | 39.0 |
| id | String | ID of the item. | 39.0 |
| itemTypeUrl | String | URL to the item type information. | 39.0 |
| modifiedBy | String | Name of the user who last modified the item. | 39.0 |
| modifiedDate | Datetime | Date the item was last modified. | 39.0 |
| motif | ConnectApi.​Motif | Motif of the item. | 39.0 |
| name | String | Name of the item. | 39.0 |
| repository | ConnectApi.​Reference | Item external repository. | 39.0 |
| type | String | Item type, file or folder. | 39.0 |
| url | String | The URL to the item. | 39.0 |

## Related Topics

- ConnectApi.AbstractRepositoryFile (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_repository_file.htm)
- ConnectApi.AbstractRepositoryFolder (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_repository_folder.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​Motif (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_motif.htm)
- ConnectApi.​Reference (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_reference.htm)
