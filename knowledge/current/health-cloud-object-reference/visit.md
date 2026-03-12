---
title: "Visit"
domain: health-cloud-object-reference
topic: visit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.009Z
estimatedTokens: 700
keywords: [Visit, inspect, assess, applicant’s, ability, perform, emergency, service, Calls, Track, rep’s, health, care, provider, Special, Access, Rules, Associated, Objects]
---

# Visit

> Track information related to a field rep’s visit to a health care
      provider.

# Visit

Track information related to a field rep’s visit to a health care provider.

## Special Access Rules

In Health Cloud, this object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that is associated with a visit.In Health Cloud, this field is available in the Account Management feature.Relationship NameAccountRefers ToAccount |
| ActualVisitEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the visit ended. |
| ActualVisitStartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the visit started. |
| InstructionDescription | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecial instructions provided by a sales manager or an admin that a sales rep refers to during a visit. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identifier for the visit record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the visit record owner. |
| PlaceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the location that sales reps visit.In Health Cloud, this field is available in the Account Management feature.Relationship NamePlaceRefers ToAddress, ContactPointAddress, Location, RetailStore |
| PlannedVisitEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the visit is expected to end. |
| PlannedVisitStartTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the visit is expected to start.In Health Cloud, this field is available in the Account Management feature. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of a visit.Possible values are:AbandonedCompletedInProgressPlannedThe default value is Planned.In Health Cloud, this field is available in the Account Management feature. |
| StatusRemarks | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe reasons for abandoning or completing the visit as provided by the sales rep. |
| VisitPriority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority of the visit.Possible values are:HighLowMedium |
| VisitorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the sales representative visiting the store. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

-   [VisitShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")
-   [VisitFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")
