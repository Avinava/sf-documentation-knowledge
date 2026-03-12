---
title: "CareFacilityBed"
domain: health-cloud-object-reference
topic: carefacilitybed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.203Z
estimatedTokens: 1178
keywords: [CareFacilityBed, different, bed, facility, associated, care, programs, products, API, version, 58.0, later, Calls, Objects]
---

# CareFacilityBed

> Represents information related to different bed types at a facility with
         associated care programs and products. This object is available in API version 58.0 and
         later.

# CareFacilityBed

Represents information related to different bed types at a facility with associated care programs and products. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AvailableBedCapacity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the available bed capacity of an associated service at a facility. |
| BedTypeCodeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRepresents the type of bed associated with a facility.This field is a relationship field.Relationship NameBedTypeCodeRelationship TypeLookupRefers ToCodeSetBundle |
| HealthcareFacilityId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRepresents the associated Healthcare Facility.This field is a relationship field.Relationship NameHealthcareFacilityRelationship TypeLookupRefers ToHealthcareFacility |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the care facility bed. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the reference record of the object that is associated with a bed in a facility.This field is a polymorphic relationship field.Relationship NameReferenceRecordRelationship TypeLookupRefers ToCareProgram, CareProgramProduct, Product |
| TotalBedCapacity | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRepresents the total bed capacity of an associated service at a facility. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareFacilityBedChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[CareFacilityBedFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareFacilityBedHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CareFacilityBedOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CareFacilityBedShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CareFacilityBedChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CareFacilityBedFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CareFacilityBedHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CareFacilityBedOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- CareFacilityBedShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
