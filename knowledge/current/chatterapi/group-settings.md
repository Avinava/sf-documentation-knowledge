---
title: "Group Settings"
domain: chatterapi
topic: group-settings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.573Z
estimatedTokens: 309
keywords: [Group, Settings, context, user’s, Chatter]
---

# Group Settings

> Get information about the context user’s Chatter
   settings for the specified group.

# Group Settings

Get information about the context user’s Chatter settings for the specified group.

Resource

```

```

```

```

Available since version

27.0

Requires Chatter

Yes

HTTP methods

GET, HEAD, or PATCH

Request body for PATCH

Root XML tag

<groupChatterSettings>

Properties

A user’s Chatter settings.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| emailFrequency | String | The frequency with which a group member receives email from a group. Valid values are:EachPostDailyDigestWeeklyDigestNeverIn communities, the Email on every post option is disabled after more than 10,000 members choose this setting for the group. All members who had this option selected are automatically switched to Daily digests. | 27.0 |

Request parameter for PATCH

| Parameter Name | Type | Description | Available Since |
| --- | --- | --- | --- |
| emailFrequency | String | The frequency with which a group member receives email from a group. Valid values are:EachPostDailyDigestWeeklyDigestNever | 27.0 |

Response body for GET, HEAD, or PATCH

[Group Chatter Settings](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_chatter.htm "A user’s Chatter settings for a specific group.")

## Code Examples

```
/chatter/groups/groupId/my-settings
```

```
/connect/communities/communityId/chatter/groups/groupId/my-settings
```

## Related Topics

- Group Chatter Settings (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_chatter.htm)
