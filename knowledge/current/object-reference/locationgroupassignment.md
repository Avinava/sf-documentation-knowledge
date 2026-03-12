---
title: "LocationGroupAssignment"
domain: object-reference
topic: locationgroupassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.488Z
estimatedTokens: 1086
keywords: [LocationGroupAssignment, assignment, location, group, API, version, 51.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# LocationGroupAssignment

> Represents the assignment of a location to a location group. This object
    is available in API version 51.0 and later.

# LocationGroupAssignment

Represents the assignment of a location to a location group. This object is available in API version 51.0 and later.

You can assign a location to multiple location groups, which associates it with one location group assignment for each location group that it’s assigned to. Each location group assignment represents the relationship between one location and one location group, so a location or location group can be associated with multiple location group assignments.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is only available in Omnichannel Inventory orgs.

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. A null value can mean that this record has only been referenced (LastReferencedDate) and not viewed. |
| LocationExternalReference | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe external reference of the associated location. |
| LocationGroupAssignment | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the location group assignment. |
| LocationGroupExternalReference | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe external reference of the associated location group. |
| LocationGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescription(Master-Detail) The associated location group. |
| LocationGroupName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe location group name of the associated location group. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, SortDescription(Master-Detail) The associated location. |
| LocationName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the associated location. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LocationGroupAssignmentChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

#### See Also

-   [Location](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_location.htm "Represents a warehouse, service vehicle, work site, or other element of the region where your team performs field service work. In API version 49.0 and later, you can associate activities with specific locations. Activities, such as the tasks and events related to a location, appear in the activities timeline when you view the location detail page. Also in API version 49.0 and later, Work.com users can view Employees as a related list on Location records. In API version 51.0 and later, this object is available for Omnichannel Inventory and represents physical locations where inventory is available for fulfilling orders.")

-   [LocationGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_locationgroup.htm "Represents a group of Omnichannel Inventory locations, providing an aggregate view of inventory availability across those locations. Omnichannel Inventory can create an inventory reservation for an order at the location group level, then assign the reservation to one or more locations in the group as needed. This object is available in API version 51.0 and later.")

## Related Topics

- LocationGroupAssignmentChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- Location (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_location.htm)
- LocationGroup (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_locationgroup.htm)
