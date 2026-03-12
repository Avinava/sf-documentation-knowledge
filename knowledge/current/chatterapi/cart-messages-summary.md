---
title: "Cart Messages Summary"
domain: chatterapi
topic: cart-messages-summary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.571Z
estimatedTokens: 360
keywords: [Cart, Messages, Summary]
---

# Cart Messages Summary

> Cart messages summary.

# Cart Messages Summary

Cart messages summary.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCount | Integer | In the Cart Item Result, the count of messages with the Error severity level. | Small, 49.0 | 49.0 |
| hasErrors | Boolean | Specifies whether there are messages related to the entity (true) or not (false). | Small, 49.0 | 49.0 |
| limitedMessages | Cart Message[] | In the Cart Item Result, a limited list of messages related to the cart item. In the Cart Summary, each message can be related to the cart or to another cart-related entity, and each message supports multiple languages. | Small, 49.0 | 49.0 |
| relatedEntityId | String | In the Cart Item Result, the ID of the related cart item. In the Cart Summary, each message can be related to the cart or to another cart-related entity. | Small, 49.0 | 49.0 |
| totalLineItems​WithErrors | Integer | In the Cart Item Result, either null if the cart item has no errors or 1 if the cart item has errors. In the Cart Summary, the total number of product line items that contain errors. | Small, 50.0 | 50.0 |

#### See Also

-   [Cart Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item.htm "An item in a cart.")

-   [Cart Item Without Price](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_no_price.htm "An item without pricing information in a cart.")

## Related Topics

- Cart Message (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_message.htm)
- Cart Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item.htm)
- Cart Item Without Price (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_no_price.htm)
