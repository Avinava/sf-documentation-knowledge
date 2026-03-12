---
title: "RetailStore"
domain: retail-api
topic: retailstore
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:40.708Z
estimatedTokens: 1761
keywords: [RetailStore, records, physical, retail, stores, associated, business, accounts, API, version, 47.0, later, Calls, Objects]
---

# RetailStore

> Create records for physical retail stores associated to business accounts.
    This object is available in API version 47.0 and later.

# RetailStore

Create records for physical retail stores associated to business accounts. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the parent account to which the retail store belongs. |
| Address | TypeaddressPropertiesFilter, NillableDescriptionAddress of the retail store. This field is available in API version 51.0 and later. |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCity where the retail store is located. This field is available in API version 51.0 and later. |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCountry where the retail store is located. This field is available in API version 51.0 and later. |
| DeliveryFrequency | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of times orders are delivered to the store with the specified frequency type. |
| DeliveryFrequencyType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe frequency at which orders are delivered to the store.Possible values are:DailyMonthlyWeeklyNoteThis is a static picklist. The values of the picklist aren’t displayed in the Object Manager. |
| DeliveryMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe method used for delivering orders to the store.Possible values are:TruckVan |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionUser-defined description of the store. |
| GeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionGeocode for the retail store. This field is available in API version 51.0 and later.Possible values are:AddressBlockCityCountyStateStreetZip |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Latitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLatitude of the retail store. This field is available in API version 51.0 and later. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionIdentifier of a retail store’s geographical location. |
| Longitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLongitude of the retail store. This field is available in API version 51.0 and later. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUnique identifier for the store. |
| OperatingHoursId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the store operating hours. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the retail store record owner. |
| PaymentMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMethod of payment used for transactions of orders.Possible values are:CashChequeCredit |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPostal code of the retail store address. This field is available in API version 51.0 and later. |
| PreferredVisitHoursId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the preferred hours for store visits. |
| PrimaryContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the store manager that is associated with the account. |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe priority of the store.Possible values are:HighLowMedium |
| RecommendedVisitFrequency | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe recommended number of store visits. |
| RecommendedVisitFrequencyType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe recommended frequency type for store visits.Possible values are:DayMonthWeek |
| RetailLocationGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the store group with which the store is associated. |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionState where the retail store is located. This field is available in API version 51.0 and later. |
| StoreType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of the store. This value is used when setting up policies for the store.Possible values are:Flagship StoreRegular StoreVan StoreVirtual Store |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStreet where the retail store is located. This field is available in API version 51.0 and later. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[RetailStoreChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[RetailStoreFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed are available for the object.

[RetailStoreHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

[RetailStoreShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- RetailStoreChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- RetailStoreFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- RetailStoreHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- RetailStoreShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
