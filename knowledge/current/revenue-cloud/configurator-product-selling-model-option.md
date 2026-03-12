---
title: "Configurator Product Selling Model Option"
domain: revenue-cloud
topic: configurator-product-selling-model-option
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.550Z
estimatedTokens: 198
keywords: [Configurator, Product, Selling, Model, Option, Output, representation, product, selling, model, option, configuration.]
---

# Configurator Product Selling Model Option

> Output representation of the product selling model option in a product
    configuration.

# Configurator Product Selling Model Option

Output representation of the product selling model option in a product configuration.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the product selling model option. | Small, 60.0 | 60.0 |
| product​Id | String | ID of the product that’s associated with the product selling model option. | Small, 60.0 | 60.0 |
| product​Selling​Model | Configurator Product Selling Model[] | Product selling model that’s associated with the product selling model option. | Small, 60.0 | 60.0 |
| product​Selling​ModelId | String | ID of the product selling model that’s associated with the product selling model option. | Small, 60.0 | 60.0 |

## Code Examples

```
"productSellingModelOptions": [
           {
             "id": "0iOxx000000009hEAA",
             "productId": "01txx0000006jmWAAQ",
             "productSellingModel": {
               "id": "0jPxx000000004rEAA",
            "name": "Termed Annually",
               "pricingTerm": 1,
               "pricingTermUnit": "Annual",
               "sellingModelType": "TermDefined",
               "status": "Active"
             },
             "productSellingModelId": "0jPxx000000004rEAA"
           },
           {
             "id": "0iOxx00000000PpEAI",
             "productId": "01txx0000006jmWAAQ",
             "productSellingModel": {
               "id": "0jPxx0000000085EAA",
               "name": "Evergreen Annually",
               "pricingTerm": 1,
               "pricingTermUnit": "Annual",
               "sellingModelType": "Evergreen",
               "status": "Active"
             },
             "productSellingModelId": "0jPxx0000000085EAA"
           }
         ]
```

## Related Topics

- Configurator Product Selling Model (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_configurator_product_selling_model_output.htm)
