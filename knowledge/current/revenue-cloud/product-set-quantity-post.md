---
title: "Product Set Quantity (POST)"
domain: revenue-cloud
topic: product-set-quantity-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.970Z
estimatedTokens: 305
keywords: [Product, Quantity, POST, runtime, system]
---

# Product Set Quantity (POST)

> Set the quantity of a product through the runtime
    system.

# Product Set Quantity (POST)

Set the quantity of a product through the runtime system.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| configurator​Options | Configurator Options Input | List of the configuration options to execute. | Optional | 60.0 |
| context​Id | String | ID of the context object that’s being considered. | Required | 60.0 |
| qualification​Context | User Context Input | Context details that are used for the qualification rules. | Optional | 60.0 |
| quantity | Integer | Value of the product quantity. | Required | 60.0 |
| transaction​Line​Path | String[] | Path to the line item where the update to the quantity is applied. For example, Quote.QuoteLineItem.Quantity. | Required | 60.0 |

Response body for POST

[Product Quantity Set Configurator](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_set_product_quantity_configurator_output.htm "Output representation of the request details to set product quantity.")

## Code Examples

```
/connect/cpq/configurator/actions/set-product-quantity
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/cpq/configurator/actions/set-product-quantity
```

```
{
    "configuratorOptions": {
        "executePricing": true,
        "returnProductCatalogData": true,
        "qualifyAllProductsInTransaction": true,
        "validateProductCatalog": true,
        "validateAmendRenewCancel": true,
        "executeConfigurationRules": true,
        "addDefaultConfiguration": true
    },
    "qualificationContext": {
        "accountId": "001xx0000000001AAA",
        "contactId": "003xx00000000D7AAI"
    },
    "contextId": "008d27d7-e004-4906-a949-ee7d7c323c77",
    "quantity": 20,
    "transactionLinePath": "Quote.QuoteLineItem.Quantity"
}
```

## Related Topics

- Configurator
                        Options Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configurator_options_input.htm)
- User
                                                Context Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configurator_user_context_input.htm)
- Product Quantity Set
              Configurator (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_set_product_quantity_configurator_output.htm)
