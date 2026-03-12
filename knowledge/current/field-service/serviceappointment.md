---
title: "ServiceAppointment"
domain: field-service
topic: serviceappointment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:56.532Z
estimatedTokens: 3729
keywords: [ServiceAppointment, Represents, appointment, complete, work, customer, Field, Service, Lightning, Scheduler, Intelligent, Appointment, Management, Virtual, Care.This, API, version, 38.0, later., Supported]
---

# ServiceAppointment

> Represents an appointment to complete work for a customer in Field
			Service, Lightning Scheduler,Intelligent Appointment Management, and Virtual
		Care.This object is available in API version 38.0 and later.

# ServiceAppointment

Represents an appointment to complete work for a customer in Field Service, Lightning Scheduler,Intelligent Appointment Management, and Virtual Care.This object is available in API version 38.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescription(Read only) The account associated with the appointment. If the parent record is a work order or work order line item, this field’s value is inherited from the parent. Otherwise, it remains blank.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ActualDuration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of minutes that it took the resource to complete the appointment after arriving at the address. When values are first added to the Actual Start and Actual End fields, the Actual Duration is automatically populated to list the difference between the Actual Start and Actual End. If the Actual Start and Actual End fields are subsequently updated, the Actual Duration field doesn’t re-update, but you can manually update it. |
| ActualEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual date and time the appointment ended. |
| ActualStartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual date and time the appointment started. |
| Address | TypeaddressPropertiesFilterDescriptionThe address where the appointment is taking place. The address is inherited from the parent record if the parent record is a work order or work order line item. |
| AppointmentNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-assigned number that identifies the appointment. |
| ArrivalWindowEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end of the window of time in which the technician is scheduled to arrive at the site. This window is typically larger than the Scheduled Start and End window to allow time for delays and scheduling changes. You may choose to share the Arrival Window Start and End with the customer, but keep the Scheduled Start and End internal-only. |
| ArrivalWindowStartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe beginning of the window of time in which the technician is scheduled to arrive at the site. This window is typically larger than the Scheduled Start and End window to allow time for delays and scheduling changes. You may choose to share the Arrival Window Start and End with the customer, but keep the Scheduled Start and End internal-only. |
| BundlePolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the bundle policy associated with this service appointment.This is a relationship field.Relationship NameBundlePolicyRelationship TypeLookupRefers ToApptBundlePolicy |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city where the appointment is completed. Maximum length is 40 characters. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact associated with the parent record. If needed, you can manually update the service appointment contact.This is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country where the work order is completed. Maximum length is 80 characters. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the appointment. |
| DueDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date by which the appointment must be completed. Earliest Start Permitted and Due Date typically reflect terms in the customer’s service-level agreement. |
| Duration | TypedoublePropertiesCreate, Nillable, Filter, Sort, UpdateDescriptionThe estimated length of the appointment. If the parent record is work order or work order line item, the appointment inherits its parent’s duration, but it can be manually updated. The duration is in minutes or hours based on the value selected in the Duration Type field. |
| DurationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of the Duration: Minutes or Hours. |
| EarliestStartTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date after which the appointment must be completed. Earliest Start Permitted and Due Date typically reflect terms in the customer’s service-level agreement. |
| GeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of accuracy of a location’s geographical coordinates compared with its physical address. Usually provided by a geocoding service based on the address’s latitude and longitude coordinates.NoteThis field is available in the API only. |
| IsAnonymousBooking | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a service resource was automatically assigned to the appointment. The default value is false.This field is available in API version 49.0 and later. |
| IsBundle | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if this service appointment is a bundle service appointment. The default value is false.This field is available in API version 54.0 and later. |
| IsBundleMember | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if this service appointment is a bundle member service appointment. The default value is false.This field is available in API version 54.0 and later. |
| IsManuallyBundled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if this bundle was created manually. The default value is false.This field is available in API version 54.0 and later. |
| IsOffsiteAppointment | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAny type of work that can be done remotely.This field is available in API version 58.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the service appointment was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the service appointment was last viewed. |
| Latitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the address where the service appointments is completed. Acceptable values are numbers between –90 and 90 with up to 15 decimal places.To integrate data from an external data source for latitude, map your data to the ServiceAppointment.Latitude and not the ServiceAppointment.FSL__InternalSLRGeolocation__Latitude__s field.NoteThis field is available in the API only. |
| Longitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the address where the service appointment is completed. Acceptable values are numbers between –180 and 180 with up to 15 decimal places.To integrate data from an external data source for longitude, map your data to the ServiceAppointment.Longitude and not the ServiceAppointment.FSL__InternalSLRGeolocation__Longitude__s field.NoteThis field is available in the API only. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the service appointment.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe parent record associated with the appointment. The parent record can’t be updated after the service appointment is created.This is a polymorphic relationship field.Relationship NameParentRecordRelationship TypeLookupRefers ToAccount, Asset, Lead, Opportunity, ServiceAppointmentGroup, WorkOrder, WorkOrderLineItem |
| ParentRecordStatusCategory | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescription(Read only) The Status Category of the parent record. If the parent record is a work order or work order line item, this field is populated; otherwise, it remains blank. |
| ParentRecordType | TypestringPropertiesFilter, Group, Nillable, SortDescription(Read only) The type of parent record: Account, Asset, Lead, Opportunity, Work Order, or Work Order Line Item. |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code where the work order is completed. Maximum length is 20 characters. |
| RelatedBundleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe bundle that this service appointment is a member of.This is a relationship field.Relationship NameRelatedBundleRelationship TypeLookupRefers ToServiceAppointment |
| SchedEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time at which the appointment is scheduled to end. If you are using the Field Service managed package with the scheduling optimizer, this field is populated once the appointment is assigned to a resource. Scheduled End – Scheduled Start = Estimated Duration. |
| SchedStartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time at which the appointment is scheduled to start. If you are using the Field Service managed package with the scheduling optimizer, this field is populated once the appointment is assigned to a resource. |
| ServiceDocumentTemplate | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe template ID which sets the template for each service document for the Document Builder feature. |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service territory associated with the appointment. If the parent record is a work order or work order line item, the appointment inherits its parent’s service territory.This is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state where the service appointment is completed. Maximum length is 80 characters. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the appointment. The picklist includes the following values, which can be customized:None—Default value.Scheduled—Appointment has been assigned to a service resource.Dispatched—Assigned service resource has been notified about their assignment.In Progress—Work has begun.Completed—Work is complete.Cannot Complete—Work could not be completed.Canceled—Work is canceled, typically before any work beganWhile you can set the status to null via the API, setting the status to null returns an error. To prevent errors, use one of the picklist values. |
| StatusCategory | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe category that each Status value falls into. The Status Category field’s values are identical to the default Status values.If you create custom Status values, you must indicate which category it belongs to. For example, if you create a Customer Absent value, you may decide that it belongs in the Cannot Complete category. To learn which processes reference StatusCategory, see How are Status Categories Used? |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street number and name where the service appointment is completed. |
| Subject | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA short phrase describing the appointment. |
| Transaction | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last transaction ID of the scheduling and optimization request that updated this object. The transaction ID is automatically generated and populated by the Enhanced Scheduling and Optimization engine. Available in API version 63.0 and later. |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work type associated with the service appointment. The work type is inherited from the appointment’s parent record if the parent is a work order or work order line item.NoteIf Lightning Scheduler is also in use, this field is editable. However, users see an error if they update it to list a different work type than the parent record’s work type.This is a relationship field.Relationship NameWorkTypeRelationship TypeLookupRefers ToWorkType |

## Usage

Service appointments always have a parent record, which can be a work order, work order line item, opportunity, account, or asset. The type of parent record tells you about the nature of the service appointment:

-   Service appointments on *work orders* and *work order line items* offer a more detailed view of the work being performed. While work orders and work order line items let you enter general information about a task, service appointments are where you add the details about scheduling and ownership.
-   Service appointments on *assets* represent work being performed on the asset.
-   Service appointments on *accounts* represent work being performed for the account.
-   Service appointments on *opportunities* represent work that is related to the opportunity.
-   Service appointments on *leads* represent work that is related to lead—for example, a site visit to pursue a promising lead.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ServiceAppointmentChangeEvent (API version 48.0)

Change events are available for the object.

ServiceAppointmentFeed

Feed tracking is available for the object.

ServiceAppointmentHistory

History is available for tracked fields of the object.

ServiceAppointmentOwnerSharingRule

Sharing rules are available for the object.

ServiceAppointmentShare

Sharing is available for the object.
