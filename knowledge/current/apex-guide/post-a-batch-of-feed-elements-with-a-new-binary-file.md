---
title: "Post a Batch of Feed Elements with a New (Binary) File"
domain: apex-guide
topic: post-a-batch-of-feed-elements-with-a-new-binary-file
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.373Z
estimatedTokens: 218
keywords: [Post, Batch, Feed, Elements, New, Binary, File, trigger, call, bulk, feeds, accounts]
---

# Post a Batch of Feed Elements with a New (Binary) File

> Use a trigger to call a method to bulk post a new file to the feeds of
        accounts.

# Post a Batch of Feed Elements with a New (Binary) File

Use a trigger to call a method to bulk post a new file to the feeds of accounts.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

This example is valid in version 32.0–35.0. In version 36.0 and later, you can’t post a batch of feed elements with a new file in the same call. Upload the file to Salesforce first, and then specify the uploaded file when posting a batch of feed elements.

This trigger calls [postFeedElementBatch(communityId, feedElements)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElementBatch_1) to bulk post to the feeds of newly inserted accounts. Each post has a new file (binary) attachment.

```

```

## Code Examples

```apex
trigger postFeedItemToAccountWithBinary on Account (after insert) {
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

        ConnectApi.ContentCapabilityInput contentInput = new ConnectApi.ContentCapabilityInput();
        contentInput.title = 'Title';

        ConnectApi.FeedElementCapabilitiesInput capabilities = new ConnectApi.FeedElementCapabilitiesInput();
        capabilities.content = contentInput;

        input.capabilities = capabilities;

        String text = 'We are words in a file.';
        Blob myBlob = Blob.valueOf(text);
        ConnectApi.BinaryInput binInput = new ConnectApi.BinaryInput(myBlob, 'text/plain', 'fileName');

        ConnectApi.BatchInput batchInput = new ConnectApi.BatchInput(input, binInput);

        batchInputs.add(batchInput);
    }

    ConnectApi.ChatterFeeds.postFeedElementBatch(Network.getNetworkId(), batchInputs);
```
