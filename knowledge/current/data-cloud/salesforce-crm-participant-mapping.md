---
title: "Salesforce CRM: Participant Mapping"
domain: data-cloud
topic: salesforce-crm-participant-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.860Z
estimatedTokens: 287
keywords: [Salesforce, CRM, Participant, Mapping, data, mappings, DLO, found, Services, bundle, Connector, Data, Cloud., Usage, Bundle, DMO]
---

# Salesforce CRM: Participant Mapping

> These data mappings are for the Participant DLO found in the Services bundle of the
  Salesforce CRM Connector for Data Cloud.

# Salesforce CRM: Participant Mapping

These data mappings are for the Participant DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings access Digital Engagement channel data for Service Cloud Voice, Messaging for In-App and Web, and enhanced third-party channels, such as Facebook Messenger, Apple Messages for Business, WhatsApp,and SMS. The data can be used via reports, dashboards, and APIs for insightful conversation analytics.

Bundle:

-   Digital Engagement

## DLO to DMO Mapping

These data mappings relate to the Participant object used with the CRM connector. You can add or customize the data mappings.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | additional details |
| --- | --- | --- | --- | --- | --- |
| App Type | ParticipantAppType__c | Text | Participant | Participant |  |
| Participant ID | Id__c | Text | Participant | Engagement Participant App | Primary Key |
| Role | ParticipantRole__c | Text | Participant | Engagement Participant Role |  |
| Subject | ParticipantSubject__c | Text | Participant | Subject |  |
