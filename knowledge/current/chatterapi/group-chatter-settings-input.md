---
title: "Group Chatter Settings Input"
domain: chatterapi
topic: group-chatter-settings-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.810Z
estimatedTokens: 147
keywords: [Group, Chatter, Settings, Input]
---

# Group Chatter Settings Input

> Group Chatter settings input.

# Group Chatter Settings Input

Group Chatter settings input.

Root XML tag

<groupChatterSettings>

Properties

A user’s Chatter settings.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| emailFrequency | String | The frequency with which a group member receives email from a group. Valid values are:EachPostDailyDigestWeeklyDigestNeverIn communities, the Email on every post option is disabled after more than 10,000 members choose this setting for the group. All members who had this option selected are automatically switched to Daily digests. | 27.0 |
