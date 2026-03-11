---
title: "Salesforce CRM: Conversation Mapping"
domain: data-cloud
topic: salesforce-crm-conversation-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.641Z
keywords: [Salesforce, CRM, Conversation, Mapping, Usage, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: Conversation Mapping

# Salesforce CRM: Conversation Mapping

These data mappings are for the Conversation DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings access Digital Engagement channel data for Service Cloud Voice, Messaging for In-App and Web, and enhanced third-party channels, such as Facebook Messenger, Apple Messages for Business, WhatsApp,and SMS. The data can be used via reports, dashboards, and APIs for insightful conversation analytics.

Bundle:

-   Digital Engagement

## DLO to DMO Mapping

These data mappings relate to the Conversation object used with the CRM connector. You can add or customize the data mappings.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | additional details |
| --- | --- | --- | --- | --- | --- |
| Conversation ID | Id__c | Text | Conversation | Conversation Id | Primary Key |
| Conversation Identifier | ConversationIdentifier__c | Text | Conversation | External Record Id |  |
| Conversation Start Time | StartTime__c | Text | Conversation | Start Time |  |
| Created By ID | CreatedById__c | Text | Conversation | Created By |  |
| Created Date | CreatedDate__c | DateTime | Conversation | Created Date |  |
| Last Modified By ID | LastModifiedById__c | Text | Conversation | Last Modified By |  |
| Last Modified Date | LastModifiedDate__c | DateTime | Conversation | Last Modified Date |  |
| System Modstamp | SystemModstamp__c | DateTime | Conversation | System Modified Stamp |  |
| Conversation End Time | EndTime__c | DateTime | Conversation | End Time |  |