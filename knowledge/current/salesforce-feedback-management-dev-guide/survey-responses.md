---
title: "Survey Responses"
domain: salesforce-feedback-management-dev-guide
topic: survey-responses
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.597Z
estimatedTokens: 206
keywords: [Survey, Responses, API, show, questions, Salesforce]
---

# Survey Responses

> Use API responses to show survey questions in Salesforce.

# Survey Responses

Use API responses to show survey questions in Salesforce.

Create a submit button or enable a trigger to call the Apex class for submitting the responses.

The SurveyApi Apex class uses the PATCH request endpoint to submit the survey responses using this format:

Resource

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_feedback_management_dev_guide)

#### Note

The invitationId property is retrieved from the POST API request. The flowInterviewState property is retrieved from the first POST API request and later from subsequent PATCH API requests.

Request body for PATCH

Here’s an example for multiple questions.

```

```

Response

```

```

If the PATCH API request is successful, the feedback is submitted and a Thank You page is displayed.

## Code Examples

```
/services/data/vXX.X/connect/surveys/<surveyId>/invitation/<invitationId>/survey-response
```

```
{
  "invitationId": "0Kixx0000004DbMCAU",
  "flowInterviewState": "<FlowInterviewState>",
  "surveyPageResponses": {
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
   "errors":[],
   "status":"Success",
   "surveyPage":{
     "label": null,
     "messageDescription":"",
     "name": null,
     "redirectUrl": “<URL of the page to be redirected>”,
     "thankYouMessage":"<Thank you message to be displayed>",
     "urlButtons":[ // List of URL text and URL for buttons to be displayed
]
   }
}
```
