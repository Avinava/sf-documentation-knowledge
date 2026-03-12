---
title: "Feed Elements Capability, Question and Answers"
domain: chatterapi
topic: feed-elements-capability-question-and-answers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.232Z
estimatedTokens: 497
keywords: [Feed, Elements, Capability, Question, Answers, Access, element]
---

# Feed Elements Capability, Question and Answers

> Access question and answers for a feed element, or update question
      and answers on a feed element.

# Feed Elements Capability, Question and Answers

Access question and answers for a feed element, or update question and answers on a feed element.

Resource

```

```

```

```

Available version

32.0

Requires Chatter

Yes

HTTP methods

GET, PATCH

Request body for PATCH

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

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| bestAnswerId | String | A comment ID to use as a best answer for a question feed element. The best answer comment must already exist on the question feed element. | Required | 32.0 |

Response body for GET, PATCH

[Question and Answers Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_question_and_answers_capability.htm#connect_responses_question_and_answers_capability "If a feed element has this capability, it has a question and comments on the feed element are answers to the question.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/question-and-answers
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/question-and-answers
```

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

- Question and Answers Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_question_and_answers_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
