---
title: "User Chatter Settings Input"
domain: chatterapi
topic: user-chatter-settings-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.993Z
estimatedTokens: 147
keywords: [User, Chatter, Settings, Input, user’s]
---

# User Chatter Settings Input

> A user’s global Chatter
  settings.

# User Chatter Settings Input

A user’s global Chatter settings.

Root XML tag

<userChatterSettings>

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| defaultGroup​EmailFrequency | String | The default frequency with which a user receives email from a group when they join. Valid values are:EachPostDailyDigestWeeklyDigestNeverIn communities, the Email on every post option is disabled after more than 10,000 members choose this setting for the group. All members who had this option selected are automatically switched to Daily digests. | 27.0 |
