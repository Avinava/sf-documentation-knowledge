---
title: "Return Items Output"
domain: chatterapi
topic: return-items-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.996Z
estimatedTokens: 364
keywords: [Items, Output, Includes, generated, change, order, delivery, charges, well, any, charged, fees, ReturnOrderLineItems, were, created]
---

# Return Items Output

> Output of Return Items. Includes the ID of the generated change
      order for items and delivery charges being returned, as well as the ID of the generated change
      order for any charged return fees. Also includes information about any ReturnOrderLineItems
      that were created to represent remaining return quantities.

# Return Items Output

Output of Return Items. Includes the ID of the generated change order for items and delivery charges being returned, as well as the ID of the generated change order for any charged return fees. Also includes information about any ReturnOrderLineItems that were created to represent remaining return quantities.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| changeOrderId | String | ID of the change order created by processing the ReturnOrderLineItems representing returned items and delivery charges. Use this change order to create a credit memo. | Big, 52.0 | 52.0 |
| errors | Error Response Output[] | Any errors that were returned. | Big, 52.0 | 52.0 |
| feeChangeOrderId | String | ID of the change order created by processing the ReturnOrderLineItems representing return fees. Use this change order to create an invoice. | Big, 56.0 | 56.0 |
| returnLineItem​Splits | Return Order Item Split Line Output[] | List of properties representing any remaining quantities from partial returns processed by this call. It includes order items, delivery charges, and return fees. Each element of the list includes the ID of a split ReturnOrderLineItem and the ID of the partially processed ReturnOrderLineItem whose remaining quantity it holds. | Big, 52.0 | 52.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 52.0 | 52.0 |

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Return Order Item Split Line Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_return_order_item_split_line_output.htm)
