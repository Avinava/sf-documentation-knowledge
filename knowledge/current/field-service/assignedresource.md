---
title: "AssignedResource"
domain: field-service
topic: assignedresource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:54.202Z
estimatedTokens: 1120
keywords: [AssignedResource, service, resource, assigned, appointment, Lightning, Scheduler, resources, appear, appointments, API, version, 38.0, later, Calls]
---

# AssignedResource

> Represents a service resource who is assigned to a service
			appointment in Field Service and Lightning Scheduler. Assigned resources appear in the
			Assigned Resources related list on service appointments. This object is available
		in API version 38.0 and later.

# AssignedResource

Represents a service resource who is assigned to a service appointment in Field Service and Lightning Scheduler. Assigned resources appear in the Assigned Resources related list on service appointments. This object is available in API version 38.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| ActualTravelTime | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of minutes that the service resource needs to travel to the assigned service appointment. You can enter a value with up to two decimal places. |
| ApptAssistantInfoUrl | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe URL that contains the status of the mobile worker approaching the service appointment, the Community URL, and the expiry of the URL. Available in version 51.0 and later. |
| AssignedResourceNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number identifying the resource assignment. |
| EstimatedTravelTime | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated number of minutes needed for the service resource to travel to the service appointment they’re assigned to. You can enter a value with up to two decimal places. |
| LocationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the mobile worker approaching the service appointment. When the location status changes to one of these values, a status update containing ApptAssistantInfoUrl is sent to the customer. Available in version 51.0 and later.Possible values are:EnRouteLastMile |
| IsPrimaryResource | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the service resource is a primary resource or not. The default value is false. Available in API version 47.0 and later. |
| ServiceAppointmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe service appointment that the resource is assigned to.This is a relationship field.Relationship NameServiceAppointmentRelationship TypeLookupRefers ToServiceAppointment |
| ServiceCrewId | TypereferencePropertiesCreate, Update, Filter, Group, Sort, NillableDescriptionThe service crew that the resource is assigned to.NoteSince service resources can represent crews or individuals, appointments are typically assigned to crews in the following way:Create a service resource of the Crew type that represent the crew.Create an assigned resource on the service appointment and select the crew resource in the ServiceResourceId field.As an alternative, you can assign appointments to crew members separately. This lets you track each member’s travel time and see a list of the crew members in the Assigned Resources related list. To take this approach, create an assigned resource for each crew member. List the crew member in the ServiceResourceId field and the crew they belong to in the ServiceCrewId field. |
| ServiceResourceId | TypereferencePropertiesCreate, Update, Filter, Group, SortDescriptionThe resource who is assigned to the service appointment.This is a relationship field.Relationship NameServiceResourceRelationship TypeLookupRefers ToServiceResource |
| Transaction | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last transaction ID of the scheduling and optimization request that updated this object. The transaction ID is automatically generated and populated by the Enhanced Scheduling and Optimization engine. Available in API version 63.0 and later. |

## Usage

You can assign multiple service resources to a service appointment. Service resources who are assigned to service appointments cannot be deactivated until they are removed from the appointments.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

AssignedResourceChangeEvent (API version 48.0)

Change events are available for the object.

AssignedResourceHistory(API version 61.0)

History is available for tracked fields of the object.

AssignedResourceFeed

Feed tracking is available for the object.
