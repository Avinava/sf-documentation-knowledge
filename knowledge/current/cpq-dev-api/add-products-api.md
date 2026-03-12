---
title: "Add Products API"
domain: cpq-dev-api
topic: add-products-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.594Z
estimatedTokens: 369
keywords: [Add, Products, API, Receive, CPQ, quote, product, collection, group, key, model, provided, added, lines, REST]
---

# Add Products API

> Receive a CPQ quote, product collection, and quote group key in a request, and return a
    Quote model with all provided products added as quote lines.

# Add Products API

Receive a CPQ quote, product collection, and quote group key in a request, and return a Quote model with all provided products added as quote lines.

| Available in: Salesforce CPQ Summer ’16 and later |
| --- |


Formats

JSON, Apex

HTTP Method

PATCH

Authentication

Authorization: Bearer token

**REQUEST**

Parameter 1

Name: quote

Type: QuoteModel

Required: Yes

Description: A representation of SBQQ\_\_Quote\_\_c data

Parameter 2

Name: products

Type: ProductModel\[\]

Required: Yes

Description: An array of representations of product data

Parameter 3

Name: groupKey

Type: Integer

Required: Required only for grouped quotes

Description: An index of the existing quote line group where you’re adding products (0 indexed by default)

Parameter 4

Name: ignoreCalculate

Type: Boolean

Required: Yes

Description: Always use true for this value

**RESPONSE**

Type

QuoteModel

Description

The representation of SBQQ\_\_Quote\_\_c data

## REST Examples

```

```

This request body adderContext.json file reads a product. The context value is a JSON formatted string.

```

```

An example response body after adding a product. The actual response is a JSON formatted string.

```

```

## Apex Examples

Before saving the ProductAdder example class, make sure that the CPQ model classes are added as individual Apex classes in your org.

```

```

For an example of the ProductAdder, run the following code in anonymous Apex.

```

```

## Code Examples

```
curl "https://yourInstance.salesforce.com/services/apexrest/SBQQ/ServiceRouter?loader=SBQQ.QuoteAPI.QuoteProductAdder" 
-H "Content-Type: application/json" -H "Authorization: Bearer token" -X PATCH -d "@adderContext.json"
```

```
{"context":"{"quote":{"record":{"attributes":{"type":"SBQQ__Quote__c","url":"/services/data/v41.0/sobjects/SBQQ__Quote__c/a0p61000004IpR8AAK"},
"Name":"Q-00905","Id":"a0p61000004IpR8AAK"},"nextKey":2,"netTotal":0.00,"lineItems":[],"lineItemGroups":[],
"customerTotal":0.00},"products":[],"groupKey":0, "ignoreCalculate": true}"}
```

```
{
  "record": {
    "attributes": {
      "type": "SBQQ__Quote__c",
      "url": "/services/data/v41.0/sobjects/SBQQ__Quote__c/a0p61000004IpR8AAK"
    }
  },
  "nextKey": 4,
  "netTotal": 0.00,
  "lineItems": [
    {
      "record": {
        "attributes": {
          "type": "SBQQ__QuoteLine__c"
        },
        "SBQQ__Product__c": "01t610000033JNtAAM"
      },
      "productQuantityEditable": true,
      "productHasDimensions": false,
      "key": 3,
      "descriptionLocked": false
    },
    {
      "record": {
        "attributes": {
          "type": "SBQQ__QuoteLine__c"
        },
        "SBQQ__Product__c": "01t610000033JNUAA2",
        "SBQQ__Product__r": {
          "attributes": {
            "type": "Product2",
            "url": "/services/data/v41.0/sobjects/Product2/01t610000033JNUAA2"
          },
          "Id": "01t610000033JNUAA2",
          "Name": "Product 2",
          "ProductCode": "P2"
        }
      }
    }
  ],
  "lineItemGroups": [
    {
      "record": {
        "attributes": {
          "type": "SBQQ__QuoteLineGroup__c",
          "url": "/services/data/v41.0/sobjects/SBQQ__QuoteLineGroup__c/a0k61000008WIF1AAO"
        },
        "SBQQ__Quote__c": "a0p61000004IpR8AAK",
        "Id": "a0k61000008WIF1AAO",
        "SBQQ__Number__c": 1.0,
        "SBQQ__SeparateContract__c": false,
        "Name": "Group1"
      },
      "key": 2,
      "hasMultiSegmentLines": false
    }
  ],
  "customerTotal": 0.00
}
```

```apex
public with sharing class ProductAdder {
    
    public QuoteModel add(QuoteModel quote, ProductModel[] products, Integer groupKey) {
        AddProductsContext ctx = new AddProductsContext(quote, products, groupKey);
        String quoteJSON = SBQQ.ServiceRouter.load('SBQQ.QuoteAPI.QuoteProductAdder', null, JSON.serialize(ctx));
        return (QuoteModel) JSON.deserialize(quoteJSON, QuoteModel.class);
    }

    private class AddProductsContext {
        private QuoteModel quote;
        private ProductModel[] products;
        private Integer groupKey;
        private final Boolean ignoreCalculate = true; //Must be hardcoded to true
    
        private AddProductsContext(QuoteModel quote, ProductModel[] products, Integer groupKey) {
            this.quote = quote;
            this.products = products;
            this.groupKey = groupKey;
        }
    }
}
```

```apex
QuoteModel quoteModel; //Use Read Quote API to obtain a QuoteModelProductModel
productModel; //Use Read Product API to obtain a ProductModel

List<ProductModel> productModels = new List<ProductModel>();
productModels.add(productModel);
ProductAdder adder = new ProductAdder();
QuoteModel quoteWithProducts = adder.add(quoteModel, productModels, 0);
System.debug(quoteWithProducts);
```
