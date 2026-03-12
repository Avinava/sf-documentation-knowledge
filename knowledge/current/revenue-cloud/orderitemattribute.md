---
title: "OrderItemAttribute"
domain: revenue-cloud
topic: orderitemattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.677Z
estimatedTokens: 580
keywords: [OrderItemAttribute, Represents, virtual, stores, attribute, specified, order, item.This, API, version, 60.0, later., Supported, Calls, Special, Access, Rules, Fields]
---

# OrderItemAttribute

> Represents
         a virtual object that stores an attribute specified for an order
         item.This object is available in API version 60.0 and later.

# OrderItemAttribute

Represents a virtual object that stores an attribute specified for an order item.This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

This object is available in Enterprise, Unlimited, and Developer Editions of Revenue Cloud.

## Fields

| Field | Details |
| --- | --- |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the attribute definition for this order item attribute.This field is a relationship field.Relationship NameAttributeDefinitionRelationship TypeLookupRefers ToAttributeDefinition |
| AttributeName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name given to order item attribute. |
| AttributePicklistValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the attribute picklist value if the attribute is a picklist type.This field is a relationship field.Relationship NameAttributePicklistValueRelationship TypeLookupRefers ToAttributePicklistValue |
| AttributeValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the value of the order item attribute. For example 5-TB storage.You can use this field to filter records only if the DataType value in the related AttributeDefinitionId record is Text. If the DataType value is Picklist, use the value in the AttributePicklistValueId field for filtering. You can’t use this field to filter records if the DataType value is Checkbox, Currency, Date, Datetime, Multipicklist, Number, or Percent. |
| ExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn auto-generated ID of the attribute record saved in an external system (for example an HBase database). |
| IsPriceImpacting | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionThe pricing impacting the status of the attribute.The default value is false. |
| OrderItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent order item associated with the order item attribute.This field is a relationship field.Relationship NameOrderItemRelationship TypeLookupRefers ToOrderItem |
