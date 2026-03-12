---
title: "Platform Action Group"
domain: chatterapi
topic: platform-action-group
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.117Z
estimatedTokens: 451
keywords: [Platform, Action, Group, instance, state, appropriate, context, user]
---

# Platform Action Group

> A platform action group instance with state appropriate for the
      context user.

# Platform Action Group

A platform action group instance with state appropriate for the context user.

Action link groups are one type of platform action group and are therefore represented as platform action group response bodies.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| category | String | Indicates the priority and relative locations of platform actions. Values are:Primary—The action link group is displayed in the body of the feed element.Overflow—The action link group is displayed in the overflow menu of the feed element. | Medium, 33.0 | 33.0 |
| id | String | An 18-character ID or an opaque string ID for the platform action group.If the Platform Action type is QuickAction and the subtype is Create, this value is null. | Small, 33.0 | 33.0 |
| modifiedDate | String | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z. | Small, 33.0 | 33.0 |
| platformActions | Platform Action[] | The platform action instances for this group.Within an action link group, action links are displayed in the order listed in the actionLinks property of the Action Link Group Definition Input request body. Within a feed item, action link groups are displayed in the order specified in the actionLinkGroupIds property of the Associated Actions Capability Input request body. | Medium, 33.0 | 33.0 |
| url | String | Connect REST API resource URL for the platform action group.If the Platform Action type is QuickAction and the subtype is Create, this value is null. | Small, 33.0 | 33.0 |

#### See Also

-   [Associated Actions Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_associated_actions_capability.htm "If a feed element has this capability, it has platform actions associated with it.")

## Related Topics

- Platform
                Action (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link.htm)
- Associated Actions Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_associated_actions_capability.htm)
