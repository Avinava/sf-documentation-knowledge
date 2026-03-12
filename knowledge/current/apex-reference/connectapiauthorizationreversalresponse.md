---
title: "ConnectApi.AuthorizationReversalResponse"
domain: apex-reference
topic: connectapiauthorizationreversalresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.141Z
estimatedTokens: 182
keywords: [ConnectApi.AuthorizationReversalResponse, Authorization, Reversal, output, representation.]
---

# ConnectApi.AuthorizationReversalResponse

> Authorization Reversal output representation.

# ConnectApi.AuthorizationReversalResponse

Authorization Reversal output representation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| error | ConnectApi.​ErrorResponse | Error response representation for the authorization reversal. | 51.0 |
| gatewayResponse | ConnectApi.​AuthReversal​GatewayResponse | Gateway response representation for authorization reversal. | 51.0 |
| paymentAuthAdjustment | ConnectApi.​PaymentAuth​AdjustmentResponse | Payment authorization adjustment response representation for the authorization reversal. | 51.0 |
| paymentGatewayLogs | List<ConnectApi.​GatewayLogResponse> | Gateway log collection representation for the authorization reversal. | 51.0 |

## Related Topics

- ConnectApi.​ErrorResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm)
- ConnectApi.​AuthReversal​GatewayResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_auth_reversal_gateway_response.htm)
- ConnectApi.​PaymentAuth​AdjustmentResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_auth_adjustment_output.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​GatewayLogResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_gateway_log_output.htm)
