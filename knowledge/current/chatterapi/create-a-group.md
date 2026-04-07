---
title: "Create a Group"
domain: chatterapi
topic: create-a-group
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:37.094Z
estimatedTokens: 159
keywords: [Group, Chatter]
---

# Create a Group

> Create a Chatter group.

# Create a Group

Create a Chatter group.

Resource

[/chatter/groups](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups_ListOfGroups.htm "A list of all the groups in the organization. Get information about groups or create a group.")

HTTP method

POST

Request body

[Group Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_group_input.htm "Chatter group input.")

Request body example

```

```

Request parameters (required)

name, visibility

Request parameter example

```

```

Returns

[Group Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_detail.htm "Chatter group detail.")

## Code Examples

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

- /chatter/groups (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups_ListOfGroups.htm)
- Group Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_group_input.htm)
- Group Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_detail.htm)
