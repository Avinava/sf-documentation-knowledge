---
title: "Flow Element Run DMO"
domain: data-cloud
topic: flow-element-run-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.112Z
estimatedTokens: 544
keywords: [Flow, Element, Run, DMO, Data, Cloud, data, model, status, single, element, executed, within, flow, run., API, Name, Category, Primary, Subject]
---

# Flow Element Run DMO

> The Flow Element Run DMO is a Data Cloud 
      data model object (DMO) for the status of a single element executed within a flow run.

# Flow Element Run DMO

The Flow Element Run DMO is a Data Cloud data model object (DMO) for the status of a single element executed within a flow run.

## Object API Name

ssot\_\_FlowElementRun\_\_dlm

## Category

Engagement

## Primary Subject Area

Engagement

## Primary Key

Flow Element Run ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Email Engagement | Flow Element Run | Many to One (N:1) | Flow Element Run | Flow Element Run ID |
| Flow Element Run | Flow Element | Many to One (N:1) | Flow Element | Flow Element ID |
| Flow Element Run | Flow Run | Many to One (N:1) | Flow Run | Flow Run ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Completed DateTime | ssot__CompletedDateTime__c | The date and time when the flow completes or encounters an error. After this field has a value, no further processing can take place through the Flow Element Run DMO. | dateTime |
| Error Description | ssot__ErrorDescriptionText__c | The description of the Error Reason. This field is available in API version 59.0 and later. | text |
| Error Reason | ssot__ErrorReason__c | The error type if the flow run encountered an error. Valid values are:DeactivatedUser—The user that activated the flow is no longer active, so the flow can’t execute.InternalError— There was a system error that prevented the flow from executing.This field is available in API version 59.0 and later. | text |
| Flow Element | ssot__FlowElementId__c | A reference ID to the associated flow element. | text |
| Flow Element Run ID | ssot__Id__c | A unique ID used as primary key for the Flow Element Run DMO. | text |
| Flow Element Run Status | ssot__FlowElementRunStatus__c | The status of the flow element run. | text |
| Flow Run | ssot__FlowRunId__c | A reference ID to the associated flow run of the flow element run. | text |
| Scheduled DateTime | ssot__ScheduledDateTime__c | The date and time when the flow element run was scheduled for execution. Actual execution time can be later due to queuing, retries, or other issues. | dateTime |
