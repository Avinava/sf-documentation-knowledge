---
title: "Folder Shares"
domain: api-analytics
topic: folder-shares
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.518Z
estimatedTokens: 729
keywords: [Folder, Shares, Extracts, current, adds, new, POST, replaces, PUT]
---

# Folder Shares

> Extracts a list of current folder shares (GET), adds
    new shares (POST), or replaces existing shares (PUT).

# Folder Shares

Extracts a list of current folder shares (GET), adds new shares (POST), or replaces existing shares (PUT).

The following user permissions are needed to access this resource.

POST/PUT:

-   Manage access to the folder

GET:

-   View access to the folder

## Syntax

URI

/services/data/v41.0/folders/<folderId>/shares

Formats

JSON

HTTP methods

| Method | Description |
| --- | --- |
| GET | Returns a list of current folder shares. |
| PUT | Creates new shares to replace the existing shares in the share list for the folder. |
| POST | Creates new shares and appends them to the existing share list for the folder. |

Parameters

| Parameter | Description |
| --- | --- |
| folderId | Perform the operation for this unique folder ID. |

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

Output Example 1

Sample raw response for a folder not shared with anyone.

```

```

Output Example 2

Sample raw response for a folder shared with two users and a public group.

```

```

## PUT/POST

Request Body

| Query Param Name | Group | Available Version | Values | Description |
| --- | --- | --- | --- | --- |
| folder | Object | 41.0 | FolderSharesInputRepresentation | Folder input representation containing a list of shares. |

Sample Request Body

```

```

## Code Examples

```
{
	“shares” 		: []
}
```

```
{
"shares" : [ {
  "accessType" : "view",
  "shareId" : "0AFR00000004LtpOAE",
  "shareType" : "group",
  "sharedWithId" : "00GR0000000Mi1nMAC",
  "sharedWithLabel" : "Demo Group",
  "url" : "/services/data/v41.0/folders/00lR0000000MQT5IAO/shares/0AFR00000004LtpOAE"
}, {
  "accessType" : "edit",
  "shareId" : "0AFR00000004LtkOAE",
  "shareType" : "user",
  "sharedWithId" : "005R0000000Kg8yIAC",
  "sharedWithLabel" : "Brian Alison",
  "url" : "/services/data/v41.0/folders/00lR0000000MQT5IAO/shares/0AFR00000004LtkOAE"
}, {
  "accessType" : "manage",
  "shareId" : "0AFR00000004LtlOAE",
  "shareType" : "user",
  "sharedWithId" : "005R0000000Kg8cIAC",
  "sharedWithLabel" : "Fred Williamson",
  "url" : "/services/data/v41.0/folders/00lR0000000MQT5IAO/shares/0AFR00000004LtlOAE"
} ]
}
```

```
{
"shares" : [ {
  "accessType" : "view",
  "shareType" : "group",
  "shareWithId" : "00GR0000000Mi1nMAC"
}, {
  "accessType" : "edit",
  "shareType" : "user",
  "shareWithId" : "005R0000000Kg8yIAC"
}, {
  "accessType" : "manage",
  "shareType" : "user",
  "shareWithId" : "005R0000000Kg8cIAC"
} ]
}
```
