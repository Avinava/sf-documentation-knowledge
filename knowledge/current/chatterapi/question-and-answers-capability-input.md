---
title: "Question and Answers Capability Input"
domain: chatterapi
topic: question-and-answers-capability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.646Z
estimatedTokens: 303
keywords: [Question, Answers, Capability, Input, edit, feed, element, best, answer]
---

# Question and Answers Capability Input

> Create or edit a question feed element or set the best answer of the existing question
    feed element.

# Question and Answers Capability Input

Create or edit a question feed element or set the best answer of the existing question feed element.

Root XML tag

```

```

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| bestAnswerId | String | A comment ID to use as a best answer for a question feed element. The best answer comment must already exist on the question feed element. | Required to PATCH the best answer.Not supported in POST requests. | 32.0 |
| questionTitle | String | Title for a question feed element.To edit the title of a question, make a PATCH request to /chatter/feed-elements​/feedElementId. Editing question titles is supported in version 34.0 and later. | Required to POST or PATCH a question. | 32.0 |

#### See Also

-   [Edit a Question Title and Post](atlas.en-us.chatterapi.meta/chatterapi/quickreference_edit_question_title_and_post.htm "Edit a question title and post.")

-   [Feed Element Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm "A container for all capabilities that can be included when creating a feed element.")

## Code Examples

```
<questionAndAnswersCapability>
   <bestAnswerId>0D7D00000000lMAKAY</bestAnswerId>
</questionAndAnswersCapability>
```

```
{
   "bestAnswerId": "0D7D00000000lMAKAY"
}
```

## Related Topics

- Edit a Question Title and Post (atlas.en-us.chatterapi.meta/chatterapi/quickreference_edit_question_title_and_post.htm)
- Feed Element Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
