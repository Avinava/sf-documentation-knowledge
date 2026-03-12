---
title: "SalesTransaction"
domain: object-reference
topic: salestransaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.368Z
estimatedTokens: 605
keywords: [SalesTransaction, business, logic, sales, transaction, order, cart, API, version, 55.0, later, Calls, Special, Access, Rules]
---

# SalesTransaction

> Defines the business logic for a sales transaction, for example, an order or
         a cart. This object interface is available in API version 55.0 and later.

# SalesTransaction

Defines the business logic for a sales transaction, for example, an order or a cart. This object interface is available in API version 55.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

This object interface is available with Subscription Management and B2B Commerce.

## Fields

| Field | Details |
| --- | --- |
| ImplementorType | TypestringPropertiesDefault on create, Filter, Group, Restricted picklist, SortDescriptionThe object that is implementing this object interface, for example, an Order object. |
| TotalAdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all adjustments applied to the sales transaction, inclusive of quantity, prorated for the duration of the subscription. Includes distributed price adjustment items and price adjustment items applied directly. This is a calculated field equal to the sum of TotalAdjustmentAmount on the related sales transaction items. |
| TotalAdjustmentDistAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the distributed price adjustment items applied to the related sales transaction items, inclusive of quantity, prorated for the duration of the subscription. Does not include price adjustment items that are applied directly. This is a calculated field equal to the sum of TotalAdjustmentDistAmount on the related sales transaction items. |
| TotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe final price of the sales transaction, after all adjustments, inclusive of quantity, prorated for the duration of the subscription. This is a calculated field equal to the sum of TotalPrice on the related sales transaction items. |
| TotalListAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the list price of the related sales transaction items, inclusive of quantity, prorated for the duration of the subscription. This is a calculated field equal to the sum of ListPriceTotal on the related sales transaction items. |
| TotalProductAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total price of all related sales transaction items of type Product, before price adjustments, inclusive of quantity, prorated for the duration of the subscription. This is a calculated field equal to the sum of TotalLineAmount on the related sales transaction items of type Product. |
