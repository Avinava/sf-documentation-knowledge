---
title: "Configurator Options Input"
domain: revenue-cloud
topic: configurator-options-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.921Z
estimatedTokens: 387
keywords: [Configurator, Options, Input, representation, request, get, product, configuration, options, that’s, passed, configurator.]
---

# Configurator Options Input

> Input representation of the request to get the product configuration options that’s
    passed to the configurator.

# Configurator Options Input

Input representation of the request to get the product configuration options that’s passed to the configurator.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| add​Default​Configuration | Boolean | Indicates whether to add the default configurations (true) or not (false). | Optional | 60.0 |
| execute​Configuration​Rules | Boolean | Indicates whether to execute the configuration rules (true) or not (false). | Optional | 60.0 |
| execute​Pricing | Boolean | Indicates whether to execute pricing (true) or not (false). | Optional | 60.0 |
| pricing​Procedure | String | Name of the pricing procedure to use during the API calls to Salesforce Pricing Management. | Optional | 60.0 |
| qualifyAll​ProductsIn​Transaction | Boolean | Indicates whether to run the qualification rules on all the products in the context (true) or not (false). | Optional | 60.0 |
| returnProduct​Catalog​Data | Boolean | Indicates whether to return the product catalog data (true) or not (false).Exclude this property or specify the property value as false if you’re using the API without the Product Configurator UI. | Optional | 60.0 |
| validateAmend​Renew​Cancel | Boolean | Indicates whether to run the amend, renew, cancel-related validations (true) or not (false). | Optional | 60.0 |
| validate​Product​Catalog | Boolean | Indicates whether to run the validations against the product catalog (true) or not (false). | Optional | 60.0 |

## Code Examples

```
"configuratorOptions": 
      {
        "addDefaultConfiguration": true,
        "executeConfigurationRules": true,
        "executePricing": true,
        "qualifyAllProductsInTransaction": true,
        "validateAmendRenewCancel": true,
        "validateProductCatalog": true
    }
```
