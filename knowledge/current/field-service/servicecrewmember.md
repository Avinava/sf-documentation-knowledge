---
title: "ServiceCrewMember"
domain: field-service
topic: servicecrewmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:56.570Z
estimatedTokens: 573
keywords: [ServiceCrewMember, Represents, technician, service, resource, belongs, crew., Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# ServiceCrewMember

> Represents a technician service resource that belongs to a service
			crew.

# ServiceCrewMember

Represents a technician service resource that belongs to a service crew.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last day that the service resource belongs to the crew. You can use this field to track employment dates for contractors. |
| IsLeader | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the member is the crew leader. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the service crew member was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the service crew member was last viewed. |
| ServiceCrewId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe crew that the service resource belongs to. |
| ServiceCrewMemberNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionAn auto-generated number identifying the service crew member. |
| ServiceResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe service resource that belongs to the crew. Only service resources whose resource type is Technician can be added to service crews. |
| StartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The day the service resource joins the crew. Service resources can belong to multiple crews as long as their start and end dates don’t overlap. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ServiceCrewMemberChangeEvent (API version 48.0)

Change events are available for the object.

ServiceCrewMemberFeed

Feed tracking is available for the object.

ServiceCrewMemberHistory

History is available for tracked fields of the object.
