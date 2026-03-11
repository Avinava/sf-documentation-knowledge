---
title: "getFlagsOnComment(communityId, commentId)"
domain: apex-reference
topic: getflagsoncommentcommunityid-commentid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.910Z
keywords: [getFlagsOnComment, communityId, commentId, Get, moderation, flags, comment., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getFlagsOnComment(communityId, commentId)

> Get the moderation flags on a comment.

### getFlagsOnComment(communityId, commentId)

Get the moderation flags on a comment.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags getFlagsOnComment(String communityId, String commentId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a comment.

#### Return Value

Type: [ConnectApi.​ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To get moderation flags, the context user must have the Moderate Experiences Feeds permission.