---
title: "Survey Selection Question Response Input"
domain: chatterapi
topic: survey-selection-question-response-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.931Z
estimatedTokens: 157
keywords: [Survey, Selection, Question, Input, representation, rating, multiple]
---

# Survey Selection Question Response Input

> Input representation of the details of the response to a boolean,
      rating, single selection, or a multiple selection question on the survey
    page.

# Survey Selection Question Response Input

Input representation of the details of the response to a boolean, rating, single selection, or a multiple selection question on the survey page.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The API name of survey question. | Required | 56.0 |
| questionType | String | The type of survey question. | Required | 56.0 |
| responses | Survey Selection Question Choice Input[] | The responses to a Boolean, rating, single selection, or multiple selection question in a survey. | Required | 56.0 |

## Related Topics

- Survey Selection Question Choice Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_survey_selection_question_choice_input.htm)
