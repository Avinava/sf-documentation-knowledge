---
title: "ConnectApi.ReferencedRefundResponse"
domain: apex-reference
topic: connectapireferencedrefundresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.861Z
estimatedTokens: 170
keywords: [ConnectApi.ReferencedRefundResponse, Refund, comprehensive, output.]
---

# ConnectApi.ReferencedRefundResponse

> Refund comprehensive output.

# ConnectApi.ReferencedRefundResponse

Refund comprehensive output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| error | ConnectApi.​ErrorResponse | Error response representation for the refund. | 50.0 |
| gatewayResponse | ConnectApi.​RefundGatewayResponse | Gateway response received for the processed refund request. | 50.0 |
| paymentGatewayLogs | List<ConnectApi.​GatewayLogResponse> | Gateway log collection representation for the refund. | 50.0 |
| paymentGroup | ConnectApi.​PaymentGroupResponse | Payment group associated with the refund. | 50.0 |
| refund | ConnectApi.​RefundResponse | Refund response representation. | 50.0 |

## Related Topics

- ConnectApi.​ErrorResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm)
- ConnectApi.​RefundGatewayResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_refund_gateway_response.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​GatewayLogResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_gateway_log_output.htm)
- ConnectApi.​PaymentGroupResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_group.htm)
- ConnectApi.​RefundResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_refund_output.htm)
