---
title: "CartItem"
domain: object-reference
topic: cartitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:06.191Z
estimatedTokens: 5719
keywords: [CartItem, item, WebCart, that’s, active, store, built, B2B, Cart, Product, Charge, API, version, 49.0, later]
---

# CartItem

> Represents an item in a WebCart that’s active in
			a store built with B2B. Cart item can be of type Product or Charge. This object
		is available in API version 49.0 and later.

# CartItem

Represents an item in a WebCart that’s active in a store built with B2B. Cart item can be of type Product or Charge. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The CartItem object is available only if the B2B Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNon-itemized adjustments for this cart item. |
| AdjustmentTax​Amount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe tax that’s calculated on the AdjustmentAmount. |
| AssociatedItem​Pricing | TypepicklistPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies how a child cart item is priced relative to its parent cart item within a product bundle. This field is null for standalone products that aren't part of a bundle. Available in API version 65.0 and later.Possible values are:IncludedInBundlePrice—Indicates that the parent product’s price includes the aggregated prices of its child components.NotIncludedInBundlePrice—Indicates that the parent product’s price doesn’t include the aggregated prices of its child components. |
| BillingFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies how often a subscription is billed. Available in API version 59.0 and later.Possible values are:AnnualMilestonePlanMonthlyQuarterlySemi-Annual |
| CartDelivery​GroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the CartDeliveryGroup that’s associated with a cart item.This field is a relationship field.Relationship NameCartDeliveryGroupRelationship TypeLookupRefers ToCartDeliveryGroup |
| CartId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the WebCart that’s associated with a cart item.This field is a relationship field.Relationship NameCartRelationship TypeLookupRefers ToWebCart |
| ChildProduct​Count | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of child products associated with this cart item. If a child product is a bundle, its own ChildProductCount is included in this total. For simple products that don’t have any child products, the ChildProductCount value is zero. |
| Configure​DuringSale | TypepicklistPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecify whether a product bundle is configurable. Available in API version 65.0 and later.Possible values are:AllowedNotAllowed |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency that’s specified on the buyer’s account. Default value is USD. Possible values are:AED—UAE DirhamAUD—Australian DollarBRL—Brazilian RealCAD—Canadian DollarEUR—EuroGBP—British PoundINR—Indian RupeeJPY—Japanese YenSEK—Swedish KronaUSD—U.S. Dollar |
| DistributedAdjustment​Amount | TypecurrencyPropertiesDefaulted on create, Filter, Nillable, SortDescriptionA calculated field that determines the amount of a cart-wide promotional adjustment when distributed across all items in the cart. This field is for display purposes only and is valid only during checkout. This field is available in API version 52.0 and later.You receive $10 off, and there are 5 items in the cart. The distributed adjustment is (-$2). |
| DistributedAdjustment​TaxAmount | TypecurrencyPropertiesDefaulted on create, Filter, Nillable, SortDescriptionA calculated field that determines the amount of a cart-wide tax adjustment due to promotions when distributed across all items in the cart. This field is available in API version 52.0 and later.EXAMPLE: Your discount causes a cart-wide tax reduction of (-$10), and there are 5 items in the cart. The distributed tax adjustment is (-$2). |
| FirstPymtPriceAferAdjustments | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe first term price for term-based subscription products, after price adjustments are applied. The total amount for a non-subscription product or a non-term based subscription product, after price adjustments are applied. This is available in API version 60.0 and later. |
| FirstPymtTax | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe tax for the first term price for term-based subscription products. The tax amount for a non-subscription product or a non-term subscription product. This field is available in API version 60.0 and later. |
| GrossAdjustment​Amount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe gross amount of the price adjustment on the cart item (tax inclusive). This is available in API version 55.0 and later. |
| GrossUnitPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe gross amount of the unit price for a cart item (tax inclusive). This is available in API version 55.0 and later. |
| IsShippingChargeNot​Applicable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether shipping charges are applicable (true) or not (false) to the cart item. The default value is false.This field is available in API version 64.0 and later. |
| ItemizedAdjustment​Amount | TypecurrencyPropertiesDefaulted on create, Filter, Nillable, SortDescriptionA calculated field that determines the total amount of promotional adjustments that are specific to an item. This field is available in API version 52.0 and later.EXAMPLE: One cart item has one discount code for $10 off. Your itemized adjustment amount is (-$10) for that item. |
| ItemizedAdjustment​TaxAmount | TypecurrencyPropertiesDefaulted on create, Filter, Nillable, SortDescriptionA calculated field that determines the total amount of promotion-related tax adjustments that are specific to an item. This field is available in API version 52.0 and later.EXAMPLE: One cart item has one discount code for $10 off. This reduces the tax on that item by (-$2). Your itemized adjustment tax amount is (-$2) for that item. |
| ListPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe original price of the cart item. Typically shown with a line through it. List price is shown only when it’s higher than the negotiated price. If the list price is the same or lower, it isn’t shown to the buyer. This field is available in API version 52.0 and later. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this CartItem record. Name can be up to 255 characters. |
| NetAdjustment​Amount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe net amount of the price adjustment made on the cart item (tax exclusive). This is available in API version 55.0 and later. |
| NetUnitPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe net amount of the unit price for the cart item (tax exclusive). This is available in API version 55.0 and later. |
| NetUnitPriceAfterAdjustments | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe net unit price for a cart item, after all tier and promotional price adjustments are applied. This field is available in API version 60.0 and later. |
| ParentCart​ItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the cart item's parent CartItem. The value is empty if the item is a top-level cart item.This field is a relationship field.Relationship NameCartItemRelationship TypeLookupRefers ToCartItem |
| PerUnitWeight | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionWeight per unit of this cart item, in the unit specified by WeightUnit. This field is available in API version 62.0 and later. |
| PeriodBoundary | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe. Default value is . Possible values are:AlignToCalendarAnniversaryDayOfPeriodLastDayOfPeriod |
| PeriodBoundaryDay | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe . |
| PeriodBoundaryStartMonth | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe. Default value is . Possible values are:1—January10—October11—November12—December2—February3—March4—April5—May6—June7—July8—August9—September |
| PriceBookEntryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the price book entry for the product. This field is available in API version 60.0 and later.This field is a relationship field.Relationship NamePricebookEntryRelationship TypeLookupRefers ToPricebookEntry |
| PricingTermCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA calculated field that indicates the number of pricing terms in the subscription. This field is available in API version 59.0 and later. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of a product type cart item. Cart items can be of type PRODUCT or CHARGE.This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductClass | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe product class of the cart item. Default value is Simple. Possible values are:BundleSetSimpleVariationVariationParent |
| ProductRelated​ComponentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the cart item's ProductRelatedComponent. The ProductRelatedComponent represents a product that is included in a product bundle, a set, or a product and an add-on. The ProductRelatedComponent is empty if the item is a top-level cart item.This field is a relationship field.Relationship NameProductRelatedComponentRelationship TypeLookupRefers ToProductRelatedComponent |
| ProductSellingModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the model used to sell a product. This field is available in API version 59.0 or later.This field is a relationship field.Relationship NameProductSellingModelRelationship TypeLookupRefers ToProductSellingModel |
| ProductValidation​Key | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product validation key of the cart item. |
| ProductRelationship​TypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product relationship type that defines the relationship between a product bundle and its child product. Available in API version 65.0 and later.This field is a relationship field.Relationship NameProductRelationshipTypeRelationship TypeLookupRefers Tohttps://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productrelationshiptype.htmProductRelationshipType |
| ProrationPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the proration policy, which defines how prices are calculated for each time period within a subscription term. This field is available in API version 60.0 and later.This field is a relationship field.Relationship NameProrationPolicyRelationship TypeLookupRefers ToProration Policy |
| Quantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of a given cart item in a cart. |
| QuantityScaleMethod | TypepicklistPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDetermines how a child product's quantity scales when added to a cart or configured within a product bundle. Available in API version 65.0 and later. Possible values are:Constant—Represents a value that remains fixed relative to the parent bundle.Proportional—Represents a value that varies in proportion to the parent bundle’s price or quantity. |
| SalesPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe discounted price of a cart item. |
| SellingModelType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of the product selling model associated with a term-based subscription product. This field is available in API version 60.0 and later. Possible values are:EvergreenOneTimeTermDefinedThe default value is OneTime. |
| Sku | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Shelf-Keeping Unit ID of a cart item. |
| StockCheck​Method | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDetermines how inventory is assessed for a cart item that’s part of a bundle or set. Possible values are:ChildProducts—Inventory is assessed based on the child product or products.ParentProduct—Inventory is assessed based on the parent product. |
| SubType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the subtype of the product. Possible values are:Bonus—Bonus product.GiftWrap—Gift wrapped product.This field is available in API version 64.0 and later. |
| SubscriptionTerm | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of terms (years or months, for example) in the subscription. This field is available in API version 59.0 and later. |
| TaxTreatment​Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related tax treatment for the cart item.This field is available in API version 63.0 and later. This field is available with Subscription Management.This field is a relationship field.Relationship NameTaxTreatmentRelationship TypeLookupRefers ToTaxTreatment |
| TotalAdjustment​Amount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of all promotional adjustments on the item, both distributed and itemized. This field is available in API version 52.0 and later. |
| TotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total cost of this cart item, including taxes and adjustments. |
| TotalFirstPymtAdjAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total adjustment amount for the first payment of a term-based susbcription product. The TotalAdjustmentAmount for non-subscription products and non-term based subscription products. This field is available in API version 63.0 and later. |
| TotalFirstPymtListPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe first-payment amount for a term-based subscription product, based on the product's ListPrice. This is the same value as TotalListPrice for non-subscription products or non-term based subscription products. This price is only for comparison, and not the price at which the buyer purchases a product. This field is available in API version 63.0 and later. |
| TotalFirstPymtPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe first term price for term-based subscription products. The price of a line item for non-subscription products and non-term based subscription products. This price includes price adjustments and excludes taxes. This field is available in API version 63.0 and later. |
| TotalLine​Amount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal amount for this cart item, based on sales price and quantity. |
| TotalLineFirstPymtAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe first term price for term-based subscripiton products, calculated based on the sales price and quantity, before any price adjustments are made. This is the same value as TotalLineAmount for non-subscription products and non-term based subscription products. This field is available in API version 63.0 and later. |
| TotalLineFirstPymtTaxAmount | TypecurrencyPropertiesDefaulted on create, Filter, Nillable, SortDescriptionThe tax on the first payment amount, after price adjustments, for term-based subscription products. The tax on the price of the product for non-subscription products and non-term based subscription products. Taxes are also calculated on the delivery charge items. This field is a calculated field. This field is available in API version 63.0 and later. |
| TotalLineGross​Amount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total gross amount of the line item (tax inclusive). This is available in API version 55.0 and later. |
| TotalLineNet​Amount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total net amount of the line item (tax exclusive). This is available in API version 55.0 and later. |
| TotalLineTax​Amount | TypecurrencyPropertiesDefaulted on create, Filter, Nillable, SortDescriptionTotal tax amount for TotalLineAmount. |
| TotalListPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal amount for this cart item, based on ListPrice. We provide this value for comparison. It's not the price that the buyer is paying. |
| TotalPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal amount for this cart item, including adjustments but excluding taxes.NoteAlthough this field is Nillable, if you want to use Commerce Webstore Cart Promotions, this field is required. |
| TotalPriceAfterAll​Adjustments | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal price after all price adjustments are applied. This field is available in API version 52.0 and later.NoteAlthough this field is Nillable, if you want to use Commerce Webstore Cart Promotions, this field is required. |
| TotalPrice​TaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal tax amount for a cart item before promotional adjustments, including quantity-based adjustments. This field is available in API version 56.0 and later. |
| TotalPromo​AdjustmentAmount | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionTotal itemized and distributed adjustment amount in cart (only for promotions). This field is available in API version 52.0 and later. |
| TotalPromoAdjustment​TaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal itemized and distributed adjustment tax amount in cart (only for promotions). This field is available in API version 52.0 and later. |
| TotalTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal tax amount for this cart item. This value includes taxes for both TotalLineAmount and AdjustmentAmount. |
| TotalWeight | TypedoublePropertiesFilter, Nillable, SortDescriptionTotal weight of this cart item, in the unit specified by WeightUnit. This field is available in API version 62.0 and later. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe CartItem type. Possible values are:ProductCharge |
| UnitAdjusted​Price | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPrice per quantity unit after a tier discount or surcharge is applied. This field is available in API version 50.0 and later. |
| UnitAdjustedPrice​WithItemAdj | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUnit price, including both tier and item level discounts, for the item. |
| UnitAdjustment​Amount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTier discount or surcharge to apply to a quantity unit. This amount is added to the SalesPrice to get the UnitAdjustedPrice. This field is available in API version 50.0 and later. |
| UnitItemAdjustment​Amount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionItem level adjustments made to the unit price for the item. |
| UnitPriceAfterAdjustments | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe unit price for a cart item, after tier and promotional price adjustments are applied. This field is available in API version 60.0 and later. |
| WeightUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnit of measurement for the weight of the cart item. This field is available in API version 62.0 and later.Possible values are:GramsKilogramsOuncesPounds |

## Associated Objects

This object has the following associated objects. Unless it’s noted, associated objects are available in the same API version as this object.

[CartItemChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 58.0)

Change events are available for the object.

#### See Also

-   [Commerce Webstore Cart Promotions](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_cart_promotions.htm "Commerce Webstore Cart Promotions - html (New Window)")

-   [Commerce Webstore Promotions, Associate Action](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_associate.htm "Commerce Webstore Promotions, Associate Action - html (New Window)")

-   [Commerce Webstore Promotions, Execute Action](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_execute.htm "Commerce Webstore Promotions, Execute Action - html (New Window)")

-   [CartDeliveryGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartdeliverygroup.htm "Represents shipping information for the delivery of items in an order against a store built with B2B Commerce or D2C Commerce. This object is available in API version 49.0 and later.")

-   [WebCart](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webcart.htm "Represents an online shopping cart for a store built with B2B Commerce or D2C Commerce, with total amounts for products, shipping and handling, and taxes. This object is available in API version 49.0 and later.")

## Related Topics

- CartItemChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- CartDeliveryGroup (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartdeliverygroup.htm)
- WebCart (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webcart.htm)
