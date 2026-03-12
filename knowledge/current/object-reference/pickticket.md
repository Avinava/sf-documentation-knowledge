---
title: "PickTicket"
domain: object-reference
topic: pickticket
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.862Z
estimatedTokens: 1247
keywords: [PickTicket, quantities, products, picked, fulfillment, location, include, belonging, orders, API, version, 57.0, later, Calls, Special]
---

# PickTicket

> A PickTicket represents quantities of one or more products to be picked for
         fulfillment at a location. It can include products belonging to one or more fulfillment
         orders. This object is available in API version 57.0 and later.

# PickTicket

A PickTicket represents quantities of one or more products to be picked for fulfillment at a location. It can include products belonging to one or more fulfillment orders. This object is available in API version 57.0 and later.

A PickTicket is associated with one or more PickTicketAssignments and one or more PickTicketProducts. Each PickTicketAssignment represents the relationship between the PickTicket and a FulfillmentOrder. Each PickTicketProduct represents the quantity of a product to be picked as part of the PickTicket. If multiple FulfillmentOrders associated with the PickTicket include the same product, one PickTicketProduct can represent the total quantity of that product to be picked for all of those FulfillmentOrders.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available with an Order Management Growth license.

## Fields

| Field | Details |
| --- | --- |
| AssignedToId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user assigned to pick the items associated with the PickTicket.This field is a relationship field.Relationship NameAssignedToRelationship TypeLookupRefers ToUser |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed data in this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it's possible the user accessed data in this record or list view but didn't view it directly. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location fulfilling the items to be picked.This field is a relationship field.Relationship NameLocationRelationship TypeLookupRefers ToLocation |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the PickTicket record. By default, the asset owner is the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PickTicketNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the PickTicket. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Printed, Sort, UpdateDescriptionStatus of the PickTicket. Each status corresponds to one status category, shown here in parentheses. You can customize the status picklist to represent your business processes, but the status category picklist is fixed because processing is based on those values. If you customize the status picklist, include at least one status value for each status category.Default values are:Assigned (Active)Canceled (Canceled)Completed (Completed)Created (Active)Draft (Draft)Picked (Active)Picking (Active) |
| StatusCategory | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionStatus category of the PickTicket. Processing of the PickTicket depends on this value. Each status category corresponds to one or more status values.Possible values are:ACTIVECANCELEDCOMPLETEDDRAFTThe default value is DRAFT. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PickTicketFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PickTicketShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [PickTicketAssignment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pickticketassignment.htm "Represents the association of a FulfillmentOrder with a PickTicket. A PickTicket has one PickTicketAssignment for each FulfillmentOrder containing products to be picked as part of that PickTicket. This object is available in API version 57.0 and later.")

-   [PickTicketProduct](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pickticketproduct.htm "Represents a quantity of a product to be picked as part of a PickTicket. It can include quantities for multiple FulfillmentOrders. This object is available in API version 57.0 and later.")

## Related Topics

- PickTicketFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- PickTicketShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
- PickTicketAssignment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pickticketassignment.htm)
- PickTicketProduct (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pickticketproduct.htm)
