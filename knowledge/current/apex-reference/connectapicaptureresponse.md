---
title: "ConnectApi.CaptureResponse"
domain: apex-reference
topic: connectapicaptureresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.279Z
estimatedTokens: 210
keywords: [ConnectApi.CaptureResponse, Capture, output.]
---

# ConnectApi.CaptureResponse

> Capture output.

# ConnectApi.CaptureResponse

Capture output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| error | ConnectApi.​ErrorResponse | Error response representation for an authorization capture. | 50.0 |
| gatewayResponse | ConnectApi.​CaptureGatewayResponse | Gateway log response containing details about gateway logs created during the process of the capture request. | 50.0 |
| payment | ConnectApi.​PaymentResponse | Payment response object for the capture request. Contains the information related to a payment object created during request processing. | 50.0 |
| paymentGatewayLogs | List<ConnectApi.​GatewayLogResponse> | Gateway log collection for an authorization capture. | 50.0 |
| paymentGroup | ConnectApi.​PaymentGroupResponse | Payment group associated with the capture request. | 50.0 |

## Related Topics

- ConnectApi.​ErrorResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm)
- ConnectApi.​CaptureGatewayResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_capture_gateway_response.htm)
- ConnectApi.​PaymentResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_output.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​GatewayLogResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_gateway_log_output.htm)
- ConnectApi.​PaymentGroupResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_group.htm)
