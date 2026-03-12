---
title: "CartValidationOutput"
domain: object-reference
topic: cartvalidationoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.228Z
estimatedTokens: 1061
keywords: [CartValidationOutput, Associate, errors, cart, entities, line, items, delivery, groups, store, built, B2B, Commerce, D2C, error]
---

# CartValidationOutput

> Associate errors to cart entities, such as cart line items, delivery
         groups, and the like, in a store built with B2B Commerce or D2C Commerce. An example error
         is “Out of stock.” Available in API version 49.0 and later.

# CartValidationOutput

Associate errors to cart entities, such as cart line items, delivery groups, and the like, in a store built with B2B Commerce or D2C Commerce. An example error is “Out of stock.” Available in API version 49.0 and later.

## Supported Calls

create(), delete(),describeLayout() describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The CartValidationOutput object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| BackgroundOperationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the background operation that ran the validation. |
| CartId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the related WebCart. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency that’s specified on the buyer’s account. Default value is USD.Possible values are:EUR—EuroUSD—U.S. Dollar |
| IsDismissed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the validation process is finished. Default value is false. |
| Level | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDescribes the type of output resulting from the validation process. Possible values are:0 (Info)1 (Error)2 (Warning) |
| Message | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the message to show in the log when validation is complete. Message can be up to 255 characters. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this CartValidationOutput record. Name can be up to 255 characters. |
| RelatedEntityId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionForeign key to WebCart, CartItem, and CartDeliveryGroup. |
| RelatedEntityPrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThree-character prefix for the related entity. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe CartValidationOutput type. Possible values are:CartSave — Available in API version 64.0 and later.EntitlementInventoryOtherPricingPromotionsShippingShippingPromotionsSystemErrorTaxes |

## Associated Objects

This object has the following associated objects. Unless it’s noted, associated objects are available in the same API version as this object.

[CartValidationOutputChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 58.0)

Change events are available for the object.

#### See Also

-   [WebCart](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webcart.htm "Represents an online shopping cart for a store built with B2B Commerce or D2C Commerce, with total amounts for products, shipping and handling, and taxes. This object is available in API version 49.0 and later.")

-   [CartItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartitem.htm "Represents an item in a WebCart that’s active in a store built with B2B. Cart item can be of type Product or Charge. This object is available in API version 49.0 and later.")

-   [CartDeliveryGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartdeliverygroup.htm "Represents shipping information for the delivery of items in an order against a store built with B2B Commerce or D2C Commerce. This object is available in API version 49.0 and later.")

## Related Topics

- CartValidationOutputChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- WebCart (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webcart.htm)
- CartItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartitem.htm)
- CartDeliveryGroup (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartdeliverygroup.htm)
