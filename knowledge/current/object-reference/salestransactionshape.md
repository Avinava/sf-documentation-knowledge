---
title: "SalesTransactionShape"
domain: object-reference
topic: salestransactionshape
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.512Z
estimatedTokens: 738
keywords: [SalesTransactionShape, business, logic, sales, transaction, order, quote, cart, API, version, 57.0, later, Calls, Special, Access]
---

# SalesTransactionShape

> Defines the business logic for a sales transaction; for example, an order, a
         quote, or a cart. This object is available in API version 57.0 and later.

# SalesTransactionShape

Defines the business logic for a sales transaction; for example, an order, a quote, or a cart. This object is available in API version 57.0 and later.

This object is visible in Object Manager for customization; for example, you can create custom fields for this object.

## Supported Calls

describeLayout(), describeSObjects(), query(), retrieve()

## Special Access Rules

This object is available with Subscription Management, B2B Commerce, or B2C Commerce.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe unique identifier for the account associated with this sales transaction shape. This field is available when OrgPermissions or Platform is enabled.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| SalesTransactionShapeName | TypestringPropertiesCreate, Filter, Group, idLookup, SortDescriptionThe name of the sales transaction shape. For example, Quote. |
| TotalAdjustmentAmount | TypecurrencyPropertiesCreate, Filter, Nillable, SortDescriptionThe sum of all adjustments applied to the sales transaction shape, inclusive of quantity, prorated for the duration of the subscription. Includes distributed price adjustment items and price adjustment items applied directly. This calculated field is equal to the sum of TotalAdjustmentAmount on the related sales transaction shape items. |
| TotalAdjustmentDistAmount | TypecurrencyPropertiesCreate, Filter, Nillable, SortDescriptionThe sum of the distributed price adjustment items applied to the related sales transaction shape items, inclusive of quantity, prorated for the duration of the subscription. Does not include price adjustment items that are applied directly. This calculated field is equal to the sum of TotalAdjustmentDistAmount on the related sales transaction shape items. |
| TotalAmount | TypecurrencyPropertiesCreate, Filter, Nillable, SortDescriptionThe final price of the sales transaction shape, after all adjustments, inclusive of quantity, prorated for the duration of the subscription. This calculated field equal to the sum of TotalPrice on the related sales transaction shape items. |
| TotalListAmount | TypecurrencyPropertiesCreate, Filter, Nillable, SortDescriptionThe sum of the list price of the related sales transaction shape items, inclusive of quantity, prorated for the duration of the subscription. This calculated field is equal to the sum of ListPriceTotal on the related sales transaction shape items. |
| TotalProductAmount | TypecurrencyPropertiesCreate, Filter, Nillable, SortDescriptionThe total price of all related sales transaction shape items of type Product, before price adjustments, inclusive of quantity, prorated for the duration of the subscription. This calculated field is equal to the sum of TotalLineAmount on the related sales transaction shape items of type Product. |
