---
title: "CartItemAttribute"
domain: comms-developer-guide
topic: cartitemattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.198Z
estimatedTokens: 473
keywords: [CartItemAttribute, row, item, virtual, stores, attributes, associated, cart, API, version, 66.0, later, Calls, Special, Access]
---

# CartItemAttribute

> Each row represents an item within a virtual object, which stores the
         attributes that can be associated with a cart item. This object is available in API
      version 66.0 and later.

# CartItemAttribute

Each row represents an item within a virtual object, which stores the attributes that can be associated with a cart item. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

The CartItemAttribute object is available with CMERLMB2CAddOn license.

## Fields

| Field | Details |
| --- | --- |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the attribute definition for the cart item.This field is a relationship field.Relationship NameAttributeDefinitionRefers ToAttributeDefinition |
| AttributeName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the cart item attribute. |
| AttributePicklistValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the attribute picklist value for the cart item.This field is a relationship field.Relationship NameAttributePicklistValueRefers ToAttributePicklistValue |
| AttributeValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the cart item attribute. |
| CartItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the cart item associated with the cart item attribute.This field is a relationship field.Relationship NameCartItemRelationship TypeMaster-detailRefers ToCartItem (the master object) |
| ExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn auto-generated ID of the attribute record saved in an external system. |
| IsPriceImpacting | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the cart item attribute impacts the pricing (true) or not (false).The default value is false. |
