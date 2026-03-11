---
title: "ServiceCrew"
domain: field-service
topic: servicecrew
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:12.907Z
keywords: [ServiceCrew, Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# ServiceCrew

# ServiceCrew

Represents a group of service resources who can be assigned to service appointments as a unit.

A service crew is a group of service resources whose combined skills and experience make them a good fit to work together on appointments. For example, a wellhead repair crew might include a hydrologist, a mechanical engineer, and an electrician.

Service appointments can only be assigned to service resources. To assign a service crew to service appointments, you must create a service resource with a resource type of Crew that represents the crew, then use the resource for assignment purposes.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| CrewSize | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe number of members on the crew. This field is manual, so it doesn’t auto-update when you add or remove members. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the service crew was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the service crew was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the service crew. For example, Repair Crew. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe crew owner. By default, the owner is the person who created the service crew. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ServiceCrewChangeEvent (API version 48.0)

Change events are available for the object.

ServiceCrewFeed

Feed tracking is available for the object.

ServiceCrewHistory

History is available for tracked fields of the object.

ServiceCrewOwnerSharingRule

Sharing rules are available for the object.

ServiceCrewShare

Sharing is available for the object.