---
title: "Survey Response Output"
domain: chatterapi
topic: survey-response-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.287Z
estimatedTokens: 333
keywords: [Survey, Output, representation, Submit]
---

# Survey Response Output

> Output representation of the response to the Submit Survey
      request.

# Survey Response Output

Output representation of the response to the Submit Survey request. The response includes the status of the survey response API and the Thank You page details in the survey.

JSON example

```

```

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | String[] | Error messages for a failed request. | Small, 56.0 | 56.0 |
| flowInterview​State | String | State of the flow interview. | Small, 57.0 | 57.0 |
| invitationId | String | ID of the survey invitation that's related to the request. | Small, 57.0 | 57.0 |
| languageCode | String | Code of the language that the survey is created in. | Small, 56.0 | 56.0 |
| navigation​Actions | String | Available navigation actions on the survey page.Possible values are:Back—Go to the previous survey page.Next—Go to the next survey page. | Small, 57.0 | 57.0 |
| responseId | String | ID of the survey response. | Small, 57.0 | 57.0 |
| status | String | Status of the API request.Possible values are:Failure—Survey Response API isn’t successfully run.Success—Survey Response API is successfully run. | Small, 56.0 | 56.0 |
| surveyPage | Survey Question Page OutputORSurvey Thank You Page Output | Details of the question or the Thank You page. | Small, 56.0 | 56.0 |

## Code Examples

```
{
  "languageCode": "en",
  "invitationId": "0Kixx0000004MWaCAM",
  "flowInterviewState": "state1",
  "status": "Success",
  "surveyPage": {
    "label": "Page 1",
    "name": "p_d84afb73_3a30_4a3f_aae7_b0478b3bb4ed",
    "surveyQuestions": [
      {
        "name": "q_856a997e_be2c_4ea3_b70d_7f6fb9cfbf4f",
        "label": "Good so Far !",
        "questionType": "ShortText",
        "responseDataType": "STRING",
        "isResponseRequired": false
      }
    ]
  },
  "navigationActions": [
    "Next",
    "Back"
  ],
  "responseId": "0Myxx0000004CYqCAM",
  "errors": []
}
```

## Related Topics

- Survey Question Page Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_survey_question_page_output.htm)
- Survey Thank You Page Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_survey_thank_you_page_output.htm)
