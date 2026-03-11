---
title: "setCommentVote(communityId, commentId,
    upDownVote)"
domain: apex-reference
topic: setcommentvotecommunityid-commentid-updownvote
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [setCommentVote, communityId, commentId, upDownVote, Upvote, downvote, comment., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# setCommentVote(communityId, commentId,
    upDownVote)

> Upvote or downvote a comment.

### setCommentVote(communityId, commentId, upDownVote)

Upvote or downvote a comment.

#### API Version

41.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UpDownVoteCapability setCommentVote(String communityId, String commentId, ConnectApi.UpDownVoteCapabilityInput upDownVote)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the comment.

upDownVote

Type: [ConnectApi.UpDownVoteCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_up_down_vote_capability.htm#apex_connectapi_input_up_down_vote_capability "Upvote or downvote a feed element or a comment.")

A ConnectApi.UpDownVoteCapabilityInput object that includes your vote.

#### Return Value

Type: [ConnectApi.UpDownVoteCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_up_down_vote_capability.htm#apex_connectapi_output_up_down_vote_capability "If a feed post or comment has this capability, users can upvote or downvote it.")

If the comment doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").