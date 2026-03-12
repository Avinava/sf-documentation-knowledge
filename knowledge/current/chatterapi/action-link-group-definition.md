---
title: "Action Link Group Definition"
domain: chatterapi
topic: action-link-group-definition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.525Z
estimatedTokens: 297
keywords: [Action, Link, Group, Definition, Deleting, removes, references, feed, elements, client, app, created, user, either, View, links, belong, mutually, exclusive, share]
---

# Action Link Group Definition

> The definition of an action link group. All action links must belong to a group. Action
  links in a group are mutually exclusive and share some properties. Define standalone actions in
  their own action group.

# Action Link Group Definition

The definition of an action link group. All action links must belong to a group. Action links in a group are mutually exclusive and share some properties. Define standalone actions in their own action group.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionLinks | Action Link Definition[] | A collection of action link definitions that make up the action link group.Within an action link group, action links are displayed in the order listed in the actionLinks property of the Action Link Group Definition Input request body. Within a feed item, action link groups are displayed in the order specified in the actionLinkGroupIds property of the Associated Actions Capability Input request body. | Medium, 33.0 | 33.0 |
| category | String | Indicates the priority and location of the action links. Values are:Primary—The action link group is displayed in the body of the feed element.Overflow—The action link group is displayed in the overflow menu of the feed element. | Medium, 33.0 | 33.0 |
| createdDate | String | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z | Small, 33.0 | 33.0 |
| executions​Allowed | String | Defines the number of times an action link can be executed. Values are:Once—An action link can be executed only one time across all users.OncePerUser—An action link can be executed only one time for each user.Unlimited—An action link can be executed an unlimited number of times by each user. If the action link’s actionType is Api or ApiAsync, you can’t use this value. | Medium, 33.0 | 33.0 |
| expirationDate | String | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z, that represents the date and time this action group expires and can no longer be executed. If the value is null, there isn’t an expiration date. | Medium, 33.0 | 33.0 |
| id | String | 18-character ID of the action link group definition | Small, 33.0 | 33.0 |
| modifiedDate | String | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z | Small, 33.0 | 33.0 |
| templateId | String | The ID of the action link group template from which to instantiate this action link group, or null if this group isn’t associated with a template. | Medium, 33.0 | 33.0 |
| url | String | Connect REST API URL for this action link group definition. | Small, 33.0 | 33.0 |

## Code Examples

```
/connect/action-link-group-definitions/actionLinkGroupId
```

```
/connect/communities/communityId/action-link-group-definitions/actionLinkGroupId
```

## Related Topics

- Action Link Group
                            Definition (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link_group_definition.htm)
- 204: Successful
                            Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Action Link Definition (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link_definition.htm)
