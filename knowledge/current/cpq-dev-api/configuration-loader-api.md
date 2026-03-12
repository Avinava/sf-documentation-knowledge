---
title: "Configuration Loader API"
domain: cpq-dev-api
topic: configuration-loader-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.603Z
estimatedTokens: 418
keywords: [Configuration, Loader, API, data, product, including, options, model, configuring, nested, bundle, parentProductproperty, parent, inherit, attributes]
---

# Configuration Loader API

> The Configuration Loader API returns all the data for the product, including its product
  options and configuration model. When configuring a nested bundle, set the
   parentProductproperty to the parent product to inherit configuration
  attributes on the nested bundle.

# Configuration Loader API

The Configuration Loader API returns all the data for the product, including its product options and configuration model. When configuring a nested bundle, set the parentProductproperty to the parent product to inherit configuration attributes on the nested bundle.

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
| uid | String | Required | ID of the Product2 record. |
| quote | QuoteModel | Required | Corresponds directly to SBQQ__Quote__c. |
| parentProduct | ProductModel | Optional | The parent product for a nested bundle. Used to inherit configuration attributes from the parent product. |

**RESPONSE**

| Type | Description |
| --- | --- |
| ProductModel | Representation of product data. See CPQ Models. |

## REST Examples

```

```

The example request body configLoaderContext.json file for loading product data. This example context value is a JSON formatted string of the quote model.

```

```

Example response body returning product data. The actual response is a JSON formatted string.

```

```

## APEX Examples

Before saving the ConfigLoader example class, make sure that the [CPQ Models](atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_api_models.htm "CPQ API references several CPQ data models. To use the Salesforce CPQ API, create classes for each data model in your org.")classes are added as individual Apex classes in your org.

```

```

To demonstrate usage of the ConfigLoader class, run the following code in anonymous Apex.

```

```

## Code Examples

```
curl "https://*yourInstance*.salesforce.com/services/apexrest/SBQQ/ServiceRouter?loader=SBQQ.ConfigAPI.ConfigLoader&uid=a0x5C000000G1CV" \
     -H  "Content-Type: application/json" \
     -H  "Authorization: Bearer  yourAuthorizationToken" \
     -X   PATCH  \
     -d  "@configLoaderContext.json”
```

```
{"context":"{"quote":{"record":{"attributes":{"type":"SBQQ__Quote__c",
    "url":"/services/data/v48.0/sobjects/SBQQ__Quote__c/a0p61000004IpR8AAK"},
    "Name":"Q-00905",
    "Id":"a0p61000004IpR8AAK"},
    "nextKey":2,
    "netTotal":0.00,
    "lineItems":[],
    "lineItemGroups":[],
    "customerTotal":0.00},
    "products":[],
    "groupKey":0,
    "ignoreCalculate": true}"}
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
public with sharing class ConfigLoader {
    public ProductModel load(Id productId, QuoteModel quote, ProductModel parentProduct) {
        ConfigLoadContext ctx = new ConfigLoadContext(quote, parentProduct);
        String productJSON = SBQQ.ServiceRouter.load('SBQQ.ConfigAPI.ConfigLoader', productId, JSON.serialize(ctx));
        return (ProductModel) JSON.deserialize(productJSON, ProductModel.class);
    }

    private class ConfigLoadContext {
        private QuoteModel quote;
        private ProductModel parentProduct;
    
        private ConfigLoadContext(QuoteModel quote, ProductModel parentProduct) {
            this.quote = quote;
            this.parentProduct = parentProduct;
        }
    }
}
```

```apex
QuoteModel quote; //Use Read, Add Products, or Calculate APIs to obtain a QuoteModel

ConfigLoader loader = new ConfigLoader();
ProductModel product = loader.load('a0x5C000000G1CV', quote, null);
System.debug(product);
```

## Related Topics

- CPQ Models (atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_api_models.htm)
