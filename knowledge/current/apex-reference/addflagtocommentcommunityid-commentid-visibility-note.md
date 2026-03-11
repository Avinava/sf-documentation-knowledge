---
title: "addFlagToComment(communityId, commentId, visibility,
      note)"
domain: apex-reference
topic: addflagtocommentcommunityid-commentid-visibility-note
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.909Z
keywords: [addFlagToComment, communityId, commentId, visibility, note, Add, moderation, flag, specified, comment., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# addFlagToComment(communityId, commentId, visibility,
      note)

> Add a moderation flag of the specified visibility with a note to a
      comment.

### addFlagToComment(communityId, commentId, visibility, note)

Add a moderation flag of the specified visibility with a note to a comment.

#### API Version

38.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags addFlagToComment(String communityId, String commentId, ConnectApi.CommunityFlagVisibility visibility, String note)

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

note

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A note of up to 4,000 characters about the flag.

#### Return Value

Type: [ConnectApi.​ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To add a flag to a comment, Allow members to flag content must be selected for an Experience Cloud site.