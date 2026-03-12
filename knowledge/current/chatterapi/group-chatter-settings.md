---
title: "Group Chatter Settings"
domain: chatterapi
topic: group-chatter-settings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.121Z
estimatedTokens: 172
keywords: [Group, Chatter, Settings, user’s, specific]
---

# Group Chatter Settings

> A user’s Chatter settings for a specific group.

# Group Chatter Settings

A user’s Chatter settings for a specific group.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| emailFrequency | String | The frequency with which a group member receives email from a group. One of the following values:EachPostDailyDigestWeeklyDigestNeverUseDefaultThe value UseDefault uses the user’s default global setting defined in User Chatter Settings. In communities, the Email on every post option is disabled after more than 10,000 members choose this setting for the group. All members who had this option selected are automatically switched to Daily digests. | Small, 29.0 | 27.0 |

## Related Topics

- User Chatter Settings (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_chatter.htm)
