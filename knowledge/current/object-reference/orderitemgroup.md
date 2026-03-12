---
title: "OrderItemGroup"
domain: object-reference
topic: orderitemgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.854Z
estimatedTokens: 425
keywords: [OrderItemGroup, Stores, group, line, items, order, aggregated, subtotal, parent-child, relationship, API, version, 62.0, later, Calls]
---

# OrderItemGroup

> Stores the group information for line items in an order. It also stores the
         aggregated line field information (subtotal). It contains a parent-child relationship to
         order. This object is available in API version 62.0 and later.

# OrderItemGroup

Stores the group information for line items in an order. It also stores the aggregated line field information (subtotal). It contains a parent-child relationship to order. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the group. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReserved for future use. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the group. |
| OrderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the order that this order product is a child of.This field is a relationship field.Relationship NameOrderRelationship TypeMaster-detailRefers ToOrder (the master object) |
| SortOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber indicating the sort order selected by the user. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReserved for future use. |
| SummarySubtotal | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of all the line items in the group. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of the group.Possible values are:CPQOrderGroup—CPQ Line GroupingThe default value is CPQOrderGroup. |
