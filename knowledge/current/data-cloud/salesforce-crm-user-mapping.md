---
title: "Salesforce CRM: User Mapping"
domain: data-cloud
topic: salesforce-crm-user-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.112Z
estimatedTokens: 281
keywords: [Salesforce, CRM, User, Mapping, data, mappings, DLO, found, Services, bundle, Connector, Data, Cloud., Usage, Bundle, DMO]
---

# Salesforce CRM: User Mapping

> These data mappings are for the User DLO found in the Services bundle of the Salesforce
  CRM Connector for Data Cloud.

# Salesforce CRM: User Mapping

These data mappings are for the User DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Conversation Reason object used with the CRM connector. You can add or customize the data mappings.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Information |
| --- | --- | --- | --- | --- | --- |
| Active | IsActive__c | text | User | Is Active |  |
| Company Name | CompanyName__c | text | User | Company Name |  |
| Email | Email__c | text | User | Email |  |
| First Name | FirstName__c | text | User | First Name |  |
| Full Name | Name__c | text | User | Full Name |  |
| Last Name | LastName__c | text | User | Last Name |  |
| Role ID | UserRoleId__c | text | User | User Group |  |
| User ID | Id__c | text | User | User ID | Primary Key |
| Username | Username__c | text | User | Username |  |
