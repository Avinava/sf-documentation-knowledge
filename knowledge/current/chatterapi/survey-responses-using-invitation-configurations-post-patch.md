---
title: "Survey Responses Using Invitation Configurations (POST, PATCH)"
domain: chatterapi
topic: survey-responses-using-invitation-configurations-post-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.827Z
estimatedTokens: 959
keywords: [Survey, Responses, Invitation, Configurations, POST, PATCH, configuration, initiate, process, submitting, making, Submit, Special, Access, Rules]
---

# Survey Responses Using Invitation Configurations (POST, PATCH)

> Create responses using the invitation configuration details and
      initiate the process of submitting the survey responses by making a POST request. Submit the
      survey responses using the PATCH request.

# Survey Responses Using Invitation Configurations (POST, PATCH)

Create responses using the invitation configuration details and initiate the process of submitting the survey responses by making a POST request. Submit the survey responses using the PATCH request. You can create a survey to collect data from customers, employees, or other people whose feedback you need. The survey responses are stored in the SurveyResponse object and the responses to individual questions in the SurveyQuestionResponse object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Salesforce Feedback Management (SFM) Business API performance can be impacted if a POST request exceeds 5,400 calls per minute and if a PATCH request exceeds 2,700 calls per minute at the org level. For more rate limit information, see [Connect REST API Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_rate_limits.htm "HTML (New Window)").

## Special Access Rules

The Feedback Management - Starter and Feedback Management - Growth licenses are required to use this resource.

Resource

```

```

Example

```

```

Available version

56.0

HTTP methods

PATCH, POST

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The HTTP header request format only accepts Content-Type: application/json.

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| invitationSettings | Survey Invitation Settings Input | Invitation settings of the survey.NoteThe Invitation ID API doesn’t require the invitation configuration settings to be passed with the Survey Invitations. | Required | 56.0 |
| languageCode | String | Code of the language in which the survey is created. | Optional | 56.0 |
| recipient​Engagement​Context | Map<String, String> | Engagement context settings for a recipient of the survey. | Optional | 56.0 |
| relatedRecordIds | String[] | IDs of the records that are related to the survey. | Optional | 56.0 |
| shouldLoad​PartiallyCmpl​Survey | Boolean | Indicates whether to load partially completed surveys when a partially completed survey is selected (true), or to start a new survey (false). The default value is false. | Optional | 63.0 |
| staticMergeFields | Map<String, String> | Map of static merge field values. | Optional | 56.0 |

Response body for POST

[Survey Description Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_survey_description_output.htm "Output representation of the response to the Start Survey request.")

Request body for PATCH

JSON example

Here’s an example for multiple questions.

```

```

Here’s an example for a single question.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| flowInterview​State | String | State of the flow interview. | Required | 56.0 |
| invitationId | String | ID of the survey invitation. | Required | 56.0 |
| languageCode | String | Code of the language that the survey is created in. | Optional | 56.0 |
| navigationAction | String | Available navigation actions on the survey page.Possible values are:Back—Navigate to the previous survey page.Next—Navigate to the next survey page. | Required | 57.0 |
| surveyPage​Responses | Survey Page Response Input | Responses to the survey questions on a page. | Required | 56.0 |

Response body for PATCH

[Survey Response Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_survey_response_output.htm "Output representation of the response to the Submit Survey request. The response includes the status of the survey response API and the Thank You page details in the survey.")

## Code Examples

```
/connect/surveys/surveyId/survey-response
```

```
https://yourInstance.salesforce.com/services/data/56.0/connect​/surveys/0Kdx00000000H46CAE/survey-response
```

```
{
  "languageCode": "",
  "relatedRecordIds": [
    "500xx000000bo3dAAA"
  ],
  "recipientEngagementContext": {
    "test_key1": "test_value1",
    "test_key2": "test_value1"
  },
  "invitationSettings": {
    "recipientId": "005xx000001X7ibAAC",
    "allowGuestUserResponse": false,
    "allowParticipantsAccessTheirResponse": false,
    "collectAnonymousResponse": false,
    "invitationExpirationDate": "2022-07-31T21:32:54",
    "communityId": "",
    "invitationOwner": ""
  }
}
```

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

## Related Topics

- Survey Invitation Settings Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_survey_invitation_settings_input.htm)
- Survey Description Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_survey_description_output.htm)
- Survey Page Response Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_survey_page_response_input.htm)
- Survey Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_survey_response_output.htm)
