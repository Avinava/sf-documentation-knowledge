---
title: "Sales Order Product DMO"
domain: data-cloud
topic: sales-order-product-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.956Z
keywords: [Sales, Order, Product, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Sales Order Product DMO

# Sales Order Product DMO

The Sales Order Product DMO is a Data Cloud data model object (DMO) for the component of a sales order that identifies a product or service to be sold to the customer.

## Object API Name

ssot\_\_SalesOrderProduct\_\_dlm

## Category

Other

## Primary Subject Area

Sales Order

## Primary Key

Sales Order Product ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Loyalty Transaction Journal | Sales Order Product | Many To One: N:1 | Sales Order Product | Sales Order Product ID |
| Sales Order Product | Seller Account | Many To One: N:1 | Account | Account ID |
| Sales Order Product | Original Order product | Many To One: N:1 | Sales Order Product | Sales Order Product ID |
| Sales Order Product | Sales Order | Many To One: N:1 | Sales Order | Sales Order ID |
| Sales Order Product | Product | Many To One: N:1 | Goods Product | Goods Product ID |
| Sales Order Product | Product | Many To One: N:1 | Master Product | Master Product ID |
| Sales Order Product | Product | Many To One: N:1 | Bundle Product | Bundle Product ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Adjusted Delivery Tax Amount | ssot__AdjustedDeliveryTaxAmount__c | The roll up number of sales order product tax rows associated with delivery fees. | number |
| Allocated Quantity | ssot__AllocatedQuantity__c | The quantity allocated for fulfillment. | number |
| Available Quantity | ssot__AvailableQuantity__c | The quantity of product available. | number |
| Comments | ssot__Commenttext__c | A message that is displayed to the customer during order creation. | text |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DataSourceId__cc | A reference ID for the logical name for a system that is the source of records identified by an external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Delivery Tax Amount | ssot__DeliveryTaxAmount__c | The amount of tax owed for delivery. | number |
| Description | ssot__Description__c | The description of the sales order product. | text |
| Discount Amount | ssot__DiscountAmount__c | The discount amount applied to each order line item. | number |
| Discount Amount Currency | ssot__DiscountAmountCurrency__c | A reference ID to the denomination of currency for the discount amount. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID to system that External Record ID was assigned. | text |
| Gift Order Message | ssot__GiftOrderMessagetext__c | The text message on a gift order. | text |
| Gift Recipient Telephone number | ssot__GiftRecipientTelephonenumber__c | The phone number of a gift recipient. | text |
| Handling Cost Amount Currency | ssot__HandlingCostAmountCurrency__c | A reference ID to the denomination of currency for the handling cost amount. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Is Automatically Renewed | ssot__IsAutomaticallyRenewed__c | An indicator if a subscription-type product can be automatically renewed or was selected for auto-renewal. | text |
| Is Bonus Product | ssot__IsBonusProduct__c | An indicator if the sales order item is a bonus or free product added to an order. | text |
| Is Bundle Root | ssot__IsBundleRoot__c | An indicator whether it’s an element of a bundled product. | text |
| Is Gift | ssot__IsGift__c | An indicator that the sales order is a gift. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Line Adjustment SubTotal Amount | ssot__LineAdjustmentSubTotalAmount__c | The subtotal amount of a line adjustment. | number |
| List Price Amount | ssot__ListPriceAmount__c | The list price amount for one unit of a sales order product. | number |
| List Price Amount Currency | ssot__ListPriceAmountCurrency__c | The denomination of currency for the list price amount. | text |
| List Price Quantity Unit of Measure | ssot__ListPriceQuantityUOMId__c | A reference ID to a unit of measure for the list price of a physical product, for example, a box, case, or palette. | text |
| List Price Term Unit of Measure | ssot__ListPriceTermUOMId__c | A reference ID to a unit of measure for list price for a product with a subscription term, for example, monthly, quarterly, or yearly. | text |
| Order Adjustment SubTotal Amount | ssot__OrderAdjustmentSubTotalAmount__c |  | number |
| Order Manual Adjustment SubTotal Amount | ssot__OrderManualAdjustmentSubTotalAmount__c |  | number |
| Order Product number | ssot__OrderProductnumber__c | An automatically generated number that identifies a sales order product. | text |
| Ordered Quantity | ssot__OrderedQuantity__c | The number of units of sales order product. | number |
| Original Order Product | ssot__OriginalOrderProductId__c | A reference ID to the original sales order product being reduced. | text |
| Pricebook Entry | ssot__PricebookEntryId__c | A reference ID related to an entry within a price book. | text |
| Product | ssot__ProductId__c | A reference ID to what's being sold, for example, goods, services, bundles, and made-to-order products. | text |
| Promised Date | ssot__PromisedDate__c | The start date for sales order product. | dateTime |
| Provisioning Date | ssot__ProvisioningDate__c | The date when the seller expects to provision a service or product. | dateTime |
| Quantity Fulfilled | ssot__QuantityFulfilled__c | The quantity of a sales order product that is provided. | number |
| Quantity Ordered Unit Of Measure | ssot__QuantityOrderedUOMId__c | A reference ID to a unit of measure for quantity of sales order product ordered, for example item, box, or palette. | text |
| Quote Line Item | ssot__QuoteLineItemId__c | A reference ID to the associated quote line item. | text |
| Recurring Price Amount | ssot__RecurringPriceAmount__c | A charge incurred by the buyer on a recurring basis. | number |
| Requested End Date | ssot__RequestedEndDate__c | The date when a product or service ends. | dateTime |
| Requested Start Date | ssot__RequestedStartDate__c | The date when a product or service begins, from a sales order perspective. | dateTime |
| Sales Order | ssot__SalesOrderId__c | A reference ID to the related sales order. | text |
| Sales Order Delivery Group | ssot__SalesOrderDeliveryGroupId__c | A reference ID to the sales order delivery group. | text |
| Sales Order Product Adjusted Tax Amount | ssot__SalesOrderProductAdjustedTaxAmount__c | The amount of taxes including any adjustments. | number |
| Sales Order Product Id | ssot__Id__c | A unique ID used as the primary key for the Sales Order Product DMO. | text |
| Sales Order Product Reason | ssot__SalesOrderProductReasonId__c | A reference ID to the reason code for sales order product. | text |
| Sales Order Product Status | ssot__SalesOrderProductStatusId__c | A reference ID to status of sales order product in order, for example Placed or Activated. | text |
| SalesOrderProductIdentifications | ssot__SalesOrderProductIdentifications__c |  | text |
| SalesOrderProductNotes relationship | ssot__SalesOrderProductNotes__c | Any notes related to a sales order. | text |
| SalesOrderProductPriceAdjustments | ssot__SalesOrderProductPriceAdjustments__c |  | text |
| SalesOrderProductRelatedProducts | ssot__SalesOrderProductRelatedProducts__c |  | text |
| SalesOrderProductTaxes relationship | ssot__SalesOrderProductTaxes__c |  | text |
| Segment Index | ssot__SegmentIndexId__c | A reference ID to the number used with segment indexes for pricing subscriptions. | number |
| Segment Index number | ssot__SegmentIndexnumber__c | A number used for pricing subscriptions, where subperiods of the overall subscription are priced differently, and the pricing can change. | number |
| Seller Account | ssot__SellerAccountId__c | A reference ID to the seller account assigned to a sales order product. | text |
| Shipping Cost Amount Currency | ssot__ShippingCostAmountCurrency__c | A denomination of currency for shipping cost amount. | text |
| Shipping Tax Amount Currency | ssot__ShippingTaxAmountCurrency__c | The denomination of currency for shipping tax amount. | text |
| Subscription Renewal Month Quantity | ssot__SubscriptionRenewalMonthQuantity__c | The length of time of subscription, in months, of sales order item. | number |
| Subscription Term Quantity | ssot__SubscriptionTermQuantity__c | The quantity of a subscription term. | number |
| Subscription Term Unit of Measure | ssot__SubscriptionTermUnitId__c | A reference ID to a unit of measure for a subscription term. | text |
| Total Adjustment Amount | ssot__TotalAdjustmentAmount__c | The total amount including adjustments. | number |
| Total Adjustment Tax Amount | ssot__TotalAdjustmentTaxAmount__c | The total amount of taxes after adjustment. | number |
| Total Distributed Adjustment Amount | ssot__TotalDistributedAdjustmentAmount__c |  | number |
| Total Distributed Adjustment Tax Amount | ssot__TotalDistributedAdjustmentTaxAmount__c |  | number |
| Total Distributed Tax Amount | ssot__TotalDistributedTaxAmount__c | The total line level taxes on distributed adjustments. | number |
| Total Line Adjustment Amount | ssot__TotalLineAdjustmentAmount__c | The amount of any adjustment on a line item of an order. | number |
| Total Line Amount | ssot__TotalLineAmount__c | The amount of a line item of an order. | number |
| Total List Price Amount | ssot__TotalListPriceAmount__c | The list price of a product. | number |
| Total Manual Adjustment Amount | ssot__TotalManualAdjustmentAmount__c | The total amount of any adjustments. | number |
| Total Price Amount | ssot__TotalPriceAmount__c | The total price of an order. | number |
| Total Product Tax Amount | ssot__TotalProductTaxAmount__c | The total tax amount on a specific product. | number |
| Total Recurring Price Amount | ssot__TotalRecurringPriceAmount__c | The total price of recurring charges for subscription products that have recurring charges. | number |
| Total Tax Amount | ssot__TotalTaxAmount__c | The total tax owed on an order. | number |
| Total Unit Price Amount | ssot__TotalUnitPriceAmount__c | The total amount of the unit price. | number |
| Unit Price Amount | ssot__UnitPriceAmount__c | The cost of one unit of product for each customer, which overrides the standard list price. | number |
| Unit Price Amount Currency | ssot__UnitPriceAmountCurrency__c | A reference ID to the denomination of currency for the unit price amount. | text |
| Unit Tax Amount | ssot__UnitTaxAmount__c | The unit tax amount for sales order product. | number |
| Unit Tax Amount Currency | ssot__UnitTaxAmountCurrency__c | A reference ID to the denomination of currency for the unit tax amount. | text |