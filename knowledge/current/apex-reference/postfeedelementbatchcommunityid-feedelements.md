---
title: "postFeedElementBatch(communityId,
        feedElements)"
domain: apex-reference
topic: postfeedelementbatchcommunityid-feedelements
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.226Z
keywords: [postFeedElementBatch, communityId, feedElements, Post, list, feed, elements., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, Example]
---

# postFeedElementBatch(communityId,
        feedElements)

> Post a list of feed elements.

### postFeedElementBatch(communityId, feedElements)

Post a list of feed elements.

#### API Version

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BatchResult\[\] postFeedElementBatch(String communityId, List<ConnectApi.BatchInput> feedElements)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElements

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[ConnectApi.BatchInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_batch.htm "Construct a set of inputs to be passed into a method at the same time.")\>

The list can contain up to 500 ConnectApi.BatchInput objects. In the ConnectApi.BatchInput constructor, the input object must be a concrete instance of the abstract [ConnectApi.FeedElementInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.") class.

#### Return Value

Type: [ConnectApi.BatchResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result.htm "The result of an operation returned by a batch method.")\[\]

The ConnectApi.BatchResult.getResult() method returns a [ConnectApi.FeedElement](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.") object.

The returned objects correspond to each of the input objects and are returned in the same order as the input objects.

The method call fails only if an error occurs that affects the entire operation (such as a parsing failure). If an individual object causes an error, the error is embedded within the ConnectApi.BatchResult list.

#### Usage

Use this method to post a list of feed elements efficiently. Create a list containing up to 500 objects and insert them all for the cost of one DML statement.

In version 36.0 and later, you can attach only one already uploaded file to each post. The [ConnectApi.BatchInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_batch.htm "Construct a set of inputs to be passed into a method at the same time.") has three constructors, but the postFeedElementBatch method supports only ConnectApi.BatchInput(Object input) in version 35.0 and later. This constructor doesn’t support a binary input.

In version 32.0–35.0, this method supports both ConnectApi.BatchInput(Object input) and ConnectApi.BatchInput(Object input, ConnectApi.BinaryInput binary) constructors. The ConnectApi.BatchInput(Object input, ConnectApi.BinaryInput binary) constructor allows for a single binary input.

In each constructor, the input object must be an instance of [ConnectApi.FeedElementInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.").

#### Example

This trigger bulk posts to the feeds of newly inserted accounts.

```

```