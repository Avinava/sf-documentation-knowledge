---
title: "addFlagToComment(communityId, commentId)"
domain: apex-reference
topic: addflagtocommentcommunityid-commentid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.909Z
keywords: [addFlagToComment, communityId, commentId, Add, moderation, flag, comment., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# addFlagToComment(communityId, commentId)

> Add a moderation flag to a comment.

### addFlagToComment(communityId, commentId)

Add a moderation flag to a comment.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags addFlagToComment(String communityId, String commentId)

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

To add a flag to a comment, Allow members to flag content must be selected for an Experience Cloud site.