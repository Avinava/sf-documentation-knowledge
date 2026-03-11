---
title: "getMCSFolderShares(folderId)"
domain: apex-reference
topic: getmcsfoldersharesfolderid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.295Z
keywords: [getMCSFolderShares, folderId, Get, targets, managed, content, space, folder, shared, with., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getMCSFolderShares(folderId)

> Get targets that a managed content space folder is shared with.

### getMCSFolderShares(folderId)

Get targets that a managed content space folder is shared with.

To get the targets that a managed content space folder can be shared with, use [getMCSFolderShareTargets(folderId)](#apex_ConnectAPI_ManagedContent_getMCSFolderShareTargets_1 "Get targets that a managed content space folder can be shared with.").

#### API Version

63.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.MCSFolderShareCollection getMCSFolderShares(String folderId)

#### Parameters

folderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the folder.

#### Return Value

Type: [ConnectApi.MCSFolderShareCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_m_c_s_folder_share_collection.htm "Collection of targets that a managed content space folder is shared with.")