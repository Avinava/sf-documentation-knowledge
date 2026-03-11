---
title: "Salesforce CRM: ConversationReasonGroup Mapping"
domain: data-cloud
topic: salesforce-crm-conversationreasongroup-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.655Z
keywords: [Salesforce, CRM, ConversationReasonGroup, Mapping, Usage, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: ConversationReasonGroup Mapping

# Salesforce CRM: ConversationReasonGroup Mapping

These data mappings are for the ConverationReasonGroup DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Conversation Reason Group object used with the CRM connector. You can add or customize the data mappings.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- | --- |
| Average Duration in Seconds | AverageDurationSeconds__c | number | Conversation Reason Category | Average Duration in Seconds |
| Average Number of Turns | AverageNumOfTurns__c | number | Conversation Reason Category | Average Number of Conversation Turns |
| Conversation Reason Group IDPrimary Key | Id__c | text | Conversation Reason Category | Conversation Reason Category ID |
| Conversation Reason Report Definition ID | ConvReasonReportDefinitionId__c | text | Conversation Reason Category | Conversation Reason Report Definition |
| Einstein Score | EinsteinScore__c | number | Conversation Reason Category | Einstein Score |
| Frequency Percent | FrequencyPercent__c | number | Conversation Reason Category | Frequency Percent |
| Name | Name__c | text | Conversation Reason Category | Name |
| Total Conversation Count | TotalConversationCount__c | number | Conversation Reason Category | Total Conversation Count |
| Total Number of Reasons In this Group | ReasonCount__c | number | Conversation Reason Category | Reason Count |
| Training Date | TrainingDate__c | dateTime | Conversation Reason Category | Training Date |