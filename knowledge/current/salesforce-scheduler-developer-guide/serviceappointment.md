---
title: "ServiceAppointment"
domain: salesforce-scheduler-developer-guide
topic: serviceappointment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.751Z
estimatedTokens: 3393
keywords: [ServiceAppointment, appointment, booked, Salesforce, Scheduler, API, version, 38.0, later, Calls, Special, Access, Rules, Usage, Associated]
---

# ServiceAppointment

> Represents an appointment booked through Salesforce Scheduler.
		This object is available in API version 38.0 and later.

# ServiceAppointment

Represents an appointment booked through Salesforce Scheduler. This object is available in API version 38.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete, update(), upsert()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescription(Read only) The account associated with the appointment.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ActualDuration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of minutes that it took the resource to complete the appointment. When values are first added to the Actual Start and Actual End fields, the Actual Duration is automatically populated to list the difference between the Actual Start and Actual End. If the Actual Start and Actual End fields are subsequently updated, the Actual Duration field doesn’t re-update, but you can manually update it. |
| ActualEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual date and time the appointment ended. |
| ActualStartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual date and time the appointment started. |
| AdditionalInformation | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents additional information about the service appointment, |
| Address | TypeaddressPropertiesFilterDescriptionThe address where the appointment is taking place. |
| AppointmentCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the appointment category related to the service appointment. For example, for customers who visit the branch without an appointment, the drop in category is applicable. For pre-booked appointments, the scheduled category is applicable. This field is available in API version 58.0 and later.This is a relationship field.Relationship NameAppointmentCategoryRelationship TypeLookupRefers ToAppointmentCategory |
| AppointmentInvitationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the appointment invitation related to the appointment. This field is available in API version 55.0 and later.This field is a relationship field.Relationship NameAppointmentInvitationRelationship TypeLookupRefers ToAppointmentInvitation |
| AppointmentMode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe mode of the service appointment.. This field is available in API version 60.0 and later.Possible values are:GroupRegularThe default value is Regular. |
| AppointmentNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-assigned number that identifies the appointment. |
| AppointmentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of appointment.Possible values are:call—Phonecompany—At a branchvideo—Video call |
| ApptBookingInfoUrl | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe appointment booking URL related to the appointment. This field is available in API version 57.0 and later.For Amazon Chime, this field has an encrypted appointment ID. |
| ArrivalWindowEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end of the window of time in which the technician is scheduled to arrive at the site. This window is typically larger than the Scheduled Start and End window to allow time for delays and scheduling changes. You can choose to share the Arrival Window Start and End with the customer, but keep the Scheduled Start and End internal-only. |
| ArrivalWindowStartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe beginning of the window of time in which the technician is scheduled to arrive at the site. This window is typically larger than the Scheduled Start and End window to allow time for delays and scheduling changes. You can choose to share the Arrival Window Start and End with the customer, but keep the Scheduled Start and End internal-only. |
| AttendeeCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of attendees associated with the service appointment. This field is available in API version 60.0 and later. |
| AttendeeLimit | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of customers allowed to attend the service appointment. This field is considered when the appointment mode is Group. This field is available in API version 60.0 and later. |
| CancellationReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for the service appointment cancellation. |
| CheckedInTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the service appointment status changed to CheckedIn. This field is available in API version 60.0 and later. |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city where the appointment is completed. The maximum length is 40 characters. |
| Comments | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe comments for the service appointment. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact associated with the parent record. If needed, you can manually update the service appointment contact.This is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country where the appointment is completed. The maximum length is 80 characters. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the appointment. |
| DueDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date by which the appointment must be completed. Earliest Start Permitted and Due Date typically reflect terms in the customer’s service-level agreement. |
| Duration | TypedoublePropertiesCreate, Nillable, Filter, Sort, UpdateDescriptionThe estimated length of the appointment. The duration is in minutes or hours based on the value selected in the Duration Type field. |
| DurationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of duration.Possible values are:HoursMinutesThe default value is Hours. |
| EarliestStartTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date after which the appointment must be completed. Earliest Start Permitted and Due Date typically reflect terms in the customer’s service-level agreement. |
| Email | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email address. |
| EngagementChannelTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe engagement channel type that's associated with the service appointment. This field is available in API version 56.0 and later.This field is a relationship field.Relationship NameEngagementChannelTypeRelationship TypeLookupRefers ToEngagementChannelType |
| GroupAppointmentAccessType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe users who can access the group service appointment. Valid values are:AddedAndExperienceSiteAndInvitedUsers—Added, Experience Site, and Invited UsersAddedAndExperienceSiteUsers—Added and Experience Site UsersAddedUsers—Added UsersThe default value is AddedUsers. Available in API version 61.0 and later. |
| IsAnonymousBooking | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a service resource was automatically assigned to the appointment (true) or not (false). The default value is false.This field is available in API version 49.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the service appointment was last modified. Its label in the user interface is LastModifiedDate. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the service appointment was last viewed. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the service appointment.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe parent record associated with the appointment. The parent record can’t be updated after the service appointment is created.This is a polymorphic relationship field.Relationship NameParentRecordRelationship TypeLookupRefers ToAccount, Case, Lead, Opportunity |
| ParentRecordType | TypestringPropertiesFilter, Group, Nillable, SortDescription(Read only) The type of parent record: Account. |
| Phone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe phone number. |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code where the appointment is completed. The maximum length is 20 characters. |
| SchedEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time at which the appointment is scheduled to end. ScheduledEnd – ScheduledStart = EstimatedDuration. |
| SchedStartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time at which the appointment is scheduled to start. |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service territory associated with the appointment.This is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state where the service appointment is completed. The maximum length is 80 characters. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the appointment. The picklist includes the following values, which can be customized:None—Default value.CheckedIn—Checked InScheduled—Appointment has been assigned to a service resource.Dispatched—Assigned service resource has been notified about their assignment.In Progress—Work has begun.Completed—Work is complete.Cannot Complete—Work couldn’t be completed.Canceled—Work is canceled, typically before any work began |
| StatusCategory | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe category that each Status value falls into. The StatusCategory field’s values are identical to the default Status values except CheckedIn. Use the CheckedIn value for drop-in customers.If you create custom Status values, you must indicate which category it belongs to. For example, if you create a Customer Absent value, you can decide that it belongs in the Cannot Complete category. To learn which processes reference StatusCategory, see How are Status Categories Used? |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street number and name where the service appointment is completed. |
| Subject | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA short phrase describing the appointment. |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work type associated with the service appointment.This is a relationship field.Relationship NameWorkTypeRelationship TypeLookupRefers ToWorkType |

## Usage

Service appointments always have a parent record, which can be an account. Service appointments on *accounts* represent work being performed for the account.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ServiceAppointmentChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API version 48.0)

Change events are available for the object.

[ServiceAppointmentFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[ServiceAppointmentHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[ServiceAppointmentOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[ServiceAppointmentShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
