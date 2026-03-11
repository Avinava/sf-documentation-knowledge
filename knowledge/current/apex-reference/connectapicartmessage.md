---
title: "ConnectApi.CartMessage"
domain: apex-reference
topic: connectapicartmessage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.141Z
keywords: [ConnectApi.CartMessage, See]
---

# ConnectApi.CartMessage

# ConnectApi.CartMessage

Cart message.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| message | String | Cart message. | 49.0 |
| messageId | String | ID of the object supplying the message. | 49.0 |
| relatedEntityId | String | ID of the entity, for example, cart, cart item, or cart tax, associated with the message. | 49.0 |
| severity | ConnectApi.​CartMessageSeverity | Severity of cart message. Values are:ErrorInfoWarning | 49.0 |
| type | String | Type of message. Standard values include Inventory, Taxes, Pricing, Shipping, Entitlement, SystemError, and Other. | 49.0 |
| visible | Boolean | Specifies whether the message is visible (true) or dismissed (false). | 49.0 |

#### See Also

-   [ConnectApi.CartMessagesSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_messages_summary.htm "Cart messages summary.")