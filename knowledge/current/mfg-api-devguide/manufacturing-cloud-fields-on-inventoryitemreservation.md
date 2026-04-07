---
title: "Manufacturing Cloud Fields on InventoryItemReservation"
domain: mfg-api-devguide
topic: manufacturing-cloud-fields-on-inventoryitemreservation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:23.564Z
estimatedTokens: 524
keywords: [Manufacturing, Cloud, InventoryItemReservation, inventory, item, reservation, specific, product, location, API, version, 60.0, later, Calls, Special]
---

# Manufacturing Cloud Fields on InventoryItemReservation

> Represents an inventory item reservation for a specific product and location.
  This object is available in API version 60.0 and later.

# Manufacturing Cloud Fields on InventoryItemReservation

Represents an inventory item reservation for a specific product and location. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if a B2B Commerce, D2C Commerce, B2C Commerce or Salesforce Order Management license is enabled.

## Fields

| Field | Details |
| --- | --- |
| ProductItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product item record specifying the product and location details used in the allocation.This field is a relationship field.Relationship NameProductItemRefers ToProductItem |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionIndicates the current state of the inventory item reservation. This field is used to track the lifecycle of a reservation from creation through fulfillment or cancellation.Possible values are:Reserved—The inventory is held for a specific order.Cancelled—The reservation is no longer active.Reservation In Progress—The system is currently processing the reservation.Cancellation In Progress—The system is currently processing the cancellation.Fulfilled—The inventory has been shipped or consumed. |
| ReservationDateTime | TypedateTimePropertiesCreate, Filter, SortDescriptionRepresents the date and time when the inventory reservation was created. Used for tracking reservation lifecycle and prioritization during sourcing. |
| IsAutoReserved | TypebooleanPropertiesCreate, Defaulted on create, Filter, UpdateDescriptionIndicates whether the reservation was created automatically by the system (true) or manually (false). The default value is false. |

#### See Also

-   [*Object Reference for the Salesforce Platform*: InventoryItemReservation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_inventoryitemreservation.htm)
