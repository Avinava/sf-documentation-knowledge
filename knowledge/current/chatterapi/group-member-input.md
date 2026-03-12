---
title: "Group Member Input"
domain: chatterapi
topic: group-member-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.836Z
estimatedTokens: 124
keywords: [Group, Member, Input, Chatter]
---

# Group Member Input

> Chatter group member input.

# Group Member Input

Chatter group member input.

Root XML tag

<member>

JSON example

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| role | String | The role of the member. One of these values:GroupManagerStandardMember | 29.0 |
| userId | String | The user ID of the member to be added to the group. | 23.0 |

#### See Also

-   [Join a Group](atlas.en-us.chatterapi.meta/chatterapi/quickreference_join_group.htm "Join a Chatter group.")

## Code Examples

```
{   
    "role" : "GroupManager",
    "userId" : "005B0000000Ge16"
}
```

## Related Topics

- Join a Group (atlas.en-us.chatterapi.meta/chatterapi/quickreference_join_group.htm)
