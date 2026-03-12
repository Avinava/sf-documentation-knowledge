---
title: "Folder Child Operations"
domain: api-analytics
topic: folder-child-operations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.472Z
estimatedTokens: 250
keywords: [Folder, Child, Operations, folders]
---

# Folder Child Operations

> Gets information about the child folders of the specified folder.

# Folder Child Operations

Gets information about the child folders of the specified folder.

## Syntax

The following user permissions are needed to access this resource.

GET:

-   View access to the root folder in the tree

URI

/services/data/v43.0/folders/<folderid>/children

Formats

JSON

HTTP methods

| Method | Description |
| --- | --- |
| GET | Gets information about the child folders of the specified folder. |

Parameters

| Parameter | Type | Available Version | Description |
| --- | --- | --- | --- |
| folderId | String | 42.0 | Return data for this unique folder ID. |
| page | Integer | 43.0 | Integer that indicates which page of results to return. Default is 1. |
| pageSize | Integer | 43.0 | Integer that indicates how many results each page returns. Default is 10. |

## GET

Gets information about the child folders of the specified folder.

/services/data/v43.0/folders/<folderid>/children

Output Payload

FolderCollectionRepresentation

Sample Output Response

```

```

## Code Examples

```
{
  "folders" : [ {
    "childrenUrl" : "/services/data/v43.0/folders/00lR0000000Mf56IAC/children",
    "id" : "00lR0000000Mf56IAC",
    "label" : "BW33",
    "name" : "BW33",
    "parentId" : "00lR0000000E84WIAS",
    "type" : "report",
    "url" : "/services/data/v43.0/folders/00lR0000000Mf56IAC"
  } ],
  "totalSize" : 1,
  "url" : "/services/data/v43.0/folders/00lR0000000E84WIAS/children?page=1&pageSize=10"
}
```
