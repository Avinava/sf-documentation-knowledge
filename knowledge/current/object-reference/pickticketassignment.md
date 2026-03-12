---
title: "PickTicketAssignment"
domain: object-reference
topic: pickticketassignment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:14.868Z
estimatedTokens: 590
keywords: [PickTicketAssignment, association, FulfillmentOrder, PickTicket, containing, products, picked, part, API, version, 57.0, later, Calls, Special, Access]
---

# PickTicketAssignment

> Represents the association of a FulfillmentOrder with a PickTicket. A
         PickTicket has one PickTicketAssignment for each FulfillmentOrder containing products to be
         picked as part of that PickTicket. This object is available in API version 57.0 and
      later.

# PickTicketAssignment

Represents the association of a FulfillmentOrder with a PickTicket. A PickTicket has one PickTicketAssignment for each FulfillmentOrder containing products to be picked as part of that PickTicket. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available with an Order Management Growth license.

## Fields

| Field | Details |
| --- | --- |
| AttachedToId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the FulfillmentOrder to associate with a PickTicket.This field is a relationship field.Relationship NameAttachedToRelationship TypeLookupRefers ToFulfillmentOrder |
| PickTicketAssignmentNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the PickTicketAssignment. |
| PickTicketId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the PickTicket to associate with a FulfillmentOrder.This field is a relationship field.Relationship NamePickTicketRelationship TypeLookupRefers ToPickTicket |

#### See Also

-   [PickTicket](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pickticket.htm "A PickTicket represents quantities of one or more products to be picked for fulfillment at a location. It can include products belonging to one or more fulfillment orders. This object is available in API version 57.0 and later.")

-   [FulfillmentOrder](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorder.htm "Represents a group of products, fees, and delivery charges on a single order that share the same fulfillment location, delivery method, and recipient. The FulfillmentOrderLineItems belonging to a FulfillmentOrder are associated with OrderItemSummary objects belonging to a single OrderSummary. This object is available in API version 48.0 and later.")

-   [PickTicketProduct](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pickticketproduct.htm "Represents a quantity of a product to be picked as part of a PickTicket. It can include quantities for multiple FulfillmentOrders. This object is available in API version 57.0 and later.")

## Related Topics

- PickTicket (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pickticket.htm)
- FulfillmentOrder (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorder.htm)
- PickTicketProduct (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pickticketproduct.htm)
