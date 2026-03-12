---
title: "Survey Selection Question Output"
domain: chatterapi
topic: survey-selection-question-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.293Z
estimatedTokens: 305
keywords: [Survey, Selection, Question, Output, representation, rating, single-selection, multiple-selection]
---

# Survey Selection Question Output

> Output representation of the details of the boolean, rating,
      single-selection, or multiple-selection question on the survey page.

# Survey Selection Question Output

Output representation of the details of the boolean, rating, single-selection, or multiple-selection question on the survey page.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description for the survey question. | Small, 56.0 | 56.0 |
| isResponse​Required | Boolean | Indicates whether the response to the question is mandatory. | Small, 56.0 | 56.0 |
| label | String | Label of the survey question. | Small, 56.0 | 56.0 |
| maxChoices​Allowed | Integer | Maximum number of choices for a multiple-choice question. | Small, 65.0 | 65.0 |
| name | String | API name of the survey question. | Small, 56.0 | 56.0 |
| questionChoices | Survey Selection Question Choice Output[] | Choices that are available for a boolean, rating, single-selection, or multiple-selection question in a survey. | Small, 56.0 | 56.0 |
| questionType | String | Type of survey question. | Small, 56.0 | 56.0 |
| responseData​Type | String | Data type of the survey question. | Small, 56.0 | 56.0 |
| responseValues | String[] | List of survey response values for a selected question. | Small, 57.0 | 57.0 |

## Related Topics

- Survey Selection Question Choice Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_survey_selection_question_choice_output.htm)
