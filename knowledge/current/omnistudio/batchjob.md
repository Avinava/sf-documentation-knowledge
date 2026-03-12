---
title: "BatchJob"
domain: omnistudio
topic: batchjob
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:53.546Z
estimatedTokens: 1338
keywords: [BatchJob, Represents, instance, batch, job, either, running, run., API, version, 51.0, later., Supported, Calls, Fields, Associated, Objects]
---

# BatchJob

> Represents an instance of a batch job that is either running and has been
      run. This object is available in API version 51.0 and later.

# BatchJob

Represents an instance of a batch job that is either running and has been run. This object is available in API version 51.0 and later.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete()

## Fields

| Field | Details |
| --- | --- |
| AdditionalInformation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA JSON that contains additional context about the batch jon. |
| BatchJobDefinitionId | TypereferencePropertiesFilter, Group, SortDescriptionThe unique identifier of the associated batch job definition.This is a relationship field.Relationship NameBatchJobDefinitionRelationship TypeLookupRefers ToBatchJobDefinition |
| BatchJobDefinitionName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name of the associated batch job definition. |
| EndTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the batch job run was completed. |
| ErrorDescription | TypestringPropertiesFilter, Nillable, SortDescriptionThe error message in case the batch job run failed. |
| ExecutionStage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the stage at which the batch job's run failed. This field is available in API version 66.0 and later.Possible values are:DatasyncExecutionPreprocessingWriteback |
| ExternalReference | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the process that's running or has run the batch job. |
| IsDebugOn | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether debug mode was turned on (true) or not (false) when a definition was run.The default value is false. |
| IsDebugRecipeDeleted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether debug recipes and datasets were deleted (true) or not (false).When the IsDebugOn is set to True, and the definition is run, after 7 days IsDebugRecipeDeleted is automatically set to True, and debug recipes and datasets are deleted.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed the batch job. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this item. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the batch job. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionUnique identifier of the user who initiated the batch job run.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProcessGroup | TypestringPropertiesFilter, Group, SortDescriptionThe group or team for which the batch job is run. |
| RetryCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of times the batch job run is automatically rerun in case it fails. |
| RuntimeParameter | TypetextareaPropertiesNillableDescriptionThe values of the input variables that are used as filter criteria in a Batch Management job. |
| StartTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the batch job run was started. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of the batch job run.Possible values are:CanceledCompletedCompletedWithFailuresFailedInProgressQueuedQueueingInProgressSubmitted |
| TotalInputRecordCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of records that were provided as input to the batch job. This field is available in API version 66.0 and later. |
| TotalProcessedRecordCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of records that were processed by all the batch job parts associated with the batch job. This field is available in API version 66.0 and later. |
| Type | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe type of batch job that is run.Possible values are:Calc—Data Processing EngineDecisionTableRefreshFlowDeepCloneSalesAgreementManagerProvisioningThe process types available to you vary depending on the licenses available in your org. |
| UtilisedExecutionLimit | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe CRM Analytics or Data 360 execution capacity utilized by Data Processing Engine batch jobs before the current run started. This field is available in API version 66.0 and later. |
| UtilisedWritebackLimit | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe CRM Analytics or Data 360 writeback capacity utilized by Data Processing Engine batch jobs before the current run started. This field is available in API version 66.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

BatchJobFeed

Feed tracking is available for the object.

BatchJobHistory

History is available for tracked fields of the object.
