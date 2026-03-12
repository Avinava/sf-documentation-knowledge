---
title: "ConnectApi.PostAuthorizationResponse"
domain: apex-reference
topic: connectapipostauthorizationresponse
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:28.466Z
estimatedTokens: 325
keywords: [ConnectApi.PostAuthorizationResponse, Gateway, post, authorization]
---

# ConnectApi.PostAuthorizationResponse

> Gateway response following a post authorization
    request.

# ConnectApi.PostAuthorizationResponse

Gateway response following a post authorization request.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| error | ConnectApi.​ErrorResponse | Information about errors that occurred in the payment gateway while evaluating the post authorization request. | 54.0 |
| gatewayResponse | ConnectApi.​PostAuth​GatewayResponse | Payment gateway's response to the post authorization request. | 54.0 |
| paymentAuthorization | ConnectApi.​Payment​AuthorizationResponse | Payment gateway's response to the original payment authorization request. | 54.0 |
| paymentGateway​Logs | List<ConnectApi.​GatewayLog​Response> | Stores information exchanged between the Salesforce payments platform and external payment gateways. Gateway logs can also record payloads from external payment entities. | 54.0 |
| paymentGroup | ConnectApi.​PaymentGroup​Response | Payment group, consisting of one or more payments, sent to the gateway for the post authorization request. | 54.0 |
| paymentMethod | ConnectApi.​PaymentMethod​Response | Payment method used in the post authorization request. | 54.0 |
| savedPayment​MethodStatus | ConnectApi.​PostAuthSPMStatus | Saved payment method status. Valid values are:AlreadyExistsCreatedUpdated | 61.0 |

## Related Topics

- ConnectApi.​ErrorResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm)
- ConnectApi.​Payment​AuthorizationResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_authorization_output.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​GatewayLog​Response (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_gateway_log_output.htm)
- ConnectApi.​PaymentGroup​Response (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_group.htm)
- ConnectApi.​PaymentMethod​Response (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_method_output.htm)
- ConnectApi.​PostAuthSPMStatus (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
