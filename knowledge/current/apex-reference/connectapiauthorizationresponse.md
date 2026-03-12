---
title: "ConnectApi.AuthorizationResponse"
domain: apex-reference
topic: connectapiauthorizationresponse
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:26.147Z
estimatedTokens: 271
keywords: [ConnectApi.AuthorizationResponse, Payment, Authorization, output, representation.]
---

# ConnectApi.AuthorizationResponse

> Payment Authorization output representation.

# ConnectApi.AuthorizationResponse

Payment Authorization output representation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| error | ConnectApi.​ErrorResponse | Error representation for the payment authorization. | 51.0 |
| gatewayResponse | ConnectApi.​AuthorizationGateway​Response | Gateway response representation for the payment authorization. | 51.0 |
| isMultiCapture​Supported | Boolean | Indicates whether the authorization status from a payment gateway, such as Stripe, supports multiple captures (true) or not (false). | 64.0 |
| payment​Authorization | ConnectApi.​Payment​AuthorizationResponse | Payment authorization representation. | 51.0 |
| paymentGateway​Logs | List<ConnectApi.​GatewayLog​Response> | Gateway log list representation for the payment authorization. | 51.0 |
| paymentGroup | ConnectApi.​PaymentGroup​Response | Payment group representation for the payment authorization. | 51.0 |
| paymentMethod | ConnectApi.​Payment​MethodResponse | Payment method representation for the payment authorization. | 51.0 |

## Related Topics

- ConnectApi.​ErrorResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm)
- ConnectApi.​AuthorizationGateway​Response (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_authorization_gateway_response.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.​Payment​AuthorizationResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_authorization_output.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​GatewayLog​Response (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_gateway_log_output.htm)
- ConnectApi.​PaymentGroup​Response (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_group.htm)
- ConnectApi.​Payment​MethodResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_method_output.htm)
