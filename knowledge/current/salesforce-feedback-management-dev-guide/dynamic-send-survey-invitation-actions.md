---
title: "Dynamic Send Survey Invitation Actions"
domain: salesforce-feedback-management-dev-guide
topic: dynamic-send-survey-invitation-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.317Z
estimatedTokens: 599
keywords: [Dynamic, Send, Survey, Invitation, Actions, customized, notifications, users, events, updates, records, they’re, working, notify, account]
---

# Dynamic Send Survey Invitation Actions

> Send customized notifications to users about important events or
			updates to the records that they’re working on. For example, notify account owners when
			a case is created.

# Dynamic Send Survey Invitation Actions

Send customized notifications to users about important events or updates to the records that they’re working on. For example, notify account owners when a case is created.

This action is available in API version 51.0 and later.

## Special Access Rules

To access the Dynamic Send Survey Invitation action, you must have the Feedback Management Survey Response Pack and the Salesforce org enabled with Surveys.

## Supported REST HTTP Methods

URI

Get the list of invocable actions for each available survey.

/services/data/v51.0/actions/custom/dynamicSendSurveyInvitation

Send survey invitation by email by using the invocable action.

/services/data/v51.0/actions/custom/dynamicSendSurveyInvitation/{surveyName}

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| anonymousResponse | TypebooleanDescriptionIndicates whether the participant’s name is recorded in the response record (true) or not (false). |
| autoExpiryDays | TypeintegerDescriptionNumber of days remaining for the survey invitation to expire. |
| emailTemplateName | TypestringDescriptionDeveloper name of the template that contains either the question or the survey link. |
| isUnauthenticatedResponse | TypebooleanDescriptionIndicates whether the participant is required to authenticate before starting the survey (true) or not (false). |
| personalInvitation | TypebooleanDescriptionIndicates whether the invitation is specific to the recipient (true) or not (false). |
| recipient | TypereferenceDescriptionRequired. Salesforce ID of the record that the survey invitation is sent to. |
| recipientType | TypestringDescriptionType of the survey recipient. |
| surveyQuestionName | TypestringDescriptionDeveloper name of the question that’s sent by using the invitation. |
| surveySubjectEntity | TypereferenceDescriptionID of the record that associates the invitation record with another record. |

## Outputs

None.

## Example

GET

This example shows how to get information about the Dynamic Send Survey Invitation action type.

```

```

Here’s a response that returns the list of invocable actions for each survey.

```

```

POST

Here’s a request for the Dynamic Send Survey Invitation action.

```

```

Here’s a response for the Dynamic Send Survey Invitation action.

```

```

## Code Examples

```
curl --include --request GET \
--header "Authorization: Authorization: Bearer 00DR...xyz" \
--header "Content-Type: application/json" \
"https://instance.salesforce.com/services/data/v51.0/actions/custom/dynamicSendSurveyInvitation"
```

```
{
  "actions" : [ {
    "label" : "flowsend",
    "name" : "flowsend",
    "type" : "SEND_SURVEY_DYNAMIC_INVOCABLE_ACTION",
    "url" : "/services/data/v51.0/actions/custom/dynamicSendSurveyInvitation/flowsend"
  }, {
    "label" : "survey2",
    "name" : "survey2",
    "type" : "SEND_SURVEY_DYNAMIC_INVOCABLE_ACTION",
    "url" : "/services/data/v51.0/actions/custom/dynamicSendSurveyInvitation/survey2"
  }, {
    "label" : "survey",
    "name" : "survey",
    "type" : "SEND_SURVEY_DYNAMIC_INVOCABLE_ACTION",
    "url" : "/services/data/v51.0/actions/custom/dynamicSendSurveyInvitation/survey"
  } ]
}
```

```
{
   "inputs":[{
      "recipient" : "003xx000004WpemAAC",
      “isUnauthenticatedResponse” : false,
      "autoExpiryDays" : 6
   }]
}
```

```
[
   {
      "actionName" : "survey",
      "errors" : null,
      "isSuccess" : true,
      "outputValues" : null
   }
]
```
