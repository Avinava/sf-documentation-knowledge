---
title: "BatchJob"
domain: life-sciences-dev-guide
topic: batchjob
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.985Z
estimatedTokens: 1105
keywords: [BatchJob, instance, batch, job, either, running, run, Life, Sciences, Cloud, API, version, 65.0, later, Calls]
---

# BatchJob

> Represents an instance of a batch job that is either running and has been
      run. This object is available in Life Sciences Cloud API version 65.0 and later.

# BatchJob

Represents an instance of a batch job that is either running and has been run. This object is available in Life Sciences Cloud API version 65.0 and later.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete()

## Fields

| Field | Details |
| --- | --- |
| AdditionalInformation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information about the batch job. This field is available in API version 65.0 when Life Sciences Cloud is enabled. |
| BatchJobDefinitionId | TypereferencePropertiesFilter, Group, SortDescriptionThe unique identifier of the associated batch job definition.This is a relationship field.Relationship NameBatchJobDefinitionRelationship TypeLookupRefers ToBatchJobDefinition |
| BatchJobDefinitionName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name of the associated batch job definition. |
| BatchJobPartCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe count of the batch job parts. This field is available in API version 65.0 when Life Sciences Cloud is enabled. |
| EndTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the batch job run was completed. |
| ErrorDescription | TypestringPropertiesFilter, Nillable, SortDescriptionThe error message in case the batch job run failed. |
| ExternalReference | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the process that's running or has run the batch job. |
| IsDebugOn | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if debug mode is turned on.The default value is false. |
| IsDebugRecipeDeleted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed the batch job. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this item. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the batch job. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionUnique identifier of the user who initiated the batch job run.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProcessGroup | TypestringPropertiesFilter, Group, SortDescriptionThe group or team for which the batch job is run. |
| RetryCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of times the batch job run is automatically rerun in case it fails. |
| RuntimeParameter | TypetextareaPropertiesNillableDescriptionThe values of the input variables that are used as filter criteria in a Batch Management job. |
| StartTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the batch job run was started. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of the batch job run.Possible values are:CanceledCompletedCompletedWithFailuresFailedInProgressSubmitted |
| Type | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe type of batch job that is run.Possible values are:Calc Data Processing EngineDecisionTableRefreshFlow |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BatchJobFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Change events are available for the object.

[BatchJobHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

Feed tracking is available for the object.

## Related Topics

- BatchJobFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- BatchJobHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
