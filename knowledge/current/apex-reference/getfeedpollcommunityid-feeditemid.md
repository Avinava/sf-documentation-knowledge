---
title: "getFeedPoll(communityId, feedItemId)"
domain: apex-reference
topic: getfeedpollcommunityid-feeditemid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.232Z
keywords: [getFeedPoll, communityId, feedItemId, Get, poll, associated, feed, item., API, Version, Important, Requires, Chatter, Signature, Parameters, Return, Value, Note]
---

# getFeedPoll(communityId, feedItemId)

> Get the poll associated with a feed item.

### getFeedPoll(communityId, feedItemId)

Get the poll associated with a feed item.

#### API Version

28.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [getFeedElementPoll(communityId, feedElementId)](#apex_ConnectAPI_ChatterFeeds_getFeedElementPoll_1 "Get the poll associated with a feed element.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedPoll getFeedPoll(String communityId, String feedItemId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a feed item.

#### Return Value

Type: [ConnectApi.FeedPoll](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_FeedPoll.htm "Attachment of ConnectApi.FeedItem objects where the type property is PollPost.")

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Triggers on FeedItem objects run before their attachment and capabilities information is saved, which means that ConnectApi.FeedItem.attachment information and ConnectApi.FeedElement.capabilities information may not be available in the trigger.