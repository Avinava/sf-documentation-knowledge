---
title: "Survey Description Output"
domain: salesforce-feedback-management-dev-guide
topic: survey-description-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.495Z
estimatedTokens: 356
keywords: [Survey, Output, representation, Start]
---

# Survey Description Output

> Output representation of the response to the Start Survey
      request.

# Survey Description Output

Output representation of the response to the Start Survey request.

JSON example

```

```

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | String[] | Error messages for a failed request. | Small, 56.0 | 56.0 |
| flowInterview​State | String | State of the flow interview. | Small, 56.0 | 56.0 |
| invitationId | String | ID of the survey invitation that's related to the request. | Small, 56.0 | 56.0 |
| isPartially​CmplSurvey​Loaded | Boolean | Indicates whether a partially completed survey is loaded (true) or a new survey is started (false). | Small, 63.0 | 63.0 |
| languageCode | String | Code of the language that the survey is created in. | Small, 56.0 | 56.0 |
| navigation​Actions | String | Available navigation actions on the survey page.Possible values are:Back—Go to the previous survey page.Next—Go to the next survey page. | Small, 57.0 | 57.0 |
| responseId | String | ID of the survey response. | Small, 57.0 | 57.0 |
| status | String | Status of the API request.Possible values are:Failure—Survey Response API isn’t successfully run.Success—Survey Response API is successfully run. | Small, 56.0 | 56.0 |
| surveyDetail | Survey Detail Output | All details of the page in the survey. | Small, 56.0 | 56.0 |
| warnings | String[] | Warnings for a request. | Small, 56.0 | 56.0 |

## Code Examples

```
{
  "languageCode": "en",
  "invitationId": "0Kixx0000004MWaCAM",
  "flowInterviewState": "state1",
  "status": "Success",
  "isPartiallyCmplSurveyLoaded": false,
  "surveyDetail": {
    "label": "Survey01",
    "name": "Survey01",
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
    }
  },
  "navigationActions": [
    "Next"
  ],
  "responseId": "0Myxx0000004CYqCAM",
  "errors": [],
  "warnings": []
}
```

```
{
  "languageCode": "en",
  "invitationId": "0Kixx0000004MWaCAM",
  "invitationUuid": "11845-39854594-3439",
  "flowInterviewState": "state1",
  "status": "Success",
  "surveyDetail": {
    "label": "Survey01",
    "name": "Survey01",
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
    }
  },
  "navigationActions": [
    "Next"
  ],
  "responseId": "0Myxx0000004CYqCAM",
  "errors": [],
  "warnings": []
}
```

## Related Topics

- Survey Detail Output (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_responses_survey_detail_output.htm)
- Survey Detail Output (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/surveys_responses_survey_detail_output_unauth_apis.htm)
