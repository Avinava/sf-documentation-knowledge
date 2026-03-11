---
title: "setCommentIsVerified(communityId, commentId,
      isVerified)"
domain: apex-reference
topic: setcommentisverifiedcommunityid-commentid-isverified
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [setCommentIsVerified, communityId, commentId, isVerified, Mark, comment, verified, unverified., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# setCommentIsVerified(communityId, commentId,
      isVerified)

> Mark a comment as verified or unverified.

### setCommentIsVerified(communityId, commentId, isVerified)

Mark a comment as verified or unverified.

#### API Version

41.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.VerifiedCapability setCommentIsVerified(String communityId, String commentId, Boolean isVerified)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the comment on a question post. Only one comment on a question post can be marked as verified.

isVerified

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to mark the comment as verified (true) or unverified (false).

Only verified comments can be marked as unverified, and only unverified comments can be marked as verified.

#### Return Value

Type: [ConnectApi.VerifiedCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_verified_capability.htm#apex_connectapi_output_verified_capability "If a comment has this capability, users with permission can mark it as verified or unverified.")

If the comment doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").