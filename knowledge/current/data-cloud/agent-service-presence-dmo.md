---
title: "Agent Service Presence DMO"
domain: data-cloud
topic: agent-service-presence-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.624Z
keywords: [Agent, Service, Presence, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Agent Service Presence DMO

# Agent Service Presence DMO

The Agent Service Presence DMO is a Data Cloud data model object (DMO) for a presence user’s real-time presence status.

## Object API Name

ssot\_\_AgentServicePresence\_\_dlm

## Category

Other

## Primary Subject Area

User Service Presence

## Primary Key

Case ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Agent Service Presence | Service Presence Status | Many To One: N:1 | Service Presence Status | Agent Work Status Id |
| Agent Service Presence | User | Many To One: N:1 | User | User ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Agent Service Presence Id | ssot__Id__c | A unique ID used as the primary key for the agent service presence DMO. | text |
| At Capacity Duration | ssot__AtCapacityDuration__c | The duration a service agent was at capacity. | number |
| Average Capacity | ssot__AverageCapacity__c | The average capacity for a service agent. | number |
| Away | ssot__IsAway__c | An indicator if a service agent is away. | text |
| Configured Capacity | ssot__ConfiguredCapacity__c | The configured capacity for a service agent. | number |
| Current State | ssot__IsCurrentState__c | An indicator of the current state of a service agent. | text |
| Data Source | ssot__DateSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DateSourceObjectId___c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Description | ssot__Description__c | The description for the service agent presence. | text |
| Idle Duration | ssot__IdleDuration__c | The duration a service agent was idle. | number |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the agent service presence. | text |
| Name | ssot__Name__c | The name of a service agent. | text |
| Service Presence Status Id | ssot__ServicePresenceStatusId__c | A reference ID to the status of the agent service presence. | text |
| Status Duration | ssot__StatusDuration__c | The duration a service agent status lasted. | number |
| Status End Date | ssot__StatusEndDate__c | The date a service agent status ended. | dateTime |
| Status Start Date | ssot__StatusStartDate__c | The date a service agent status started. | dateTime |
| User ID | ssot__UserId__c | A reference Id to the agent service presence user. | text |