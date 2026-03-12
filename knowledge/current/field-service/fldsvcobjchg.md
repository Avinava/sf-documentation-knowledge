---
title: "FldSvcObjChg"
domain: field-service
topic: fldsvcobjchg
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:54.361Z
estimatedTokens: 991
keywords: [FldSvcObjChg, change, made, service, appointment’s, tracked, API, version, 63.0, later, Calls, Special, Access, Rules]
---

# FldSvcObjChg

> Represents a change made to one of a service appointment’s tracked fields.
       This object is available in API version 63.0 and later.

# FldSvcObjChg

Represents a change made to one of a service appointment’s tracked fields. This object is available in API version 63.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), query(), retrieve()

## Special Access Rules

-   Field Service must be enabled.
-   The Field Service managed package must be installed.
-   The **Track the lifecycle of service appointments** setting in **Setup** | **Field Service Settings** must be enabled.
-   The Platform Integration User must have the Manage Service Appointment Lifecycle and the View Service Appointment Lifecycle permissions.
-   To view this object, users must have the View Service Appointment Lifecycle user permission.

## Fields

| Field | Details |
| --- | --- |
| Activity | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe available scheduling activities for the service appointment.Possible values are:AddedToBundle—Currently not supportedBundleMemberAdded—Currently not supportedBundleMemberRemoved—Currently not supportedCreatedDeletedRemovedFromBundle—Currently not supportedRescheduled—An appointment is considered ‌rescheduled if a change is made to its assigned service resource or to its scheduled start time.ScheduledServiceResourceAssignedStatusChanged—The service appointment status was changed. The manual activities of scheduling, rescheduling, and unscheduling are also reported as status changes because they change the status of an appointment.UnscheduledUpdated—Captures changes made to one or more of the tracked scheduling fields that aren’t associated with another activity. |
| ActivityDetails | TypestringPropertiesFilter, Nillable, SortDescriptionDetails about the scheduling activity such as the scheduling policy that was used and the unscheduling reason (when applicable). |
| ActivityTimeStamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time of when the change to the service appointment was made. |
| IsPrimary | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the change was made directly to the service appointment or indirectly. If the change was made directly to the appointment, it’s flagged as Primary. If it was made to another appointment and affected this one, it’s flagged as Secondary. |
| OriginalSvcAppointment | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the service appointment that was changed. The field value isn’t deleted when the Service Appointment object is deleted. |
| ServiceAppointmentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the service appointment that was changed. Because this is a relationship field, the field value is deleted when the Service Appointment object is deleted.This field is a relationship field.Relationship NameServiceAppointmentRelationship TypeLookupRefers ToServiceAppointment |
| TimeZone | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe time zone of the service appointment or the assigned resource. |
| Transaction | TypestringPropertiesFilter, Nillable, SortDescriptionThe last transaction ID of the scheduling and optimization request that updated this object. The transaction ID is automatically generated and populated by the Enhanced Scheduling and Optimization engine. |
| UserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe user who made the change to the service appointment. If an activity is a scheduled job, it’s registered with the System Administrator user who configured it.This field is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |

#### See Also

-   [FldSvcObjChgDtl](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_fldsvcobjchgdtl.htm "Represents the details of a change made to one of a service appointment’s tracked fields. This object is available in API version 63.0 and later.")

## Related Topics

- FldSvcObjChgDtl (atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_fldsvcobjchgdtl.htm)
