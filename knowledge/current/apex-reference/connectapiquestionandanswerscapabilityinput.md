---
title: "ConnectApi.QuestionAndAnswersCapabilityInput"
domain: apex-reference
topic: connectapiquestionandanswerscapabilityinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.623Z
estimatedTokens: 376
keywords: [edit, question, feed, element, best, answer]
---

# ConnectApi.QuestionAndAnswersCapabilityInput

> Create or edit a question feed element or set the best answer of the
            existing question feed element.

# ConnectApi.QuestionAndAnswersCapabilityInput

Create or edit a question feed element or set the best answer of the existing question feed element.

This class is a subclass of [ConnectApi.FeedElementCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capability.htm#apex_connectapi_input_feed_element_capability "A feed element capability.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| bestAnswerId | String | A comment ID to use as a best answer for a question feed element. The best answer comment must already exist on the question feed element. | Required to update a feed element.Not supported when posting a feed element. | 32.0 |
| questionTitle | String | Title for a question feed element.To edit the title of a question, use updateFeedElement(communityId, feedElementId, feedElement). Editing question titles is supported in version 34.0 and later. | Required to post a feed element.Not supported when updating a feed element. | 32.0 |

#### See Also

-   [Edit a Question Title and Post](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_edit_question_title_post.htm "Edit a Question Title and Post - HTML (New Window)")

-   [ConnectApi.FeedElementCapabilitiesInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capabilities.htm "A container for all capabilities that can be included when creating a feed element.")

## Related Topics

- ConnectApi.FeedElementCapabilityInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capability.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- updateFeedElement(communityId, feedElementId, feedElement) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm)
- ConnectApi.FeedElementCapabilitiesInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capabilities.htm)
