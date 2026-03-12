---
title: "Surveys Class"
domain: salesforce-feedback-management-dev-guide
topic: surveys-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.347Z
estimatedTokens: 419
namespace: ConnectApi
keywords: [Surveys, Email, survey, invitations, participants, either, leads, contacts, users, org, link, launch, question, embedded, sendSurveyInvitationEmail]
---

# Surveys Class

> Email survey invitations to up to 300 participants. You can email
      either leads, contacts, or users in your org. Either a link to launch the survey or a question
      can be embedded in the email invitations.

**Namespace:** `ConnectApi`

# Surveys Class

Send survey invitations by email.

## Namespace

ConnectApi

## Surveys Methods

These methods are for Surveys. All methods are static.

-   **[sendSurveyInvitationEmail(surveyID, SurveyEmailInput)](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/apex_ConnectAPI_Survey_static_methods.htm#apex_ConnectAPI_Surveys_sendSurveyInvitationEmail_1)**
    Email survey invitations to up to 300 participants. You can email either leads, contacts, or users in your org. Either a link to launch the survey or a question can be embedded in the email invitations.

### sendSurveyInvitationEmail(surveyID, SurveyEmailInput)

Email survey invitations to up to 300 participants. You can email either leads, contacts, or users in your org. Either a link to launch the survey or a question can be embedded in the email invitations.

#### API Version

50.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.SurveyInvitationEmailOutput sendSurveyInvitationEmail(String surveyID, ConnectApi.SurveyInvitationEmailInput SurveyEmailInput)

#### Parameters

surveyID

Type: String

ID of the survey.

SurveyEmailInput

Type: [ConnectApi.SurveyInvitationEmailInput](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/apex_connectapi_input_survey_email.htm "Survey invitation email.")

A ConnectApi.SurveyInvitationEmailInput object.

#### Return Value

Type: [ConnectApi.SurveyInvitationEmailOutput](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/apex_connectapi_output_survey_email.htm "Survey invitation email.")

## Related Topics

- sendSurveyInvitationEmail(surveyID, SurveyEmailInput) (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/apex_ConnectAPI_Survey_static_methods.htm)
- ConnectApi.SurveyInvitationEmailInput (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/apex_connectapi_input_survey_email.htm)
- ConnectApi.SurveyInvitationEmailOutput (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/apex_connectapi_output_survey_email.htm)
