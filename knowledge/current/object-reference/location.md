---
title: "Location"
domain: object-reference
topic: location
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.474Z
estimatedTokens: 3701
keywords: [Location, warehouse, service, vehicle, work, site, element, region, team, performs, API, version, 49.0, later, associate]
---

# Location

> Represents a warehouse, service vehicle, work site, or other element
			of the region where your team performs field service work. In API version 49.0 and
			later, you can associate activities with specific locations. Activities, such as the
			tasks and events related to a location, appear in the activities timeline when you view
			the location detail page. Also in API version 49.0 and later, Work.com users can view
			Employees as a related list on Location records. In API version 51.0 and later, this
			object is available for Omnichannel Inventory and represents physical locations where
			inventory is available for fulfilling orders.

# Location

Represents a warehouse, service vehicle, work site, or other element of the region where your team performs field service work. In API version 49.0 and later, you can associate activities with specific locations. Activities, such as the tasks and events related to a location, appear in the activities timeline when you view the location detail page. Also in API version 49.0 and later, Work.com users can view Employees as a related list on Location records. In API version 51.0 and later, this object is available for Omnichannel Inventory and represents physical locations where inventory is available for fulfilling orders.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

At least one of these features must be enabled:

-   Commerce Store
-   Contact Tracing for Employees
-   Employee Experience
-   Field Service
-   Fulfillment Orders
-   Health Cloud
-   Industries Insurance
-   Industries Visit
-   Locations
-   Omnichannel Inventory
-   Public Sector
-   Retail Execution
-   Work.com

## Fields

| Field Name | Details |
| --- | --- |
| AssignedFoCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of fulfillment orders assigned to the location. Confirming held fulfillment order capacity increments this value. To reset the location’s capacity, set this value to 0.This field is available when Order Management is installed and configured. By default, it’s hidden by field-level security.This field is available in API version 55.0 and later. |
| CloseDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate the location closed or went out of service. |
| ConstructionEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate construction ended at the location. |
| ConstructionStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate construction began at the location. |
| DefaultPickupTime | TypetimePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefault pickup time at the location.This field is available when Order Management is installed and configured. By default, it’s hidden by field-level security.This field is available in API version 61.0 and later. |
| DefaultProcessingTime | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefault processing time at the location.This field is available when Order Management is installed and configured. By default, it’s hidden by field-level security.This field is available in API version 61.0 and later. |
| DefaultProcessingTimeUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefault processing time unit at the location. Possible values are:HoursDaysWeeksThis field is available when Order Management is installed and configured. By default, it’s hidden by field-level security.This field is available in API version 61.0 and later. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of the location. |
| DrivingDirections | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDirections to the location. |
| EarliestPickupTimeOffset | TypeintegerPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe earliest pickup time for BOPIS. This value is measured in minutes after the start of business hours. |
| ExternalReference | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifier of a location. |
| FoCapacity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of fulfillment orders that can be assigned to the location per time period. If this value is null, then this location’s capacity isn’t limited.This field is available when Order Management is installed and configured. By default, it’s hidden by field-level security.This field is available in API version 55.0 and later. |
| FulfillingBusinessHours | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFulfilling business hours at the location.This field is available when Order Management is installed and configured. By default, it’s hidden by field-level security.This field is available in API version 61.0 and later. |
| FoCapacity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of fulfillment orders that can be assigned to the location per time period. If this value is null, then this location’s capacity isn’t limited.This field is available when Order Management is installed and configured. By default, it’s hidden by field-level security.This field is available in API version 55.0 and later. |
| IsEligibleForPickup | TypebooleanPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates whether the location supports BOPIS |
| IsInventoryLocation | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the location stores parts.NoteThis field must be selected if you want to associate the location with product items. |
| IsMobile | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the location moves. For example, a truck or tool box. |
| LastReferencedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe date when the location was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe date the location was last viewed. |
| LatestPickupTimeOffset | TypeintegerPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe latest pickup time for BOPIS. This value is measured in minutes before the end of business hours. |
| Latitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe latitude of the location. |
| Location | TypelocationPropertiesNillableDescriptionThe geographic location. |
| LocationLevel | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe location’s position in a location hierarchy. If the location has no parent or child locations, its level is 1. Locations that belong to a hierarchy have a level of 1 for the root location, 2 for the child locations of the root location, 3 for their children, and so forth. |
| LocationType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionPicklist of location types. It has no default values, so you must populate it before creating any location records. |
| LogoId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA ContentAsset representing a logo for the location.This field is available in API version 50.0 and later.This is a relationship field.Relationship NameLogoRelationship TypeLookupRefers ToContentAsset |
| Longitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe longitude of the location. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the location. For example, Service Van #4. |
| OpenDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate the location opened or came into service. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe location’s owner or driver.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location’s parent location. For example, if vans are stored at a warehouse when not in service, the warehouse is the parent location.This is a relationship field.Relationship NameParentLocationRelationship TypeLookupRefers ToLocation |
| PickupProcessingTime | TypeintegerPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe processing time required for BOPIS orders at this location. |
| PossessionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the location was purchased. |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority of the location when routing orders. No default values are included. Add values to the picklist and reference them in your custom routing logic.This field is available when Order Management is installed and configured. By default, it’s hidden by field-level security.This field is available in API version 55.0 and later. |
| RemodelEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when remodel construction ended at the location. |
| RemodelStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when remodel construction started at the location. |
| RootLocationId | TypereferencePropertiesFilter, Group, Nillable, SortDescription(Read Only) The top-level location in the location’s hierarchy.This is a relationship field.Relationship NameRootLocationRelationship TypeLookupRefers ToLocation |
| ShouldSyncWithOci | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the location should sync its data with Omnichannel Inventory. The default value is false.This field is available in API version 51.0 and later. |
| ShouldTrackFoCapacity | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the location should track its fulfillment order capacity. The default value is false.This field is available when Order Management is installed and configured. By default, it’s hidden by field-level security.This field is available in API version 55.0 and later. |
| TimeZone | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPicklist of available time zones. |
| VisitorAddressId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to an account’s or client’s address.This is a relationship field.Relationship NameVisitorAddressRelationship TypeLookupRefers ToAddress |

