---
title: "Survey Page Response Input"
domain: salesforce-feedback-management-dev-guide
topic: survey-page-response-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.430Z
estimatedTokens: 171
keywords: [Survey, Input, representation]
---

# Survey Page Response Input

> Input representation of the details of the response to a survey
      page.

# Survey Page Response Input

Input representation of the details of the response to a survey page.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The API name of the survey page.NoteReserved for future use. | Optional | 56.0 |
| questionResponses | Various | The responses to the survey questions on the page.NPS Question Type—See Survey Integer Question Response Input.Selection Question Type—See Survey Selection Question Response Input.Short Text or Long Text Question Type—See Survey Text Question Response Input.Other Question Type—See Survey Question Response Input. | Required | 56.0 |

## Related Topics

- Survey Integer Question Response Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_integer_question_response_input.htm)
- Survey Selection Question Response
                          Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_selection_question_response_input.htm)
- Survey Text Question Response Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_text_question_response_input.htm)
- Survey Question Response Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_question_response_input.htm)
- Survey Integer Question Response Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/surveys_requests_survey_integer_question_response_input_unauth_apis.htm)
- Survey Selection Question Response
                          Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/surveys_requests_survey_selection_question_response_input_unauth_apis.htm)
- Survey Text Question Response Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/surveys_requests_survey_text_question_response_input_unauth_apis.htm)
- Survey Question Response Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/surveys_requests_survey_question_response_input_unauth_apis.htm)
