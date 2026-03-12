---
title: "Post a Batch of Feed Elements"
domain: apex-guide
topic: post-a-batch-of-feed-elements
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.408Z
estimatedTokens: 104
keywords: [Post, Batch, Feed, Elements, trigger, call, bulk, post, feeds, accounts.]
---

# Post a Batch of Feed Elements

> Use a trigger to call a method to bulk post to the feeds of accounts.

# Post a Batch of Feed Elements

Use a trigger to call a method to bulk post to the feeds of accounts.

This trigger calls [postFeedElementBatch(communityId, feedElements)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElementBatch_1) to bulk post to the feeds of newly inserted accounts.

```

```

## Code Examples

```apex
trigger postFeedItemToAccount on Account (after insert) {
    Account[] accounts = Trigger.new;
    
    // Bulk post to the account feeds.

    List<ConnectApi.BatchInput> batchInputs = new List<ConnectApi.BatchInput>();

    for (Account a : accounts) {
        ConnectApi.FeedItemInput input = new ConnectApi.FeedItemInput();

        input.subjectId = a.id;
        
        ConnectApi.MessageBodyInput body = new ConnectApi.MessageBodyInput();
        body.messageSegments = new List<ConnectApi.MessageSegmentInput>();

        ConnectApi.TextSegmentInput textSegment = new ConnectApi.TextSegmentInput();
        textSegment.text = 'Let\'s win the ' + a.name + ' account.';

        body.messageSegments.add(textSegment);
        input.body = body;

        ConnectApi.BatchInput batchInput = new ConnectApi.BatchInput(input);
        batchInputs.add(batchInput);
    }

    ConnectApi.ChatterFeeds.postFeedElementBatch(Network.getNetworkId(), batchInputs);
}
```
