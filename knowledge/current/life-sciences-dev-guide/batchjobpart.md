---
title: "BatchJobPart"
domain: life-sciences-dev-guide
topic: batchjobpart
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.996Z
estimatedTokens: 1051
keywords: [BatchJobPart, part, batch, job, Life, Sciences, Cloud, API, version, 65.0, later, Calls, Associated, Objects]
---

# BatchJobPart

> Represents one part of a batch job. This object is available in Life
  Sciences Cloud in API version 65.0 and later.

# BatchJobPart

Represents one part of a batch job. This object is available in Life Sciences Cloud in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BatchJobId | TypereferencePropertiesFilter, Group, SortDescriptionThe unique identifier of the associated batch job.This is a relationship field.Relationship NameBatchJobRelationship TypeLookupRefers ToBatchJob |
| EndTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the batch job part was processed. |
| ErrorDescription | TypestringPropertiesFilter, Nillable, SortDescriptionThe error message in case the batch job part failed. |
| FailedRecordCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of records that the batch job part couldn't process. |
| FailedRecFile | TypeFILEPropertiesFilter, Group, SortDescriptionThe file containing failed records downloaded as CSV, JSON, or TXT formats during a Data Processing Engine definition’s run by using CRM Analytics (CRMA) or Data Cloud runtime. |
| InputRecordCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of records that the batch job part must process. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the batch job part. |
| OutputRecordCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of records the batch job part has processed. |
| ParentBatchJobPartId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the part batch job part associated with the batch job part.This is a relationship field.Relationship NameParentBatchJobPartRelationship TypeLookupRefers ToBatchJobPart |
| PrimarySrcObjProcessedCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of output records from the first object in a junction when the source of the batch job is a junction object. This field is available in API version 65.0 when Life Sciences Cloud is enabled. |
| RetryCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of times the batch job part is automatically rerun in case it fails. |
| SecondarySrcObjProcessedCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of output records from the second object in a junction when the source of the batch job is a junction object. This field is available in API version 65.0 when Life Sciences Cloud is enabled. |
| StartTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the batch job part's run was started. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe status of the batch job part.Possible values are:CanceledCompletedFailedInProgress |
| Type | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of node in case the associated batch job is of the type Calc (Data Processing Engine).Possible values are:AggregateAppendComputeCustomDatasyncFilterForecastHierarchyJoinSliceSourceTransformWriteback |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BatchJobPartFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Change events are available for the object.

[BatchJobPartHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

Feed tracking is available for the object.

## Related Topics

- BatchJobPartFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- BatchJobPartHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
