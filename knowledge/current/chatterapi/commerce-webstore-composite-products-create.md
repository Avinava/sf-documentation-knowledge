---
title: "Commerce
    Webstore Composite Products, Create"
domain: chatterapi
topic: commerce-webstore-composite-products-create
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.975Z
estimatedTokens: 779
keywords: [Commerce, Webstore, Composite, Products, Add, product, store, associate, category, media, records]
---

# Commerce
    Webstore Composite Products, Create

> Add a product to your store and associate it with the specified
      category and media records.

# Commerce Webstore Composite Products, Create

Add a product to your store and associate it with the specified category and media records.

When a store is created, these default records are automatically created: DefaultBuyerGroupId (maps to: [BuyerGroup](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_buyergroup.htm)), DefaultEntitlementPolicyId (maps to: CommerceEntitlementPolicy), DefaultManagedContentSpaceId (maps to: [ManagedContentSpace](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_managedcontentspace.htm)), DefaultPriceBookId (maps to: [PriceBook2](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_pricebook2.htm)), DefaultProductCatalogId (maps to: [ProductCatalog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_productcatalog.htm)), and DefaultStrikeThroughPricebookId (maps to: [PriceBook2](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_pricebook2.htm)).

This API works within the store's context, so when you make a create request, it automatically associates the product to default buyer group, entitlement policy, and price book records created during store setup, along with the current store's catalog. It also associates the specified category and media in the request. This streamlines product creation and enhances the efficiency of your online retail tasks.

If the API faces a problem associating the product to any store default records, it won't add the product with incomplete default store records. Instead, it cancels the product addition and rollbacks the creation request.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Currently, you can’t modify the default association of the product with these default records created during the store’s setup.

Resource

```

```

Resource example

```

```

Available version

61.0

HTTP methods

POST

Request body for POST

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

Response body for POST

[Composite Commerce Product Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_composite_commerce_product_output.htm "Representation of the composite product create or upsert request.")

## Code Examples

```
/commerce/management/webstore/${webstoreId}/composite-products
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/management/webstore/0ZEOK00000008vJ4AQ/composite-products
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
- Composite Commerce Product
              Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_composite_commerce_product_output.htm)
