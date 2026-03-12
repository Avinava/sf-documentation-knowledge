---
title: "CarePgmEnrolleeWorkOrder"
domain: health-cloud-object-reference
topic: carepgmenrolleeworkorder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.298Z
estimatedTokens: 1227
keywords: [CarePgmEnrolleeWorkOrder, work, order, that's, executed, care, program, enrollee, API, version, 58.0, later, Calls, Associated, Objects]
---

# CarePgmEnrolleeWorkOrder

> Represents information about the work order that's executed for the care
         program enrollee. This object is available in API version 58.0 and later.

# CarePgmEnrolleeWorkOrder

Represents information about the work order that's executed for the care program enrollee. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CareProgramEnrolleeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThis field represents the care program enrollee for whom the work order record is created.This field is a relationship field.Relationship NameCareProgramEnrolleeRelationship TypeMaster-DetailRefers ToCareProgramEnrollee |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time for the execution of the care program enrollee work order. |
| IsCustodyCompleted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether all the custody chain entries for the work order are completed (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the work order record. |
| NextWorkOrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field represents next work order that's executed for the associated care program enrollee.This field is a relationship field.Relationship NameNextWorkOrderRelationship TypeLookupRefers ToCarePgmEnrolleeWorkOrder |
| PreviousWorkOrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe previous work order that's executed for the associated care program enrollee.This field is a relationship field.Relationship NamePreviousWorkOrderRelationship TypeLookupRefers ToCarePgmEnrolleeWorkOrder |
| ServiceAppointmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field represents the service appointment that's associated with the work type.This field is a relationship field.Relationship NameServiceAppointmentRelationship TypeLookupRefers ToServiceAppointment |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time for the execution of the care program enrollee work order. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThis field specifies the execution status of the care program enrollee work order.Possible values are:CanceledCompletedInProgressNotStarted |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThis field represents work type for which the work order of the care program enrollee is created.This field is a relationship field.Relationship NameWorkTypeRelationship TypeLookupRefers ToWorkType |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CarePgmEnrolleeWorkOrderChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[CarePgmEnrolleeWorkOrderFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CarePgmEnrolleeWorkOrderHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CarePgmEnrolleeWorkOrderChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CarePgmEnrolleeWorkOrderFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CarePgmEnrolleeWorkOrderHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
