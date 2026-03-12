---
title: "ServiceAppointmentAttendee"
domain: salesforce-scheduler-developer-guide
topic: serviceappointmentattendee
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.763Z
estimatedTokens: 997
keywords: [ServiceAppointmentAttendee, Lead, Contact, Person, Account, associated, Service, Appointment, Group, API, version, 60.0, later, Calls, Special]
---

# ServiceAppointmentAttendee

> Represents a Lead, Contact, or Person Account who is associated with
         the Service Appointment of type Group. This object is available in API version 60.0
      and later.

# ServiceAppointmentAttendee

Represents a Lead, Contact, or Person Account who is associated with the Service Appointment of type Group. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AttendeeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe customer who is attending the associated service appointment.This field is a polymorphic relationship field.Relationship NameAttendeeRelationship TypeLookupRefers ToPerson Account, Contact, Lead |
| AttendeeIdentifier | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe alphanumeric unique identifier of the appointment attendee. For example, D101, E63, A5015. |
| AttendeeType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the role of an appointment attendee.Possible values are:GuestPatientThe default value is Patient. |
| Email | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email of the attendee. |
| HasAttended | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the attendee has attended the associated service appointment (true) or not (false).The default value is false. Available in API version 61.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the service appointment attendee record was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the service appointment attendee record was last viewed. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the service appointment attendee record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ServiceAppointmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe service appointment associated with the appointment attendee.This field is a relationship field.Relationship NameServiceAppointmentRelationship TypeLookupRefers ToServiceAppointment |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the service appointment attendee.Valid value are:EnrolledUnenrolledThe default value is Enrolled. These values are available in API version 61.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ServiceAppointmentAttendeeFeed](https://developer.salesforce.com/docs/atlas.en-us.246.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm " HTML (New Window)")

Feed tracking is available for the object.

[ServiceAppointmentAttendeeHistory](https://developer.salesforce.com/docs/atlas.en-us.246.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm " HTML (New Window)")

History is available for tracked fields of the object.

[ServiceAppointmentAttendeeOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.246.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm " HTML (New Window)")

Sharing rules are available for the object.

[ServiceAppointmentAttendeeShare](https://developer.salesforce.com/docs/atlas.en-us.246.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm " HTML (New Window)")

Sharing is available for the object.
