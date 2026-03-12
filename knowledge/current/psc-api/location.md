---
title: "Location"
domain: psc-api
topic: location
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.032Z
estimatedTokens: 1947
keywords: [Location, warehouse, service, vehicle, work, site, element, region, team, performs, associate, activities, specific, locations, tasks]
---

# Location

> Represents a warehouse, service vehicle, work site, or other element of
			the region where your team performs field service work. You can associate activities
			with specific locations. Activities, such as the tasks and events related to a location,
			appear in the activities timeline when you view the location detail
		page.

# Location

Represents a warehouse, service vehicle, work site, or other element of the region where your team performs field service work. You can associate activities with specific locations. Activities, such as the tasks and events related to a location, appear in the activities timeline when you view the location detail page.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| CloseDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate the location closed or went out of service. |
| ConstructionEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate construction ended at the location. |
| ConstructionStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate construction began at the location. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of the location. |
| DrivingDirections | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDirections to the location. |
| ExternalReference | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifier of a location. |
| IsInventoryLocation | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the location stores parts.NoteThis field must be selected if you want to associate the location with product items. |
| IsMobile | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the location moves. For example, a truck or tool box. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
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
| PossessionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the location was purchased. |
| RemodelEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when remodel construction ended at the location. |
| RemodelStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when remodel construction started at the location. |
| RootLocationId | TypereferencePropertiesFilter, Group, Nillable, SortDescription(Read Only) The top-level location in the location’s hierarchy.This is a relationship field.Relationship NameRootLocationRelationship TypeLookupRefers ToLocation |
| TimeZone | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPicklist of available time zones. |
| VisitorAddressId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to an account’s or client’s address.This is a relationship field.Relationship NameVisitorAddressRelationship TypeLookupRefers ToAddress |

## Usage

Before creating any location records, add at least one value to the Location Type picklist. LocationType is a required field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=psc_api)

#### Important

“Location” in Salesforce can also refer to the geolocation compound field found on many standard objects. When referencing the Location object in your Apex code, always use Schema.Location instead of Location to prevent confusion with the standard Location compound field. If referencing both the Location object and the Location field in the same snippet, you can differentiate between the two by using System.Location for the field and Schema.Location for the object.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[LocationChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

[LocationFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LocationHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LocationShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LocationChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- LocationFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- LocationHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- LocationShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
