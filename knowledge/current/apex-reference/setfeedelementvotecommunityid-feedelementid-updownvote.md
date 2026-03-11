---
title: "setFeedElementVote(communityId, feedElementId,
      upDownVote)"
domain: apex-reference
topic: setfeedelementvotecommunityid-feedelementid-updownvote
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [setFeedElementVote, communityId, feedElementId, upDownVote, Upvote, downvote, feed, element., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# setFeedElementVote(communityId, feedElementId,
      upDownVote)

> Upvote or downvote a feed element.

### setFeedElementVote(communityId, feedElementId, upDownVote)

Upvote or downvote a feed element.

#### API Version

41.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UpDownVoteCapability setFeedElementVote(String communityId, String feedElementId, ConnectApi.UpDownVoteCapabilityInput upDownVote)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

upDownVote

Type: [ConnectApi.UpDownVoteCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_up_down_vote_capability.htm#apex_connectapi_input_up_down_vote_capability "Upvote or downvote a feed element or a comment.")

A ConnectApi.UpDownVoteCapabilityInput object that includes your vote.

#### Return Value

Type: [ConnectApi.UpDownVoteCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_up_down_vote_capability.htm#apex_connectapi_output_up_down_vote_capability "If a feed post or comment has this capability, users can upvote or downvote it.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").