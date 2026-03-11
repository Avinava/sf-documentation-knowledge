---
title: "getFeedElementPoll(communityId,
    feedElementId)"
domain: apex-reference
topic: getfeedelementpollcommunityid-feedelementid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.223Z
keywords: [getFeedElementPoll, communityId, feedElementId, Get, poll, associated, feed, element., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value, Note]
---

# getFeedElementPoll(communityId,
    feedElementId)

> Get the poll associated with a feed element.

### getFeedElementPoll(communityId, feedElementId)

Get the poll associated with a feed element.

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.PollCapability getFeedElementPoll(String communityId, String feedElementId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

#### Return Value

Type: [ConnectApi.PollCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_poll_capability.htm#apex_connectapi_output_poll_capability "If a feed element has this capability, it includes a poll.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Triggers on FeedItem objects run before their attachment and capabilities information is saved, which means that ConnectApi.FeedItem.attachment information and ConnectApi.FeedElement.capabilities information may not be available in the trigger.