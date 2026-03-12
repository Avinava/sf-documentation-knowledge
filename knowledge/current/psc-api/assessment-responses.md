---
title: "Assessment Responses"
domain: psc-api
topic: assessment-responses
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.596Z
estimatedTokens: 331
keywords: [Assessment, Responses, Save, OmniScript, built, Questions, app]
---

# Assessment Responses

> Save assessment responses from an OmniScript built with the Assessment Questions
    app.

# Assessment Responses

Save assessment responses from an OmniScript built with the Assessment Questions app.

This feature requires OmniStudio and Discovery Framework licenses. To build an OmniScript using the Assessment Questions app, see [Create a Form](https://help.salesforce.com/s/articleView?id=ind.fsc_admin_create_a_form.htm&type=5&language=en_US).

In in Health Cloud, this API captures supporting information for a Prior Authorization (PA) by recording responses from the Documentation Template and Rules Questionnaire. It associates these responses with a specific PA request and is triggered as part of the $submit API from Mulesoft.

Resource

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| assessment​Values | Assessment Values Input>[] | Values of Assessment fields. | Optional | 60.0 |
| contextId | String | Context record for the OmniScript. | Optional | 60.0 |
| inputs | Question Responses Input[] | Responses for Assessment Questions. | Optional | 60.0 |

Response body for POST

[Assessment Responses Output](atlas.en-us.psc_api.meta/psc_api/connect_responses_assessment_responses_output.htm "Output of assessment responses.")

## Code Examples

```
/connect/discovery-framework/assessment-responses/omniScriptId
```

```
{
  "inputs": {
    "questionResponses": {
      "ootb__DF_API_MSelect1": "Y;N",
      "ootb__DF_API_MSelect2": "1;2;3",
      "ootb__DF_API_RG1": {
        "ootb__DF_API_Radio1": "Y",
        "ootb__DF_API_Radio2": "N",
        "ootb__DF_API_Radio3": "M"
      },
      "ootb__DF_API_Text": "TestingDF",
      "ootb__DF_API_Select1": "1",
      "ootb__DF_API_Select2": "w",
      "ootb__DF_API_EditBlock2": {
        "ootb__DF_API_Int": 5
      },
      "ootb__DF_API_Boolean": true,
      "ootb__DF_API_Formula": true
    }
  },
  "contextId": "0U3B00000004IhWKAU",
  "assessmentValues": {
    "Assessment.AssessmentStatus": "Completed"
  },
  "completedDateTime": "2024-10-23T14:45:29.123+05:30",
  "assessor": "001SG00000laIWPYA2",
  "identifier": "Test identifier",
  "assessmentDetails": {
    "assessmentReasons": [
      {
        "referenceRecord": "0jySG0000000qRdYAI"
      },
      {
        "referenceRecord": "0SqSG00000005HR0AY"
      },
      {
        "referenceRecord": "0kmSG0000000n7BYAQ",
        "referenceValue": "Medication Request sample"
      },
      {
        "referenceValue": "Reference Record not present"
      }
    ],
    "assessmentQuestionsResponseDetails": {
      "First_Name": {
        "originType": "Auto",
        "reviewerRole": "0hsSG0000002t8TYAQ",
        "reviewer": "003SG00000BTzxpYAD"
      },
      "Last_Name": {
        "originType": "Auto",
        "reviewerRole": "0hsSG0000002t8TYAQ",
        "reviewer": "003SG00000BTzxpYAD"
      },
      "Email": {
        "originType": "Auto",
        "reviewerRole": "0hsSG0000002t8TYAQ",
        "reviewer": "003SG00000BTzxpYAD"
      },
      "Phone": {
        "originType": "Auto",
        "reviewerRole": "0hsSG0000002t8TYAQ",
        "reviewer": "003SG00000BTzxpYAD"
      },
      "Multi_Select": {
        "originType": "Auto",
        "reviewerRole": "0hsSG0000002t8TYAQ",
        "reviewer": "003SG00000BTzxpYAD"
      }
    }
  }
}
```

## Related Topics

- Assessment Values Input> (atlas.en-us.psc_api.meta/psc_api/connect_requests_assessment_responses_assessment_values_input.htm)
- Question Responses Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_question_responses_input.htm)
- Assessment Responses Output (atlas.en-us.psc_api.meta/psc_api/connect_responses_assessment_responses_output.htm)
