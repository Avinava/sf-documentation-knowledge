---
title: "Post a Feed Element"
domain: apex-guide
topic: post-a-feed-element
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.882Z
keywords: [Post, Feed, Element]
---

# Post a Feed Element

# Post a Feed Element

Make a call to post a feed element.

Call [postFeedElement(communityId, subjectId, feedElementType, text)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElement_1) to post a string of text.

```

```

The second parameter, subjectId is the ID of the parent this feed element is posted to. The value can be the ID of a user, group, or record, or the string me to indicate the context user.