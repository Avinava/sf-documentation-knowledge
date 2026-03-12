---
title: "Folder Share Recipients"
domain: api-analytics
topic: folder-share-recipients
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.510Z
estimatedTokens: 722
keywords: [Folder, Share, Recipients]
---

# Folder Share Recipients

> Return a list of folder share recipients.

# Folder Share Recipients

Return a list of folder share recipients.

The following user permissions are needed to access this resource:

-   View access to the folder

## Syntax

URI

/services/data/v41.0/folders/<folderId>/share-recipients?shareType=<shareType>

Formats

JSON

HTTP methods

| Method | Description |
| --- | --- |
| GET | Returns a list of recipients with whom the folder can be shared. |

Parameters

| Parameter | Description | Default |
| --- | --- | --- |
| folderId | Return data for this unique folder ID. |  |
| shareType | Return data for the recipients of the specified type, such as user, group, or role. | User |
| searchTerm | Search to match share recipients names. | “ ” |
| limit | Limit to the number of search results. | 100 |

## GET

Response Body

| Property | Type | Description | Default |
| --- | --- | --- | --- |
| shareRecipients | List<FolderShareRecipientRepresentation> | List of recipients along with their share type. |  |
| shareType | ConnectFolderShareTypeEnum | Defined by the type of folder share. |  |
| shareWithId | ID | Return the URL for share recipients. |  |
| shareWithLabel | String | Label of the folder share recipient. |  |

FolderShareRecipientRepresentation

| Parameter | Type | Available Version | Description |
| --- | --- | --- | --- |
| shareWithId | ID | 41.0 | The ID of the folder share recipient. |
| shareWithLabel | String | 41.0 | The label of the folder share recipient. |
| shareType | ConnectFolderShareTypeEnum | 41.0 | The share type of the recipient. |
| imageUrl | ConnectUri | 42.0 | The url of the image for the recipient. |
| imageColor | String | 42.0 | The color of the image for the recipient. |

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

Get share recipients of type user.

```

```

Output Example 2

Search for share recipients of type Public Group, with search term Group.

```

```

## Code Examples

```
/services/data/v41.0/folders/00lR0000000MQT5IAO/share-recipients?shareType=User

{
"shareRecipients" : [ {
  "shareType" : "user",
  "shareWithId" : "005R0000000Kg8wIAC",
  "shareWithLabel" : "Hank Chen"
}, {
  "shareType" : "user",
  "shareWithId" : "005R0000000KkU6IAK",
  "shareWithLabel" : "Integration User"
}, {
  "shareType" : "user",
  "shareWithId" : "005R0000000Kg8xIAC",
  "shareWithLabel" : "Nadia Smith"
}, {
  "shareType" : "user",
  "shareWithId" : "005R0000000Kg8zIAC",
  "shareWithLabel" : "Sarah Vasquez"
} ]
}
```

```
/services/data/v41.0/folders/00lR0000000MQT5IAO/share-recipients?shareType=Group&searchTerm=Group
{
"shareRecipients" : [ {
  "shareType" : "group",
  "shareWithId" : "00GR0000000EypUMAS",
  "shareWithLabel" : "Finance"
}, {
  "shareType" : "group",
  "shareWithId" : "00GR0000000EypeMAC",
  "shareWithLabel" : "Marketing"
}, {
  "shareType" : "group",
  "shareWithId" : "00GR0000000NvpIMAS",
  "shareWithLabel" : "Products"
}, {
  "shareType" : "group",
  "shareWithId" : "00GR0000000EypZMAS",
  "shareWithLabel" : "Sales"
}, {
  "shareType" : "group",
  "shareWithId" : "00GR0000000EypjMAC",
  "shareWithLabel" : "Technology"
} ]
}
```
