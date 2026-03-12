---
title: "ConnectApi.CaptureRequest"
domain: apex-reference
topic: connectapicapturerequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.454Z
estimatedTokens: 315
keywords: [ConnectApi.CaptureRequest, Payment, capture, input, consumed, payment, service.]
---

# ConnectApi.CaptureRequest

> Payment capture input consumed by the payment capture
    service.

# ConnectApi.CaptureRequest

Payment capture input consumed by the payment capture service.

Subclass of [ConnectApi.BaseRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_gateway_callable_base.htm "Base parameters for making a request to the payment gateway.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account linked to the capture request. | Optional | 50.0 |
| amount | Double | Amount captured from the previous authorization. | Required | 50.0 |
| clientContext | String | Context for payment APIs. Used for a payment caller to re-establish context. | Optional | 50.0 |
| comments | String | Comments for the payment capture. | Optional | 50.0 |
| effectiveDate | Datetime | Date when the payment becomes effective. | Optional | 50.0 |
| isFinalCapture | Boolean | Indicates whether the current capture payment transaction is the final request (true) or not (false). Default value is false, but it also depends on the card type associated with the payment authorization. | Optional | 64.0 |
| paymentGroup | ConnectApi.​PaymentGroup​Request | Details about the payment group record associated with the payment request. | Optional | 50.0 |

## Related Topics

- ConnectApi.BaseRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_gateway_callable_base.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.​PaymentGroup​Request (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_payment_group.htm)
