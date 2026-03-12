---
title: "Shopping Cart Product Engagement DMO"
domain: data-cloud
topic: shopping-cart-product-engagement-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.925Z
estimatedTokens: 969
keywords: [Shopping, Cart, Product, Engagement, DMO, Data, Cloud, data, model, captured, user, actions, such, adding, removing, items, shopping, cart., API, Name]
---

# Shopping Cart Product Engagement DMO

> The Shopping Cart Product Engagement DMO is a Data Cloud data model object
      (DMO) for data captured from user actions, such as adding and removing items from a shopping
      cart.

# Shopping Cart Product Engagement DMO

The Shopping Cart Product Engagement DMO is a Data Cloud data model object (DMO) for data captured from user actions, such as adding and removing items from a shopping cart.

## Object API Name

ssot\_\_ShoppingCartProductEngagement\_\_dlm

## Category

Engagement

## Primary Subject Area

Engagement

## Primary Key

Shopping Cart Product Engagement ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Shopping Cart Product Engagement | Shopping Cart Engagement | Many To One: N:1 | Shopping Cart Engagement | Shopping Cart Engagement ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Adjusted Total Product Amount | ssot__AdjustedTotalProductAmount__c | The product’s adjusted price, if applicable. | number |
| Adjustment Amount | ssot__AdjustmentAmount__c | The amount the prices was adjusted, if applicable. | number |
| Currency | ssot__CurrencyId__c | A reference ID to the currency. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Delivery Amount | ssot__DeliveryAmount__c | The delivery amount for each item. | number |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Is Gift Order | ssot__IsGiftOrder__c | An indicator if an order is a gift. | text |
| Product | ssot__ProductId__c | A reference ID to what's intended to be sold, for example goods, services, bundles, and made-to-order products. | text |
| Product Amount | ssot__ProductAmount__c | The product quantity unit price for line item. | number |
| Product Brand | ssot__ProductBrandName__c | The brand name of a product. | text |
| Product Category | ssot__ProductCategoryName__c | The product category, such as shoes and hats, within a larger catalog. | text |
| Product Color | ssot__ProductColorName__c | The product color for search results. | text |
| Product Display Position | ssot__ProductDisplayPositionnumber__c | The position number the product is shown on a list. | number |
| Product Image URL | ssot__ProductImageURL__c | The link to page that hosts the product photo or image. | text |
| Product Price | ssot__ProductPrice__c | The product price displayed on a search result. | number |
| Product Quantity | ssot__ProductQuantity__c | The product package quantity displayed on a search result. | number |
| Product SKU | ssot__ProductSKUnumber__c | The stock keeping unit (SKU) of a displayed product. | text |
| Product Style | ssot__ProductStyleName__c | The product style displayed on a search result. | text |
| Product Tax Amount | ssot__ProductTaxAmount__c | The amount of tax on product line item. | number |
| Product View URL | ssot__ProductViewURL__c | The link to detail page about the displayed product. | text |
| Promotion Coupon | ssot__PromotionCouponId__c | A reference ID to payment in the form of a voucher entitling holder to a discount on particular product. | text |
| Shopping Cart Engagement | ssot__ShoppingCartEngagementId__c | A reference ID to data retrieved from user action at ordering stage of online shopping process. | text |
| Shopping Cart Product Engagement Id | ssot__Id__c | A unique ID used as primary key for the Shopping Cart Product Engagement DMO. | text |
| Shopping Cart Product Item Name | ssot__ShoppingCartProductItemName__c | The name given to product in a shopping cart. | text |
