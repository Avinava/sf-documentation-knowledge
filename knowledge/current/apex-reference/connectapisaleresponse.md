---
title: "ConnectApi.SaleResponse"
domain: apex-reference
topic: connectapisaleresponse
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:28.982Z
estimatedTokens: 202
keywords: [ConnectApi.SaleResponse, Payment, sale]
---

# ConnectApi.SaleResponse

> Payment sale response.

# ConnectApi.SaleResponse

Payment sale response.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| error | ConnectApi.​ErrorResponse | Error representation for the payment sale. | 54.0 |
| gatewayResponse | ConnectApi.​SaleGatewayResponse | Information from the payment gateway following the sale request. | 54.0 |
| payment | ConnectApi.​PaymentResponse | Information about the payment used in the sale request. | 54.0 |
| paymentGateway​Logs | List<ConnectApi.​GatewayLogResponse> | Collection of responses from the gateway following the sale request. | 54.0 |
| paymentGroup | ConnectApi.​PaymentGroupResponse | Payment group used in the sale request. | 54.0 |
| paymentMethod | ConnectApi.​PaymentMethodResponse | Payment method used in the sale request. | 54.0 |

## Related Topics

- ConnectApi.​ErrorResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm)
- ConnectApi.​SaleGatewayResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_sale_gateway_response.htm)
- ConnectApi.​PaymentResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_output.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​GatewayLogResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_gateway_log_output.htm)
- ConnectApi.​PaymentGroupResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_group.htm)
- ConnectApi.​PaymentMethodResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_method_output.htm)
