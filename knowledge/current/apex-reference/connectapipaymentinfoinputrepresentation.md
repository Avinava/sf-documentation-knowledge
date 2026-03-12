---
title: "ConnectApi.PaymentInfoInputRepresentation"
domain: apex-reference
topic: connectapipaymentinfoinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:25.528Z
estimatedTokens: 193
keywords: [Payment, additional, funds, order]
---

# ConnectApi.PaymentInfoInputRepresentation

> Payment information about additional funds required for an order.

# ConnectApi.PaymentInfoInputRepresentation

Payment information about additional funds required for an order.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| lastPaymentGatewayLogId | String | Last payment gateway log ID for the new order payment summary. | Optional | 60.0 |
| name | String | Overrides the default name of the order payment summary created. | Optional | 60.0 |
| paymentAuthorizationId | String | Payment authorization ID to be used if needed to fund the exchange order. | Optional | 60.0 |
| paymentIds | List<String> | Payment IDs for the new order payment summary. | Optional | 60.0 |
| paymentMethodId | String | Payment method ID for the new order payment summary. | Optional | 60.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
