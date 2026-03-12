---
title: "Configuration Validator API"
domain: cpq-dev-api
topic: configuration-validator-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.623Z
estimatedTokens: 497
keywords: [Configuration, Validator, API, runs, selection, validation, alert, product, rules, configurator-scoped, price, against, input, model, updated]
---

# Configuration Validator API

> The Configuration Validator API runs selection, validation, and alert product rules and
  configurator-scoped price rules against the input configuration model and returns an updated
  configuration model.

# Configuration Validator API

The Configuration Validator API runs selection, validation, and alert product rules and configurator-scoped price rules against the input configuration model and returns an updated configuration model.

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
| uid | String | Required | ID of the Product2 record |
| quote | QuoteModel | Required | Corresponds directly to SBQQ__Quote__c. |
| configuration | ConfigurationModel | Required | The product's configuration data. |
| event | String | Required | Event type of product and price rules to run. Options are "Load", "Save", "Edit", and "Always". |
| upgradedAssetId | String | Optional | Asset ID when upgrading a bundle. |

**RESPONSE**

| Type | Description |
| --- | --- |
| ConfigurationModel | The product's configuration data. This is the same Configuration Model that was passed in the request, but the data will be changed based on Product Actions from Product and Price Rules that ran. See CPQ Models. |

## REST Examples

```

```

The example request body configValidatorContext.json file for running product and price rules. This example context value is a JSON-formatted string of the quote model, configuration model, and event type.

```

```

Example response body returning product configuration data. The actual response is a JSON formatted string.

```

```

## APEX Examples

Before saving the ConfigValidator example class, make sure that the [CPQ Models](atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_api_models.htm "CPQ API references several CPQ data models. To use the Salesforce CPQ API, create classes for each data model in your org.")classes are added as individual Apex classes in your org.

```

```

To demonstrate usage of the ConfigValidator class, run the following code in anonymous Apex.

```

```

## Code Examples

```
curl "https://yourInstance.salesforce.com/services/apexrest/SBQQ/ServiceRouter?loader=SBQQ.ConfigAPI.ConfigurationValidator&uid=a0x5C000000G1CV \
     -H  "Content-Type: application/json" \
     -H "Authorization: Bearer  yourAuthorizationToken" \
     -X PATCH  \
     -d "@configValidatorContext.json”
```

```
{"context":"{"quote":{"record":{"attributes":{"type":"SBQQ__Quote__c"},
    "Account__c":"0012F00000ayBPwQAM",
    "Id":"a0z2F000000xGLpQAM",
    "PricebookId__c":"01s2F0000011yApQAI",
    "CurrencyIsoCode":"USD"}},
    "configuration":{"validationMessages":[],
    "priceEditable":false,
    "optionData":{"attributes":{"type":"SBQQ__ProductOption__c"}},
    "optionConfigurations":[{"validationMessages":[],
    "priceEditable":false,
    "optionId":"a0o2F000001Yi4JQAS",
    "optionData":{"attributes":{"type":"SBQQ__ProductOption__c",
    "url":"\/services\/data\/v48.0\/sobjects\/ProductOption__c\/a0o2F000001Yi4JQAS"},
    "ConfiguredSKU__c":"01t2F000004XoPLQA0",
    "Id":"a0o2F000001Yi4JQAS",
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
    "ProductName__c":"Nested Option Product #1",
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
    "configuredProductId":"01t2F000004XoPLQA0",
    "configured":false,
    "configurationEntered":false,
    "configurationData":{"attributes":{"type":"SBQQ__ProductOption__c"}},
    "changedByProductActions":false}],
    "isUpgrade":false,
    "isDynamicOption":false,
    "configuredProductId":"01t2F000004XoPLQA0",
    "configured":false,
    "configurationEntered":false,
    "configurationData":{"attributes":{"type":"SBQQ__ProductOption__c"}},
    "changedByProductActions":false},
    "event":"Edit"}"}
```

```
{
    "validationMessages": ["Incorrect quantity for Product A"],
    "priceEditable": false,
    "optionId": null,
    "optionData": {
         "attributes": {
             "type": "SBQQ_ProductOption_c"
         }
    },
    "optionConfigurations": [],
    "listPrice": null,
    "isUpgrade": false,
    "isDynamicOption": false,
    "inheritedConfigurationData": null,
    "hiddenOptionIds": null,
    "dynamicOptionKey": null,
    "disabledOptionIds": null,
    "configuredProductId": "01t3D000005Th8oQAC",
    "configured": false,
    "configurationData": {
        "attributes": {
            "type": "SBQQ_ProductOption_c"
        },
        "SBQQ_UnitPrice_c": null
    },
    "changedByProductActions": false
}
```

```apex
public with sharing class ConfigValidator {
    public ConfigurationModel load(
        Id productId,
        QuoteModel quote,
        ConfigurationModel configuration,
        String event,
        String upgradedAssetId) {
    
        ValidatorContext ctx = new ValidatorContext(
            quote,
            configuration,
            event,
            upgradedAssetId);
        String configJSON = SBQQ.ServiceRouter.load('SBQQ.ConfigAPI.ConfigurationValidator', productId, JSON.serialize(ctx));
        return (ConfigurationModel) JSON.deserialize(configJSON, ConfigurationModel.class);
    }
    
    private class ValidatorContext {
        private QuoteModel quote;
        private ConfigurationModel configuration;
        private String event;
        private String upgradedAssetId;
    
        public ValidatorContext(
            QuoteModel quote,
            ConfigurationModel configuration,
            String event,
            String upgradedAssetId) {
    
            this.quote = quote;
            this.configuration = configuration;
            this.event = event;
            this.upgradedAssetId = upgradedAssetId;
        }
    }
}
```

```apex
QuoteModel quote; //Use Read, Add Products, or Calculate APIs to obtain a QuoteModel
     ProductModel product; //Use Read Product or Configuration Loader API to obtain a ProductModel
     
     ConfigValidator validator = new ConfigValidator();
     ConfigurationModel config = validator.load('01t2F000004XoPLQA0', quote, product.configuration, 'Edit', null);
     System.debug(config);
```

## Related Topics

- CPQ Models (atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_api_models.htm)
