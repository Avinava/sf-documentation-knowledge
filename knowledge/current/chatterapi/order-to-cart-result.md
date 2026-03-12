---
title: "Order to Cart Result"
domain: chatterapi
topic: order-to-cart-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.182Z
estimatedTokens: 170
keywords: [Order, Cart, Result, action, adding]
---

# Order to Cart Result

> Result of action adding an order to a cart.

# Order to Cart Result

Result of action adding an order to a cart.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cartId | String | ID of the cart. | Small, 57.0 | 57.0 |
| totalFailed​ProductCount | Integer | Number of products that couldn't be successfully added to the cart from the order. | Small, 57.0 | 57.0 |
| totalSucceeded​ProductCount | Integer | Number of products successfully added to the cart from the order. | Small, 57.0 | 57.0 |
| unaddedProducts | Order to Cart Failed Product[] | Collection of products not successfully added to the cart. | Small, 57.0 | 57.0 |

## Code Examples

```
{
  "cartId": "0a6RO0000000146YAA",
  "totalSucceededProductCount": 3,
  "totalFailedProductCount": 2,
  "unaddedProducts": [
    {
      "productId": "01txx00000034cv",
      "productName": "Sample Product Name 1",
      "productSKU": "00001",
      "errorCode": "ERROR_MAX_LIMIT_EXCEEDED",
      "errorMessage": "Sample Error Message 1",
      "media": {
        "alternateText": null,
        "contentVersionId": null,
        "id": "2pmRO00000000x2YAA",
        "mediaType": null,
        "sortOrder": null,
        "thumbnailUrl": null,
        "title": "tshirt 5",
        "url": "/cms/delivery/media/MC2KSOOFJGRZDDJGQG4QJHLKHTZQ?recordId=01tRO000000FVNB&buyerId=001RO000001npBo"
      }
    },
    {
      "productId": "01txx00000034cw",
      "productName": "Sample Product Name 2",
      "productSKU": "00002",
      "errorCode": "ERROR_SAVING_CARTITEM",
      "errorMessage": "Sample Error Message 2",
      "media": {
        "alternateText": null,
        "contentVersionId": null,
        "id": "2pmRO00000000x2YAB",
        "mediaType": null,
        "sortOrder": null,
        "thumbnailUrl": null,
        "title": "tshirt 3",
        "url": "/cms/delivery/media/MC2KSOOFJGRZDDJGQG4QJHLKHTZQ?recordId=01tRO000000FVNB&buyerId=001RO000001npBo"
      }
    }
  ]
}
```

## Related Topics

- Order to Cart Failed Product (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_to_cart_failed_product.htm)
