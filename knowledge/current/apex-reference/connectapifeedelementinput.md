---
title: "ConnectApi.FeedElementInput"
domain: apex-reference
topic: connectapifeedelementinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.161Z
keywords: [ConnectApi.FeedElementInput, See]
---

# ConnectApi.FeedElementInput

# ConnectApi.FeedElementInput

Feed elements are the top-level items that a feed contains. Feeds are feed element containers.

This class is abstract and has no public constructor. You can make an instance only of a subclass.

Superclass of [ConnectApi.FeedItemInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feedItem.htm "Used to create rich feed items, for example, feed items that include @mentions or files.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| capabilities | ConnectApi.​FeedElement​CapabilitiesInput | The capabilities that define auxiliary information on this feed element. | Optional | 31.0 |
| feedElementType | ConnectApi.​FeedElementType | The type of feed element this input represents. | Required when creating a feed elementOptional when updating a feed element | 31.0 |
| subjectId | String | The ID of the parent this feed element is being posted to. This value can be the ID of a user, group, or record, or the string me to indicate the context user.In version 45.0 and later, you can move a feed element from one public group to another by setting this property to the ID of the new public group. You can’t include or change any other properties when moving a feed element. | Required | 31.0 |

#### See Also

-   [Post a Feed Element with a Mention](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_post_feed_element_mention.htm "Post a Feed Element with a Mention - HTML (New Window)")
    
-   [Post a Feed Element with Existing Content](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_post_feed_element_content.htm "Post a Feed Element with Existing Content - HTML (New Window)")
    
-   [Post a Feed Element with a New File (Binary) Attachment](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_post_feed_element_binary.htm "Post a Feed Element with a New File (Binary) Attachment - HTML (New Window)")
    
-   [Define an Action Link and Post with a Feed Element](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_define_post_action_link.htm "Define an Action Link and Post with a Feed Element - HTML (New Window)")
    
-   [Define an Action Link in a Template and Post with a Feed Element](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_define_post_action_link_template.htm "Define an Action Link in a Template and Post with a Feed Element - HTML (New Window)")
    
-   [Share a Feed Element (in Version 39.0 and Later)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_share_feed_element_comment.htm "Share a Feed Element (in Version 39.0 and Later) - HTML (New Window)")
    
-   [Edit a Feed Element](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_edit_feed_element.htm "Edit a Feed Element - HTML (New Window)")
    
-   [Edit a Question Title and Post](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_edit_question_title_post.htm "Edit a Question Title and Post - HTML (New Window)")
    
-   [Post a Rich-Text Feed Element with Inline Image](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_post_feed_element_richtext_inlineimage.htm "Post a Rich-Text Feed Element with Inline Image - HTML (New Window)")