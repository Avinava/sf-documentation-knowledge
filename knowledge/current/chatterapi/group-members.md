---
title: "Group Members"
domain: chatterapi
topic: group-members
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.550Z
estimatedTokens: 571
keywords: [Group, Members, add, member, context, user, owner, moderator]
---

# Group Members

> Members of a specified group. Get the members and add a
         member to a group. To add a member, the context user must be the group owner or
         moderator.

# Group Members

Members of a specified group. Get the members and add a member to a group. To add a member, the context user must be the group owner or moderator.

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

GET, POST

Request parameters for GET

| Parameter Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| page | Integer | An integer specifying a page of items. The default value is 0, which returns the first page. | 23.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 1000. If you don’t specify a size, the default is 25. | 23.0 |

Response body for GET

[Group Member Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_member_page.htm "Group member page.")

Request body for POST

Root XML tag

<member>

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| role | String | The role of the member. One of these values:GroupManagerStandardMember | 29.0 |
| userId | String | The user ID of the member to be added to the group. | 23.0 |

Request parameter for POST

| Parameter Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| role | String | The role of the member. One of these values:GroupManagerStandardMember | 29.0 |
| userId | String | ID of the user to add to the group. | 23.0 |

Response body for POST

[Group Member](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_member.htm "Chatter group member.")

Example for adding a member to a group using the request body

```

```

Example for adding a member to a group using parameters

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

If the group is private, the response is 403. To request to join the group, send a POST request to the [Group Members—Private](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups_GroupMembersRequests.htm "Request membership in a private group or get the status of requests to a join a private group.") resource (/chatter/groups/groupId/members/requests).

#### See Also

-   [Join a Group](atlas.en-us.chatterapi.meta/chatterapi/quickreference_join_group.htm "Join a Chatter group.")

## Code Examples

```
/connect/communities/communityId/chatter/groups/groupId/members
```

```
{"userId": "005D0000001GpHp" }
```

```
/services/data/v66.0/chatter/groups/0F9D000000006bOKAQ
/members?userId=005D0000001GpHp
```

## Related Topics

- Group Member
                  Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_member_page.htm)
- Group Member (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_member.htm)
- Group Members—Private (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups_GroupMembersRequests.htm)
- Join a Group (atlas.en-us.chatterapi.meta/chatterapi/quickreference_join_group.htm)
