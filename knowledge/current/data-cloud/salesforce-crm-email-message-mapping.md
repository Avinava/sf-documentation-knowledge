---
title: "Salesforce CRM: Email Message Mapping"
domain: data-cloud
topic: salesforce-crm-email-message-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.040Z
estimatedTokens: 367
keywords: [Salesforce, CRM, Email, Message, Mapping, data, mappings, EmailMessage, DLO, found, Services, bundle, Connector, Data, Cloud., Usage, Bundle, DMO]
---

# Salesforce CRM: Email Message Mapping

> These data mappings are for the EmailMessage DLO found in the Services bundle of the
  Salesforce CRM Connector for Data Cloud.

# Salesforce CRM: Email Message Mapping

These data mappings are for the EmailMessage DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Email Message object used with the CRM connector. You can add or customize the data mappings.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Case ID | ParentId__c | text | Email Message | Case |  |
| Created By ID | CreatedById__c | text | Email Message | Created By |  |
| Created Date | CreatedDate__c | dateTime | Email Message | Created Date |  |
| Email Message ID | Id__c | text | Email Message | Email Message ID | Primary Key |
| Email Message Name | Name__c | text | Email Message | Name |  |
| Headers | Headers__c | text | Email Message | Email Header |  |
| Is Incoming | Incoming__c | text | Email Message | Is Incoming |  |
| Is Private Draft | IsPrivateDraft__c | text | Email Message | Is Private Draft |  |
| Last Modified By ID | LastModifiedById__c | text | Email Message | Last Modified By |  |
| Last Modified Date | LastModifiedDate__c | dateTime | Email Message | Last Modified Date |  |
| Message Date | MessageDate__c | dateTime | Email Message | Message Date |  |
