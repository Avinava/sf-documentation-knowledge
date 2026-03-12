---
title: "Salesforce CRM: ConversationReason Mapping"
domain: data-cloud
topic: salesforce-crm-conversationreason-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.696Z
estimatedTokens: 382
keywords: [Salesforce, CRM, ConversationReason, Mapping, data, mappings, DLO, found, Services, bundle, Connector, Cloud, Usage, DMO]
---

# Salesforce CRM: ConversationReason Mapping

> These data mappings are for the ConversationReason DLO found in the Services bundle of
  the Salesforce CRM Connector for Data Cloud.

# Salesforce CRM: ConversationReason Mapping

These data mappings are for the ConversationReason DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Conversation Reason object used with the CRM connector. You can add or customize the data mappings.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- | --- |
| Average Duration in Seconds | AverageDurationSeconds__c | number | Conversation Reason | Average Duration in Seconds |
| Average Number of Turns | AverageNumOfTurns__c | number | Conversation Reason | Average Number of Turns |
| Conversation Reason Group ID | ConversationReasonGroupId__c | text | Conversation Reason | Conversation Reason Category |
| Conversation Reason IDPrimary Key | Id__c | text | Conversation Reason | Conversation Reason ID |
| Conversation Reason Status | Status__c | text | Conversation Reason | Conversation Reason Status Code |
| Einstein Score | EinsteinScore__c | number | Conversation Reason | Einstein Score |
| Frequency Percent | FrequencyPercent__c | number | Conversation Reason | Frequency Percent |
| Summary | Summary__c | text | Conversation Reason | Summary |
| Total Conversation Count | TotalConversationCount__c | text | Conversation Reason | Total Conversation Count |
