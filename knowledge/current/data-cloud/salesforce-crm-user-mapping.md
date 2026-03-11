---
title: "Salesforce CRM: User Mapping"
domain: data-cloud
topic: salesforce-crm-user-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.847Z
keywords: [Salesforce, CRM, User, Mapping, Usage, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: User Mapping

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