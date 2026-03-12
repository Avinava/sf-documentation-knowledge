---
title: "ContractItemPrice"
domain: revenue-cloud
topic: contractitemprice
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:09.923Z
estimatedTokens: 1264
keywords: [ContractItemPrice, Represents, that’s, used, capture, price, product, contract., API, version, 61.0, later., Important, Supported, Calls, Special, Access, Rules, Fields, Associated]
---

# ContractItemPrice

> Represents an object that’s used to capture a price for a product on
         a contract. This object is available in API version 61.0 and later.

# ContractItemPrice

Represents an object that’s used to capture a price for a product on a contract. This object is available in API version 61.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available in Enterprise, Unlimited, and Developer Editions of Revenue Cloud.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionMethod used to apply discount.Valid values are:Range—Apply the discount to all items after you reach the discount tier. For example, suppose that you give a 10% discount for 50 or more items. If a customer orders 50 products, and the type is range, apply the 10% discount to all 50 items.Slab—Apply discounts in tiers. For example, suppose that you order 30 products, and the type is slab, you can apply a 10% discount to units 1–9, a 20% discount to units 10–19, and a 30% discount to units 20–30. |
| ContractId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the contract.This field is a relationship field.Relationship NameContractRelationship TypeMaster-detailRefers ToContract (the master object) |
| DiscountType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of discount applied, a percentage of the price or an amount.Valid values are:AdjustmentAmountAdjustmentPercentage |
| DiscountValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of the discount applied, based on the discount type. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEnd date and time of the relationship between the contract and contract item price. |
| ItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the product or product category related to a price in a contract.This field is a polymorphic relationship field.Relationship NameItemRelationship TypeLookupRefers ToProduct2, ProductCategory |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last viewed this record or list view. If this value is null, the user accessed this record or list view (LastReferencedDate) but didn’t view it. |
| ListPrice | TypecurrencyPropertiesFilter, NillableDescriptionThe list price of the product. This value is read-only and inherited from the price book related to the contract when the contract item price is created. Use the list price to compare the advertised price to prices that customers receive during contract negotiations. This field is available in API version 66.0 and later. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-generated number assigned to the contract item price. (Read only) |
| Price | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUnit price for the product sold as part of the contract. |
| ProductSellingModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionProduct selling model for the product associated with the price.This field is a relationship field.Relationship NameProductSellingModelRelationship TypeLookupRefers ToProductSellingModel |
| SellingModelType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionSelling mode type to specify whether the product sold is a one-time sale, an evergreen subscription, or a subscription with a defined term.Valid values are:EvergreenOneTimeTermDefinedThe value derived from the product selling model. |
| StartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionStart date and time of the relationship between the contract and contract item price. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContractItemPriceHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_contractitempricehistory.htm "Represents the history of changes to the values in the fields of a ContractItemPrice object. This object is available in API version 61.0 and later.")

History is available for tracked fields of the object.

## Related Topics

- ContractItemPriceHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_contractitempricehistory.htm)
- ContractItemPriceFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- ContractItemPriceHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
