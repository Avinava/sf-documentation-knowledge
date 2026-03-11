---
title: "voteOnFeedPoll(communityId, feedItemId,
    myChoiceId)"
domain: apex-reference
topic: voteonfeedpollcommunityid-feeditemid-mychoiceid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.232Z
keywords: [voteOnFeedPoll, communityId, feedItemId, myChoiceId, Vote, change, vote, feed, poll., API, Version, Important, Requires, Chatter, Signature, Parameters, Return, Value]
---

# voteOnFeedPoll(communityId, feedItemId,
    myChoiceId)

> Vote or change your vote on a feed poll.

### voteOnFeedPoll(communityId, feedItemId, myChoiceId)

Vote or change your vote on a feed poll.

#### API Version

28.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [voteOnFeedElementPoll(communityId, feedElementId, myChoiceId)](#apex_ConnectAPI_ChatterFeeds_voteOnFeedElementPoll_1 "Vote on a poll or change your vote on a poll.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedPoll voteOnFeedPoll(String communityId, String feedItemId, String myChoiceId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed item that is associated with the poll.

myChoiceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the item in the poll you’re voting for.

#### Return Value

Type: [ConnectApi.FeedPoll](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_FeedPoll.htm "Attachment of ConnectApi.FeedItem objects where the type property is PollPost.")