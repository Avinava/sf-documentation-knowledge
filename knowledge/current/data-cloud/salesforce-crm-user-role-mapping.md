---
title: "Salesforce CRM: User Role Mapping"
domain: data-cloud
topic: salesforce-crm-user-role-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.951Z
estimatedTokens: 240
keywords: [Salesforce, CRM, User, Role, Mapping, data, mappings, UserRole, DLO, found, Services, bundle, Connector, Cloud, Usage]
---

# Salesforce CRM: User Role Mapping

> These data mappings are for the UserRole DLO found in the Services bundle of the
  Salesforce CRM Connector for Data Cloud.

# Salesforce CRM: User Role Mapping

These data mappings are for the UserRole DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the User Role object used with the CRM connector. You can add or customize the data mappings.

| DLO Field | DLO Field API Name | DLO Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Name | Name__c | text | User Group | Alias |  |
| Last Modified Date | LastModifiedDate__c | dateTime | User Group | Last Modified Date |  |
| Developer Name | DeveloperName__c | text | User Group | Name |  |
| Parent Role ID | ParentRoleId__c | text | User Group | User Group |  |
| Role ID | Id__c | text | User Group | User Group ID | Primary Key |
