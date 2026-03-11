---
title: "addFlagToComment(communityId, commentId,
    type)"
domain: apex-reference
topic: addflagtocommentcommunityid-commentid-type
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.909Z
keywords: [addFlagToComment, communityId, commentId, type, Add, moderation, flag, specified, comment., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# addFlagToComment(communityId, commentId,
    type)

> Add a moderation flag of the specified type to a
    comment.

### addFlagToComment(communityId, commentId, type)

Add a moderation flag of the specified type to a comment.

#### API Version

38.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags addFlagToComment(String communityId, String commentId, ConnectApi.CommunityFlagType type)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a comment.

type

Type: [ConnectApi.CommunityFlagType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagType)

Type of moderation flag.

-   FlagAsInappropriate—Flag for inappropriate content.
-   FlagAsSpam—Flag for spam.

If a type isn’t specified, it defaults to FlagAsInappropriate.

#### Return Value

Type: [ConnectApi.​ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To add a flag to a comment, Allow members to flag content must be selected for an Experience Cloud site.