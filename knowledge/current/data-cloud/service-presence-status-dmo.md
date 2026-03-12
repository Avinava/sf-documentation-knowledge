---
title: "Service Presence Status DMO"
domain: data-cloud
topic: service-presence-status-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.580Z
estimatedTokens: 393
keywords: [Service, Presence, Status, DMO, Data, Cloud, model, assigned, channel, Leads, Lunch, Busy, API, Category, Primary]
---

# Service Presence Status DMO

> The Service Presence Status DMO is a Data Cloud data model object
      (DMO) for a presence status that can be assigned to a service channel. For example, Available
      for Leads, Out for Lunch, or Busy.

# Service Presence Status DMO

The Service Presence Status DMO is a Data Cloud data model object (DMO) for a presence status that can be assigned to a service channel. For example, Available for Leads, Out for Lunch, or Busy.

## Object API Name

ssot\_\_ServicePresenceStatus\_\_dlm

## Category

Other

## Primary Subject Area

## Primary Key

Agent Work Status Id (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Agent Service Presence | Service Presence Status | Many To One: N:1 | Service Presence Status | Agent Work Status Id |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Agent Work Status Id | ssot__Id__c | A unique ID used as the primary key for the service presence status DMO. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Description | ssot__Description__c | The service presence status description. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the service presence status. | text |
| Name | ssot__Name__c | The name of the service presence status. | text |
