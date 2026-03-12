---
title: "Action Link Group"
domain: chatterapi
topic: action-link-group
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.531Z
estimatedTokens: 280
keywords: [Action, Link, Group, including, state, context, user]
---

# Action Link Group

> Get information about an action link group including state
   for the context user.

# Action Link Group

Get information about an action link group including state for the context user.

All action links must belong to a group. Action links in a group are mutually exclusive and share some properties. Note that action link groups are accessible by clients, unlike [action link group definitions](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_group_definition.htm#connect_resources_action_links_group_definition "Get information about or delete an action link group definition. Deleting an action link group definition removes all references to it from feed elements. To get or delete the action link group definition, the client must be the same client app that created the definition and the user must either be the user who created the definition or have View all Data permission.").

Resource

```

```

```

```

Available since release

33.0

HTTP methods

GET, HEAD

Response body for GET

[Platform Action Group](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link_group.htm "A platform action group instance with state appropriate for the context user.")

## Code Examples

```
/connect/action-link-groups/actionLinkGroupId
```

```
/connect/communities/communityId/action-link-groups/actionLinkGroupId
```

## Related Topics

- action link group definitions (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_group_definition.htm)
- Platform Action Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link_group.htm)
