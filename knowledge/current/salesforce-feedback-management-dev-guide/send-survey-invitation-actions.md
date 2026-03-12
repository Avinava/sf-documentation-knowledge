---
title: "Send Survey Invitation Actions"
domain: salesforce-feedback-management-dev-guide
topic: send-survey-invitation-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.333Z
estimatedTokens: 549
keywords: [Send, Survey, Invitation, Actions, email, invitations, leads, contacts, users, org, action, customer, support, case, closes]
---

# Send Survey Invitation Actions

> Send email survey invitations to leads, contacts, and users in your org
			based on an action. For example, send a survey invitation when a customer support case
			closes.

# Send Survey Invitation Actions

Send email survey invitations to leads, contacts, and users in your org based on an action. For example, send a survey invitation when a customer support case closes.

This action is available in API version 47.0 and later.

## Special Access Rules

To access the Send Survey Invitation action, you must have the Feedback Management Survey Response Pack and the Salesforce org enabled with Surveys.

## Supported REST HTTP Methods

URI

/services/data/v47.0/actions/standard/sendSurveyInvitation

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
| recipient | TypereferenceDescriptionRequired. Salesforce ID of the record that the survey invitation is sent to. The record can be a user (internal invitation) or a contact or a lead (external invitation via community). |
| surveyName | TypestringDescriptionRequired. Developer name of the survey that the invitation is sent for. |
| surveyQuestionName | TypestringDescriptionDeveloper name of the question that’s sent using the invitation. |
| surveySubjectEntity | TypereferenceDescriptionID of the record that associates the invitation record with another record. |

## Outputs

None.

## Example

GET

This example shows how to get information about the Send Survey Invitation action type.

```

```

POST

Here’s a request for the send survey invitation action.

```

```

Here’s a response for the send survey invitation action.

```

```

## Code Examples

```
curl --include --request GET \
--header "Authorization: Authorization: Bearer 00DR...xyz" \
--header "Content-Type: application/json" \
"https://instance.salesforce.com/services/data/v47.0/actions/standard/sendSurveyInvitation"
```

```
{
   "inputs":[{
      "surveyName" : "FlowActionSend",
      "recipient"  : "003RO0000037IRvYAM",
      "autoExpiryDays" : 6
   }]
}
```

```
[
   {
      "actionName" : "sendSurveyInvitation",
      "errors" : null,
      "isSuccess" : true,
      "outputValues" : null
   }
]
```
