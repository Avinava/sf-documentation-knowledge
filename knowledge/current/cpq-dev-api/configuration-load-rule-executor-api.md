---
title: "Configuration Load Rule Executor API"
domain: cpq-dev-api
topic: configuration-load-rule-executor-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.609Z
estimatedTokens: 534
keywords: [Configuration, Load, Rule, Executor, API, invokes, event, product, rules, configuring, nested, bundle, parentProduct, parent, inherit]
---

# Configuration Load Rule Executor API

> The Configuration Load Rule Executor API invokes all the load event product rules for
  the specified product. When configuring a nested bundle, set the
   parentProduct property to the parent product to inherit configuration
  attributes on the nested bundle.

# Configuration Load Rule Executor API

The Configuration Load Rule Executor API invokes all the load event product rules for the specified product. When configuring a nested bundle, set the parentProduct property to the parent product to inherit configuration attributes on the nested bundle.

| Available in: Salesforce CPQ Spring ’17 and later |
| --- |


Formats

JSON, Apex

HTTP Method

PATCH

Authentication

Authorization: Bearer token

**REQUEST**

| Name | Type |  | Description |
| --- | --- | --- | --- |
| uid | String | Required | ID of the Product2 record . |
| quote | QuoteModel | Required | Corresponds directly to SBQQ__Quote__c . |
| configuration | ConfigurationModel | Optional | The product's configuration data. Only required if you have an existing configuration from product actions or a previous run-through. |
| lineItemKey | Integer | Optional | Used to identify upgrade options in amendment flows. |
| dynamicOptionSkus | List<String> | Optional | A list of dynamic option SKUs. Sourced from product options selected in dynamic features. |
| parentProduct | ProductModel | Optional | The parent product for a nested bundle. Used to inherit configuration attributes from the parent product. |

**RESPONSE**

| Type | Description |
| --- | --- |
| ProductModel | Representation of product data.See CPQ Models. |

## REST Examples

```

```

The example request body loadRuleContext.json file for running load product rules. This example context value is a JSON-formatted string of the quote model and the configuration model.

```

```

Example response body returning product data. The actual response is a JSON formatted string.

```

```

## APEX Examples

Before saving the LoadRuleRunner example class, make sure that the [CPQ Models](atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_api_models.htm "CPQ API references several CPQ data models. To use the Salesforce CPQ API, create classes for each data model in your org.") classes are added as individual Apex classes in your Salesforce org.

```

```

To demonstrate usage of the LoadRuleRunner class, run the following code in anonymous Apex.

```

```

## Code Examples

```
curl "https://*yourInstance*.salesforce.com/services/apexrest/SBQQ/ServiceRouter?loader=SBQQ.ConfigAPI.LoadRuleExecutor&uid=a0x5C000000G1CV" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer yourAuthorizationToken" \
    -X PATCH \
    -d "@loadRuleContext.json"
```

```
{"context":"{"quote":{"record":{"attributes":{"type":"SBQQ__Quote__c"},
     "Account__c":"0014M00001mfEYT",
     "Id":"a0c4M00000eE9SgQAK",
     "PricebookId__c":"01s61000002xO1h",
     "CurrencyIsoCode":"USD"}},
     "configuration":{"validationMessages":[],
     "priceEditable":false,
     "optionData":{"attributes":{"type":"SBQQ__ProductOption__c"}},
     "optionConfigurations":[{"validationMessages":[],
     "priceEditable":false,
     "optionId":"a0U4M00000GJagGUAT",
     "optionData":{"attributes":{"type":"SBQQ__ProductOption__c",
     "url":"\/services\/data\/v48.0\/sobjects\/ProductOption__c\/a0U4M00000GJagGUAT"},
     "ConfiguredSKU__c":"01t4M000003ru2OQAQ",
     "Id":"a0U4M00000GJagGUAT",
     "OwnerId":"0056100000148O6AAI",
     "IsDeleted":false,
     "CurrencyIsoCode":"USD",
     "SystemModstamp":"2020-03-10T20:47:39.000+0000",
     "AppliedImmediately__c":false,
     "Bundled__c":false,
     "DiscountedByPackage__c":false,
     "Number__c":1,
     "OptionalSKU__c":"01t4M000003ru2PQAQ",
     "PriceEditable__c":"No",
     "ProductConfigurationType__c":"Allowed",
     "ProductName__c":"W-7145106 Bundle - Nested Option - Level 1 Product #1",
     "QuantityEditable__c":true,
     "Quantity__c":1,
     "Required__c":false,
     "Selected__c":true,
     "System__c":false,
     "Type__c":"Component",
     "UpliftedByPackage__c":false,
     "CanOrderSeparately__c":false},
     "optionConfigurations":[],
     "isUpgrade":false,
     "isDynamicOption":false,
     "configuredProductId":"01t4M000003ru2PQAQ",
     "configured":false,
     "configurationEntered":false,
     "configurationData":{"attributes":{"type":"SBQQ__ProductOption__c"}},
     "changedByProductActions":false}],
     "isUpgrade":false,
     "isDynamicOption":false,
     "configuredProductId":"01t4M000003ru2OQAQ",
     "configured":false,
     "configurationEntered":false,
     "configurationData":{"attributes":{"type":"SBQQ__ProductOption__c"}},
     "changedByProductActions":false}}"}
```

```
{
  "record": {
    "attributes": {
      "type": "Product2",
      "url": "/services/data/v42.0/sobjects/Product2/01tA0000005uzfZ"
    },
    "Id": "01tA0000005uzfZ",
    "Name": "Apple"
  }
  "options": [],
  "features": [],
  "configuration": {}
}
```

```apex
public with sharing class LoadRuleRunner {
    public ProductModel load(
        Id productId,
        QuoteModel quote,
        Integer lineItemKey,
        List<String> dynamicOptionSkus,
        ConfigurationModel configuration,
        ProductModel parentProduct) {
        
        LoadRuleRunnerContext ctx = new LoadRuleRunnerContext(
            quote,
            lineItemKey,
            dynamicOptionSkus,
            configuration,
            parentProduct);
        String productJSON = SBQQ.ServiceRouter.load('SBQQ.ConfigAPI.LoadRuleExecutor', productId, JSON.serialize(ctx));
        return (ProductModel) JSON.deserialize(productJSON, ProductModel.class);
    }

    private class LoadRuleRunnerContext {
        private QuoteModel quote;
        private ProductModel parentProduct;
        private Integer lineItemKey;
        private List<String> dynamicOptionSkus;
        public ConfigurationModel configuration;

        public LoadRuleRunnerContext(
            QuoteModel quote,
            Integer lineItemKey,
            List<String> dynamicOptionSkus,
            ConfigurationModel configuration,
            ProductModel parentProduct) {
            
            this.quote = quote;
            this.parentProduct = parentProduct;
            this.lineItemKey = lineItemKey;
            this.dynamicOptionSkus = dynamicOptionSkus;
            this.configuration = configuration;
        }
    }
}
```

```apex
QuoteModel quote; //Use Read, Add Products, or Calculate APIs to obtain a QuoteModel
ProductModel product; //Use Read Product or Configuration Loader API to obtain a ProductModel

LoadRuleRunner runner = new LoadRuleRunner();
ProductModel product = runner.load('a0x5C000000G1CV', quote, null, null, product.configuration, null);
System.debug(product);
```

## Related Topics

- CPQ Models (atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_api_models.htm)
