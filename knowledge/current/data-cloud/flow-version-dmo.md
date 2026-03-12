---
title: "Flow Version DMO"
domain: data-cloud
topic: flow-version-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.864Z
estimatedTokens: 251
keywords: [Flow, Version, DMO, Data, Cloud, model, API, Category, Primary, Subject, Area, Key, Relationships]
---

# Flow Version DMO

> The Flow Version DMO is a Data Cloud 
      data model object (DMO) for details about a version of a flow.

# Flow Version DMO

The Flow Version DMO is a Data Cloud data model object (DMO) for details about a version of a flow.

## Object API Name

ssot\_\_FlowVersion\_\_dlm

## Category

Other

## Primary Subject Area

Engagement

## Primary Key

Flow Version ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Flow Element | Flow Version | Many to One (N:1) | Flow Version | Flow Version ID |
| Flow Run | Flow Version | Many to One (N:1) | Flow Version | Flow Version ID |
| Flow Version | Flow | Many to One (N:1) | Flow | Flow ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Flow | ssot__FlowId__c | A reference ID to the parent flow of the flow version. | text |
| Flow Version ID | ssot__Id__c | A unique ID used as a primary key for the Flow Version DMO. | text |
| Version Number | ssot__VersionNumber__c | The version number of the flow version. |  |
