---
title: "ServiceResource"
domain: field-service
topic: serviceresource
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:56.597Z
estimatedTokens: 1368
keywords: [ServiceResource, Represents, service, technician, crew, Field, Service, Salesforce, Scheduler, agent, Workforce, Engagement., API, version, 38.0, later., Supported, Calls, Special, Access]
---

# ServiceResource

> Represents a service technician or service crew in Field Service and
			Salesforce Scheduler, or an agent in Workforce Engagement. This object is available
		in API version 38.0 and later.

# ServiceResource

Represents a service technician or service crew in Field Service and Salesforce Scheduler, or an agent in Workforce Engagement. This object is available in API version 38.0 and later.

## Supported Calls

create(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

Field Service or Workforce Engagement must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the resource. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhen selected, this option means that the resource can be assigned to work orders. For service tracking purposes, resources can’t be deleted, so deactivating a resource is the best way to send them into retirement.Deactivating a user doesn’t deactivate the related service resource. You can’t create a service resource that is linked to an inactive user. |
| IsCapacityBased | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionCapacity-based resources are limited to a certain number of hours or appointments in a specified time period.TipThe Capacities related list shows a resource’s capacity. |
| IsOptimizationCapable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is reserved for Field Service and the managed package. Create a custom field instead of using this field to include a service resource in optimization. |
| LastKnownLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe latitude of the last known location. |
| LastKnownLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe longitude of the last known location. |
| LastKnownLocation | TypelocationPropertiesNillableDescriptionThe service resource’s last known location. You can configure this field to display data collected from a custom mobile app. This field isn’t visible in the user interface, but you can expose it on service resource page layouts or set up field tracking to be able to view a resource’s location history. |
| LastKnownLocationDate | TypedateTimePropertiesFilter, Nillable, Sort, UpdateDescriptionThe date and time of the last known location. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the service resource was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the service resource was last viewed. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Sort, Nillable, UpdateDescriptionThe location associated with the service resource. For example, a service vehicle driven by the service resource.LocationId is a relationship field.Relationship NameLocationRelationship TypeLookupRefers ToLocation |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe resource’s name, for example the name or title of the associated user or service crew. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the service resource.OwnerId is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, Nillable, UpdateDescriptionThe associated user. Its label in the UI is User. If the service resource represents a service crew rather than a user, leave the User field blank and select the related crew in the ServiceCrewId field.RelatedRecordId is a relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToUser |
| ResourceType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether the resource is a Technician (T), Dispatcher (D), Crew (C), Asset (S), Agent (A), or Planner (P). The default value is Technician (T). Resources who are dispatchers can’t be capacity-based or included in scheduling optimization. Only users with the Field Service Dispatcher permission-set license can be dispatchers. You can’t add additional resource types.To create a dependent lookup filter with ServiceResource.ResourceType, use only the first letter of the picklist value, for example T for Technician. |
| ServiceCrewId | TypereferencePropertiesCreate, Filter, Group, Sort, Nillable, UpdateDescriptionThe associated service crew. If the service resource represents a crew, select the crew.NoteThis field is hidden for all users by default. To use it, update its field-level security settings in Setup and add it to your service resource page layouts. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ServiceResourceChangeEvent (API version 48.0)

Change events are available for the object.

ServiceResourceFeed

Feed tracking is available for the object.

ServiceResourceHistory

History is available for tracked fields of the object.

ServiceResourceOwnerSharingRule

Sharing rules are available for the object.

ServiceResourceShare

Sharing is available for the object.
