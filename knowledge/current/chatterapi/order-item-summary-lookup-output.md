---
title: "Order Item Summary Lookup Output"
domain: chatterapi
topic: order-item-summary-lookup-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.080Z
estimatedTokens: 476
keywords: [Order, Item, Summary, Lookup, Output]
---

# Order Item Summary Lookup Output

> Order item summary lookup output.

# Order Item Summary Lookup Output

Order item summary lookup output.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| adjustment​Aggregates | Order Summary ​Adjustment Aggregates | Adjustment aggregates for the order item summary. | Small, 58.0 | 58.0 |
| adjustments | Order Summary Adjustment | Adjustments associated with the order item summary. | Small, 58.0 | 58.0 |
| associatedLine​Items | Order Item Summary Lookup Output[] | Child product line items associated with the order item summary. | Small, 62.0 | 62.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the order item summary record. | Small, 58.0 | 58.0 |
| fields | Map<String, Record Field> | Map of requested order item summary fields. | Small, 58.0 | 58.0 |
| id | String | ID of the order item summary. | Small, 58.0 | 58.0 |
| itemClass | String | Determine whether a product is sold individually or can have variations. Possible values are:Bundle—A set of products that are grouped and sold as a single unit for one price.Set—A product set is a collection of related products. The parent product is grouped with related child products.Simple—A product without any variations.Variation—A product with variations. For example, size and color options can be added to a t-shirt.Variation_Parent—A collection of product variations grouped under their respective parent products through product variation grouping. | Small, 62.0 | 62.0 |
| processExceptions | Process Exception Output[] | Process exceptions information for an order item summary. | Small, 63.0 | 63.0 |
| product | Order Summary Product Lookup | Details of the product associated with order item summary. | Small, 58.0 | 58.0 |
| productSellingModel | Product Selling Model | Product selling model information for an order item summary. | Small, 63.0 | 63.0 |

## Related Topics

- Order Summary
                  ​Adjustment Aggregates (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_adjustment_aggregates.htm)
- Order Summary Adjustment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_adjustment.htm)
- Record Field (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordField.htm)
- Process Exception
                  Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_process_exception_output.htm)
- Order Summary
                  Product Lookup (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_product_lookup_output.htm)
- Product Selling
                Model (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_selling_model.htm)
