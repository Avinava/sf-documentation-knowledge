---
title: "AssignedResource"
domain: salesforce-scheduler-developer-guide
topic: assignedresource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.686Z
estimatedTokens: 722
keywords: [AssignedResource, service, resource, assigned, appointment, Salesforce, Scheduler, resources, appear, appointments, API, version, 38.0, later, Calls]
---

# AssignedResource

> Represents a service resource who is assigned to a service appointment
			in Salesforce Scheduler. Assigned resources appear in the Assigned Resources related
			list on service appointments. This object is available in API version 38.0 and
		later.

# AssignedResource

Represents a service resource who is assigned to a service appointment in Salesforce Scheduler. Assigned resources appear in the Assigned Resources related list on service appointments. This object is available in API version 38.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| AssignedResourceNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number identifying the resource assignment. |
| EventId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the event that is added to the assigned resources calendar when the service appointment is created.This is a relationship field.Relationship NameEventRelationship TypeLookupRefers ToEvent |
| IsPrimaryResource | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the service resource is a primary resource or not. The default value is false. Available in API version 47.0 and later. |
| IsRequiredResource | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the service resource is a required resource or not.The default value is 'false'.If this field is set to false, Salesforce Scheduler considers the resource as available for other appointments. |
| ServiceAppointmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe service appointment that the resource is assigned to.This is a relationship field.Relationship NameServiceAppointmentRelationship TypeLookupRefers ToServiceAppointment |
| ServiceResourceId | TypereferencePropertiesCreate, Update, Filter, Group, SortDescriptionThe resource who is assigned to the service appointment.This is a relationship field.Relationship NameServiceResourceRelationship TypeLookupRefers ToServiceResource |

## Usage

You can assign multiple service resources to a service appointment. Service resources who are assigned to service appointments can’t be deactivated until they’re removed from the appointments.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssignedResourceChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API version 48.0)

Change events are available for the object.

[AssignedResourceFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.
