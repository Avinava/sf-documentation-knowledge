---
title: "PurchaserPlanCareProgram"
domain: health-cloud-object-reference
topic: purchaserplancareprogram
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.940Z
estimatedTokens: 787
keywords: [PurchaserPlanCareProgram, junction, puchaser, plans, care, programs, under, purchaser, plan, employer-sponsored, managing, chronic, conditions, API, version]
---

# PurchaserPlanCareProgram

> Represents a junction between puchaser plans and care programs. It defines
         the care programs that are available under a purchaser plan such as employer-sponsored
         programs for managing chronic conditions. This object is available in API version 66.0
      and later.

# PurchaserPlanCareProgram

Represents a junction between puchaser plans and care programs. It defines the care programs that are available under a purchaser plan such as employer-sponsored programs for managing chronic conditions. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CareProgramId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe care program associated with the purchaser plan.This field is a relationship field.Relationship NameCareProgramRefers ToCareProgram |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of this record. |
| PurchaserPlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent purchaser plan associated with the care program.This field is a relationship field.Relationship NamePurchaserPlanRelationship TypeMaster-detailRefers ToPurchaserPlan (the master object) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PurchaserPlanCareProgramChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[PurchaserPlanCareProgramFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PurchaserPlanCareProgramHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PurchaserPlanCareProgramChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- PurchaserPlanCareProgramFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- PurchaserPlanCareProgramHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
