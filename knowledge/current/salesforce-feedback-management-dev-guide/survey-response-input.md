---
title: "Survey Response Input"
domain: salesforce-feedback-management-dev-guide
topic: survey-response-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.443Z
estimatedTokens: 223
keywords: [Survey, Input, representation]
---

# Survey Response Input

> Input representation of the details of a survey
    response.

# Survey Response Input

Input representation of the details of a survey response.

JSON example

Here’s an example for a single question.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| flowInterview​State | String | State of the flow interview. | Required | v1 |
| invitationId | String | ID of the survey invitation. | Required | v1 |
| invitationUuid | String | Random ID of the survey invitation that’s generated for enhanced security. | Required | v1 |
| languageCode | String | Code of the language to get the survey page or question details.NoteEnsure the survey is shared to the participant in this specified language. | Optional | v1 |
| navigation​Action | String | Available navigation actions on the survey page.Possible values are:Back—Navigate to the previous survey page.Next—Navigate to the next survey page. | Required | v1 |
| survey​Developer​Name | String | Name of the survey. | Required | v1 |
| surveyPage​Responses | Survey Page Response Input | Responses to the survey questions on a page. | Required | v1 |

## Code Examples

```
{
  "invitationId": "0Kixx0000004DbMCAU",
  "languageCode": "en",
  "flowInterviewState": "ewqJgw",
  "navigationAction" : "Next",
  "surveyPageResponses": {
    "name" :  "p_ff794819_c0f0_4e0d_b357_29ca1694cfc4",
    "questionResponses": [
      {
        "name": "q_d217f330_05a6_4e2b_859b_1f1ef210bf84",
        "questionType": "NPS",
        "responseValue": 5
      },
      {
        "name": "q_ab781617_3665_4a41_b4ff_f236d73ecb30",
        "questionType": "FreeText",
        "responseValue": "Free Text Question Response"
      },
      {
        "name": "q_b1cdfe4c_9c7d_4c2f_ad9d_1915d301d780",
        "questionType": "ShortText",
        "responseValue": "Short Text Question Response"
      },
      {
        "name": "q_f84a6a3c_683c_4ed5_864e_5b486baed308",
        "questionType": "Boolean",
        "responses": [
          {
            "name": "choice1"
          }
        ]
      },
      {
        "name": "q_113419b1_5d29_4bb9_8b10_e3fe324ae040",
        "questionType": "MultiChoice",
        "responses": [
          {
            "name": "c_9775c2e5_9086_44a8_a5c9_89fdc886c99a"
          },
          {
            "name": "c_0f1f63cc_608a_4560_9d29_72b203f195f2"
          }
        ]
      },
      {
        "name": "q_1d8690a9_ae95_4e7c_86be_b8057205facc",
        "questionType": "RadioButton",
        "responses": [
          {
            "name": "c_4867edc8_e9a6_4e86_9fea_b80758e90caf"
          }
        ]
      },
      {
        "name": "q_8946f212_25ff_43a8_a507_d267637eee1f",
        "questionType": "Rating",
        "responses": [
          {
            "name": "c_f51c509a_9643_4a05_89f1_42464de618a6"
          }
        ]
      }
    ]
  }
}
```

```
{
  "invitationId": "0Kixx0000004EdsCAE",
  "languageCode": "en",
  "navigationAction" : "Next",
  "surveyPageResponses": {
    "questionResponses": [
      {
        "name": "q_3e501184_bb93_4a9c_a66b_6f2d81c92316",
        "questionType": "FreeText",
        "responseValue": "Answer for text question"
      }
    ]
  },
  "flowInterviewState": "eg"
}
```

```
{
 "invitationId": "0Kixx0000004MWaCAM",
 "invitationUuid": "11845-39854594-3438",
 "surveyDeveloperName": "sample_survey",
 "languageCode": "en",
 "flowInterviewState" : "state1",
 "navigationAction" : "Next",
 "surveyPageResponses" : {
        "name" :  "p_ff794819_c0f0_4e0d_b357_29ca1694cfc4",
        "questionResponses" : [
            {
                "name": "q_113419b1_5d29_4bb9_8b10_e3fe324ae040",
                "questionType" : "MultiChoice",
                "responses" : [{"name" : "c_9775c2e5_9086_44a8_a5c9_89fdc886c99a"}, 
                                {"name" : "c_0f1f63cc_608a_4560_9d29_72b203f195f2"}]
            }
         ]
   }
}
```

## Related Topics

- Survey Page Response Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_page_response_input.htm)
- Survey Page Response Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/surveys_requests_survey_page_response_input_unauth_apis.htm)
