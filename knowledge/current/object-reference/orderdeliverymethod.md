---
title: "OrderDeliveryMethod"
domain: object-reference
topic: orderdeliverymethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:13.776Z
estimatedTokens: 797
keywords: [OrderDeliveryMethod, customizations, options, buyer, selected, their, delivery, API, version, 48.0, later, Calls, Special, Access, Rules]
---

# OrderDeliveryMethod

> Shows the customizations and options that a buyer selected for their delivery
      method. This object is available in API version 48.0 and later.

# OrderDeliveryMethod

Shows the customizations and options that a buyer selected for their delivery method. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To access Commerce Orders entities, your org must have a Salesforce Order Management license. Commerce Orders entities are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| Carrier | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe carrier that the buyer chose for their delivery method. Developers must add values to this field. |
| ClassOfService | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe carrier class of service that the buyer chose for their delivery method. Developers must add values to this field. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the delivery method. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAssign new delivery groups to active delivery methods. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Default name of this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns an order delivery method record. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOptional. This product represents a delivery charge order product for a delivery using this delivery method. For example, you could create a product that represents an overnight express charge and assign it to an overnight express delivery method. |
| ReferenceNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference number for an external delivery method. |
| ShippingCarrierMethod | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOptional. A specific shipping service provided by a shipping carrier, such as Ground, 2Day, and NextDay. Depends on the range of transit times available for each carrier. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OrderDeliveryMethodChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm) (API version 62.0)

Change events are available for the object.
