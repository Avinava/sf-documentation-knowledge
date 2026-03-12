---
title: "TravelMode"
domain: field-service
topic: travelmode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:56.748Z
estimatedTokens: 645
keywords: [TravelMode, Represents, travel, mode, used, time, calculations., records, include, information, transportation, such, Car, Walking, whether, vehicle, take, toll, roads, transporting]
---

# TravelMode

> Represents a travel mode used for travel time calculations. The records
         include information about the type of transportation (such as Car or Walking), whether a
         vehicle can take toll roads, and whether a vehicle is transporting hazardous
         materials. This object is available in API version 54.0 and later.

# TravelMode

Represents a travel mode used for travel time calculations. The records include information about the type of transportation (such as Car or Walking), whether a vehicle can take toll roads, and whether a vehicle is transporting hazardous materials. This object is available in API version 54.0 and later.

## Fields

| Field | Details |
| --- | --- |
| CanUseTollRoads | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the vehicle is allowed to drive on toll roads.The default value is false. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the travel model record is locked or not.The default value is false. |
| IsTransportingHazmat | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the vehicle is transporting hazardous materials.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate=) but not viewed it. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the travel model record can be edited or not.The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the travel mode. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| TransportType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType of transportation.Possible values are:BicycleCar-Default.Heavy TruckLight TruckWalking |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

TravelModeFeed

Feed tracking is available for the object.

TravelModeOwnerSharingRule

Sharing rules are available for the object.

TravelModeShare

Sharing is available for the object.
