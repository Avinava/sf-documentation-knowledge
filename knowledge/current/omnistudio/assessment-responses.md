---
title: "Assessment Responses"
domain: omnistudio
topic: assessment-responses
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.980Z
keywords: [Assessment, Responses]
---

# Assessment Responses

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

[Assessment Responses Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_assessment_responses_output.htm "Output of assessment responses.")