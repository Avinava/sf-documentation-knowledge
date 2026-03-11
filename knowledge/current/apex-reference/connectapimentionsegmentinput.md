---
title: "ConnectApi.MentionSegmentInput"
domain: apex-reference
topic: connectapimentionsegmentinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.310Z
keywords: [ConnectApi.MentionSegmentInput, See]
---

# ConnectApi.MentionSegmentInput

# ConnectApi.MentionSegmentInput

Include an @mention of a user or group in a feed post or comment. When creating a feed post or comment, you can include up to 25 mentions.

Subclass of [ConnectApi.MessageSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_messageSegmentInput.htm "Used to add rich message segments to feed items and comments.").

| Property | Type | Description | Available Version |
| --- | --- | --- | --- |
| id | String | ID of the user or group to mention.To mention a user, use either id or username. You can’t include both.To mention a group, you must use id. | 28.0Groups are available in 29.0. |
| username | String | User name of the user to mention.To mention a user, use either id or username. You can’t include both. | 38.0 |

#### See Also

-   [ConnectApi.MessageBodyInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_msgBody.htm "Add rich messages to feed items and comments.")