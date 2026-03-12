---
title: "OrderItemTaxLineItem"
domain: object-reference
topic: orderitemtaxlineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.967Z
estimatedTokens: 717
keywords: [OrderItemTaxLineItem, tax, amount, applied, order, item, API, version, 48.0, later, Calls, Special, Access, Rules]
---

# OrderItemTaxLineItem

> The tax amount that has been applied to an order item. This object is
    available in API version 48.0 and later.

# OrderItemTaxLineItem

The tax amount that has been applied to an order item. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access Commerce Orders entities, your org must have a Salesforce Order Management license. Commerce Orders entities are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe total amount of the tax line. The value is rounded to the nearest possible amount associated with the currency of the order item. |
| CalculationReferenceNumber | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionReference number provided by the tax provider, such as Stripe, in the tax calculation API response.This field is available in API version 62.0. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionUsers can add a custom description to the record to provide additional detail. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the tax line. |
| OrderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the parent order for the order item related to the tax line |
| OrderItemAdjustmentLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order item adjustment line item that the tax line applies to. |
| OrderItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe order item that the tax line applies to. |
| Rate | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage value of the tax. Null if the tax is a flat amount. |
| ReferenceNumber | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionReference number provided by the tax provider (like Stripe) for each line item in the tax calculation API call. Use this unique ID to revert taxes during cancellation or return of an order.This field is available in API version 62.0. |
| RelatedTaxLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe original order item tax line. Useful for reference in change order scenarios. |
| TaxEffectiveDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date used to calculate the effective tax rate. This field may require an update to accommodate different buyer time zones. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionShows whether the amount on the tax line is an estimate or the final calculated amount. Doesn’t set a value by default. Users can define automation to set and change the value as needed.Possible values are:ActualEstimated |
