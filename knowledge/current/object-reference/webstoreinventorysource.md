---
title: "WebStoreInventorySource"
domain: object-reference
topic: webstoreinventorysource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.457Z
estimatedTokens: 903
keywords: [WebStoreInventorySource, configure, inventory, source, webstore, API, version, 57.0, later, Calls]
---

# WebStoreInventorySource

> Used to configure the inventory source for a webstore. This object is
      available in API version 57.0 and later.

# WebStoreInventorySource

Used to configure the inventory source for a webstore. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DoesAllowGuestInventoryLevel | TypebooleanPropertiesCreate, Filter, Group, Sort, UpdateDescriptionIndicates whether guest users can view a product’s inventory levels when guest checkout is disabled. |
| InventoryCacheTtl | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAmount of time in seconds before cache expires. |
| InventoryDimension | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies which field within inventory levels to use to determine availability.Possible values are AvailableToFulfill,AvailableToOrder,OnHand. |
| IsBopisEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the location supports buy online, pick up in store.The default value is false. |
| IsChkInvOnActiveCartEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the inventory is checked when a customer adds or edits an item in the active cart.If an admin wants to enable the inventory check feature for their store, they must set this value to true.The default value is true. |
| IsDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this is the default inventory source value (true) or not (false).The default value is false. |
| IsEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the default inventory source is active.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| LocationSourceExtRef | TypestringPropertiesGroup, NillableDescriptionThe external reference identifier associated with the LocationSourceId. |
| LocationSourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe location ID or location group ID for this webstore.This field is a polymorphic relationship field.Relationship NameLocationSourceRelationship TypeLookupRefers ToLocation, LocationGroup |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe source name for this entity. |
| ReservationDurationInSeconds | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe amount of time in seconds that a reservation stays active and doesn’t expire. Required for implementations using Omnichannel Inventory. |
| ShowGuestInventoryLevel | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDisplays the inventory level to guest users, even when guest checkout is disabled.The default value is false.This field is available in API version 65.0 and later. |
| WebStoreId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique store ID related to this inventory source.This field is a relationship field.Relationship NameWebStoreRelationship TypeLookupRefers ToWebStore |