## Usage

Before creating any location records, add at least one value to the Location Type picklist. LocationType is a required field.

To track your inventory in Salesforce, create product items, which represent the stock of a particular product a particular location. For example, create a product item that represents the 500 bolts you have in stock at your Warehouse A location. Each product item must be associated with a location.

To get a more granular picture of your field service operation, associate locations with service territories. For example, if a warehouse is located in a particular service territory, add it as a service territory location.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

“Location” in Salesforce can also refer to the geolocation compound field found on many standard objects. When referencing the Location object in your Apex code, always use Schema.Location instead of Location to prevent confusion with the standard Location compound field. If referencing both the Location object and the Location field in the same snippet, you can differentiate between the two by using System.Location for the field and Schema.Location for the object.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[LocationChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

[LocationFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LocationHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LocationOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[LocationShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [LocationGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_locationgroup.htm "Represents a group of Omnichannel Inventory locations, providing an aggregate view of inventory availability across those locations. Omnichannel Inventory can create an inventory reservation for an order at the location group level, then assign the reservation to one or more locations in the group as needed. This object is available in API version 51.0 and later.")

-   [LocationGroupAssignment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_locationgroupassignment.htm "Represents the assignment of a location to a location group. This object is available in API version 51.0 and later.")

-   [*B2B Commerce and D2C Commerce Developer Guide*: Inventory Data Model](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-b2c-comm-data-model-inventory.html "
    B2B Commerce and D2C Commerce Developer Guide: Inventory Data
    Model - HTML (New Window)")

## Related Topics

- LocationChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- LocationFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- LocationHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- LocationOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- LocationShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
- LocationGroup (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_locationgroup.htm)
- LocationGroupAssignment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_locationgroupassignment.htm)
