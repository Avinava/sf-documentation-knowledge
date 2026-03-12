---
title: "Composite Product Input"
domain: chatterapi
topic: composite-product-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.358Z
estimatedTokens: 197
keywords: [Composite, Product, Input, representation]
---

# Composite Product Input

> Input representation of the composite product create request.

# Composite Product Input

Input representation of the composite product create request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributeSetInfo | Product Attribute Set Input | Attribute set information for a variation parent product. | Optional | 62.0 |
| categoryIds | String[] | A list of category IDs to be associated with the product. | Optional | 61.0 |
| productFields | Map<String, String> | A map of product field names and their values. | Required | 61.0 |
| productMedia | Product Media Input[] | A list of media records to be associated with the product. | Optional | 61.0 |
| productPricing | Product Pricing Input | Details of the product pricing. | Optional | 61.0 |

## Code Examples

```
{
  "productFields": {
    "Name": "Sample Product",
    "Type": "Base",  // This is required when creating a variant parent
    "Description": "This is a sample product",
    "StockKeepingUnit": "110000",
    "CustomField1__c": 9999,
    "CustomField2__c": "some custom text"
  },
  "categoryIds": [
    "0ZGxx0000000007GAA",
    "0ZGxx0000000008GAA"
  ],
  "productMedia": [
    {
      "mediaId": "20Yxx0000011QskEAE",
      "developerName": "productDetailImage"
    },
    {
      "mediaId": "20Yxx0000011QslEAE",
      "developerName": "productListImage"
    }
  ],
  "attributeSetInfo": {
    "id": "0iYxx0000000001EAA",  // present if using an existing set
    "name": "Apparel",  // present if creating a new set
    "attributes": [  // present if creating a new set
      "Color__c",
      "Size__c"
    ]
  }
}
```

## Related Topics

- Product Attribute
                        Set Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_product_attribute_set_input.htm)
- Product Media
                      Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_product_media_input.htm)
- Product Pricing
                        Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_product_pricing_input.htm)
