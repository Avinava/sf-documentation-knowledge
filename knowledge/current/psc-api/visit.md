---
title: "Visit"
domain: psc-api
topic: visit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.629Z
estimatedTokens: 1134
keywords: [Visit, inspect, assess, compliance, applicant’s, ability, license, permit, API, version, 47.0, later, Calls, Associated, Objects]
---

# Visit

> Represents a visit to inspect, assess compliance, or assess an applicant’s
      ability to get a license or permit or inspect. This object is available in API version
    47.0 and later.

# Visit

Represents a visit to inspect, assess compliance, or assess an applicant’s ability to get a license or permit or inspect. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountID | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that is associated with a visit. This field is available in API versions 48.0 and later. |
| ActualVisitEndTime | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe date and time when the visit ended. |
| ActualVisitStartTime | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe date and time when the visit started. |
| ContextId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe purpose of a visit, such as business license application, or complaint. This field is available in API versions 48.0 and later. |
| InspectionOverview | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe Einstein-generated historical overview of current and previous inspection visits.Available in API versions 62.0 and later. Einstein Generative AI for Public Sector Solutions must be enabled. |
| InstructionDescription | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecial instructions provided by a compliance manager or an administrator. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identifier for the visit record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the visit record owner. |
| ParentVisitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent visit associated with the current visit.This field is a relationship field.Available in API version 61.0 and later.Relationship NameParentVisitRelationship TypeLookupRefers ToVisit |
| PlaceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the place that inspector visits. |
| PlannedVisitEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the visit is expected to end. |
| PlannedVisitStartTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the visit is expected to start. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the visit.Possible values are:AbandonedCompletedInProgressPlanned |
| StatusRemarks | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe reasons for abandoning or completing the visit as provided by the inspector. |
| VisitPriority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority of the visit.Possible values are:HighLowMedium |
| VisitorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the inspector visiting the store. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[VisitFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[VisitHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[VisitShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- VisitFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- VisitHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- VisitShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
