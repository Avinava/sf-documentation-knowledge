---
title: "Read Product API"
domain: cpq-dev-api
topic: read-product-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.715Z
estimatedTokens: 369
keywords: [Product, API, request’s, pricebook, currency, code, model, loads, catalog, user, requests, REST, Examples, Apex]
---

# Read Product API

> The Read Product API takes the request’s product ID, pricebook ID, and currency code
    and returns a Product model. The Product model loads the product from your catalog when the user
    requests it.

# Read Product API

The Read Product API takes the request’s product ID, pricebook ID, and currency code and returns a Product model. The Product model loads the product from your catalog when the user requests it.

| Available in: Salesforce CPQ Summer ’16 and later |
| --- |
| Special Access Rules: Users must have read access to the product2 object. |


Formats

JSON, Apex

HTTP Method

PATCH

Authentication

Authorization: Bearer token

**REQUEST**

Parameter 1

Name: productId

Type: ID

Required: Yes

Description: The ID of the product record to load

Parameter 2

Name: pricebookId

Type: ID

Required: Yes

Description: The ID of the pricebook that contains the product record to load

Parameter 3

Name: currencyCode

Type: String

Required: Required only for multi-currency orgs

Description: The ISO code of a Salesforce currency where the product’s price is loaded

**RESPONSE**

Type

ProductModel

Description

The representation of product data

## REST Examples

```

```

This request body loaderContext.json file reads a product. The context value is a JSON formatted string.

```

```

An example response body after reading a product. The actual response is a JSON formatted string.

```

```

## Apex Examples

Before saving the ProductReader example class, make sure that the CPQ model classes are added as individual Apex classes in your org.

```

```

For an example of the ProductReader class, run the following code in anonymous Apex.

```

```

## Code Examples

```
curl "https://yourInstance.salesforce.com/services/apexrest/SBQQ/ServiceRouter?loader=SBQQ.ProductAPI.ProductLoader&uid=01t610000033JNt" -H "Content-Type: application/json" -H "Authorization: Bearer token" -X PATCH -d "@loaderContext.json"
```

```
{"context" : "{"pricebookId": "01sA0000000wuhg", "currencyCode":"USD"}"}
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
public with sharing class ProductReader { 
    
    public ProductModel read(Id productId, Id pricebookId, String currencyCode) {
        ProductReaderContext ctx = new ProductReaderContext(pricebookId, currencyCode);
        String productJSON = SBQQ.ServiceRouter.load('SBQQ.ProductAPI.ProductLoader', productId, JSON.serialize(ctx));
        return (ProductModel) JSON.deserialize(productJSON, ProductModel.class);
    }
    
    private class ProductReaderContext {
        private Id pricebookId;
        private String currencyCode;
        
        private ProductReaderContext(Id pricebookId, String currencyCode) {
            this.pricebookId = pricebookId;
            this.currencyCode = currencyCode;
        }
    } 
}
```

```apex
ProductReader reader = new ProductReader();
ProductModel product = reader.read('01tj0000003P1SN','01sj0000003THhKAAW','USD');
System.debug(product);
```
