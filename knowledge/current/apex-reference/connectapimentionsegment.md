---
title: "ConnectApi.MentionSegment"
domain: apex-reference
topic: connectapimentionsegment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:27.973Z
estimatedTokens: 203
keywords: [ConnectApi.MentionSegment, Mention, segment.]
---

# ConnectApi.MentionSegment

> Mention segment.

# ConnectApi.MentionSegment

Mention segment.

Subclass of [ConnectApi.MessageSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_seg.htm "Message segment.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| accessible | Boolean | Specifies whether the mentioned user or group can see the post in which they are mentioned (true) or not (false). | 28.0 |
| name | String | Name of the mentioned user or group. | 28.0 |
| record | ConnectApi.​ActorWithId | Information about the mentioned user or group. | 29.0 |
| user | ConnectApi.​User​Summary | Information about the mentioned user.ImportantIn versions 29.0 and later, use the record property. | 28.0 onlyIn versions before 29.0, if the mention is not a user, the mention is in a ConnectApi.TextSegment object. |

## Related Topics

- ConnectApi.MessageSegment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_seg.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ActorWithId (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actorWithIdOutput.htm)
- ConnectApi.​User​Summary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_summary.htm)
