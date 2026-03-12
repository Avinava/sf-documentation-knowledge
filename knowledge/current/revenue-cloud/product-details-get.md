---
title: "Product Details (GET)"
domain: revenue-cloud
topic: product-details-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.708Z
estimatedTokens: 484
keywords: [Product, Retrieve, individual, records, bundle]
---

# Product Details (GET)

> Retrieve details of individual product records or a
      bundle based on a product ID.

# Product Details (GET)

Retrieve details of individual product records or a bundle based on a product ID.

Resource

```

```

Resource example

```

```

```

```

```

```

Available version

60.0

Requires Chatter

No

HTTP methods

GET

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

You must invoke this API request by using GET method only. If the request is invoked by using POST method, the request is considered as a [Products List](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_get_products.htm "Retrieve products. You can also search, filter, or sort the products.") API request.

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| catalogSystems | String[] | Name of the catalog system. Valid values are:epc—Enterprise Product Catalogpcm—Product Catalog ManagementAlthough this parameter accepts a list, you can pass only one value. If you don’t specify a value, the default behavior is to fetch data from the pcm catalog. | Optional | 66.0 |
| correlation​Id | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Optional | 60.0 |
| fields | String[] | For internal use only. | Optional | 60.0 |
| language | String | Custom language that you can specify to get translated data for the fields of an object that's enabled for translation. See Translate Product and Product Category Data. | Optional | 64.0 |

Response body for GET

[Products](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_products_output.htm "Output representation of the list of retrieved products.")

## Code Examples

```
/connect/pcm/products/productId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/pcm/products/01tT1000000F0afIAC
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/pcm/products/01tT1000000F0afIAC?language=spanish
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/pcm/products/01tT1000000F0afIAC/catalogSystems=epc
```

## Related Topics

- Products List (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_get_products.htm)
- Products (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_products_output.htm)
