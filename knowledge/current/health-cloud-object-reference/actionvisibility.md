---
title: "ActionVisibility"
domain: health-cloud-object-reference
topic: actionvisibility
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.962Z
estimatedTokens: 788
keywords: [ActionVisibility, serves, junction, connect, Account, Contact, objects, define, visibility, rules, actions, Dynamic, Unified, Health, Scoring]
---

# ActionVisibility

> This object serves as a junction to connect Account or Contact to other
         objects so that information in those other object can be used to define visibility rules
         for actions in the Dynamic Actions for Unified Health Scoring component. This object
      is available in API version 55.0 and later.

# ActionVisibility

This object serves as a junction to connect Account or Contact to other objects so that information in those other object can be used to define visibility rules for actions in the Dynamic Actions for Unified Health Scoring component. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypeLookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account record of the subject.Refers ToAccount |
| ContactId | TypeLookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact record of the subject.Refers ToContact |
| HealthScoreId | TypeLookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe subject’s score.Refers ToHealthScore |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypeLookupPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.Refers ToGroup, User |

## Usage

Add custom fields on this object to support the time of visibility logic you have to implement for your actions. Then, use custom triggers and processes to automatically create and reference these records from the subject’s records, and populate the fields in this record with the information relevant to your implementation.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActionVisibilityFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ActionVisibilityHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ActionVisibilityShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ActionVisibilityFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ActionVisibilityHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ActionVisibilityShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
