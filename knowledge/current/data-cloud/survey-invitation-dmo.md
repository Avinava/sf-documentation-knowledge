---
title: "Survey Invitation DMO"
domain: data-cloud
topic: survey-invitation-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.659Z
estimatedTokens: 681
keywords: [Survey, Invitation, DMO, Data, Cloud, model, sent, participant, API, Category, Primary, Subject, Area, Key, Relationships]
---

# Survey Invitation DMO

> The Survey Invitation DMO is a Data Cloud data model object (DMO) for
      the invitation sent to a participant to complete the survey.

# Survey Invitation DMO

The Survey Invitation DMO is a Data Cloud data model object (DMO) for the invitation sent to a participant to complete the survey.

## Object API Name

ssot\_\_SurveyInvitation\_\_dlm

## Category

Other

## Primary Subject Area

## Primary Key

Survey Invitation Id (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Survey Invitation | Participant | Many To One: N:1 | Account Contact | Account Contact ID |
| Survey Response | Survey Invitation | Many To One: N:1 | Survey Invitation | Survey Invitation ID |
| Survey Subject | Survey Parent | Many To One: N:1 | Survey Invitation | Survey Invitation ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Can Guest User Respond | ssot__CanGuestUserRespond__c | An indicator if a guest user can respond to a survey invitation. | text |
| Can Participant Access Response | ssot__CanParticipantAccessResponse__c | An indicator if a participant can access their survey response. | text |
| Can Participant Respond Anonymously | ssot__CanParticipantRespondAnonymously__c | An indicator if a participant can respond anonymously to a survey invitation. | text |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DateSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DateSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Description | ssot__Description__c | The survey invitation description. | text |
| Invitation Expires On | ssot__InviteExpiryDateTime__c | The date the survey invitation expires on. | dateTime |
| Invitation Link | ssot__InvitationLink__c | The link to the survey invitation. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Name | ssot__Name__c | The name of the survey invitation. | text |
| Participant | ssot__ParticipantId__c | A reference ID to the survey participant. | text |
| Participant Object | ssot__ParticipantObject__c | The object representing the survey participant. | text |
| Survey | ssot__SurveyId__c | A reference ID to the survey for the invitation. | text |
| Survey Invitation Id | ssot__Id__c | A unique ID used as the primary key for the survey invitation DMO. | text |
| Survey Response Status | ssot__SurveyResponseStatus__c | The status of the survey response. | text |
