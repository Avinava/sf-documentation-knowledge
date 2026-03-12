---
title: "Flow Element DMO"
domain: data-cloud
topic: flow-element-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.106Z
estimatedTokens: 265
keywords: [Flow, Element, DMO, Data, Cloud, data, model, details, single, element, within, flow, version., API, Name, Category, Primary, Subject, Area, Key]
---

# Flow Element DMO

> The Flow Element DMO is a
         Data Cloud data model object (DMO) for details about a single
      element within a flow version.

# Flow Element DMO

The Flow Element DMO is a Data Cloud data model object (DMO) for details about a single element within a flow version.

## Object API Name

ssot\_\_FlowElement\_\_dlm

## Category

Other

## Primary Subject Area

Engagement

## Primary Key

Flow Element ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Bulk Email Message | Flow Element | Many to One (N:1) | Flow Element | Flow Element ID |
| Flow Element | Flow Version | Many to One (N:1) | Flow Version | Flow Version ID |
| Flow Element Run | Flow Element | Many to One (N:1) | Flow Element | Flow Element ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Flow Element ID | ssot__Id__c | A unique ID used as primary key for the Flow Element DMO. | text |
| Flow Version | ssot__FlowVersionId__c | A reference ID to the associated flow version of the flow element. | text |
| Name | ssot__Name__c | The name of the flow element. | text |
