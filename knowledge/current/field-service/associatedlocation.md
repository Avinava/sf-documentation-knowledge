---
title: "AssociatedLocation"
domain: field-service
topic: associatedlocation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:55.962Z
estimatedTokens: 530
keywords: [AssociatedLocation, Represents, link, between, account, location, Field, Service., associate, multiple, accounts, location., example, shopping, center, may, customer, accounts., Supported, Calls]
---

# AssociatedLocation

> Represents a link between an account and a location in Field Service.
			You can associate multiple accounts with one location. For example, a shopping center
			location may have multiple customer accounts.

# AssociatedLocation

Represents a link between an account and a location in Field Service. You can associate multiple accounts with one location. For example, a shopping center location may have multiple customer accounts.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| ActiveFrom | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time the associated location is active. |
| ActiveTo | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time the associated location stops being active. |
| AssociatedLocationNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-generated number identifying the associated location. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the associated location was last modified. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the associated location was last viewed. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe location associated with the address.This is a relationship field.Relationship NameLocationRelationship TypeLookupRefers ToLocation |
| ParentRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe account associated with the location.This is a relationship field.Relationship NameParentRecordRelationship TypeLookupRefers ToAccount |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPicklist of address types. The values are:Bill ToShip To |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

AssociatedLocationChangeEvent (API version 62.0)

Change events are available for the object.

AssociatedLocationHistory

History is available for tracked fields of the object.
