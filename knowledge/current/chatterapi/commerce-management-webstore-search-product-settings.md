---
title: "Commerce Management Webstore Search, Product Settings"
domain: chatterapi
topic: commerce-management-webstore-search-product-settings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.576Z
estimatedTokens: 254
keywords: [Commerce, Management, Webstore, Search, Product, Settings]
---

# Commerce Management Webstore Search, Product Settings

> Get and update product search settings.

# Commerce Management Webstore Search, Product Settings

Get and update product search settings.

Resource

```

```

Available version

49.0

HTTP methods

GET, PATCH

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| ids | String | Comma-separated list of up to 250 18-character product IDs. | Required | 49.0 |

Request body for PATCH

Root XML tag

<searchProductSettings>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| searchProduct​Settings | Search Product Setting Input[] | Up to 200 product search settings to update.NoteProducts of class VariationParent can’t be updated. | Required | 49.0 |

Response body for GET and PATCH

[Search Product Setting Collection Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_product_setting_collection_output.htm "Collection of product search settings.")

## Code Examples

```
/commerce/management/webstores/webstoreId/search/product-settings
```

```
{
"searchProductSettings": [
   {
      "id": "productId1",
      "searchable": true
   },
   {
      "id": “productId2”,
      "searchable": false
   }
]
}
```

## Related Topics

- Search Product Setting Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_search_product_setting_input.htm)
- Search Product Setting Collection Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_product_setting_collection_output.htm)
