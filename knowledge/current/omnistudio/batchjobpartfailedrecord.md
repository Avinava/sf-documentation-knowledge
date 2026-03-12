---
title: "BatchJobPartFailedRecord"
domain: omnistudio
topic: batchjobpartfailedrecord
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:53.569Z
estimatedTokens: 583
keywords: [BatchJobPartFailedRecord, Represents, records, batch, job, part, couldn't, successfully, process., API, version, 51.0, later., Supported, Calls, Fields, Associated, Objects]
---

# BatchJobPartFailedRecord

> Represents records that a batch job part couldn't successfully process.
    This object is available in API version 51.0 and later.

# BatchJobPartFailedRecord

Represents records that a batch job part couldn't successfully process. This object is available in API version 51.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| BatchJobId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the associated batch job.This is a relationship field.Relationship NameBatchJobRelationship TypeLookupRefers ToBatchJob |
| BatchJobPartId | TypereferencePropertiesFilter, Group, SortDescriptionThe unique identifier of the associated batch job part.This is a relationship field.Relationship NameBatchJobPartRelationship TypeLookupRefers ToBatchJobPart |
| ErrorDescription | TypestringPropertiesFilter, Nillable, SortDescriptionThe error message that indicates why the batch job part couldn't process the records. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the batch job part failed record. |
| Record | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the batch record that processed the failed records. |
| RecordName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the record that's associated with the batch job part failed record. |
| ResubmittedBatchJobId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe batch job used to submit failed records. This field is available in API version 52.0 and later.This is a relationship field.Relationship NameResubmittedBatchJobRelationship TypeLookupRefers ToBatchJob |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the status of the failed records. This field is available in API version 52.0 and later.Possible values are:FailedResubmittedThe default value is 'Failed'. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

BatchJobPartFailedRecordFeed

Feed tracking is available for the object.

BatchJobPartFailedRecordHistory

History is available for tracked fields of the object.
