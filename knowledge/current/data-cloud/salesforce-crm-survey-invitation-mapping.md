---
title: "Salesforce CRM: Survey Invitation Mapping"
domain: data-cloud
topic: salesforce-crm-survey-invitation-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.070Z
estimatedTokens: 448
keywords: [Salesforce, CRM, Survey, Invitation, Mapping, data, mappings, SurveyInvitation, DLO, found, Services, bundle, Connector, Data, Cloud., Usage, Bundle, DMO]
---

# Salesforce CRM: Survey Invitation Mapping

> These data mappings are for the SurveyInvitation DLO found in the Services bundle of the
  Salesforce CRM Connector for Data Cloud.

# Salesforce CRM: Survey Invitation Mapping

These data mappings are for the SurveyInvitation DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Survey Invitation object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Let Guests Respond | OptionsAllowGuestUserResponse__c | text | Survey Invitation | Can Guest User Respond |  |
| Can See Their Response | OptionsAllowParticipantAccessTheirRespon__c | text | Survey Invitation | Can Participant Access Response |  |
| Can Respond Anonymously | OptionsCollectAnonymousResponse__c | text | Survey Invitation | Can Participant Respond Anonymously |  |
| Created Date | CreatedDate__c | dateTime | Survey Invitation | Created Date |  |
| Invitation Expires On | InviteExpiryDateTime__c | dateTime | Survey Invitation | Invitation Expires On |  |
| Invitation Link | InvitationLink__c | text | Survey Invitation | Invitation Link |  |
| Last Modified Date | LastModifiedDate__c | dateTime | Survey Invitation | Last Modified Date |  |
| Name | Name__c | text | Survey Invitation | Name |  |
| Participant ID | ParticipantId__c | text | Survey Invitation | Participant |  |
| Survey ID | SurveyId__c | text | Survey Invitation | Survey |  |
| Survey Invitation ID | Id__c | text | Survey Invitation | Survey Invitation ID | Primary Key |
| Response | ResponseStatus__c | text | Survey Invitation | Survey Response Status |  |
