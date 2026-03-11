---
title: "Post a Batch of Feed Elements with a New (Binary) File"
domain: apex-guide
topic: post-a-batch-of-feed-elements-with-a-new-binary-file
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.886Z
keywords: [Post, Batch, Feed, Elements, New, Binary, File, Important]
---

# Post a Batch of Feed Elements with a New (Binary) File

# Post a Batch of Feed Elements with a New (Binary) File

Use a trigger to call a method to bulk post a new file to the feeds of accounts.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

This example is valid in version 32.0–35.0. In version 36.0 and later, you can’t post a batch of feed elements with a new file in the same call. Upload the file to Salesforce first, and then specify the uploaded file when posting a batch of feed elements.

This trigger calls [postFeedElementBatch(communityId, feedElements)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElementBatch_1) to bulk post to the feeds of newly inserted accounts. Each post has a new file (binary) attachment.

```

```