---
title: "Folder Share by ID"
domain: api-analytics
topic: folder-share-by-id
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.528Z
estimatedTokens: 826
keywords: [Folder, Share, extracts, updates, access, level, PATCH, deletes]
---

# Folder Share by ID

> For a specified share ID, extracts folder share information (GET), updates the access level on the share (PATCH), or deletes the share (DELETE).

# Folder Share by ID

For a specified share ID, extracts folder share information (GET), updates the access level on the share (PATCH), or deletes the share (DELETE).

## Syntax

The following user permissions are needed to access this resource.

PATCH/DELETE:

-   Manage access to the folder

GET:

-   View access to the folder

URI

/services/data/v41.0/folders/<folderId>/shares/<shareId>

Formats

JSON

HTTP methods

| Method | Description |
| --- | --- |
| GET | Returns information for the specified folder share. |
| PATCH | Updates the access level on the specified folder share. |
| POST | Deletes the specified folder share. |

Parameters

| Parameter | Description |
| --- | --- |
| folderId | ID of the folder containing the share. |
| shareId | Perform the operation for this unique folder share ID. |

## GET

Response Body

| Property | Type | Description |
| --- | --- | --- |
| accessType | ConnectFolderAccessTypeEnum | Defined by the type of folder access. |
| shareId | ID | Unique identifier of the share. |
| shareType | ConnectFolderShareTypeEnum | Defined by the type of folder share. |
| sharedWithId | ID | Unique identifier of the share recipient. |
| sharedWithLabel | String | Label of the share recipient. |
| url | ConnectUri | URL of the share. |

ConnectFolderAccessTypeEnum

| Type | Description |
| --- | --- |
| View | View access to the folder. |
| Edit | Edit access to the folder. |
| Manage | Manage access to the folder. |

ConnectFolderShareTypeEnum

| Type | Description |
| --- | --- |
| Group | Users in a specified public group. |
| Role | Users with a specified role. |
| RoleAndSubordinates | Users with a specified role and users with a role subordinate to that role. |
| RoleAndSubordinatesInternal | Users with a specified role and users with a role subordinate to that role, except public portal users. |
| Organization | All internal users. |
| AllPrmUsers | All PRM Portal users. |
| User | The specified individual user. |
| PartnerUser | The specified individual user of a partner portal. |
| AllCspUsers | All Customer Success Portal users. |
| CustomerPortalUser | The specified individual user of a customer portal. |
| PortalRole | Users with a specified role in a portal. |
| PortalRoleAndSubordinates | PortalRoleAndSubordinates. Portal users with a specified role, and portal users with a role subordinate to that role. |
| ChannelProgramGroup | PRM Portal users who are members of the specified channel programs and levels group. |

Output Example

```

```

## PATCH

Request Body

| Query Param Name | Group | Available Version | Values | Description |
| --- | --- | --- | --- | --- |
| folder | Object | 41.0 | FolderShareInputRepresentation | Folder share input representation. |

FolderShareInputRepresentation

| Parameter | Type | Available Version | Description |
| --- | --- | --- | --- |
| shareWithId | ID | 41.0 | ID of the entity that the folder can be shared with. |
| accessType | ConnectFolderAccessTypeEnum | 41.0 | The access type for the recipient entity on the folder. |
| shareType |  | 41.0 | The type of the entity that the folder can be shared with. |

Sample Request Body

```

```

## DELETE

Deletes the folder share that has the specified folder ID.

/services/data/v43.0/folders/<folderid>/shares/<shareId>

## Code Examples

```
{
“shareId”		: “004xx000001Sy1GAAS”
“accessType”		: “manage”,
“shareType”		: “user”
“sharedWithId”	: “005xx000001Sy1GAAS”
“sharedWithLabel”	: “User1”
}
```

```
{
"accessType" : "manage",
"shareType" : "user",
"shareWithId" : "005R0000000Kg8yIAC"
}
```
