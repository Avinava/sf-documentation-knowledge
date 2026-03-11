---
title: "setCommentIsVerifiedByAnonymized(communityId, commentId,
      isVerified, isVerifiedByAnonymized)"
domain: apex-reference
topic: setcommentisverifiedbyanonymizedcommunityid-commentid-isverified-isverifiedbyano
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [setCommentIsVerifiedByAnonymized, communityId, commentId, isVerified, isVerifiedByAnonymized, Mark, comment, verified, anonymous, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# setCommentIsVerifiedByAnonymized(communityId, commentId,
      isVerified, isVerifiedByAnonymized)

> Mark a comment as verified by an anonymous user.

### setCommentIsVerifiedByAnonymized(communityId, commentId, isVerified, isVerifiedByAnonymized)

Mark a comment as verified by an anonymous user.

#### API Version

43.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.VerifiedCapability setCommentIsVerifiedByAnonymized(String communityId, String commentId, Boolean isVerified, Boolean isVerifiedByAnonymized)

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

isVerifiedByAnonymized

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to mark the comment as verified by an anonymous user (true).

If a user previously verified a comment and then requested the activity to be deleted, use isVerifiedByAnonymized to maintain the verification and anonymize the value of lastVerifiedByUser.

You can’t set isVerified and isVerifiedByAnonymized to true at the same time. isVerifiedByAnonymized can be set to true only if isVerified is already set to true.

You can’t set isVerifiedByAnonymized to false. After isVerifiedByAnonymized is set to true, it can be undone only when another user marks the comment as unverified and then reverifies the comment.

#### Return Value

Type: [ConnectApi.VerifiedCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_verified_capability.htm#apex_connectapi_output_verified_capability "If a comment has this capability, users with permission can mark it as verified or unverified.")

If the comment doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").