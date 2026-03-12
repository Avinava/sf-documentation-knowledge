---
title: "Flow Run DMO"
domain: data-cloud
topic: flow-run-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.859Z
estimatedTokens: 760
keywords: [Flow, Run, DMO, Data, Cloud, model, execution, API, Category, Primary, Subject, Area, Key, Relationships]
---

# Flow Run DMO

> The Flow Run DMO is a Data Cloud 
      data model object (DMO) for details about a single execution of a flow.

# Flow Run DMO

The Flow Run DMO is a Data Cloud data model object (DMO) for details about a single execution of a flow.

## Object API Name

ssot\_\_FlowRun\_\_dlm

## Category

Engagement

## Primary Subject Area

Engagement

## Primary Key

Flow Run ID(ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Flow Element Run | Flow Run | Many to One (N:1) | Flow Run | Flow Run ID |
| Flow Run | Flow Version | Many to One (N:1) | Flow Version | Flow Version ID |
| Flow Run | Primary Record ID | Many to One (N:1) | Individual | Individual ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Completed DateTime | ssot__CompletedDateTime__c | The date and time when the flow run completed or encountered an error. After this field has a value, no further processing can take place through the Flow Run DMO. | dateTime |
| Error Description | ssot__ErrorDescriptionText__c | The description of the Error Reason This field is available in API version 59.0 and later. | text |
| Error Reason | ssot__ErrorReason__c | The error type if the flow run encountered an error. Valid values are:MessagingApiEntitlementReached—A metered usage limit value was exceeded.IndividualContactPointNotFound—When attempting to send an email, no contact point was found, so the email couldn’t be sent.InternalError—There was a system error that prevented the flow from executing.ServiceError—A request on a third-party system failed.This field is available in API version 59.0 and later. | text |
| Flow Run ID | ssot__Id__c | A unique ID used as a primary key for the Flow Run DMO. | text |
| Flow Run Status | ssot__FlowRunStatus__c | The status of the flow run. | text |
| Flow Version | ssot__FlowVersionId__c | A reference ID to the flow version that the flow run is executing. | text |
| Flow Version Occurrence | ssot__FlowVersionOccurrenceId__c | The ID of the instance of the scheduled segment-triggered flow associated with the flow run. This field is available in API version 60.0 and later. | text |
| Primary Record ID | ssot__PrimaryRecordId__c | A reference ID for the record that the flow run is executed against. | text |
| Primary Record Object | ssot__PrimaryRecordObject__c | The type of entity referenced by Primary Record ID, for example, Account, Case, or Individual. This field is available in API version 59.0 and later. | text |
| Scheduled DateTime | ssot__ScheduledDateTime__c | The date and time when the flow run was scheduled for execution. Actual execution time can be slightly later due to queueing, retries, or other issues. | dateTime |
| Stopped Reason | ssot__StoppedReason__c | The error code if the flow run was stopped. Valid values are:FLOW_DEACTIVATED—The marketing user clicked Stop Now in Flow Builder, which causes all flow runs to stop.INDIVIDUAL_NOT_FOUND—The unified individual on this flow run no longer exists.This field is available in API version 61.0 and later. | text |
