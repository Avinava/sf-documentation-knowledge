---
title: "getVotesForFeedElement(communityId, feedElementId, vote,
      pageParam, pageSize)"
domain: apex-reference
topic: getvotesforfeedelementcommunityid-feedelementid-vote-pageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.226Z
keywords: [getVotesForFeedElement, communityId, feedElementId, vote, pageParam, pageSize, Get, page, users, who, upvoted, downvoted, feed, element., API, Version, Available, Guest, Users, Requires]
---

# getVotesForFeedElement(communityId, feedElementId, vote,
      pageParam, pageSize)

> Get a page of users who upvoted or downvoted a feed
    element.

### getVotesForFeedElement(communityId, feedElementId, vote, pageParam, pageSize)

Get a page of users who upvoted or downvoted a feed element.

#### API Version

42.0

#### Available to Guest Users

42.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.VotePage getVotesForFeedElement(String communityId, String feedElementId, ConnectApi.UpDownVoteValue vote, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

vote

Type: [ConnectApi.UpDownVoteValue](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#UpDownVoteEnum)

Specifies the value of the vote for the feed element. Values are:

-   Down
-   Up

You can’t specify None.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.VotePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_vote_collection.htm#apex_connectapi_output_vote_collection "A page of upvotes or downvotes on a feed element or comment.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").