---
title: "ConnectApi.TextSegmentInput"
domain: apex-reference
topic: connectapitextsegmentinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:36.696Z
keywords: [ConnectApi.TextSegmentInput, See]
---

# ConnectApi.TextSegmentInput

# ConnectApi.TextSegmentInput

Include a text segment in a feed item or comment.

Subclass of [ConnectApi.MessageSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_messageSegmentInput.htm "Used to add rich message segments to feed items and comments.").

| Property | Type | Description | Available Version |
| --- | --- | --- | --- |
| text | String | Plain text for this segment. If hashtags or links are detected in text, they’re included in the comment as hashtag and link segments. Mentions aren’t detected in text and aren’t separated out of the text. Mentions require ConnectApi.MentionSegmentInput. | 28.0 |

#### See Also

-   [Edit a Comment](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_edit_comment.htm "Edit a Comment - HTML (New Window)")
    
-   [Edit a Feed Element](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_edit_feed_element.htm "Edit a Feed Element - HTML (New Window)")
    
-   [Edit a Question Title and Post](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_edit_question_title_post.htm "Edit a Question Title and Post - HTML (New Window)")
    
-   [Post a Rich-Text Feed Element with Inline Image](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_post_feed_element_richtext_inlineimage.htm "Post a Rich-Text Feed Element with Inline Image - HTML (New Window)")
    
-   [ConnectApi.MessageBodyInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_msgBody.htm "Add rich messages to feed items and comments.")