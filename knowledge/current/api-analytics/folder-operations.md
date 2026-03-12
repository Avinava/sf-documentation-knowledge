---
title: "Folder Operations"
domain: api-analytics
topic: folder-operations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.497Z
estimatedTokens: 1174
keywords: [Folder, Operations, renaming, deleting, obtaining, report, dashboard, folders, PATCH]
---

# Folder Operations

> Enables renaming, deleting, and obtaining information on report and dashboard folders.

# Folder Operations

Enables renaming, deleting, and obtaining information on report and dashboard folders.

The following user permissions are needed to access this resource.

GET:

-   View access for the folder

PATCH/DELETE:

-   Manage access for the folder

## Syntax

URI

/services/data/v43.0/folders/<folderid>

Formats

JSON

HTTP methods

| Method | Description |
| --- | --- |
| GET | Gets information about the folder that has the specified folder ID. |
| PATCH | Updates the label or name of the folder with the specified folder ID.All users with manage access on the folder can change the folder label.Only admin users can change the folder name. |
| DELETE | Deletes the folder that has the specified folder ID. |

Parameters

| Parameter | Description |
| --- | --- |
| folderId | Specifies a unique folder ID. |

## GET

Gets information about the folder that has the specified folder ID.

/services/data/v43.0/folders/<folderid>

Output Payload

[FolderDetailRepresentatiion](#FolderDetailRepresentation)

FolderDetailRepresentatiion

| Field | Type | Available Version | Description |
| --- | --- | --- | --- |
| id | String | 42.0 | Unique folder identifier. |
| label | String | 42.0 | Folder display name. |
| name | String | 42.0 | Folder unique name. |
| namespace | String | 42.0 | Namespace prefix to differentiate custom object and field names from those in use by other organizations. |
| type | ConnectFolderTypeEnum | 42.0 | Defined by the type of entity the folder contains. |
| parentId | ID | 43.0 | ID of the parent folder. |
| url | ConnectUri | 43.0 | URL of the folder:/services/data/v43.0/folders/<folderid> |
| childrenUrl | ConnectUri | 43.0 | URL that represents the first level subfolders of the specified folder:/services/data/v43.0/folders/<folderid>/children |
| depth | Integer | 43.0 | Depth of the folder in the tree. A folder with depth 0 is the root folder. |
| supportedShareTypess | List <supportedShareTypes> | 43.0 | List of supported share types for the folder in the organization. |
| sharesUrl | ConnectUri | 43.0 | URL of the shares for the particular folder:/services/data/v43.0/folders/<folderid>/shares |
| shareRecipientsUrl | ConnectUri | 43.0 | URL of the recipients of the share:/services/data/v43.0/folders/<folderid>/share-recipients |
| ancestors | List <FolderSummaryRepresentation> | 43.0 | This folder’s ancestor folders, ordered by depth. |

ConnectFolderTypeEnum

| Type | Description |
| --- | --- |
| Dashboard | Dashboard folders. |
| Document | Document folders. |
| Email | Email folders. |
| Insights | Insights folders. |
| Reports | Reports folders. |

FolderSummaryRepresentation

| Field | Type | Available Version | Description |
| --- | --- | --- | --- |
| id | ID | 43.0 | Unique identifier. |
| label | String | 43.0 | Display label. |
| name | String | 43.0 | Folder unique name. |
| namespace | String | 43.0 | Namespace prefix to differentiate custom object and field names from those in use by other organizations. |
| type | ConnectFolderTypeEnum | 43.0 | Defined by the type of entity the folder contains. |
| parentId | ID | 43.0 | ID of the parent folder. |
| url | ConnectUri | 43.0 | URL of the folder:/services/data/v43.0/folders/<folderid> |
| childrenUrl | ConnectUri | 43.0 | URL that represents the first level subfolders of the specified folder:/services/data/v43.0/folders/<folderid>/children |
| depth | Int | 43.0 | Depth of the folder in the tree. A folder with depth 0 is the root folder. |

Sample Output Response

```

```

## PATCH

Updates the label or name of the folder with the specified folder ID.

-   Users with manage access on the folder can change the folder label.
-   Only admin users can change the folder name.

/services/data/v43.0/folders/<folderid>

Request Body

| Query Parameter Name | Group | Since | Available Version | Description |
| --- | --- | --- | --- | --- |
| folder | Object | 42.0 | FolderInputRepresentation | Users with edit access on the folder can change label . Admins can change name . type cannot be changed. |

FolderInputRepresentation

| Code | Type | Available Version | Description |
| --- | --- | --- | --- |
| label | String | 42.0 | Folder display name. |
| name | String | 42.0 | Folder unique name. This is a mandatory field for admins; for non-admins, it is auto-generated. |
| type | ConnectFolderTypeEnum | 42.0 | Defined by the type of entity the folder contains: |
| parentId | String | 43.0 | ID of the parent folder. This field is valid only for subfolders. |

Sample Request Body

```

```

Sample Raw Response

```

```

## DELETE

Deletes the folder that has the specified folder ID.

/services/data/v43.0/folders/<folderid>

## Code Examples

```
{
  "ancestors" : [ ],
  "childrenUrl" : "/services/data/v43.0/folders/00lxx000000flSFAAY/children",
  "depth" : 0,
  "id" : "00lxx000000flSFAAY",
  "label" : "report_folder",
  "name" : "report_folder1",
  "shareRecipientsUrl" : "/services/data/v43.0/folders/00lxx000000flSFAAY/share-recipients?shareType=User&limit=100",
  "sharesUrl" : "/services/data/v43.0/folders/00lxx000000flSFAAY/shares",
  "supportedShareTypes" : [ "user", "role", "roleandsubordinates", 	"roleandsubordinatesinternal", "group", "portalrole", "portalroleandsubordinates", 	"customerportaluser" ],
  "type" : "report",
  "url" : "/services/data/v43.0/folders/00lxx000000flSFAAY"
}
```

```
{
  "label": "report_folder1",
  "name": "report_folder1"
}
```

```
{
  "ancestors" : [ ],
  "childrenUrl" : "/services/data/v43.0/folders/00lxx000000flSFAAY/children",
  "depth" : 0,
  "id" : "00lxx000000flSFAAY",
  "label" : "report_folder1",
  "name" : "report_folder1",
  "shareRecipientsUrl" : "/services/data/v43.0/folders/00lxx000000flSFAAY/share-recipients?shareType=User&limit=100",
  "sharesUrl" : "/services/data/v43.0/folders/00lxx000000flSFAAY/shares",
  "supportedShareTypes" : [ "user", "role", "roleandsubordinates", 	"roleandsubordinatesinternal", "group", "portalrole", "portalroleandsubordinates", 	"customerportaluser" ],
  "type" : "report",
  "url" : "/services/data/v43.0/folders/00lxx000000flSFAAY"
}
```

## Related Topics

- supportedShareTypes (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_folders_share_recipients.htm)
