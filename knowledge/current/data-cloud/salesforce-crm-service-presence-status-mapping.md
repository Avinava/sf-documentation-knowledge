---
title: "Salesforce CRM: Service Presence Status Mapping"
domain: data-cloud
topic: salesforce-crm-service-presence-status-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.053Z
estimatedTokens: 208
keywords: [Salesforce, CRM, Service, Presence, Status, Mapping, data, mappings, ServicePresenceStatus, DLO, found, Services, bundle, Connector, Data, Cloud., Usage, Bundle, DMO]
---

# Salesforce CRM: Service Presence Status Mapping

> These data mappings are for the ServicePresenceStatus DLO found in the Services bundle
  of the Salesforce CRM Connector for Data Cloud.

# Salesforce CRM: Service Presence Status Mapping

These data mappings are for the ServicePresenceStatus DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Service Presence object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Service Presence Status ID | Id__c | text | Service Presence Status | Agent Work Status ID | Primary Key |
| Status Name | MasterLabel__c | text | Service Presence Status | Name |  |
