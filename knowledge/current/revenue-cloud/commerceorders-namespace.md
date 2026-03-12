---
title: "CommerceOrders Namespace"
domain: revenue-cloud
topic: commerceorders-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:07.323Z
estimatedTokens: 898
namespace: CommerceOrders
keywords: [CommerceOrders, classes, place, orders, integrated, pricing, configuration, validation]
---

# CommerceOrders Namespace

> The CommerceOrders namespace provides classes and
    methods to place orders with integrated pricing, configuration, and validation.

**Namespace:** `CommerceOrders`

# CommerceOrders Namespace

The CommerceOrders namespace provides classes and methods to place orders with integrated pricing, configuration, and validation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

This namespace has been deprecated as of API version 63.0. In API version 63.0 and later, use the new [RevSalesTrxn](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RevSalesTrxn.htm "HTML (New Window)") namespace.

The CommerceOrders namespace includes these classes.

-   **[CatalogRatesPreferenceEnum Enum](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_commerceorders_CatalogRatesPreferenceEnum.htm)**
    Specifies the rate card entries defined in the catalog that must be fetched for order items, with usage-based selling during the order creation process.
-   **[ConfigurationInputEnum Enum](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_commerceorders_ConfigurationInputEnum.htm)**
    Specifies the configuration input for the request to place an order.
-   **[ConfigurationOptionsInput Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_ConfigurationOptionsInput.htm#apex_class_commerceorders_ConfigurationOptionsInput)**
    Contains methods and properties to set the configuration options for the input to the product configurator.
-   **[GraphRequest Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_GraphRequest.htm#apex_class_commerceorders_GraphRequest)**
    Contains constructors and properties to set the graph ID and a list of records to be ingested. The list of records is specified in a key-value map format that contains the field values of an order.
-   **[PlaceOrderExecutor Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_PlaceOrderExecutor.htm#apex_class_commerceorders_PlaceOrderExecutor)**
    Contains methods to place an order with details of the graph request, pricing preferences, and configuration options.
-   **[PlaceOrderResult Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_PlaceOrderResult.htm#apex_class_commerceorders_PlaceOrderResult)**
    Contains properties to hold the response to the place order request.
-   **[PricingPreferenceEnum Enum](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_commerceorders_PricingPreferenceEnum.htm)**
    Specifies the pricing preference during the create order process.
-   **[RecordResource Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_RecordResource.htm#apex_class_commerceorders_RecordResource)**
    Contains constructors and properties to create a record object from field values of an order.
-   **[RecordWithReferenceRequest Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_RecordWithReferenceRequest.htm#apex_class_commerceorders_RecordWithReferenceRequest)**
    Contains constructors and properties to associate a record object with a reference identifier.

## Related Topics

- CatalogRatesPreferenceEnum Enum (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_commerceorders_CatalogRatesPreferenceEnum.htm)
- ConfigurationInputEnum Enum (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_commerceorders_ConfigurationInputEnum.htm)
- ConfigurationOptionsInput Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_ConfigurationOptionsInput.htm)
- GraphRequest Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_GraphRequest.htm)
- PlaceOrderExecutor Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_PlaceOrderExecutor.htm)
- PlaceOrderResult Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_PlaceOrderResult.htm)
- PricingPreferenceEnum Enum (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_commerceorders_PricingPreferenceEnum.htm)
- RecordResource Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_RecordResource.htm)
- RecordWithReferenceRequest Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_RecordWithReferenceRequest.htm)
