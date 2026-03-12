---
title: "Flow DMO"
domain: data-cloud
topic: flow-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.099Z
estimatedTokens: 231
keywords: [Flow, DMO, Data, Cloud, data, model, details, flow., API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Flow DMO

> The Flow DMO is a Data Cloud 
      data model object (DMO) for details about a flow.

# Flow DMO

The Flow DMO is a Data Cloud data model object (DMO) for details about a flow.

## Object API Name

ssot\_\_Flow\_\_dlm

## Category

Other

## Primary Subject Area

Engagement

## Primary Key

Flow ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Flow | Associated Record | Many to One (N:1) | Campaign | Campaign ID |
| Flow Version | Flow | Many to One (N:1) | Flow | Flow ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Associated Record | ssot__Flow.AssociatedRecordId__c | A reference ID to the record associated with the flow. | text |
| Description | ssot__Description__c | The description of the flow. | text |
| Flow ID | ssot__Id__c | A unique ID used as primary key for the Flow DMO. | text |
| Name | ssot__Name__c | The name of the flow. | text |
