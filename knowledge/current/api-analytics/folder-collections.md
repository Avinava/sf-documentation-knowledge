---
title: "Folder Collections"
domain: api-analytics
topic: folder-collections
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.483Z
estimatedTokens: 904
keywords: [Folder, Collections, creation, report, dashboard, folders, obtaining, POST]
---

# Folder Collections

> Enables creation of report and dashboard folders and obtaining the list of folders.

# Folder Collections

Enables creation of report and dashboard folders and obtaining the list of folders.

## Syntax

The following user permissions are needed to access this resource.

POST:

-   Create Dashboard Folders (for dashboard folders)
-   Create Report Folders (for report folders)

GET:

-   View access to the folder

URI

/services/data/v43.0/folders/

Formats

JSON

HTTP methods

| Method | Description |
| --- | --- |
| POST | Creates a new folder with the specified name, label, and type. |
| GET | Gets the list of folders. |

## POST

Creates a new folder with the specified name, label, type, and parent ID (subfolders only).

/services/data/v43.0/folders/

Request Body

| Query Parameter Name | Group | Available Version | Values | Description |
| --- | --- | --- | --- | --- |
| folder | Object | 42.0, 43.0 | FolderInputRepresentation | Specifies the folder name, label, type, and parent ID. |

FolderInputRepresentation

| Code | Type | Available Version | Description |
| --- | --- | --- | --- |
| label | String | 42.0 | Folder display name. |
| name | String | 42.0 | Folder unique name. This is a mandatory field for admins; for non-admins, it is auto-generated. |
| type | ConnectFolderTypeEnum | 42.0 | Defined by the type of entity the folder contains. |
| parentId | String | 43.0 | ID of the parent folder. This field is valid only for subfolders. |

ConnectFolderTypeEnum

| Type | Description |
| --- | --- |
| Dashboard | Dashboard folders. |
| Document | Document folders. |
| Email | Email folders. |
| Insights | Insights folders. |
| Reports | Reports folders. |

Sample Request Body

```

```

Sample Output Response

```

```

## GET

Gets the list of report and dashboard folders.

/services/data/v43.0/folders/

Parameters

| Field | Type | Available Version | Description |
| --- | --- | --- | --- |
| type | ConnectFolderTypeEnum | 43.0 | Defined by the type of entity the folder contains. If not specified, returns all visible folders. If specified, returns visible folders of the specified type. |
| page | Integer | 43.0 | Integer that indicates which page of results to return. Default is 1. |
| pageSize | Integer | 43.0 | Integer that indicates how many results to return per page. Default is 10. |

Output Payload

[FolderCollectionRepresentation](#FolderCollectionRepresentation)

FolderCollectionRepresentation

| Field | Type | Available Version | Description |
| --- | --- | --- | --- |
| folders | FolderSummaryRepresentation | 43.0 | Collection of folders. |
| totalSize | Integer | 43.0 | Size of the folder collection. |
| url | ConnectUri | 43.0 | URL of the folder collection. |
| nextPageurl | ConnectUri | 43.0 | URL to the next page in the collection. |
| previousPageurl | ConnectUri | 43.0 | URL to the next page in the collection. |

FolderSummaryRepresentation

| Field | Type | Available Version | Description |
| --- | --- | --- | --- |
| id | ID | 43.0 | Unique identifier. |
| label | String | 43.0 | Display label. |
| name | String | 43.0 | Folder unique name. |
| namespace | String | 43.0 | Namespace prefix to differentiate custom object and field names from those in use by other organizations. |
| type | ConnectFolderTypeEnum | 43.0 | Defined by the type of entity the folder contains. |
| parentId | ID | 43.0 | ID of the parent folder. |
| url | ConnectUri | 43.0 | URL of the folder. |
| childrenUrl | ConnectUri | 43.0 | URL that represents the first level subfolders of the specified folder. |
| depth | Int | 43.0 | Depth of the folder in the tree. A folder with depth 0 is the root folder. |

Sample Output Response

```

```

## Code Examples

```
{
  "label": "report_folder",
  "name": "report_folder1",
  "type": "report"
  "parentId": "00lxx000000fffffff"
}
```

```
{
  "id" : "00lxx000000flSFAAY",
  "label" : "report_folder",
  "name" : "report_folder1",
  "shareRecipientsUrl" : "/services/data/v43.0/folders/00lxx000000flSFAAY/share-recipients?shareType=User&limit=100",
  "sharesUrl" : "/services/data/v43.0/folders/00lxx000000flSFAAY/shares",
  "supportedShareTypes" : [ "user", "role", "roleandsubordinates", "roleandsubordinatesinternal", "group", "portalrole", "portalroleandsubordinates", "customerportaluser" ],
  "type" : "report"
  "parentId" : "00lxx000000fffffff"

}
```

```
{
  "folders" : [ {
    "childrenUrl" : "/services/data/v43.0/folders/00lRM000000jCWjYAM/children",
    "id" : "00lRM000000jCWjYAM",
    "label" : "Asia Sales",
    "name" : "Asia_Sales",
    "type" : "report",
    "url" : "/services/data/v43.0/folders/00lRM000000jCWjYAM"
  }, {
    "childrenUrl" : "/services/data/v43.0/folders/00lRM000000jDmNYAU/children",
    "id" : "00lRM000000jDmNYAU",
    "label" : "Europe Sales",
    "name" : "Europe_Sales",
    "type" : "report",
    "url" : "/services/data/v43.0/folders/00lRM000000jDmNYAU"
  }, {
    "childrenUrl" : "/services/data/v43.0/folders/00lRM000000jHKXYA2/children",
    "id" : "00lRM000000jHKXYA2",
    "label" : "North America Sales",
    "name" : "North_America_Sales",
    "type" : "report",
    "url" : "/services/data/v43.0/folders/00lRM000000jHKXYA2"
  } ],
  "totalSize" : 3,
  "url" : "/services/data/v43.0/folders?page=1&pageSize=10"
}
```
