---
title: "Salesforce CRM: ConversationReasonReportDefinition Mapping"
domain: data-cloud
topic: salesforce-crm-conversationreasonreportdefinition-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.658Z
keywords: [Salesforce, CRM, ConversationReasonReportDefinition, Mapping, Usage, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: ConversationReasonReportDefinition Mapping

# Salesforce CRM: ConversationReasonReportDefinition Mapping

These data mappings are for the ConvReasonReportDefinition DLO used with the Salesforce CRM Connector found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Conversation Reason Report Definition object used with the CRM connector. You can add or customize the data mappings.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- | --- |
| Conversation Reason Report Definition IDPrimary Key | Id__c | text | Conversation Reason Report Definition | Conversation Reason Report Definition ID |
| End Date | EndDate__c | dateTime | Conversation Reason Report Definition | EndDate |
| Label |  | text | Conversation Reason Report Definition | Name |
| Pipeline Run Identifier | PipelineRunIdentifier__c | text | Conversation Reason Report Definition | Pipeline Run Identifier |
| Refresh Frequency | RefreshFrequency__c | text | Conversation Reason Report Definition | Recurring Event Frequency UOM |
| Start Date | StartDate__c | dateTime | Conversation Reason Report Definition | StartDate |
| Status | Status__c | text | Conversation Reason Report Definition | Conversation Reason Report Status |