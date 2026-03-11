---
title: "getFlagsOnComment(communityId, commentId,
        visibility)"
domain: apex-reference
topic: getflagsoncommentcommunityid-commentid-visibility
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.910Z
keywords: [getFlagsOnComment, communityId, commentId, visibility, Get, moderation, flags, specified, comment., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getFlagsOnComment(communityId, commentId,
        visibility)

> Get the moderation flags with specified visibility on a comment.

### getFlagsOnComment(communityId, commentId, visibility)

Get the moderation flags with specified visibility on a comment.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags getFlagsOnComment(String communityId, String commentId, ConnectApi.CommunityFlagVisibility visibility)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a comment.

visibility

Type: [ConnectApi.​CommunityFlag​Visibility](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagVisibility)

Visibility behavior of a flag for various user types.

-   ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.
-   SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item.

#### Return Value

Type: [ConnectApi.​ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To get moderation flags, the context user must have the Moderate Experiences Feeds permission.