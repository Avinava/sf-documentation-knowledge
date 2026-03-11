---
title: "ConnectApi.CartMessagesSummary"
domain: apex-reference
topic: connectapicartmessagessummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.144Z
keywords: [ConnectApi.CartMessagesSummary, See]
---

# ConnectApi.CartMessagesSummary

# ConnectApi.CartMessagesSummary

Cart messages summary.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errorCount | Integer | In ConnectApi.CartItemResult, the count of messages with the Error severity level. | 49.0 |
| hasErrors | Boolean | Specifies whether there are messages related to the entity (true) or not (false). | 49.0 |
| limitedMessages | List<ConnectApi.​CartMessage> | In ConnectApi.CartItemResult, a limited list of messages related to the cart item. In ConnectApi.CartSummary, each message can be related to the cart or to another cart-related entity. | 49.0 |
| relatedEntityId | String | In ConnectApi.CartItemResult, the ID of the related cart item. In ConnectApi.CartSummary, each message can be related to the cart or to another cart-related entity. | 49.0 |
| totalLineItems​WithErrors | Integer | In ConnectApi.CartItemResult, either null if the cart item has no errors or 1 if the cart item has errors. In ConnectApi.CartSummary, the total number of product line items that contain errors. | 50.0 |

#### See Also

-   [ConnectApi.AbstractCartItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_cart_item.htm "A cart item.")