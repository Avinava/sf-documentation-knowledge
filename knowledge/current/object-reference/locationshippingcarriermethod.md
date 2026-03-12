---
title: "LocationShippingCarrierMethod"
domain: object-reference
topic: locationshippingcarriermethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:12.494Z
estimatedTokens: 484
keywords: [LocationShippingCarrierMethod, shipping, carrier, services, associated, location, group, assignment, different, specific, flexibility, customization, process, API, version]
---

# LocationShippingCarrierMethod

> The available shipping carrier services associated with a location or
      location group. Allows the assignment of different shipping methods to a specific location and
      enables flexibility and customization in the shipping process. This object is available
    in API version 61.0 and later.

# LocationShippingCarrierMethod

The available shipping carrier services associated with a location or location group. Allows the assignment of different shipping methods to a specific location and enables flexibility and customization in the shipping process. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The LocationShippingCarrierMethod object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the record was last viewed. |
| LocationSourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe location source ID.This is a polymorphic relationship field.Relationship NameLocationSourceRefers ToLocation, LocationGroup |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the shipping carrier service associated with the location or location group. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who currently owns this LocationShippingCarrierMethod object. Default value is the user logged in to the API to perform the create.This is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ShippingCarrierMethodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionShipping carrier method ID.This is a relationship field.Relationship NameShippingCarrierMethodRefers ToLocation, ShippingCarrierMethod |
