---
title: "Surveys Class"
domain: apex-reference
topic: surveys-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.633Z
estimatedTokens: 472
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

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Surveys Methods

These methods are for Surveys. All methods are static.

-   **[sendSurveyInvitationEmail(surveyID, SurveyEmailInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Survey_static_methods.htm#apex_ConnectAPI_Surveys_sendSurveyInvitationEmail_1)**
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

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the survey.

SurveyEmailInput

Type: [ConnectApi.SurveyInvitationEmailInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_survey_email.htm "Survey invitation email.")

A ConnectApi.SurveyInvitationEmailInput object.

#### Return Value

Type: [ConnectApi.SurveyInvitationEmailOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_survey_email.htm "Survey invitation email.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- sendSurveyInvitationEmail(surveyID, SurveyEmailInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Survey_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.SurveyInvitationEmailInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_survey_email.htm)
- ConnectApi.SurveyInvitationEmailOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_survey_email.htm)
