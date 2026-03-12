---
title: "WebCart"
domain: object-reference
topic: webcart
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:19.367Z
estimatedTokens: 3760
keywords: [WebCart, online, shopping, cart, store, built, B2B, Commerce, D2C, total, amounts, products, shipping, handling, taxes]
---

# WebCart

> Represents an online shopping cart for a store built with B2B
         Commerce or D2C Commerce, with total amounts for products, shipping and handling, and
         taxes. This object is available in API version 49.0 and later.

# WebCart

Represents an online shopping cart for a store built with B2B Commerce or D2C Commerce, with total amounts for products, shipping and handling, and taxes. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The WebCart object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the account that owns this WebCart. In API version 51.0 and later, if the WebCart was created through Guest Browsing, this ID is the ID of the GuestBuyerProfile.This field is a polymorphic relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| BillingAddress | TypeaddressPropertiesFilter, NillableDescriptionThe mailing address to which this WebCart is billed. |
| BillingCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city of the billing address. |
| BillingCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country of the billing address. |
| BillingGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe accuracy rating of the geocode for the billing address. Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| BillingLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe latitude of the geocode for the billing address. |
| BillingLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe longitude of the geocode for the billing address. |
| BillingPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code for the billing address. |
| BillingState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the billing address. |
| BillingStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street of the billing address. Enter up to 255 characters. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency that’s specified on the buyer’s account. Default value is USD. Possible values are:EUR—EuroUSD—U.S. DollarNoteAlthough this field is Nillable, if you want to use Commerce Webstore Cart Promotions with multi-currency enabled, this field is required. |
| GrandTotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of all cart items’ TotalAmount, or WebCart TotalAmount plus WebCart TotalTaxAmount. This value includes all taxes and adjustments. |
| GuestCompanyName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCompany name associated with a delivery for a guest customer. This field is available in API version 59.0 and later. |
| GuestEmailAddress | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email address of a guest buyer.This field is available in API version 52.0 and later. |
| GuestFirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe first name of a guest buyer.This field is available in API version 52.0 and later. |
| GuestLastName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last name (or surname) of a guest buyer.This field is available in API version 52.0 and later. |
| GuestPhoneNumber | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe phone number of a guest buyer.This field is available in API version 52.0 and later. |
| GuestSecondName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe second name of a guest buyer.This field is available in API version 52.0 and later. |
| InitialOrderReferenceNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique identifier assigned to the WebCart at the beginning of the checkout process. Initially populated when the checkout process is initiated, the InitialOrderReferenceNumber is then associated with the order created when the checkout is complete.This field is available in API version 61.0 and later. |
| InventoryReservationIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReserved for future use.This field is available in API version 57.0 and later. |
| IsRepricingNeeded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether the cart has changed since the last repricing. The default value is false. |
| IsSecondary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether the cart is a secondary cart or a primary cart.This field is available in API version 52.0 and later. |
| LastRepricingDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate when the last repricing was done. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this WebCart record. Name can be up to 255 characters. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of this WebCart.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PaymentGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the WebCart payment group.This field is a relationship field.Relationship NamePaymentGroupRelationship TypeLookupRefers ToPaymentGroup |
| PaymentMethodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe method of payment for this WebCart.This field is a polymorphic relationship field.Relationship NamePaymentMethodRelationship TypeLookupRefers ToAlternativePaymentMethod, CardPaymentMethod, DigitalWallet |
| PoNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe purchase order number. Enter up to 80 characters. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of this WebCart. Possible values are:Active—Cart is created and available for modifications, like adding or removing products or promotions.Checkout—Cart is in checkout. If the customer modifies the cart, the current checkout session is canceled.Closed—Checkout is complete and an order was created. The cart cannot be modified.PendingClosed—Cart is marked to be closed, but the request isn't completed yet. The cart can’t be modified. This value is available in API version 57.0 and later.PendingDelete—Cart is marked for delete, but the request isn't completed yet. The cart can’t be modified.Processing—Cart is processing. For example, taxes are being calculated. The cart can’t be modified. |
| TaxLocaleType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of tax locale. Possible values are:NetGrossThis field is available in API versions 52.0 to 54.0. |
| TaxType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of tax policy. Possible values are:AutomaticNetGrossThis field is available in API version 55.0 and later. |
| TotalAdjustmentAmount | TypecurrencyPropertiesDefaulted on create, Filter, Nillable, SortDescriptionA calculated field that reflects the total of all adjustments to the cart subtotal. Adjustments include item, tier, and cart level discounts. |
| TotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all cart items’ TotalPrice, or TotalProductAmount plus TotalChargeAmount. If the store tax type is Gross, the sum includes taxes.NoteAlthough this field is Nillable, if you want to use Commerce Webstore Cart Promotions, this field is required and must have a value greater than or equal to zero (0). |
| TotalAmountAfterAllAdjustments | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all cart items after all price adjustments are applied. Adjustments include various types of discounts.This field is available in API version 52.0 and later. |
| TotalCartLevelAdjAmount | TypecurrencyPropertiesDefaulted on create, Filter, Nillable, SortDescriptionTotal cart level discount amount for the cart.This field is available in API version 61.0 and later. |
| TotalChargeAmount | TypecurrencyPropertiesDefaulted on create, Filter, Nillable, SortDescriptionThe sum of all cart items’ TotalPrice for cart items of the type Charge. |
| TotalChargeTaxAmount | TypecurrencyPropertiesDefaulted on create, Filter, Nillable, SortDescriptionThe sum of all the cart items’ TotalTaxAmount for cart items of the type Charge. |
| TotalLineItemsWithErrors | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionA calculated field that shows the total number of cart line items of type Product with errors.This field is available in API version 50.0 and later. |
| TotalListAmount | TypecurrencyPropertiesDefaulted on create, Filter, Nillable, SortDescriptionSum of all the cart items’ TotalListPrice. |
| TotalProductAmount | TypecurrencyPropertiesDefaulted on create, Filter, Nillable, SortDescriptionThe sum of all the cart items’ TotalPrice for cart items of the type Product. |
| TotalProductCount | TypedoublePropertiesDefaulted on create, Filter, Nillable, SortDescriptionA count of all the products in the WebCart. |
| TotalProductItemAdjAmount | TypecurrencyPropertiesDefaulted on create, Filter, Nillable, SortDescriptionTotal item level discount amount for the cart.This field is available in API version 61.0 and later. |
| TotalProductLineItemCount | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionA calculated field that shows the total number of cart line items of type Product.This field is available in API version 60.0 and later. |
| TotalProductListAmount | TypecurrencyPropertiesDefaulted on create, Filter, Nillable, SortDescriptionThe sum of all the cart items’ TotalListAmount for the CartItem type Product.This field is available in API version 59.0 and later. |
| TotalProductTaxAmount | TypecurrencyPropertiesDefaulted on create, Filter, Nillable, SortDescriptionThe sum of all the cart items’ TotalTaxAmount for the CartItem type Product. |
| TotalPromoAdjustmentAmount | TypecurrencyPropertiesDefaulted on create, Filter, Nillable, SortDescriptionThe total of all item discounts related to product promotions.This field is available in API version 52.0 and later. |
| TotalPromoAdjustmentTaxAmount | TypecurrencyPropertiesDefaulted on create, Filter, Nillable, SortDescriptionThe total tax adjustment for all item discounts related to product promotions.This field is available in API version 52.0 and later. |
| TotalTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all cart items’ TotalTaxAmount, or TotalProductTaxAmount plus TotalDeliveryTaxAmount. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe WebCart type. Default value is Cart. Possible values are:CartPayNowReadOnlyReadOnlyTemplate |
| UniqueProductCount | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe count of unique product SKUs in the WebCart. |
| WebStoreId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe store ID related to this WebCart.This field is a relationship field.Relationship NameWebStoreRelationship TypeLookupRefers ToWebStore |

## Usage Notes

-   In a B2B Commerce for Lightning store, customers who created custom components for adding items to carts noticed that, after adding items, the cart badge didn’t refresh. A hard refresh causes the value to properly update.

## Associated Objects

This object has the following associated objects. Unless it’s noted, associated objects are available in the same API version as this object.

[WebCartChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 58.0)

Change events are available for the object.

[WebCartHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webcarthistory.htm "WebCartHistory represents the history of changes to the values in the fields of the WebCart object.")

History is available for tracked fields of the object.

[WebCartOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[WebCartShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [Commerce Webstore Cart Promotions](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_cart_promotions.htm "Commerce Webstore Cart Promotions - html (New Window)")

-   [Commerce Webstore Promotions, Associate Action](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_associate.htm "Commerce Webstore Promotions, Associate Action - html (New Window)")

-   [Commerce Webstore Promotions, Execute Action](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_execute.htm "Commerce Webstore Promotions, Execute Action - html (New Window)")

-   [*Salesforce DX Developer Guide*: Get Started with Scratch Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_get_started.htm)

## Related Topics

- WebCartChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- WebCartHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webcarthistory.htm)
- WebCartOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- WebCartShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
