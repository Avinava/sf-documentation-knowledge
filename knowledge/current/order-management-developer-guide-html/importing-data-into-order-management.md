---
title: "Importing Data into Order Management"
domain: order-management-developer-guide-html
topic: importing-data-into-order-management
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.136Z
estimatedTokens: 1415
keywords: [Importing, Data, Order, Management, represented, OrderSummary, record, supporting, records, OrderItemSummaries, OrderDeliveryGroupSummaries, import, including, OrderItems, OrderDeliveryGroups]
---

# Importing Data into Order Management

> In Order Management, each order is represented by an OrderSummary
      record and a set of supporting records, such as OrderItemSummaries and
      OrderDeliveryGroupSummaries. When you import order data, you create the Order record and
      supporting records, including OrderItems and OrderDeliveryGroups. Then process the order with
      the Create Order Summary flow core action or API to create the OrderSummary and its supporting
      records.

# Importing Data into Order Management

In Order Management, each order is represented by an OrderSummary record and a set of supporting records, such as OrderItemSummaries and OrderDeliveryGroupSummaries. When you import order data, you create the Order record and supporting records, including OrderItems and OrderDeliveryGroups. Then process the order with the Create Order Summary flow core action or API to create the OrderSummary and its supporting records.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=order_management_developer_guide_html)

#### Note

Don’t directly create OrderSummary records. Always run the flow core action or call the API.

To import large amounts of order data, use Bulk API 2.0. See the [Bulk API 2.0 Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_asynch.meta/api_asynch/asynch_api_intro.htm "HTML (New Window)").

If you’re importing small amounts of order data, you can make composite REST API requests. A composite API call can include up to 200 records. That limit applies to all objects, not only the orders. For example, an order with 5 items and an order-level adjustment that applies to each of them includes at least 11 records: 1 order, 5 order items, and 5 order item adjustments. For more information, see [Composite Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite.htm "HTML (New Window)") in the REST API Developer Guide.

When making API calls to import data, keep in mind that they count toward your API limits. You can request a temporary increase for importing historical orders by opening a case with Salesforce Customer Support. Allow at least 2 weeks for Support to arrange the increase.

## Managed Orders and Unmanaged Orders

The OrderSummary field OrderLifecycleType specifies whether the order is managed with Order Management features. The default value is Managed. You can configure the Create Order Summary action or API request to set the OrderLifecycleType field to Managed or Unmanaged when it creates a record, but you can’t change it later.

Examples of orders that use the unmanaged lifecycle type include historical orders and orders managed by an external system.

For information about the differences between managed and unmanaged order lifecycles, see [Order Lifecycle Management](https://help.salesforce.com/articleView?id=om_order_lifecycle_management.htm&language=en_US "HTML (New Window)").

## Data Requirements for Object Management Import

When importing storefront data, the order in which you create records is important because of the relationships between objects. For example, an OrderItem record requires a Product2, a PriceBookEntry, and an Order. So you can’t create an OrderItem record until those three related records exist.

For each imported order, create records in this order.

1.  Shopper data
    -   Account
    -   Contact (not required if the account record type is Person Account)
2.  SalesChannel
3.  Product2
4.  PriceBookEntry (unless using Optional Price Books)
5.  Payment data (depending on the type of payment)
    -   AlternativePaymentMethod
    -   CardPaymentMethod
    -   DigitalWallet
    -   GtwyProvPaymentMethodType
    -   PaymentGatewayProvider
    -   PaymentGateway
6.  OrderDeliveryMethod (optional)
7.  Order

    The records created before the Order record aren’t specific to one order. When creating them, check for duplicates. For information on configuring automatic identification and handling duplicate records, see [Manage Duplicate Records](https://help.salesforce.com/s/articleView?id=sales.managing_duplicates_overview.htm&type=5&language=en_US "HTML (New Window)").

8.  OrderItem (at least one)
9.  OrderItemAdjustmentLineItem (optional)
10.  OrderItemTaxLineItem (optional)
11.  OrderDeliveryGroup (at least one)
12.  PaymentGroup (optional)
13.  PaymentAuthorization (optional)
14.  Payment (optional)

In addition to the normally required fields, Order Management requires values for other fields for some objects. When creating a record for the objects in this table, define values for all the listed fields.

| Object | Required Fields |
| --- | --- |
| Account | AccountNumberBillingCityBillingCountryBillingCountryCodeBillingStateBillingStreetFirstName (if a Person Account)IsPersonAccountLastName (if a Person Account)Name (if not a Person Account) |
| SalesChannel | SalesChannelName |
| Product2 | DescriptionIsActiveNameProductCodeStockKeepingUnit |
| CardPaymentMethod | AccountIdCardCategoryCardHolderNameCardTypeExpiryMonthExpiryYearInputCardNumberProcessingModeStatus |
| Order | AccountIdBillingCityBillingCountryBillingCountryCodeBillingEmailAddressBillingStateBillingStreetEffectiveDateNameOrderedDateOrderReferenceNumberSalesChannelIdStatus (Set this field to Draft for a new record, and change it to Active before creating the OrderSummary.) |
| OrderItem | DescriptionGrossUnitPriceOrderDeliveryGroupIdOrderIdPricebookEntryIdProduct2idQuantityTotalLineAmountTypeUnitPrice |
| OrderItemAdjustmentLineItem | AmountDescriptionNameOrderItemId |
| OrderItemTaxLineItem | AmountDescriptionNameOrderItemAdjustmentLineItemId (if applicable)OrderItemIdRateTaxEffectiveDateType |
| OrderDeliveryGroup | DeliverToCityDeliverToCountryDeliverToNameDeliverToPostalCodeDeliverToStateDeliverToStreetEmailAddressOrderDeliveryMethodIdOrderId |
| PaymentGroup | SourceObjectId |
| PaymentAuthorization | AccountIdAmountPaymentGatewayIdPaymentGroupIdPaymentMethodIdProcessingModeStatus |
| Payment | AccountIdAmountDateEmailPaymentGatewayIdPaymentGroupIdPaymentMethodIdPhoneProcessingModeStatusType |
