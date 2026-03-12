---
title: "Salesforce CRM: Alert Mappings"
domain: data-cloud
topic: salesforce-crm-alert-mappings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.365Z
estimatedTokens: 260
keywords: [Salesforce, CRM, Alert, Mappings, data, DLO, found, Financial, Services, Cloud, bundle, Connector, Usage, DMO, Mapping]
---

# Salesforce CRM: Alert Mappings

> These data mappings are for the Alert DLO found in the Financial Services Cloud bundle
  of the Salesforce CRM Connector for Data Cloud.

# Salesforce CRM: Alert Mappings

These data mappings are for the Alert DLO found in the Financial Services Cloud bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

Bundle:

-   Financial Services Cloud

## DLO to DMO Mapping

These data mappings relate to the Alert object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO API Name | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- | --- |
| Account | FinServ__Account__c | text | Record Alert | Account |
| Active | FinServ__Active__c | checkbox | Record Alert | Active |
| Id |  | id | Record Alert | Record Alert Id |
| Message | FinServ__Message__c | text | Record Alert | Message |
| MessageDescription | FinServ__MessageDescription__c | text | Record Alert | Descriptio |
| Name |  | text | Record Alert | Name |
| Priority | FinServ__Priority__c | picklist | Record Alert | Record Alert Priority |
| Severity | FinServ__Severity__c | picklist | Record Alert | Record Alert Severity |
