---
title: "Question and Answers Suggestions Resource"
domain: chatterapi
topic: question-and-answers-suggestions-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.296Z
estimatedTokens: 305
keywords: [Question, Answers, Suggestions, Resource]
---

# Question and Answers Suggestions Resource

> Get question and answers suggestions.

# Question and Answers Suggestions Resource

Get question and answers suggestions.

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

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| includeArticles | Boolean | Specify true to include knowledge articles in the search results. To return only questions, specify false. | Optional | 32.0 |
| maxResults | Integer | The maximum number of results to return for each type of item. Possible values are 1–10. The default value is 5. | Optional | 32.0 |
| q | String | Specifies the string to search. The search string must contain at least two characters, not including wildcards. See Wildcards. The maximum length is 255 characters. | Required | 32.0 |
| subjectId | String | Specify a subject ID to search only questions on that object. If the ID is a topic or a user, the ID is ignored. | Optional | 32.0 |

Response body for GET

[Question and Answers Suggestion Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_question_and_answers_suggestion_collection.htm "Question and answers suggestions search result.")

## Code Examples

```
/connect/question-and-answers/suggestions
```

```
/connect/communities/communityId/question-and-answers/suggestions
```

## Related Topics

- Question and Answers Suggestion
              Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_question_and_answers_suggestion_collection.htm)
