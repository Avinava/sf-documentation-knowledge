---
title: "Salesforce CRM: ConversationParticipant Mapping"
domain: data-cloud
topic: salesforce-crm-conversationparticipant-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.644Z
keywords: [Salesforce, CRM, ConversationParticipant, Mapping, Usage, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: ConversationParticipant Mapping

# Salesforce CRM: ConversationParticipant Mapping

These data mappings are for the ConversationParticipant DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings access Digital Engagement channel data for Service Cloud Voice, Messaging for In-App and Web, and enhanced third-party channels, such as Facebook Messenger, Apple Messages for Business, WhatsApp,and SMS. The data can be used via reports, dashboards, and APIs for insightful conversation analytics.

Bundle:

-   Digital Engagement

## DLO to DMO Mapping

These data mappings relate to the Conversation Reason object used with the CRM connector. You can add or customize the data mappings.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | additional details |
| --- | --- | --- | --- | --- | --- |
| Conversation ID | ConversationId__c | Text | ConversationParticipant | Conversation |  |
| Conversation Participant ID | Id__c | Text | ConversationParticipant | Engagement Channel Participant Id | Primary Key |
| Created By ID | CreatedById__c | Text | ConversationParticipant | Created By |  |
| Created Date | CreatedDate__c | DateTime | ConversationParticipant | Created Date |  |
| Joined Time | JoinedTime__c | DateTime | ConversationParticipant | Joined DateTime |  |
| Last Modified By ID | LastModifiedById__c | Text | ConversationParticipant | Last Modified By |  |
| Last Modified Date | LastModifiedDate__c | DateTime | ConversationParticipant | Last Modified Date |  |
| Left Time | LeftTime__c | DateTime | ConversationParticipant | Left DateTime |  |
| System Modstamp | SystemModstamp__c | DateTime | ConversationParticipant | System Modified Stamp |  |
| Participant Display Name | ParticipantDisplayName__c | Text | ConversationParticipant | Participant Display Name |  |