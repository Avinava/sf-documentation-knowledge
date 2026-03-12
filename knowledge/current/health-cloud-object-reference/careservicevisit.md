---
title: "CareServiceVisit"
domain: health-cloud-object-reference
topic: careservicevisit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.721Z
estimatedTokens: 2220
keywords: [CareServiceVisit, Associates, service, referral, ClinicalServiceRequest, visit, ServiceAppointment, that’s, part, API, version, 58.0, later, Calls, Associated]
---

# CareServiceVisit

> Associates a service request or a referral request (ClinicalServiceRequest)
         with a visit (ServiceAppointment) that’s part of that service or referral. This object
      is available in API version 58.0 and later.

# CareServiceVisit

Associates a service request or a referral request (ClinicalServiceRequest) with a visit (ServiceAppointment) that’s part of that service or referral. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the account associated with the patient who received the care service.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccountThis field is available in API version 59.0 and later. |
| AutoVerifiedVisitEndDtTm | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of the care service visit that's automatically updated from the care giver's mobile device.This field is available in API version 59.0 and later. |
| AutoVrfyVisitEndLoc | TypelocationPropertiesNillableDescriptionThe end location of the care service visit that's automatically updated from the care giver's mobile device.This field is available in API version 59.0 and later. |
| AutoVrfyVisitStartDtTm | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the care service visit that's automatically updated from the care giver's mobile device.This field is available in API version 59.0 and later. |
| AutoVrfyVstStartLoc | TypelocationPropertiesNillableDescriptionThe start location of the care service visit that's automatically updated from the care giver's mobile device.This field is available in API version 59.0 and later. |
| CarePlanContextId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the care plan, care plan detail, goal assignment, or action plan associated with the care service visit.This field is a polymorphic relationship field.Relationship NameCarePlanContextRelationship TypeLookupRefers ToActionPlan, CarePlan, CarePlanDetail, GoalAssignment, GoalAssignmentDetailThis field is available in API version 59.0 and later. |
| CareServiceVisitPlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the care service visit plan associated with the care service visit.This field is a relationship field.Relationship NameCareServiceVisitPlanRelationship TypeLookupRefers ToCareServiceVisitPlanThis field is available in API version 59.0 and later. |
| ClinicalServiceRequestId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe service request that the visit is related to.Relationship NameClinicalServiceRequestRefers ToClinicalServiceRequest |
| EndedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the care giver who ends the care service visit.This field is a relationship field.Relationship NameEndedByRelationship TypeLookupRefers ToServiceResourceThis field is available in API version 59.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| ManVerifiedVisitEndDtTm | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of the care service visit that's verified and updated by a care professional from the Home Health agency.This field is available in API version 59.0 and later. |
| ManVerifiedVisitStartDtTm | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the care service visit that's verified and updated by a care professional from the Home Health agency.This field is available in API version 59.0 and later. |
| ManVrfyVisitEndLoc | TypelocationPropertiesNillableDescriptionThe end location of the care service visit that's verified and updated by a care professional from the Home Health agency.This field is available in API version 59.0 and later. |
| ManVrfyVisitStartLoc | TypelocationPropertiesNillableDescriptionThe start location of the care service visit that's verified and updated by a care professional from the Home Health agency.This field is available in API version 59.0 and later. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.Relationship NameOwnerRefers ToGroupUser |
| RelatedVisitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the ID of a related care service visit that’s associated with a care service visit.This field is a relationship field.Relationship NameRelatedVisitRelationship TypeLookupRefers ToCareServiceVisitThis field is available in API version 60.0 and later. |
| RelatedVisitType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of related visit that's associated with the care service visit.Possible values are:DependentNoneThis field is available in API version 60.0 and later. |
| ServiceRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA derived field that’s used for internal purposes.This field is a polymorphic relationship field.Relationship NameServiceRequestRefers ToClinicalServiceRequest |
| SourceReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe quote or party appointment request that's the source of the care service visit.This field is a polymorphic relationship field.Relationship NameSourceReferenceRecordRefers ToPartyAppointmentRequestThis field is available in API version 62.0 and later. |
| StartedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the care giver who starts the care service visit.This field is a relationship field.Relationship NameStartedByRelationship TypeLookupRefers ToServiceResourceThis field is available in API version 59.0 and later. |
| VisitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe visit that’s related to the service request.This field is a relationship field.Relationship NameVisitRefers ToServiceAppointment |
| VisitType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of the care service visit.Possible values are:AssessmentRecurringStartOfCareThis field is available in API version 59.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareServiceVisitChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[CareServiceVisitFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareServiceVisitHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CareServiceVisitShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CareServiceVisitChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CareServiceVisitFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CareServiceVisitHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CareServiceVisitShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
