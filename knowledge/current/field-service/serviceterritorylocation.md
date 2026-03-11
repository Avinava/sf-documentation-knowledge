---
title: "ServiceTerritoryLocation"
domain: field-service
topic: serviceterritorylocation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:12.968Z
keywords: [ServiceTerritoryLocation, Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# ServiceTerritoryLocation

# ServiceTerritoryLocation

Represents a location associated with a particular service territory in field service.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe location that is associated with the service territory. |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe associated service territory. |
| ServiceTerritoryLocationNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescription(Read only) Auto-generated number identifying the service territory location. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

ServiceTerritoryLocationChangeEvent (API version 55.0)

Change events are available for the object.

ServiceTerritoryLocationFeed

Feed tracking is available for the object.

ServiceTerritoryLocationHistory

History is available for tracked fields of the object.