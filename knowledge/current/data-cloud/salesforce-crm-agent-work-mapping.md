---
title: "Salesforce CRM: Agent Work Mapping"
domain: data-cloud
topic: salesforce-crm-agent-work-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.014Z
estimatedTokens: 471
keywords: [Salesforce, CRM, Agent, Work, Mapping, data, mappings, AgentWork, DLO, found, Services, bundle, Connector, Data, Cloud., Usage, Bundle, DMO]
---

# Salesforce CRM: Agent Work Mapping

> These data mappings are for the AgentWork DLO found in the Services bundle of the
  Salesforce CRM Connector for Data Cloud.

# Salesforce CRM: Agent Work Mapping

These data mappings are for the AgentWork DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Agent Work object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Accept Date | AcceptDateTime__c | dateTime | Agent Work | Accept Date |  |
| Active Time | ActiveTime__c | number | Agent Work | Active Time |  |
| After Conversation Work Actual Time | AfterConversationActualTime__c | number | Agent Work | After Conversation Work Actual Time |  |
| After Conversation Work Extension Count | AcwExtensionCount__c | number | Agent Work | After Conversation Work Extension Count |  |
| Agent Work ID | Id__c | text | Agent Work | Agent Work ID | Primary Key |
| Close Date | CloseDateTime__c | dateTime | Agent Work | Close Date |  |
| Group ID | OriginalGroupId__c | text | Agent Work | User Group |  |
| Handle Time | HandleTime__c | number | Agent Work | Handle Time |  |
| Name | Name__c | text | Agent Work | Name |  |
| Request Date | RequestDateTime__c | dateTime | Agent Work | Request DateTime |  |
| Routing Type | RoutingType__c | text | Agent Work | Agent Work Routing Type |  |
| Speed To Answer | SpeedToAnswer__c | number | Agent Work | Speed To Answer |  |
| Status | Status__c | text | Agent Work | Agent Work Status |  |
| User ID | PreferredUserId__c | text | Agent Work | Preferred User |  |
| User ID | UserId__c | text | Agent Work | User |  |
| WorkItem ID | WorkItemId__c | text | Agent Work | Related To |  |
