---
title: "Survey Invitations"
domain: salesforce-feedback-management-dev-guide
topic: survey-invitations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.589Z
estimatedTokens: 406
keywords: [Survey, Invitations, how, API, requests, invoked, Apex]
---

# Survey Invitations

> Learn how to create survey invitations through API requests that are invoked from
      an Apex class.

# Survey Invitations

Learn how to create survey invitations through API requests that are invoked from an Apex class.

Survey invitations are created using these steps.

1.  The SurveyApi Apex class (SurveyApi.cls file) is available within a [package](https://resources.docs.salesforce.com/rel1/doc/en-us/static/misc/Survey_Sample_App.zip "HTML (New Window)"). The POST method from the SurveyApi Apex class calls the API endpoint having the required payload to create the survey invitation.

    Resource

    ```

    ```

    Request body for POST

    ```

    ```

    See [Survey Responses Using Invitation Configurations](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_create_submit_surveys.htm "HTML (New Window)") for details of the request properties.

2.  The response to the previous POST request fetches the survey and its questions.

    Response

    ```

    ```

3.  The SurveyApi Apex class also has the code to parse the API response, which returns the survey details and questions to the Lightning Web Component (LWC).

    See [Survey Description Output](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_responses_survey_description_output.htm "HTML (New Window)") for details of the response properties.

    Here’s how the survey appears on the Salesforce home page.

    ![A representation of the created survey on the Salesforce home page.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffeedback_management%2Fimages%2Fsurveys_home_page_output.png&folder=salesforce_feedback_management_dev_guide)

## Code Examples

```
/services/data/vXX.X/connect/surveys/surveyId/survey-response
```

```
{
  "languageCode": "",
  "invitationSettings": {
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
  "languageCode": "en",
  "invitationId": "0Kixx0000004MWaCAM",
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
          "label": "Good so Far!",
          "questionType": "ShortText",
          "responseDataType": "STRING",
          "validationFormula": <Formula if any custom validation is added>,
          "isResponseRequired": false
        }
      ]
    "versionLabel":"<Survey name>",
    "versionNumber": <Survey version>
    }
  },
  "errors": [],
  "warnings": []
}
```
