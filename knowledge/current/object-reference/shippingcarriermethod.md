---
title: "ShippingCarrierMethod"
domain: object-reference
topic: shippingcarriermethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:17.148Z
estimatedTokens: 886
keywords: [ShippingCarrierMethod, Shipping, service, provided, carrier, Examples, include, Ground, 2Day, NextDay, depends, range, transit, times, API]
---

# ShippingCarrierMethod

> Shipping service provided by a shipping carrier. Examples include
      Ground, 2Day, and NextDay. Service depends on the range of transit times available for each
      carrier. This object is available in API version 61.0 and later.

# ShippingCarrierMethod

Shipping service provided by a shipping carrier. Examples include Ground, 2Day, and NextDay. Service depends on the range of transit times available for each carrier. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The ShippingCarrierMethodId object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| ExternalReference | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUnique code, reference, or identifier for the shipping carrier associated with the delivery. Can be used for internal tracking or integration purposes. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the record was last viewed. |
| ManagedShippingCarrierMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSalesforce-managed shipping carrier method that provides estimated transit times. This field is available in API version 65.0 and later. |
| MaxTransitTime | TypeintegerPropertiesCreate, Filter, Group, Sort, UpdateDescriptionMaximum amount of time required for the carrier to transport and deliver an order. Measured in a specific unit, such as days, hours, or weeks.For example, if the maximum transit time is set to 3, the carrier takes no more than 3 units of the specified transit time unit to deliver the order. |
| MinTransitTime | TypeintegerPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMinimum amount of time required for the carrier to transport and deliver an order. Measured in a specific unit, such as days, hours, or weeks.For example, if the minimum transit time is set to 1, the carrier takes at least 1 unit of the specified transit time unit to deliver the order. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the shipping carrier associated with the delivery. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who currently owns this ShippingCarrierMethod object. Default value is the user logged in to the API to perform the create.This is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ShippingCarrierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionId of the company or service responsible for transporting and delivering the order to the customer.This is a relationship field.Relationship NameShippingCarrierRefers ToShippingCarrier |
| ShippingScope | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType of shipping carrier method. This field is available in API version 65.0 and later.Possible values are:DomesticDomesticAndInternationalInternationalThe default value is Domestic. |
| TransitTimeUnit | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionUnit of measurement used for transit time. Specifies the time interval in which the minimum and maximum transit times are expressed.The available options are:DaysHoursWeeks |
