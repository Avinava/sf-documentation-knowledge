---
title: "ConnectApi.MessageSegmentInput"
domain: apex-reference
topic: connectapimessagesegmentinput
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:25.148Z
estimatedTokens: 792
keywords: [ConnectApi.MessageSegmentInput, Used, add, rich, message, segments, feed, items, comments.]
---

# ConnectApi.MessageSegmentInput

> Used to add rich message segments to feed items and comments.

# ConnectApi.MessageSegmentInput

Used to add rich message segments to feed items and comments.

This class is abstract and has no public constructor. You can make an instance only of a subclass.

Superclass for:

-   [ConnectApi.EntityLinkSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_entity_link_segment.htm "An entity link segment.")
-   [ConnectApi.HashtagSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_hashtag.htm "Include a hashtag in a feed item or comment.")
-   [ConnectApi.InlineImageSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_inline_image_segment.htm "An inline image segment.")
-   [ConnectApi.LinkSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_linkMsgSeg.htm "Include a link segment in a feed item or comment.")
-   [ConnectApi.MarkupBeginSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_markup_begin_segment.htm "The beginning tag for rich text markup.")
-   [ConnectApi.MarkupEndSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_markup_end_segment.htm "The end tag for rich text markup.")
-   [ConnectApi.MentionSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_mentionMsgSeg.htm "Include an @mention of a user or group in a feed post or comment. When creating a feed post or comment, you can include up to 25 mentions.")
-   [ConnectApi.TextSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_TxtMsgSeg.htm "Include a text segment in a feed item or comment.")

Use the [ConnectApiHelper repository on GitHub](https://github.com/forcedotcom/ConnectApiHelper "HTML (New Window)") to simplify many of the tasks accomplished with ConnectApi.MessageSegmentInput, such as posting with inline images, rich text, and mentions.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| type | ConnectApi.​MessageSegment​Type | The type of message segment. Values are:EntityLinkFieldChangeFieldChangeNameFieldChangeValueHashtagInlineImageLinkMarkupBeginMarkupEndMentionMoreChangesResourceLinkText | Required | 23.0 |

#### See Also

-   [Edit a Comment](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_edit_comment.htm "Edit a Comment - HTML (New Window)")

-   [Edit a Feed Element](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_edit_feed_element.htm "Edit a Feed Element - HTML (New Window)")

-   [Edit a Question Title and Post](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_edit_question_title_post.htm "Edit a Question Title and Post - HTML (New Window)")

-   [Post a Rich-Text Feed Element with Inline Image](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_post_feed_element_richtext_inlineimage.htm "Post a Rich-Text Feed Element with Inline Image - HTML (New Window)")

-   [ConnectApi.MessageBodyInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_msgBody.htm "Add rich messages to feed items and comments.")

## Related Topics

- ConnectApi.EntityLinkSegmentInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_entity_link_segment.htm)
- ConnectApi.HashtagSegmentInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_hashtag.htm)
- ConnectApi.InlineImageSegmentInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_inline_image_segment.htm)
- ConnectApi.LinkSegmentInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_linkMsgSeg.htm)
- ConnectApi.MarkupBeginSegmentInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_markup_begin_segment.htm)
- ConnectApi.MarkupEndSegmentInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_markup_end_segment.htm)
- ConnectApi.MentionSegmentInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_mentionMsgSeg.htm)
- ConnectApi.TextSegmentInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_TxtMsgSeg.htm)
- ConnectApi.​MessageSegment​Type (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.MessageBodyInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_msgBody.htm)
