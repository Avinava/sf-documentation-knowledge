---
title: "getFeedItemBatch(communityId, feedItemIds)"
domain: apex-reference
topic: getfeeditembatchcommunityid-feeditemids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.231Z
keywords: [getFeedItemBatch, communityId, feedItemIds, Get, list, feed, items., API, Version, Important, Requires, Chatter, Signature, Parameters, Return, Value, Example]
---

# getFeedItemBatch(communityId, feedItemIds)

> Get a list of feed items.

### getFeedItemBatch(communityId, feedItemIds)

Get a list of feed items.

#### API Version

31.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [getFeedElementBatch(communityId, feedElementIds)](#apex_ConnectAPI_ChatterFeeds_getFeedElementBatch_1 "Get a list of feed elements.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BatchResult\[\] getFeedItemBatch(String communityId, List<String\> feedItemIds)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedItemIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of up to 500 feed item IDs.

#### Return Value

Type: [ConnectApi.BatchResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result.htm "The result of an operation returned by a batch method.")\[\]

The ConnectApi.BatchResult.getResult() method returns a ConnectApi.FeedItem object and errors for feed items that didn’t load.

#### Example

```

```