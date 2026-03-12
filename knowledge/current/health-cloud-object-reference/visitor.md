---
title: "Visitor"
domain: health-cloud-object-reference
topic: visitor
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:38.225Z
estimatedTokens: 584
keywords: [Visitor, sales, reps, performing, visits, Special, Access, Rules, Calls, Associated, Objects]
---

# Visitor

> Represents the sales reps performing visits.

# Visitor

Represents the sales reps performing visits.

## Special Access Rules

In Health Cloud, this object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssigneeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionLookup to the person assigned as the visitor.This field is a polymorphic relationship field.Relationship NameAssigneeRelationship TypeMaster-detailRefers ToContactUserServiceResource |
| IsPrimaryResource | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the visitor is the primary visitor for a visit. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the user is a required visitor for the visit. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the visitor. |
| VisitId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionLookup to the Visit record this visitor is associated with.This field is a relationship field.Relationship NameVisitRefers ToVisit |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[VisitorHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for the object.

[VisitorFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.
