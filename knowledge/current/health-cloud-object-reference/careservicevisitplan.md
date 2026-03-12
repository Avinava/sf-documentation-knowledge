---
title: "CareServiceVisitPlan"
domain: health-cloud-object-reference
topic: careservicevisitplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.731Z
estimatedTokens: 1378
keywords: [CareServiceVisitPlan, Associates, service, series, visits, planned, part, visit, represented, MaintenancePlan, API, version, 58.0, later, Calls]
---

# CareServiceVisitPlan

> Associates a service request with the series of visits that are planned as
         part of that visit. The series of visits is represented using MaintenancePlan. This
      object is available in API version 58.0 and later.

# CareServiceVisitPlan

Associates a service request with the series of visits that are planned as part of that visit. The series of visits is represented using MaintenancePlan. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApprovedVisitCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of approved visits in the planned care service.This field is available in API version 59.0 and later. |
| AssignedVisitCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of visits assigned with resources in a planned service. |
| AuthorizationReferenceId | TypeLookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe care request item that’s the record of authorization for the visit.Relationship NameAuthorizationReferenceRefers ToCareRequestItem |
| CarePlanContextId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the care plan, care plan detail, goal assignment, or action plan associated with the care service visit.This field is a polymorphic relationship field.Relationship NameCarePlanContextRelationship TypeLookupRefers ToActionPlan, CarePlan, CarePlanDetail, GoalAssignment, GoalAssignmentDetailThis field is available in API version 59.0 and later. |
| ClinicalServiceRequestId | TypeLookupPropertiesFilter, Group, Nillable, SortDescriptionThe request for the service.Relationship NameClinicalServiceRequestRefers ToClinicalServiceRequest |
| CompletedVisitCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of visits that have been completed as part of the service. |
| CreatedVisitCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of created visits in the planned care service.This field is available in API version 59.0 and later. |
| IsServiceAuthorizationRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the service has to be authorized before it’s provided.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypePolymorphic lookupPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.Relationship NameOwnerRefers ToGroupUser |
| ServiceRequestId | TypeLookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service request for the service.Relationship NameServiceRequestRefers ToClinicalServiceRequest |
| UnassignedVisitCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of unassigned visits in a planned service. |
| VisitPlanId | TypeLookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe series of visits planned for a service.Relationship NameVisitPlanRefers ToMaintenancePlan |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareServiceVisitPlanChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[CareServiceVisitPlanFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareServiceVisitPlanHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CareServiceVisitPlanShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CareServiceVisitPlanChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CareServiceVisitPlanFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CareServiceVisitPlanHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CareServiceVisitPlanShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
