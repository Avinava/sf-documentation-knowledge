---
title: "PartyAppointmentRequest"
domain: health-cloud-object-reference
topic: partyappointmentrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.967Z
estimatedTokens: 2005
keywords: [PartyAppointmentRequest, appointment, raised, patient, their, home, healthcare, services, API, version, 61.0, later, Calls, Associated, Objects]
---

# PartyAppointmentRequest

> Represents an appointment request raised by a patient for their home healthcare
      services. This object is available in API version 61.0 and later.

# PartyAppointmentRequest

Represents an appointment request raised by a patient for their home healthcare services. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdditionalNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe additional notes such as comments from the party or the recurrence pattern of appointments associated with the appointment request.This field is available in API version 63.0 and later. |
| AppointmentRecurrencePattern | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe recurrence pattern of the appointment that's associated with the appointment request.This field is available in API version 62.0 and later. |
| AppointmentReferenceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences to an existing appointment that's associated with either a Reschedule or Cancel appointment request.This field is a polymorphic relationship field.Relationship NameAppointmentReferenceRelationship TypeLookupRefers ToServiceAppointment |
| AppointmentType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of appointment that's associated with the appointment request.Possible values are:RecurringStartOfCareThe default value is StartOfCare.This field is available in API version 62.0 and later. |
| ClinicalServiceRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe clinical service request that's associated with the appointment request.This field is a relationship field.Relationship NameClinicalServiceRequestRefers ToClinicalServiceRequestThis field is available in API version 62.0 and later. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date of the requested appointment. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OperatingHoursId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe operating hours of the appointment that's associated with the appointment request.This field is a relationship field.Relationship NameOperatingHoursRefers ToOperatingHoursThis field is available in API version 62.0 and later. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the patient for whom the appointment request is created.This field is a polymorphic relationship field.Relationship NamePartyRelationship TypeLookupRefers ToAccount |
| QuoteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe quote that's associated with the appointment request.This field is a relationship field.Relationship NameQuoteRefers ToQuoteThis field is available in API version 62.0 and later. |
| RecurringAppointmentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe count of recurring appointments associated with the appointment request.This field is available in API version 63.0 and later. |
| RelatedRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe related appointment request for a dependent home visit.This field is a relationship field.Relationship NameRelatedRequestRefers ToPartyAppointmentRequestThis field is available in API version 62.0 and later. |
| RequestType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of appointment request.Possible values are:CancelRescheduleScheduleThe default value is Schedule. |
| RequestedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the user who raised the appointment request on behalf of another user.This field is a polymorphic relationship field.Relationship NameRequestedByRelationship TypeLookupRefers ToAccount |
| ServiceContextId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the service of the requested appointment.This field is a polymorphic relationship field.Relationship NameServiceContextRelationship TypeLookupRefers ToWorkType |
| ServiceLocation | TypeaddressPropertiesFilter, NillableDescriptionSpecifies the service location of the requested appointment. |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service territory of the appointment that's associated with the appointment request.This field is a relationship field.Relationship NameServiceTerritoryRefers ToServiceTerritoryThis field is available in API version 62.0 and later. |
| SourceReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe referral or opportunity that's the source of the appointment request.This field is a polymorphic relationship field.Relationship NameSourceReferenceRecordRefers ToOpportunityThis field is available in API version 62.0 and later. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date of the requested appointment. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the appointment request.Possible values are:ApprovedRejectedSubmittedThe default value is Submitted. |
| StatusReason | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe reason for the appointment request. |
| StatusReasonType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the reason type for the status of the appointment request. |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the feature that the created record is applicable for.Possible values are:HomeHealthThe default value is HomeHealth. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyAppointmentRequestFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PartyAppointmentRequestHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PartyAppointmentRequestShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PartyAppointmentRequestFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- PartyAppointmentRequestHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- PartyAppointmentRequestShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
