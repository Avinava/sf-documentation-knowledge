---
title: "Group Information"
domain: chatterapi
topic: group-information
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.543Z
estimatedTokens: 1222
keywords: [Group, Chatter, “Information”, groups, group's, members, photo, organization, add, change]
---

# Group Information

> Get information about a Chatter group.

# Group Information

Get information about a Chatter group.

Resource

```

```

```

```

Available version

23.0

Requires Chatter

Yes

HTTP methods

GET, DELETE, HEAD, PATCH

PATCH is supported in version 28.0 later.

DELETE is supported in version 29.0 and later.

Request body for PATCH

[Group Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_group_input.htm "Chatter group input.")

Root XML Tag

```

```

JSON

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| announcement | String | An announcement ID.An announcement displays in a designated location in the Salesforce UI until 11:59 p.m. on its expiration date, unless it’s deleted or replaced by another announcement. | 31.0 |
| canHaveChatterGuests | Boolean | true if this group allows Chatter customers, false otherwise. After this property is set to true, it cannot be set to false. | 29.0 |
| description | String | The “Description” section of the group | 29.0 |
| information | Group Information Input | The “Information” section of the groupIf the group is private, the “Information” section is visible only to members. The “Description” section is visible to everyone. | 28.0 |
| isArchived | Boolean | true if the group is archived, false otherwise. Defaults to false. | 29.0 |
| isAutoArchiveDisabled | Boolean | true if automatic archiving is turned off for the group, false otherwise. Defaults to false. | 29.0 |
| isBroadcast | Boolean | true if only group owners and managers can create posts in the group, false otherwise. Defaults to false. | 36.0 |
| name | String | The name of the group | 29.0 |
| owner | String | The ID of the group owner. This property is available for PATCH requests only. | 29.0 |
| visibility | String | Group visibility type. One of the following values:PrivateAccess—Only members of the group can see posts to this group.PublicAccess—All users within the Experience Cloud site can see posts to this group.Unlisted—Reserved for future use. | 29.0 |

[Group Information Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_groupinformation_input.htm "Chatter group information input.")

JSON

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| text | String | The text in the “Information” section of the group. HTML is not supported. The maximum length is 4000 characters (bytes). | 28.0 |
| title | String | The title in the “Information” section of the group. The maximum length is 240 characters (bytes). | 28.0 |

Request parameters for PATCH

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| announcement | String | The ID of a feed item to use as an announcement.An announcement displays in a designated location in the Salesforce UI until 11:59 p.m. on its expiration date, unless it’s deleted or replaced by another announcement. | Optional | 31.0 |
| canHave​ChatterGuests | Boolean | true if this group allows Chatter customers, false otherwise. After this property is set to true, it cannot be set to false. | Optional | 29.0 |
| description | String | The “Description” section of the group. | Optional | 29.0 |
| information​Text | String | The “Information” section of the group. If the group is private, the “Information” section is visible only to members. The “Description” section is visible to everyone. | Optional | 28.0 |
| information​Title | String | The title of the “Information” section of the group. | Optional | 28.0 |
| isArchived | String | true if the group is archived, false otherwise. Defaults to false. | Optional | 29.0 |
| isAutoArchive​Disabled | Boolean | true if automatic archiving is turned off for the group, false otherwise. Defaults to false. | Optional | 29.0 |
| isBroadcast | Boolean | true if only group owners and managers can create posts in the group, false otherwise. Defaults to false. | Optional | 36.0 |
| name | String | The name of the group. | Optional | 29.0 |
| owner | String | The ID of the group owner. This property is available for PATCH requests only. | Optional | 29.0 |
| visibility | String | Group visibility type. One of the following values:PrivateAccess—Only members of the group can see posts to this group.PublicAccess—All users within the Experience Cloud site can see posts to this group.Unlisted—Reserved for future use. | Optional | 29.0 |

Response body for GET and PATCH

[Group Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_detail.htm "Chatter group detail.")

Example for PATCH

This request body updates the text and title of the “Information” section of a group:

```

```

Here is the same example using request parameters:

```

```

The response is a [Group Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_detail.htm "Chatter group detail.") response body.

## Code Examples

```
/chatter/groups/groupId
```

```
/connect/communities/communityId/chatter/groups/groupId
```

```
{
   "announcement" : "0D5D0000000K4XT",
   "canHaveChatterGuests" : "true",
   "description" : "This group is building a powerful API.",
   "information" : {
      "text" : "Read this section before you post to the group.",
      "title" : "Information"
   },
   "isArchived" : "false",
   "isAutoArchiveDisabled" : "false",
   "name" : "Chatter API",
   "owner" : "00590000000DmPw",
   "visibility" : "PublicAccess"
}
```

```
{
   "text" : "Post questions about the API.",
   "title" : "API Questions"
}
```

```apex
{
   "information" : {
      "text" : "Post questions about the API to this group. If you have the answer to a question, please post it. This is a private R&D group.",
      "title" : "API Questions Group"
   }
}
```

## Related Topics

- Group Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_group_input.htm)
- Group
                                    Information Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_groupinformation_input.htm)
- Group Information
                     Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_groupinformation_input.htm)
- Group Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_detail.htm)
