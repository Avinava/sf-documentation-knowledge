---
title: "ConnectApi.BaseRequest"
domain: apex-reference
topic: connectapibaserequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.988Z
estimatedTokens: 453
keywords: [ConnectApi.BaseRequest, Base, making, request, payment, gateway.]
---

# ConnectApi.BaseRequest

> Base parameters for making a request to the payment
    gateway.

# ConnectApi.BaseRequest

Base parameters for making a request to the payment gateway.

This class is abstract.

Subclass of [ConnectApi.AuditParamsRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_audit_params.htm "Audit Parameters input.").

Superclass of:

-   [ConnectApi.AuthorizationRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_authorization.htm "Payment Authorization input consumed by the Payment Authorization service.")
-   [ConnectApi.AuthorizationReversalRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_auth_reversal.htm "Authorization reversal input consumed by authorization reversal service.")
-   [ConnectApi.CaptureRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_capture.htm "Payment capture input consumed by the payment capture service.")
-   [ConnectApi.PaymentMethodTokenizationRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_payment_method_tokenization.htm "Payment method tokenization input consumed by the payment tokenization service.")
-   [ConnectApi.PostAuthRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_post_auth.htm "Payment post authorization input consumed by the payment post authorization service.")
-   [ConnectApi.RefundRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_refund.htm "Refund input.")
-   [ConnectApi.SaleRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_sale.htm "Payment sale input consumed by the payment sale service.")

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalData | Map<String, String> | An optional map of additional parameters to be sent to the payment gateway. | Optional | 50.0 |
| idempotencyKey | String | Idempotency key. | Optional | 50.0 |

## Related Topics

- ConnectApi.AuditParamsRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_audit_params.htm)
- ConnectApi.AuthorizationRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_authorization.htm)
- ConnectApi.AuthorizationReversalRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_auth_reversal.htm)
- ConnectApi.CaptureRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_capture.htm)
- ConnectApi.PaymentMethodTokenizationRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_payment_method_tokenization.htm)
- ConnectApi.PostAuthRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_post_auth.htm)
- ConnectApi.RefundRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_refund.htm)
- ConnectApi.SaleRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_sale.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
