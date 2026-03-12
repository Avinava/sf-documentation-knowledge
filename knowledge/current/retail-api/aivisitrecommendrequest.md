---
title: "AiVisitRecommendRequest"
domain: retail-api
topic: aivisitrecommendrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.042Z
estimatedTokens: 784
keywords: [AiVisitRecommendRequest, visit, recommendation, API, version, 50.0, later, Calls]
---

# AiVisitRecommendRequest

> Represents the details of a visit recommendation request. This object is
    available in API version 50.0 and later.

# AiVisitRecommendRequest

Represents the details of a visit recommendation request. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcceptedCount | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionNumber of recommendations created by this recommendation request that are accepted. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionDescription of the visit recommendation request. |
| EndDate | TypedatePropertiesCreate, Filter, Group, SortDescriptionDate until which visit recommendations must be created. |
| ErrorMessage | TypetextareaPropertiesCreate, NillableDescriptionDetails of why the visit recommendations weren't generated. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Models | TypetextareaPropertiesCreate, NillableDescriptionThe machine-learning model that creates the visit recommendations. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the visit recommendation request. |
| NumberOfVisitsPerDay | TypeintPropertiesCreate, Filter, Group, SortDescriptionNumber of visits that can be scheduled each day. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user associated with this record. |
| RecommendationCount | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionNumber of recommendations created for the request. |
| RecommendationResponse | TypetextareaPropertiesCreate, NillableDescriptionJSON data containing the recommendations. |
| RecommendationStrategyName | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionName of the visit recommendation strategy. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the associated record type. |
| RejectedCount | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionNumber of recommendations created by this recommendation request that are rejected. |
| StartDate | TypedatePropertiesCreate, Filter, Group, SortDescriptionDate from which visit recommendations must be created. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionStatus of the visit recommendation request.Possible values are:COMPLETEDFAILEDIN_PROGRESSQUEUED |
| VisitSiteList | TypetextareaPropertiesCreateDescriptionList of locations for which visit recommendations are requested. |
| VisitSiteType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe type of location for which visit recommendations are requested.Possible value is: RetailStore |
