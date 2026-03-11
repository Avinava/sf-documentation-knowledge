---
title: "Salesforce CRM: Case History 2 Mapping"
domain: data-cloud
topic: salesforce-crm-case-history-2-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.801Z
keywords: [Salesforce, CRM, Case, History, Mapping, Usage, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: Case History 2 Mapping

# Salesforce CRM: Case History 2 Mapping

These data mappings are for the CaseHistory2 DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Case History 2 object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Case ID | CaseId__c | text | Case Update | Case |  |
| Case History2 ID | Id__c | text | Case Update | Case Update ID | Primary Key |
| Last Modified By ID | LastModifiedById__c | text | Case Update | Last Modified By |  |
| Last Modified Date | LastModifiedDate__c | dateTime | Case Update | Last Modified Date |  |
| Previous Update | PreviousUpdate__c | dateTime | Case Update | Previous Update Date |  |
| Owner ID | OwnerId__c | text | Case Update | Related Owner |  |
| Status | Status__c | text | Case Update | Status |  |