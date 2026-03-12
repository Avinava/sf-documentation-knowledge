---
title: "Salesforce CRM: User Service Presence Mapping"
domain: data-cloud
topic: salesforce-crm-user-service-presence-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.957Z
estimatedTokens: 441
keywords: [Salesforce, CRM, User, Service, Presence, Mapping, data, mappings, UserServicePresence, DLO, found, Services, bundle, Connector, Cloud]
---

# Salesforce CRM: User Service Presence Mapping

> These data mappings are for the UserServicePresence DLO found in the Services bundle of
  the Salesforce CRM Connector for Data Cloud.

# Salesforce CRM: User Service Presence Mapping

These data mappings are for the UserServicePresence DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the User Service Presence object used with the CRM connector. You can add or customize the data mappings.

| DLO Field | DLO Field API Name | DLO Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- | --- |
| At Capacity Duration | Description__c | number | Agent Service Presence | At Capacity Duration |
| Average Capacity | AverageCapacity__c | number | Agent Service Presence | Average Capacity |
| Configured Capacity | ConfiguredCapacity__c | number | Agent Service Presence | Configured Capacity |
| Idle Duration | IdleDuration__c | number | Agent Service Presence | Idle Duration |
| Is Away | IsAway__c | text | Agent Service Presence | Away |
| Is Current State | IsCurrentState__c | text | Agent Service Presence | Current State |
| Name | Name__c | text | Agent Service Presence | Name |
| Service Presence Status ID | ServicePresenceStatusId__c | text | Agent Service Presence | Service Presence Status |
| Status Duration | StatusDuration__c | number | Agent Service Presence | Status Duration |
| Status End Date | StatusEndDate__c | dateTime | Agent Service Presence | Status End Date |
| Status Start Date | StatusStartDate__c | dateTime | Agent Service Presence | Status Start Date |
| User ID | UserId__c | text | Agent Service Presence | User |
| User Presence ID | Id__c | number | Agent Service Presence | Agent Service Presence ID |
