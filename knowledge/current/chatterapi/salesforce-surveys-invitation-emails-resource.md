---
title: "Salesforce Surveys Invitation Emails Resource"
domain: chatterapi
topic: salesforce-surveys-invitation-emails-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.710Z
estimatedTokens: 937
keywords: [Salesforce, Surveys, Invitation, Emails, Resource, Email, survey, invitations, participants, leads, contacts, users, org, Either, link]
---

# Salesforce Surveys Invitation Emails Resource

> Email survey invitations to up to 300 participants. You can email
      leads, contacts, or users in your org. Either a link to launch the survey or a question can be
      embedded in the email invitations.

# Salesforce Surveys Invitation Emails Resource

Email survey invitations to up to 300 participants. You can email leads, contacts, or users in your org. Either a link to launch the survey or a question can be embedded in the email invitations.

Resource

```

```

Available version

50.0

HTTP methods

POST

Request body for POST

Root XML tag

<SurveyInvitationEmailInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| allowGuest​UserResponse | Boolean | Specifies whether participants who don't have a Salesforce account can respond (true) or not (false). | Required | 50.0 |
| allowParticipants​AccessTheir​Response | Boolean | Specifies whether participants can see their responses (true) or not (false). | Required | 50.0 |
| associateRecords​WithRecipients | Survey Recipient Survey Subjects Input[] | Maps each recipient with another record that must be associated with the recipient's survey invitation. | Optional | 50.0 |
| body | String | Content of the email. Specify the email body in case you don't specify an email template. The email body must contain one of these merge fields:To embed a link to launch the survey: [[SURVEY_INVITATION_URL]]To embed a survey question: {{{SurveyQuestion.QuestionName}}} and {{{SurveyQuestion.QuestionHtmlContent}}} | Optional | 50.0 |
| collectAnonymous​Response | Boolean | Specifies whether participants can respond anonymously (true) or not (false). | Required | 50.0 |
| communityId | String | ID of the site that's used to open the survey for users outside your org. | Optional | 50.0 |
| emailTemplateId | String | ID of the Lightning email template that's used to send the survey invitation. The template must contain the required merge fields that embed either the survey link or a question in the email. Only Lightning email templates are used to send survey invitations. | Optional | 50.0 |
| fromEmail​Address | String | Email ID of the user or the org-wide email address associated with the user's profile. | Required | 50.0 |
| invitation​ExpirationDate | String | Date on which the survey invitation expires. | Optional | 50.0 |
| invitationOwner | String | ID of the owner of the survey invitation records. | Optional | 50.0 |
| isPersonal​Invitation | Boolean | Specifies whether a unique invitation is created for each participant (true) or not (false). When a participant responds using a personal invitation, the response record is associated with the participant's Salesforce record. | Required | 50.0 |
| recipient​Engagement​Contexts | Survey Recipient Engagement Context Input[] | Maps each recipient with the context based on which the survey invitation is emailed. | Optional | 50.0 |
| recipients | String[] | List of up to 300 IDs of leads, contacts, or users to whom the survey invitation is emailed. | Required | 50.0 |
| sendEmail​ThroughUma | Boolean | Specifies whether to send the email through Marketing Cloud (true) or not (false). If unspecified, defaults to false. | Optional | 65.0 |
| shareInvitations​With | String[] | IDs of the users with whom the survey invitation records must be shared. The invitation records are shared with Read access. | Optional | 50.0 |
| subject | String | Subject of the email. Specify the subject in case you don't specify an email template. | Optional | 50.0 |
| surveyQuestion​Ids | String[] | IDs of the questions that are embedded in the email. You can send an email invitation for questions of these types: Net Promoter Score (NPS), rating, and score. | Optional | 50.0 |

Response body for POST

[Survey Email](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_survey_email.htm "Survey invitation email response.")

## Code Examples

```
/connect/surveys/surveyId/survey-invitation-emails
```

```
{
 "recipients":["003x0000003j8CEAAY"],
 "collectAnonymousResponse":false,
 "allowParticipantsAccessTheirResponse":false,
 "allowGuestUserResponse":true,
 "isPersonalInvitation":true,
 "emailTemplateId":"00Xx0000000LwAuEAK",
 "surveyQuestionIds":["0Kux000000003yBCAQ"],
 "invitationExpirationDate":"2020-07-31T21:32:54",
 "fromEmailAddress":"abeeram@salesforce.com",
 "invitationOwner":"0054V00000FZTjJ",
 "shareInvitationsWith":["0054V00000FZTjJ"],
 "associateRecordsWithRecipients":[{"recipientId":"003x0000003j8CEAAY","associateRecordIds":["001x0000004EWIZAA4"]}],
 "recipientEngagementContexts":[{"recipientId" : "003x0000003j8CEAAY","recipientEngagementContext":{"TestKey" :"TestValue"}}]
}
```

## Related Topics

- Survey Recipient Survey Subjects Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_survey_recipient_survey_subjects_input.htm)
- Survey Recipient Engagement Context Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_survey_recipient_engagement_context_input.htm)
- Survey Email (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_survey_email.htm)
