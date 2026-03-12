---
title: "Survey Responses Using Invitation Configurations (POST, PATCH)"
domain: salesforce-feedback-management-dev-guide
topic: survey-responses-using-invitation-configurations-post-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.463Z
estimatedTokens: 1064
keywords: [Survey, Responses, Invitation, Configurations, POST, PATCH, configuration, initiate, process, submitting, making, Submit, Special, Access, Rules]
---

# Survey Responses Using Invitation Configurations (POST, PATCH)

> Create responses using the invitation configuration details and
      initiate the process of submitting the survey responses by making a POST request. Submit the
      survey responses using the PATCH request.

# Survey Responses Using Invitation Configurations (POST, PATCH)

Create responses using the invitation configuration details and initiate the process of submitting the survey responses by making a POST request. Submit the survey responses using the PATCH request.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_feedback_management_dev_guide)

#### Note

Salesforce Feedback Management Business API performance can be impacted if a POST request exceeds 3600 calls per minute and if a PATCH request exceeds 1800 calls per minute at the organization level.

You can create a survey to collect data from customers, employees, or other people whose feedback you need. The survey responses are stored in the SurveyResponse object and the responses to individual questions in the SurveyQuestionResponse object.

Resource

```

```

Example

```

```

Available version

v1

Requires Chatter

No

HTTP methods

PATCH, POST

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_feedback_management_dev_guide)

#### Note

The HTTP header request format only accepts Content-Type: application/json.

Special Access Rules

The Feedback Management - Growth license is required to use this resource.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_feedback_management_dev_guide)

#### Note

Ensure the survey is shared to the guest profile from Sharing Settings in Salesforce Setup.

Authorization

Use the bearer token from the [accessToken](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/salesforce_surveys_get_access_token_unauth_apis.htm "Create an access token to enable survey invitation creation, and gather feedback from unauthenticated participants.") request.

```

```

Merge fields setup

To use the participant or associated record merge fields, ensure these prerequisites are met.

-   Access level for merge fields is set to System Context - Enforce record-level access. See [Select the Access Level for Merge Fields](https://help.salesforce.com/s/articleView?id=xcloud.task_merge_fields_access.htm&type=5&language=en_US "HTML (New Window)").
-   Share the records used in merge fields to the guest profile from Sharing Settings in Salesforce Setup.

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| invitation​Settings | Survey Invitation Settings Input | Invitation settings of the survey. | Required | v1 |
| languageCode | String | Code of the language to get the survey page or question details.NoteEnsure the survey is shared to the participant in this specified language. | Optional | v1 |
| survey​Developer​Name | String | Name of the survey. | Required | v1 |
| recipient​Engagement​Context | Map<String, String> | Engagement context settings for a recipient of the survey. | Optional | v1 |
| related​RecordIds | String[] | IDs of the records that are related to the survey. | Optional | v1 |
| static​MergeFields | Map<String, String> | Map of static merge field values. | Optional | v1 |

Response body for POST

[Survey Description Output](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/surveys_responses_survey_description_output_unauth_apis.htm "Output representation of the response to the Start Survey request.")

Request body for PATCH

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

Response body for PATCH

[Survey Response Output](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/surveys_responses_survey_response_output_unauth_apis.htm "Output representation of the response to the Submit Survey request. The response includes the status of the survey unAuth response API and the Thank You page details in the survey.")

#### See Also

-   [Salesforce Help: Assign Permissions to Guest Users to Respond to Surveys](https://help.salesforce.com/s/articleView?id=xcloud.task_allow_guest_survey_create_permission.htm&type=5&language=en_US "Salesforce Help: Assign Permissions to Guest Users to Respond to Surveys - HTML (New Window)")

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

- Survey Invitation Settings Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_invitation_settings_input.htm)
- Survey Description Output (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_responses_survey_description_output.htm)
- Survey Page Response Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_page_response_input.htm)
- Survey Response Output (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_responses_survey_response_output.htm)
- accessToken (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/salesforce_surveys_get_access_token_unauth_apis.htm)
- Survey Invitation Settings Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/surveys_requests_survey_invitation_settings_input_unauth_apis.htm)
- Survey Description Output (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/surveys_responses_survey_description_output_unauth_apis.htm)
- Survey Page Response Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/surveys_requests_survey_page_response_input_unauth_apis.htm)
- Survey Response Output (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/surveys_responses_survey_response_output_unauth_apis.htm)
