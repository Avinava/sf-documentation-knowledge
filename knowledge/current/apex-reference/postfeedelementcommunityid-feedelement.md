---
title: "postFeedElement(communityId, feedElement)"
domain: apex-reference
topic: postfeedelementcommunityid-feedelement
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.226Z
keywords: [postFeedElement, communityId, feedElement, Post, rich-text, feed, element., Include, mentions, hashtag, topics, attach, already, uploaded, files, element, associate, action, link, groups]
---

# postFeedElement(communityId, feedElement)

> Post a rich-text feed element. Include mentions and hashtag topics,
         attach already uploaded files to a feed element, and associate action link groups with a
         feed element. You can also use this method to share a feed element and add a
      comment.

### postFeedElement(communityId, feedElement)

Post a rich-text feed element. Include mentions and hashtag topics, attach already uploaded files to a feed element, and associate action link groups with a feed element. You can also use this method to share a feed element and add a comment.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedElement postFeedElement(String communityId, ConnectApi.FeedElementInput feedElement)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElement

Type: [ConnectApi.FeedElementInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

Specify rich text, including mentions. Optionally, specify a link, a poll, or up to 10 existing files.

#### Return Value

Type: [ConnectApi.FeedElement](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

#### Example for Posting a Feed Element with a Mention

You can post feed elements with mentions two ways. Use the [ConnectApiHelper repository on GitHub](https://github.com/forcedotcom/ConnectApiHelper "HTML (New Window)") to write a single line of code, or use this method example.

```

```

#### Example for Posting a Feed Element with Existing Content

```

```

#### Example for Posting a Rich-Text Feed Element with an Inline Image

You can post rich-text feed elements with inline images and mentions two ways. Use the [ConnectApiHelper repository on GitHub](https://github.com/forcedotcom/ConnectApiHelper "HTML (New Window)") to write a single line of code, or use this method example. In this example, the image file is existing content that has already been uploaded to Salesforce. The post also includes text and a mention.

```

```

#### Example for Posting a Rich-Text Feed Element with a Code Block

```

```

#### Example for Sharing a Feed Element (in Version 39.0 and Later)

```

```

#### Example for Sending a Direct Message

```

```