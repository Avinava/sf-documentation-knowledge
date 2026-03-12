---
title: "Commerce Webstore Composite Products, Update"
domain: chatterapi
topic: commerce-webstore-composite-products-update
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.979Z
estimatedTokens: 408
keywords: [Commerce, Webstore, Composite, Products, product, record, category, media, records]
---

# Commerce Webstore Composite Products, Update

> Update an existing product record with the specified category and
      media records.

# Commerce Webstore Composite Products, Update

Update an existing product record with the specified category and media records.

When updating a product record, you need to include both the existing category and media records that are already linked to it, along with any new ones you want to add. For example, if a product record has two categories and three media records associated with it, the API will delete and then reinsert all the category and media records. If you don't specify the existing associated category and media records, the API removes their association with the product.

Resource

```

```

Resource example

```

```

Available version

61.0

HTTP methods

PUT

Request body for PUT

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

Response body for PUT

[Composite Commerce Product Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_composite_commerce_product_output.htm "Representation of the composite product create or upsert request.")

## Code Examples

```
/commerce/management/webstore/${webstoreId}/composite-products/${productId}
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/management/webstore/0ZEOK00000008vJ4AQ/composite-products/01tOK000000EUozYAG
```

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
- Composite Commerce
              Product Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_composite_commerce_product_output.htm)
