---
title: "ConnectApi.AbstractGatewayResponse"
domain: apex-reference
topic: connectapiabstractgatewayresponse
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:25.870Z
estimatedTokens: 541
keywords: [ConnectApi.AbstractGatewayResponse, Payment, gateway, response, fields, used, sale, authorization, capture, services.]
---

# ConnectApi.AbstractGatewayResponse

> Payment gateway response fields used in sale, authorization, and
      capture services.

# ConnectApi.AbstractGatewayResponse

Payment gateway response fields used in sale, authorization, and capture services.

This class is abstract.

Subclass of [ConnectApi.AbstractGatewayCommonResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_gateway_response.htm "Payment gateway response fields commonly used in payment services.").

Super class of:

-   [ConnectApi.AuthReversalGatewayResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_auth_reversal_gateway_response.htm "Authorization Reversal Gateway Response Representation.")
-   [ConnectApi.AuthorizationGatewayResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_authorization_gateway_response.htm "Payment gateway authorization response representation.")
-   [ConnectApi.AuthorizationReversalResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_auth_reversal_output.htm "Authorization Reversal output representation.")
-   [ConnectApi.CaptureGatewayResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_capture_gateway_response.htm "Gateway capture response.")
-   [ConnectApi.PaymentMethodTokenizationGatewayResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_method_tokenization_gateway_response.htm "Payment method tokenization gateway response representation.")
-   [ConnectApi.PostAuthGatewayResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_post_auth_gateway_response.htm "Gateway response after confirmation that the merchant is ready to capture payment of an existing pre-authorized transaction.")
-   [ConnectApi.RefundGatewayResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_refund_gateway_response.htm "Refund gateway response.")
-   [ConnectApi.SaleGatewayResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_sale_gateway_response.htm "Sale gateway response.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| gatewayReferenceDetails | String | Provides information about the gateway communication. | 50.0 |
| gatewayReferenceNumber | String | Unique transaction ID created by the payment gateway. | 50.0 |

## Related Topics

- ConnectApi.AbstractGatewayCommonResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_gateway_response.htm)
- ConnectApi.AuthReversalGatewayResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_auth_reversal_gateway_response.htm)
- ConnectApi.AuthorizationGatewayResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_authorization_gateway_response.htm)
- ConnectApi.AuthorizationReversalResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_auth_reversal_output.htm)
- ConnectApi.CaptureGatewayResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_capture_gateway_response.htm)
- ConnectApi.PaymentMethodTokenizationGatewayResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_method_tokenization_gateway_response.htm)
- ConnectApi.PostAuthGatewayResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_post_auth_gateway_response.htm)
- ConnectApi.RefundGatewayResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_refund_gateway_response.htm)
- ConnectApi.SaleGatewayResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_sale_gateway_response.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
