---
title: "voteOnFeedElementPoll(communityId, feedElementId,
      myChoiceId)"
domain: apex-reference
topic: voteonfeedelementpollcommunityid-feedelementid-mychoiceid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [voteOnFeedElementPoll, communityId, feedElementId, myChoiceId, Vote, poll, change, vote, poll., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Example]
---

# voteOnFeedElementPoll(communityId, feedElementId,
      myChoiceId)

> Vote on a poll or change your vote on a poll.

### voteOnFeedElementPoll(communityId, feedElementId, myChoiceId)

Vote on a poll or change your vote on a poll.

#### API Version

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.PollCapability voteOnFeedElementPoll(String communityId, String feedElementId, String myChoiceId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

myChoiceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the poll item you’re voting for. The key prefix for poll items is 09A.

#### Return Value

Type: [ConnectApi.PollCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_poll_capability.htm#apex_connectapi_output_poll_capability "If a feed element has this capability, it includes a poll.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Example

```

```