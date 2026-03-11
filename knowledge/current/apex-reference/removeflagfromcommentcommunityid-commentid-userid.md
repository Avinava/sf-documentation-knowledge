---
title: "removeFlagFromComment(communityId, commentId,
        userId)"
domain: apex-reference
topic: removeflagfromcommentcommunityid-commentid-userid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.910Z
keywords: [removeFlagFromComment, communityId, commentId, userId, Remove, moderation, flag, comment., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# removeFlagFromComment(communityId, commentId,
        userId)

> Remove a moderation flag from a comment.

### removeFlagFromComment(communityId, commentId, userId)

Remove a moderation flag from a comment.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags removeFlagFromComment(String communityId, String commentId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a comment.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context user for whom the flag is removed. Specify null to remove the flag for all users.

#### Return Value

Type: Void

#### Usage

To remove a moderation flag, the context user must have added the flag or must have the Moderate Experiences Feeds permission.