---
title: "Survey Page Response Input"
domain: chatterapi
topic: survey-page-response-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:12.910Z
estimatedTokens: 230
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

#### See Also

-   [*Salesforce Help*: Survey Question Types](https://help.salesforce.com/s/articleView?id=xcloud.reference_survey_question_types.htm&type=5&language=en_US "Salesforce Help: Survey Question Types  - HTML (New Window)")

## Related Topics

- Survey Integer Question Response Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_survey_integer_question_response_input.htm)
- Survey Selection Question Response
                          Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_survey_selection_question_response_input.htm)
- Survey Text Question Response Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_survey_text_question_response_input.htm)
- Survey Question Response Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_survey_question_response_input.htm)
