---
title: "User Groups"
domain: chatterapi
topic: user-groups
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.855Z
estimatedTokens: 358
keywords: [User, Groups, member]
---

# User Groups

> Get the groups that a user is a member
    of.

# User Groups

Get the groups that a user is a member of.

Resource

```

```

```

```

Available since version

23.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Request parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | Token | A generated token that indicates the view of feed items. Page tokens are returned as part of the response body, in one of the URL parameters, such as nextPageURL. | Optional | 23.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are between 1 and 250. If you don’t specify a size, the default is 25. | Optional | 23.0 |
| q | String | Specifies the string to search. The search string must contain at least two characters, not including wildcards. See Wildcards. | Optional | 30.0 |

Response body

In version 45.0 and later, the response body is [User Group Detail Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_group_detail_collection.htm "A page of groups that a user is a member of.").

In version 44.0 and earlier, the response body is [User Group Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_group_page.htm "A paginated collection of groups a user is a member of.").

Example

This GET request returns information about all groups the context user is a member of whose names or descriptions contain the letters co.

```

```

## Code Examples

```
/chatter/users/userId/groups
```

```
/connect/communities/communityId/chatter/users/userId/groups
```

```
/chatter/users/me/groups?q=co
```

## Related Topics

- User Group Detail Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_group_detail_collection.htm)
- User Group Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_group_page.htm)
