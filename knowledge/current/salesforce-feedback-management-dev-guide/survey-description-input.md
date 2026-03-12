---
title: "Survey Description Input"
domain: salesforce-feedback-management-dev-guide
topic: survey-description-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.406Z
estimatedTokens: 304
keywords: [Survey, Input, representation, recipient, their, engagement, context, language, records, invitation, settings]
---

# Survey Description Input

> Input representation of the details of the survey recipient and their
      engagement context, and the language, related records, and invitation settings of the
      survey.

# Survey Description Input

Input representation of the details of the survey recipient and their engagement context, and the language, related records, and invitation settings of the survey.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| invitationSettings | Survey Invitation Settings Input | Invitation settings of the survey.NoteThe Invitation ID API doesn’t require the invitation configuration settings to be passed with the Survey Invitations. | Required | 56.0 |
| languageCode | String | Code of the language in which the survey is created. | Optional | 56.0 |
| recipient​Engagement​Context | Map<String, String> | Engagement context settings for a recipient of the survey. | Optional | 56.0 |
| relatedRecordIds | String[] | IDs of the records that are related to the survey. | Optional | 56.0 |
| shouldLoad​PartiallyCmpl​Survey | Boolean | Indicates whether to load partially completed surveys when a partially completed survey is selected (true), or to start a new survey (false). The default value is false. | Optional | 63.0 |
| staticMergeFields | Map<String, String> | Map of static merge field values. | Optional | 56.0 |

## Related Topics

- Survey Invitation Settings Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_invitation_settings_input.htm)
- Survey Invitation Settings Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/surveys_requests_survey_invitation_settings_input_unauth_apis.htm)
