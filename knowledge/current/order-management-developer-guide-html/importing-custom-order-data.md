---
title: "Importing Custom Order Data"
domain: order-management-developer-guide-html
topic: importing-custom-order-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.126Z
estimatedTokens: 257
keywords: [Importing, Custom, Order, Data, import, add, OrderItem, OrderDeliveryGroup, matching, corresponding, summary, base, record, action, API]
---

# Importing Custom Order Data

> To import custom order data, add a custom field to Order,
      OrderItem, or OrderDeliveryGroup and a matching custom field to the corresponding summary
      object. When you set the custom value on the base record, the Create Order Summary action or
      API copies it to the matching field on the corresponding summary record.

# Importing Custom Order Data

To import custom order data, add a custom field to Order, OrderItem, or OrderDeliveryGroup and a matching custom field to the corresponding summary object. When you set the custom value on the base record, the Create Order Summary action or API copies it to the matching field on the corresponding summary record.

## Importing Custom Order Data

For example, your storefront data includes an order value called Shopper Category. You can add a custom field called ShopperCategory\_\_c to both Order and OrderSummary. When you import an order, set the ShopperCategory\_\_c value on the Order record. When you run the Create Order Summary action or call the API for that order, it copies that value to the ShopperCategory\_\_c field on the OrderSummary record.

Order summary creation supports custom fields for these data types:

-   Boolean
-   Currency
-   Datetime (Date isn’t supported)
-   Double
-   Email
-   Multipicklist
-   Phone
-   Picklist
-   Reference
-   String
-   TextArea
-   URL
