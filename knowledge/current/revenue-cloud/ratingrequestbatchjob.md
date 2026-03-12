---
title: "RatingRequestBatchJob"
domain: revenue-cloud
topic: ratingrequestbatchjob
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.439Z
estimatedTokens: 671
keywords: [RatingRequestBatchJob, junction, rating, batch, job, objects, API, version, 62.0, later, Calls, Associated]
---

# RatingRequestBatchJob

> Represents a junction between the rating request and batch job
         objects. This object is available in API version 62.0 and later.

# RatingRequestBatchJob

Represents a junction between the rating request and batch job objects. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BatchJobId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the batch job that triggered the rating request on the aggregated records.This field is a relationship field.Relationship NameBatchJobRefers ToBatchJob |
| ErrorCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionError code that defines the batch job failure.Valid values are:BadRequestInternalError |
| ErrorMessage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionError message that describes the cause of the batch job failure. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last referred to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed a record related to this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the rating request batch job record. |
| RatingRequestId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the rating request record associated with the batch job.This field is a relationship field.Relationship NameRatingRequestRelationship TypeMaster-detailRefers ToRatingRequest (the master object) |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[RatingRequestBatchJobFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[RatingRequestBatchJobHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
