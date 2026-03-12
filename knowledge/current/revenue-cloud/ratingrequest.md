---
title: "RatingRequest"
domain: revenue-cloud
topic: ratingrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:11.456Z
estimatedTokens: 796
keywords: [RatingRequest, Represents, common, run-time, such, context, definition, rating, procedure, set, records, rateable, summary, table., API, version, 62.0, later., Supported, Calls]
---

# RatingRequest

> Represents the common run-time parameters, such as context definition
         and rating procedure for a set of records in the rateable summary table. This object
      is available in API version 62.0 and later.

# RatingRequest

Represents the common run-time parameters, such as context definition and rating procedure for a set of records in the rateable summary table. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContextDefinition | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionContext definition that's used for context instance creation, which encapsulates all aggregated records that are stamped for the rating request. |
| ContextMapping | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContext mapping that's used for context instance creation, which encapsulates all aggregated records that are stamped for the rating request. If no ID is provided, default context mapping is used. |
| DoesExcludeWaterfall | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the waterfall isn't generated for the rating request (true) or is generated (false). The default value is false. Available in API version 64.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last referred to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed a record related to this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-generated identifier for the rating request record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RatingProcedureName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionProcedure name that's used to rate the aggregated records that are stamped for rating request. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionStatus of the rating request.Valid values are:FailedPendingRatingCompleteRatingInProgressReadyForRating |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[RatingRequestFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[RatingRequestHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[RatingRequestShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
