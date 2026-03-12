---
title: "LocationGroup"
domain: object-reference
topic: locationgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.482Z
estimatedTokens: 1540
keywords: [LocationGroup, group, Omnichannel, Inventory, locations, providing, aggregate, view, availability, across, reservation, order, location, level, assign]
---

# LocationGroup

> Represents a group of Omnichannel Inventory locations, providing an aggregate
      view of inventory availability across those locations. Omnichannel Inventory can create an
      inventory reservation for an order at the location group level, then assign the reservation to
      one or more locations in the group as needed. This object is available in API version
    51.0 and later.

# LocationGroup

Represents a group of Omnichannel Inventory locations, providing an aggregate view of inventory availability across those locations. Omnichannel Inventory can create an inventory reservation for an order at the location group level, then assign the reservation to one or more locations in the group as needed. This object is available in API version 51.0 and later.

You can define location groups according to the logic of your business needs. For example, a location group can represent the warehouses in a geographic region, or it can include the fulfillment centers associated with a particular online storefront.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is only available in Omnichannel Inventory orgs.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the location group. |
| ExternalReference | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsed when OCI is integrated with B2C Commerce to associate the location group with an inventory list in B2C Commerce. This value must match the inventory list ID in B2C Commerce. |
| IsEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the location group is in use. If set to false, then inventory functions ignore this location group and its data isn’t synchronized with OCI. The default value is true. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. A null value can mean that this record has only been referenced (LastReferencedDate) and not viewed. |
| LocationGroupName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the location group. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this location group. Default value is the API user that created the record. |
| ShouldSyncWithOci | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether to synchronize inventory data for this location group with Omnichannel Inventory. The default value is true. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[LocationGroupChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[LocationGroupFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LocationGroupHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LocationGroupOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[LocationGroupShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [Location](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_location.htm "Represents a warehouse, service vehicle, work site, or other element of the region where your team performs field service work. In API version 49.0 and later, you can associate activities with specific locations. Activities, such as the tasks and events related to a location, appear in the activities timeline when you view the location detail page. Also in API version 49.0 and later, Work.com users can view Employees as a related list on Location records. In API version 51.0 and later, this object is available for Omnichannel Inventory and represents physical locations where inventory is available for fulfilling orders.")

-   [LocationGroupAssignment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_locationgroupassignment.htm "Represents the assignment of a location to a location group. This object is available in API version 51.0 and later.")

-   [*B2B Commerce and D2C Commerce Developer Guide*: Inventory Data Model](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-b2c-comm-data-model-inventory.html "
    B2B Commerce and D2C Commerce Developer Guide: Inventory Data
    Model - HTML (New Window)")

## Related Topics

- LocationGroupChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- LocationGroupFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- LocationGroupHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- LocationGroupOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- LocationGroupShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
- Location (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_location.htm)
- LocationGroupAssignment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_locationgroupassignment.htm)
