---
title: "ConnectApi.AbstractDirectoryEntrySummary"
domain: apex-reference
topic: connectapiabstractdirectoryentrysummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.032Z
estimatedTokens: 198
keywords: [directory, entry, summary]
---

# ConnectApi.AbstractDirectoryEntrySummary

> A directory entry with summary information.

# ConnectApi.AbstractDirectoryEntrySummary

A directory entry with summary information.

This class is abstract.

Superclass of:

-   [ConnectApi.RepositoryGroupSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_group_summary.htm "A group summary.")
-   [ConnectApi.RepositoryUserSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_user_summary.htm "A user summary.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| domain | String | Domain of the directory entry. | 39.0 |
| email | String | Email of the directory entry. | 39.0 |
| id | String | ID of the directory entry. | 39.0 |
| type | ConnectApi.​ContentHub​DirectoryEntry​Type | Type of directory entry. Values are:GroupEntryUserEntry | 39.0 |

## Related Topics

- ConnectApi.RepositoryGroupSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_group_summary.htm)
- ConnectApi.RepositoryUserSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_user_summary.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ContentHub​DirectoryEntry​Type (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
