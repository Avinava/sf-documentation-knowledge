---
title: "CourseOfferingRelationship"
domain: edu-cloud-dev-guide
topic: courseofferingrelationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.079Z
estimatedTokens: 632
keywords: [CourseOfferingRelationship, junction, course, offering, API, version, 65.0, later, Calls, Associated, Objects]
---

# CourseOfferingRelationship

> Represents a junction between a course offering and a related course
         offering. This object is available in API version 65.0 and later.

# CourseOfferingRelationship

Represents a junction between a course offering and a related course offering. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CourseOfferingId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent course offering related to the course offering relationship.This field is a relationship field.Relationship NameCourseOfferingRelationship TypeMaster-detailRefers ToCourseOffering (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LinkedCourseOfferingId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe linked course offering related to the course offering relationship.This field is a relationship field.Relationship NameLinkedCourseOfferingRefers ToCourseOffering |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name for the work type group role. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CourseOfferingRelationshipFeed](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CourseOfferingRelationshipHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CourseOfferingRelationshipFeed (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- CourseOfferingRelationshipHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
