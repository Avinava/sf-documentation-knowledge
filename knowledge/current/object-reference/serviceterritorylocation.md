---
title: "ServiceTerritoryLocation"
domain: object-reference
topic: serviceterritorylocation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.960Z
estimatedTokens: 608
keywords: [ServiceTerritoryLocation, location, associated, particular, service, territory, Calls, Special, Access, Rules, Objects]
---

# ServiceTerritoryLocation

> Represents a location associated with a particular service territory
			in field service.

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

[ServiceTerritoryLocationChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 55.0)

Change events are available for the object.

[ServiceTerritoryLocationFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ServiceTerritoryLocationHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ServiceTerritoryLocationChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ServiceTerritoryLocationFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ServiceTerritoryLocationHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
