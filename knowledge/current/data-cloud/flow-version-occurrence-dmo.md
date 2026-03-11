---
title: "Flow Version Occurrence DMO"
domain: data-cloud
topic: flow-version-occurrence-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.471Z
keywords: [Flow, Version, Occurrence, DMO, API, Name, Category, Primary, Subject, Area, Key, Label, Relationships, Fields]
---

# Flow Version Occurrence DMO

# Flow Version Occurrence DMO

The Flow Version Occurrence DMO is a Data Cloud data model object (DMO) for an instance of a recurring flow that runs on a schedule. For example, a flow that runs weekly on Wednesdays creates an occurrence each time it runs.

## API Name

ssot\_\_FlowVersionOccurrence\_\_dlm

## Category

Engagement

## Primary Subject Area

Engagement

## Primary Key Label

Flow Version Occurrence ID (ssot\_\_Id\_\_c)

## Relationships

| DMO LABEL | DMO Field LABEL | Cardinality | Related DMO LABEL | Related DMO Field LABEL |
| --- | --- | --- | --- | --- |
| Flow Element | Flow Version | Many to One (N:1) | Flow Version | Flow Version ID |
| Flow Run | Flow Version | Many to One (N:1) | Flow Version | Flow Version ID |
| Flow Version | Flow | Many to One (N:1) | Flow | Flow ID |

## Fields

| LABEL | API Name | Description | Data Type |
| --- | --- | --- | --- |
| Data Source | ssot__DataSourceId__c | Required. The data source ID for your CRM Connector for your org. | string |
| Data Source Object | ssot__DataSourceObjectId__c | Required. The data source object ID for the object used in your flow. | string |
| Description | ssot__Description__c | The description of the flow occurrence. | string |
| End Date Time | ssot__EndDateTime__c | The date and time that the instance of the scheduled or triggered flow was completed. | dateTime |
| Error Description | ssot__ErrorDescriptionText__c | The description of the error. | string |
| Error Reason | ssot__ErrorReason__c | The error reason if the flow occurrence encountered an error. Valid values are:ACTIVATING_USER_LOST_PERMISSIONSACTIVATING_USER_ACCOUNT_DEACTIVATEDCANNOT_UPDATE_DATASTREAM_METADATACANNOT_REFRESH_DATA_STREAMCANNOT_REFRESH_IDENTITY_RES_METADATACANNOT_REFRESH_IDENTITY_RES_DATACANNOT_PUBLISH_SEGMENTCANNOT_QUERY_SEGMENT_MEMBER_DATADATA_ACTION_STATUS_ERRORFLOW_FAILED_TO_START | FlowErrorCode (enumeration of type string) |
| Flow Version ID | ssot__FlowVersionId__c | The ID of the flow version associated with the scheduled or triggered flow. | string |
| Flow Version Occurrence ID | ssot__Id__c | The ID of the instance of the scheduled or triggered flow. | string |
| Key Qualifier Flow Version ID | KQ_FlowVersionId__c | The ID of the data lineage of the data stream associated with the DLO that is mapped to the scheduled or triggered flow. | string |
| Key Qualifier Flow Version Occurrence ID | KQ_Id__c | The ID of the data lineage of the data stream associated with the DLO that is mapped to the instance of the scheduled or triggered flow. | string |
| Internal Organization | ssot__InternalOrganizationId__c | The business unit or other internal organization that owns the flow occurrence. | string |
| Name | ssot__Name__c | The name of the flow occurrence. | string |
| Schedule Date Time | ssot__ScheduleDateTime__c | The date and time that the instance of the scheduled flow was scheduled to start. | dateTime |
| Start Date Time | ssot__StartDateTime__c | The date and time that the instance of the scheduled or triggered flow started. | dateTime |
| Status | ssot__Status__c | The flow progress status of the instance of the scheduled or triggered flow. Valid values are:Canceled—Specifies a flow that has been deactivated by a user that doesn’t process previously added records. No additional records can be added to this flow.Completed—Specifies a flow that is complete. No more records are eligible to be processed in this flow.Error—Specifies a flow that has been deactivated because it encountered an error. When the error occurred, the error details were emailed to the five users with the Manage Flows permission who most recently logged into Salesforce.Finishing—Specifies a flow that has been deactivated by a user but is finishing records previously added that are eligible to run to completion. No additional records can be added to this flow.In Progress—Specifies a flow that is running or ready to run.Preparing Data—Specifies a flow that is preparing the data it needs to begin running. This process can take up to 2 hours. | FlowProgressStatus (enumeration of type string) |