---
title: "ConnectApi.ReferencedRefundRequest"
domain: apex-reference
topic: connectapireferencedrefundrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.655Z
estimatedTokens: 219
keywords: [ConnectApi.ReferencedRefundRequest, Referenced, refund, input]
---

# ConnectApi.ReferencedRefundRequest

> Referenced refund input.

# ConnectApi.ReferencedRefundRequest

Referenced refund input.

Subclass of [ConnectApi.RefundRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_refund.htm "Refund input.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account linked to the referenced refund request. | Optional | 50.0 |
| amount | Double | Amount refunded. | Required | 50.0 |
| clientContext | String | Context for payment APIs. Used for a payment caller to re-establish context. | Optional | 50.0 |
| comments | String | Optional comments for the refund. | Optional | 50.0 |
| effectiveDate | Datetime | Date when the refund becomes effective. | Optional | 50.0 |
| paymentGroup | ConnectApi.​PaymentGroupRequest | Payment group details associated with the refund request. | Optional | 50.0 |

## Related Topics

- ConnectApi.RefundRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_refund.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​PaymentGroupRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_payment_group.htm)
