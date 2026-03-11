---
title: "sendSurveyInvitationEmail(surveyID,
    SurveyEmailInput)"
domain: apex-reference
topic: sendsurveyinvitationemailsurveyid-surveyemailinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.806Z
keywords: [sendSurveyInvitationEmail, surveyID, SurveyEmailInput, Email, survey, invitations, 300, participants., email, either, leads, contacts, users, org., Either, link, launch, question, embedded, invitations.]
---

# sendSurveyInvitationEmail(surveyID,
    SurveyEmailInput)

> Email survey invitations to up to 300 participants. You can email
      either leads, contacts, or users in your org. Either a link to launch the survey or a question
      can be embedded in the email invitations.

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

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the survey.

SurveyEmailInput

Type: [ConnectApi.SurveyInvitationEmailInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_survey_email.htm "Survey invitation email.")

A ConnectApi.SurveyInvitationEmailInput object.

#### Return Value

Type: [ConnectApi.SurveyInvitationEmailOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_survey_email.htm "Survey invitation email.")