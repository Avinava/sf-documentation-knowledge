---
title: "AcademicOrder"
domain: edu-cloud-dev-guide
topic: academicorder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.749Z
estimatedTokens: 742
keywords: [AcademicOrder, junction, academic, interval, term, order, API, version, 66.0, later, Calls, Associated, Objects]
---

# AcademicOrder

> Represents a junction between an academic interval, such as an academic term,
         and an order. This object is available in API version 66.0 and later.

# AcademicOrder

Represents a junction between an academic interval, such as an academic term, and an order. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcademicIntervalId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe academic interval that's associated with the order.This field is a polymorphic relationship field.Relationship NameAcademicIntervalRefers ToAcademicSession, AcademicTerm, AcademicYear |
| ContactId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe contact that's associated with the Academic Order.This field is a relationship field.Relationship NameContactRefers ToContact |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the academic order. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the academic order. |
| OrderDetailsIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe execution identifier that's associated with the academic order. |
| OrderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe order that's associated with the academic order.This field is a relationship field.Relationship NameOrderRelationship TypeMaster-detailRefers ToOrder (the master object) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AcademicOrderFeed](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AcademicOrderHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AcademicOrderFeed (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- AcademicOrderHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
