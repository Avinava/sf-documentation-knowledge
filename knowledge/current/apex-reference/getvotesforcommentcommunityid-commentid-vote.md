---
title: "getVotesForComment(communityId, commentId,
    vote)"
domain: apex-reference
topic: getvotesforcommentcommunityid-commentid-vote
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.226Z
keywords: [getVotesForComment, communityId, commentId, vote, Get, first, page, users, who, upvoted, downvoted, comment., API, Version, Available, Guest, Users, Requires, Chatter, Signature]
---

# getVotesForComment(communityId, commentId,
    vote)

> Get the first page of users who upvoted or downvoted a
    comment.

### getVotesForComment(communityId, commentId, vote)

Get the first page of users who upvoted or downvoted a comment.

#### API Version

42.0

#### Available to Guest Users

42.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.VotePage getVotesForComment(String communityId, String commentId, ConnectApi.UpDownVoteValue vote)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the comment.

vote

Type: [ConnectApi.UpDownVoteValue](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#UpDownVoteEnum)

Specifies the value of the vote for the feed element. Values are:

-   Down
-   Up

You can’t specify None.

#### Return Value

Type: [ConnectApi.VotePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_vote_collection.htm#apex_connectapi_output_vote_collection "A page of upvotes or downvotes on a feed element or comment.")

If the comment doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").