---
title: "Post a Feed Element with a New File (Binary) Attachment"
domain: apex-guide
topic: post-a-feed-element-with-a-new-file-binary-attachment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.415Z
estimatedTokens: 187
keywords: [Post, Feed, Element, New, File, Binary, Attachment, Call, post, feed, element, new, file., Important]
---

# Post a Feed Element with a New File (Binary) Attachment

> Call a method to post a feed element with a new file.

# Post a Feed Element with a New File (Binary) Attachment

Call a method to post a feed element with a new file.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

In version 36.0 and later, you can’t post a feed element with a new file in the same call. Upload files to Salesforce first, and then specify existing files when posting a feed element.

This example calls [postFeedElement(communityId, feedElement, feedElementFileUpload)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElement_2) to post a feed item with a new file (binary) attachment.

```

```

## Code Examples

```
ConnectApi.FeedItemInput input = new ConnectApi.FeedItemInput();
input.subjectId = 'me';

ConnectApi.ContentCapabilityInput contentInput = new ConnectApi.ContentCapabilityInput();
contentInput.title = 'Title';

ConnectApi.FeedElementCapabilitiesInput capabilities = new ConnectApi.FeedElementCapabilitiesInput();
capabilities.content = contentInput;

input.capabilities = capabilities;

String text = 'These are the contents of the new file.';
Blob myBlob = Blob.valueOf(text);
ConnectApi.BinaryInput binInput = new ConnectApi.BinaryInput(myBlob, 'text/plain', 'fileName');

ConnectApi.ChatterFeeds.postFeedElement(Network.getNetworkId(), input, binInput);
```
