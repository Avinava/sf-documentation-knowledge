---
title: "Join a Group"
domain: chatterapi
topic: join-a-group
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:37.201Z
estimatedTokens: 175
keywords: [Join, Group, Chatter]
---

# Join a Group

> Join a Chatter group.

# Join a Group

Join a Chatter group.

Resource

[/chatter/groups/groupId/members](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups_GroupMembers.htm "Members of a specified group. Get the members and add a member to a group. To add a member, the context user must be the group owner or moderator.")

HTTP method

POST

Request body

[Group Member Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_group_member_input.htm "Chatter group member input.")

Request body example

```

```

Request parameter

userId

Request parameter example

```

```

Returns

[Group Member](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_member.htm "Chatter group member.")

## Code Examples

```
{"userId": "005D0000001GpHp" }
```

```
/services/data/v66.0/chatter/groups/0F9D000000006bOKAQ
/members?userId=005D0000001GpHp
```

## Related Topics

- /chatter/groups/groupId/members (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups_GroupMembers.htm)
- Group Member Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_group_member_input.htm)
- Group Member (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_member.htm)
