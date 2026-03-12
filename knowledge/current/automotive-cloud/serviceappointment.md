---
title: "ServiceAppointment"
domain: automotive-cloud
topic: serviceappointment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.508Z
estimatedTokens: 2370
keywords: [ServiceAppointment, service, appointment, booked, Automotive, Scheduler, test, drives, vehicle, services, API, version, 58.0, later, Calls]
---

# ServiceAppointment

> Represents a service appointment booked through Automotive Scheduler, for
         test drives or vehicle services. This object is available in API version 58.0 and
      later.

# ServiceAppointment

Represents a service appointment booked through Automotive Scheduler, for test drives or vehicle services. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Automotive and Automotive Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| ActualDuration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of minutes that it took the resource to complete the appointment. When values are first added to the Actual Start and Actual End fields, the Actual Duration is automatically populated to list the difference between the Actual Start and Actual End. If the Actual Start and Actual End fields are subsequently updated, the Actual Duration field doesn’t re-update, but you can manually update it. |
| ActualEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual date and time the appointment ended. |
| ActualStartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual date and time the appointment started. |
| AdditionalInformation | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents additional information about the service appointment. |
| Address | TypeaddressPropertiesFilterDescriptionThe address where the appointment is taking place. |
| AppointmentNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-assigned number that identifies the appointment. |
| ArrivalWindowEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end of the window of time in which the technician is scheduled to arrive at the site. |
| ArrivalWindowStartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe beginning of the window of time in which the technician is scheduled to arrive at the site. |
| CancellationReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for the service appointment cancellation. |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city where the appointment is completed. Maximum length is 40 characters. |
| Comments | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe comments for the service appointment. |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country where the appointment is completed. Maximum length is 80 characters. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the appointment. |
| DueDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date by which the appointment must be completed. |
| Duration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated length of the appointment as derived from the associated work type. The duration is in minutes or hours based on the value selected in the Duration Type field. |
| DurationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of duration as specified for the associated work type.Possible values are:HoursMinutesThe default value is Hours. |
| EarliestStartTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date after which the appointment must be completed. |
| GeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of accuracy of a location’s geographical coordinates compared with its physical address. Usually provided by a geocoding service based on the address’s latitude and longitude coordinates.Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the service appointment was last modified. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the service appointment was last viewed. |
| Latitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the address where the service appointments is completed. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| Longitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the address where the service appointment is completed. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the appointment.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe parent record related to the appointment. The parent record can’t be updated after the service appointment is created. For test drive appointments, the parent record is a lead or an opportunity. For vehicle service appointments, theparent record is an asset that’s related to the vehicle.This field is a polymorphic relationship field.Relationship NameParentRecordRelationship TypeLookupRefers ToAccount, Asset, Case, Lead, Opportunity, WorkOrder, WorkOrderLineItem |
| ParentRecordType | TypestringPropertiesFilter, Group, Nillable, SortDescription(Read only) The type of parent record that provides context for the appointment, such as Asset, Lead, or Opportunity. |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code where the appointment is completed. Maximum length is 20 characters. |
| SchedEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time at which the appointment is scheduled to end. |
| SchedStartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time at which the appointment is scheduled to start. |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service territory associated with the appointment.This field is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state where the service appointment is completed. Maximum length is 80 characters. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the appointment. The picklist values can be customized.Possible values are:CanceledCannot CompleteChecked InCompletedDispatchedIn ProgressNoneScheduledThe default value is None. |
| StatusCategory | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe category that each Status value falls into. The Status Category field’s values are identical to the default Status values.Possible values are:Canceled—CanceledCannotComplete—Cannot CompleteCheckedIn—Checked InCompletedDispatchedInProgress—In ProgressNoneScheduledThe default value is None. |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street number and name where the service appointment is completed. |
| Subject | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn autopopulated phrase describing the type of appointment, such as Test Drive Appointment or Vehicle Service Appointment. |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work type associated with the service appointment.This field is a relationship field.Relationship NameWorkTypeRelationship TypeLookupRefers ToWorkType |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ServiceAppointmentChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ServiceAppointmentFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ServiceAppointmentHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ServiceAppointmentOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ServiceAppointmentShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
