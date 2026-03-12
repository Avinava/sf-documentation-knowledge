---
title: "List of Groups"
domain: chatterapi
topic: list-of-groups
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.588Z
estimatedTokens: 1037
keywords: [Groups, organization, group]
---

# List of Groups

> A list of all the groups in the organization. Get
   information about groups or create a group.

# List of Groups

A list of all the groups in the organization. Get information about groups or create a group.

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

GET, HEAD, POST

POST available in 29.0

Request parameters for GET

| Parameter Name | Type | Description | Available |
| --- | --- | --- | --- |
| archiveStatus | String | Returns the list of groups filtered by the archive status you specify:All—All groups, including groups that are archived and groups that aren’t archived.Archived—Groups that are archived.NotArchived—Groups that aren’t archived.The default value is NotArchived. | 29.0 |
| page | Integer | An integer specifying a page of items. The default value is 0, which returns the first page. | 23.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 250. The default value is 25. | 23.0 |
| q | String | Specifies the string to search. For more information about wildcards, see Wildcards. | 23.0 |

Request body for POST

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

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available |
| --- | --- | --- | --- | --- |
| canHaveChatterGuests | Boolean | true if this group allows Chatter customers, false otherwise. After this property is set to true, it cannot be set to false. | Optional | 29.0 |
| description | String | The “Description” section of the group | Optional | 29.0 |
| informationText | String | The text in the “Information” section of the group | Optional | 29.0 |
| informationTitle | String | The title of the “Information” section of the group | Optional | 29.0 |
| name | String | The name of the group | Required | 29.0 |
| visibility | String | Group visibility type. One of the following:PrivateAccess—Only members of the group can see posts to this group.PublicAccess—All users within the Experience Cloud site can see posts to this group.Unlisted—Reserved for future use. | Required | 29.0 |

Response body for GET

[Group Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_page.htm "Page of Chatter groups.")

Response body for POST

[Group Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_detail.htm "Chatter group detail.")Group Detail

Example for creating a public group using the request body

```

```

Example for creating a public group using parameters

```

```

#### See Also

-   [Create a Group](atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_group.htm "Create a Chatter group.")

## Code Examples

```
/chatter/groups/
```

```
/connect/communities/communityId/chatter/groups/
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
   "name" : "Chatter API",
   "visibility" : "PublicAccess"
}
```

```
/services/data/v66.0/chatter/groups?name=Chatter+API&visibility=PublicAccess
```

## Related Topics

- Wildcards (atlas.en-us.chatterapi.meta/chatterapi/intro_wildcards.htm)
- Group
                                    Information Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_groupinformation_input.htm)
- Group Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_page.htm)
- Group Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_detail.htm)
- Create a Group (atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_group.htm)
