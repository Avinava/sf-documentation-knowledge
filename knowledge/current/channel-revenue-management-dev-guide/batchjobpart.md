---
title: "BatchJobPart"
domain: channel-revenue-management-dev-guide
topic: batchjobpart
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.298Z
estimatedTokens: 1327
keywords: [BatchJobPart, part, batch, job, API, version, 51.0, later, Calls, Associated, Objects]
---

# BatchJobPart

> Represents one part of a batch job. This object is available in API
    version 51.0 and later.

# BatchJobPart

Represents one part of a batch job. This object is available in API version 51.0 and later.

When a batch job is run, it is divided in to multiple parts. Each part is used to process a specific number of records.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| BatchJobId | TypereferencePropertiesFilter, Group, SortDescriptionThe unique identifier of the associated batch job.This is a relationship field.Relationship NameBatchJobRelationship TypeLookupRefers ToBatchJob |
| EndTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the batch job part was processed. |
| ErrorDescription | TypestringPropertiesFilter, Nillable, SortDescriptionThe error message in case the batch job part failed. |
| FailedRecFileBody | Typebase64PropertiesNillableDescriptionContains the details of the records that the batch job part failed to process. |
| FailedRecFileContentType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionShows the type of data that the batch job part failed to process. For example, application/html or text/csv. |
| FailedRecFileLength | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe character length of the failed record file. |
| FailedRecFileName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the file that contains the details of the failed records. |
| FailedRecordCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of records that the batch job part couldn't process. |
| FailedRowCount | TypelongPropertiesFilter, Group, Nillable, SortDescriptionThe number of records that were processed but the batch job part failed to write back for a Data Processing Engine definition run. This field is available in API version 66.0 and later. |
| InputRecordCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of records that the batch job part must process. |
| InputRowCount | TypelongPropertiesFilter, Group, Nillable, SortDescriptionThe number of records that were submitted to the batch job part for a Data Processing Engine definition run. This field is available in API version 66.0 and later. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the batch job part. |
| OutputRecordCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of records the batch job part has processed. |
| OutputRowCount | TypelongPropertiesFilter, Group, Nillable, SortDescriptionThe number of records that were processed by the batch job part for a Data Processing Engine definition run. This field is available in API version 66.0 and later. |
| ParentBatchJobPartId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the part batch job part associated with the batch job part.This is a relationship field.Relationship NameParentBatchJobPartRelationship TypeLookupRefers ToBatchJobPart |
| RecordFileBody | Typebase64PropertiesNillableDescriptionContains the details of the records that the batch job part processed. |
| RecordFileContentType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionShows the type of data that the batch job part processed. For example, application/html or text/csv. |
| RecordFileLength | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe character length of the file that contains the records that the batch job part processed. |
| RecordFileName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the file that contains the details of the records that the batch job part processed. |
| RetryCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of times the batch job part is automatically rerun in case it fails. |
| StartTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the batch job part's run was started. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe status of the batch job part.Possible values are:CanceledCompletedFailedInProgressNewWaiting |
| Type | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of node in case the associated batch job is of the type Calc (Data Processing Engine).Possible values are:AggregateAnalysisAppendAtomicWritebackComputeCsvIngestionCustomDatasyncExecutionFilterForecastHierarchyJoinOutputRecordsNodeRegisterSliceSourceSummaryTransformWriteback |
| UserReference | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who is assigned as the writeback user in the Writeback Object node of the Data Processign Engine definition for which the batch job part has written back results. This field is available in API version 66.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

BatchJobPartFeed

Feed tracking is available for the object.

BatchJobPartHistory

History is available for tracked fields of the object.
