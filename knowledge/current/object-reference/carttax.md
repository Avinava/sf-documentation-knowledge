---
title: "CartTax"
domain: object-reference
topic: carttax
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.219Z
estimatedTokens: 878
keywords: [CartTax, taxes, line, item, WebCart, that’s, active, store, built, B2B, Commerce, D2C, API, version, 49.0]
---

# CartTax

> Represents taxes for a line item in a WebCart
         that’s active in a store built with B2B Commerce or D2C Commerce. This object is
      available in API version 49.0 and later.

# CartTax

Represents taxes for a line item in a WebCart that’s active in a store built with B2B Commerce or D2C Commerce. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The CartTax object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentTargetType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionTarget for the price adjustment (the cart itself or individual items). This field is available in API version 52.0 and later.Possible values are:CartItem |
| Amount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionCalculated tax amount. |
| CartId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the WebCart being taxed. |
| CartItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of a cart item being taxed. |
| CartItemPriceAdjustmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of a price adjustment for a cart item being taxed. (This field is available in API version 52.0 and later.)Refers ToCartItemPriceAdjustment |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency that’s specified on the buyer’s account. Default value is USD. Valid values include:USD—U.S. Dollar |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the tax. Enter up to 2000 characters. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this CartTax record. Name can be up to 255 characters. |
| TaxCalculationDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date this tax was calculated. |
| TaxRate | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe applied tax rate for this line of tax. |
| TaxType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of tax for this line of tax. Possible values are:ActualEstimated |

## Associated Objects

This object has the following associated objects. Unless it’s noted, associated objects are available in the same API version as this object.

[CartTaxChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 58.0)

Change events are available for the object.

#### See Also

-   [WebCart](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webcart.htm "Represents an online shopping cart for a store built with B2B Commerce or D2C Commerce, with total amounts for products, shipping and handling, and taxes. This object is available in API version 49.0 and later.")

## Related Topics

- CartTaxChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- WebCart (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webcart.htm)
