---
title: "Feed Item Input"
domain: chatterapi
topic: feed-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.687Z
estimatedTokens: 1483
keywords: [Feed, Item, Input]
---

# Feed Item Input

> Feed item input.

# Feed Item Input

Feed item input.

Root XML tag

<feedItem>

JSON

The following example attaches a poll to a feed item:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attachment | Depends on type. | You can specify only one of these values in the attachment parameter. Values are:Attachment Input: Canvas App (v29.0–31.0)Attachment Input: Existing Content (v23.0–31.0)Attachment Input: Feed Poll (v26.0–31.0)Attachment Input: Link (v23.0–31.0)Attachment Input: New File Upload (v23.0–31.0)ImportantAs of API version 32.0, use the capabilities property. | Optional |  |
| body | Message Body Input | Description of message body. Feed item and comment bodies have a 10,000 character limit. Because this limit can change, we recommend that clients make a describeSObjects() call on the FeedItem or FeedComment object. To determine the maximum number of allowed characters, look at the length of the Body or CommentBody field. The body can contain up to 25 mentions.If you specify originalFeedElementId to share a feed item, use the body property to add the first comment to the feed item.To edit this property in a feed item, make a PATCH request to /chatter/feed-elements​/feedElementId. Editing feed posts is supported in version 34.0 and later. | Required unless the feed item has a content capability or a link capability | 23.0 |
| capabilities | Feed Element Capabilities Input | The capabilities that define the behavior of this feed element. | Optional | 31.0 |
| isBookmarked​ByCurrentUser | Boolean | Specifies whether to bookmark the new feed item for the user (true) or not (false). The default value is false.ImportantAs of API version 32.0, use the capabilities.bookmarks.​isBookmarkedByCurrentUser property. | Optional | 24.0–31.0 |
| feedElementType | String | The type of feed element this input represents.The only valid value is FeedItem. | Required when creating a feed item (POST)Optional when updating a feed item (PATCH) | 31.0 |
| originalFeed​ElementId | String | To share a feed element, specify its 18-character ID.NoteYou can’t share a post and upload a file in the same request body.ImportantIn API version 39.0 and later, use the capabilities.feedEntity​Share.feedEntityId property. | Optional | 31.0–38.0 |
| originalFeedItemId | String | To share a feed item, specify its 18-character ID.ImportantIn API version 32.0–38.0, use the originalFeedElementId property. In API version 39.0 and later, use the capabilities.feedEntity​Share.feedEntityId property. | Optional | 24.0–31.0 |
| subjectId | String | The ID of the parent this feed element is being posted to. This value can be the ID of a user, group, or record, or the string me to indicate the context user.In version 45.0 and later, you can move a feed element from one public group to another by setting this property to the ID of the new public group. You can’t include or change any other properties when moving a feed element. | Required | 31.0 |
| visibility | String | Who can see the post. Valid values are:InternalUsers—If digital experiences is enabled, only members of the default, internal site can see the feed item.AllUsers—If digital experiences is enabled, all members of the site can see the feed item.Default values:For external users, the default value is AllUsers. External users must use this value to see their posts.For internal users, the default value is InternalUsers. Internal users can accept this value or use the value AllUsers to allow external users to see their posts.If the parent of the feed item is a user, group, or direct message, the visibility of the feed item must be AllUsers. | Optional | 26.0 |

#### See Also

-   [Post a Feed Item](atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_feed_item.htm "Post a feed item in Chatter.")

-   [Post a Feed Element and Include Files from Salesforce](atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_feed_element_content.htm "Post a feed element with Salesforce files in Chatter.")

-   [Post a Rich-Text Feed Element](atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_feed_element_rich_text.htm "Post a rich-text feed element in Chatter.")

-   [Post a Feed Element with a Code Block](atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_feed_element_code_snippet.htm "Post a feed element with a code block in Chatter.")

-   [Post a Feed Element with an Inline Image](atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_feed_element_inline_image.htm "Post a feed element with an inline image in Chatter.")

-   [Post an @Mention](atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_comment_or_feed_item_with_mention.htm "Post an @mention in a Chatter feed item or comment.")

-   [Post Multiple @Mentions](atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_comment_or_feed_item_with_mentions.htm "Post up to 25 mentions in a Chatter feed item or comment.")

-   [Define Action Links and Post with a Feed Element](atlas.en-us.chatterapi.meta/chatterapi/quickreference_define_post_action_link.htm "Define actions links and post with a feed element.")

-   [Define Action Links in a Template and Post with a Feed Element](atlas.en-us.chatterapi.meta/chatterapi/quickreference_define_post_action_link_template.htm "Define action links in a template and post with a feed element.")

-   [Edit a Feed Post](atlas.en-us.chatterapi.meta/chatterapi/quickreference_edit_feed_post.htm "Edit a feed post in Chatter.")

-   [Edit a Question Title and Post](atlas.en-us.chatterapi.meta/chatterapi/quickreference_edit_question_title_and_post.htm "Edit a question title and post.")

-   [Share a Feed Item](atlas.en-us.chatterapi.meta/chatterapi/quickreference_share_feed_item.htm "Share a Chatter feed item.")

-   [Post to a Group](atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_to_group.htm "Post to a Chatter group.")

## Code Examples

```
{
   "body":{
      "messageSegments":[
         {
            "type":"Text",
            "text":"When should we meet for release planning?"
         }
      ]
   },
   "capabilities":{
      "poll":{
         "choices":[
            "Monday",
            "Tuesday"
         ]
      }
   },
   "feedElementType":"FeedItem",
   "subjectId":"me"
}
```

## Related Topics

- Attachment Input: Canvas App (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_attach_canvas.htm)
- Attachment Input: Existing Content (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_attach_existing_content.htm)
- Attachment Input: Feed Poll (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_attach_poll.htm)
- Attachment Input: Link (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_attach_link.htm)
- Attachment Input: New File Upload (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_attach_new_file.htm)
- Message Body
                                    Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Feed Element
                                    Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
- Post a Feed Item (atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_feed_item.htm)
- Post a Feed Element and Include Files from Salesforce (atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_feed_element_content.htm)
- Post a Rich-Text Feed Element (atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_feed_element_rich_text.htm)
