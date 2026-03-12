---
title: "ConnectApi.AuthorizationRequest"
domain: apex-reference
topic: connectapiauthorizationrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.358Z
estimatedTokens: 342
keywords: [ConnectApi.AuthorizationRequest, Payment, Authorization, input, consumed, service.]
---

# ConnectApi.AuthorizationRequest

> Payment Authorization input consumed by the Payment Authorization
      service.

# ConnectApi.AuthorizationRequest

Payment Authorization input consumed by the Payment Authorization service.

Subclass of [ConnectApi.BaseRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_gateway_callable_base.htm "Base parameters for making a request to the payment gateway.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Salesforce account that contains the payment transaction being authorized. | Required | 51.0 |
| amount | Double | Authorization amount. | Required | 51.0 |
| comments | String | Optional comments for the payment authorization. | Optional | 51.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the payment group record. | Required | 51.0 |
| effectiveDate | Datetime | Date that the authorization will be applied to the transaction. | Required | 51.0 |
| paymentGatewayId | String | Payment gateway that processes the authorization. | Required | 51.0 |
| paymentGroup | ConnectApi.​PaymentGroup​Request | Payment group for the authorization. The payload must reference either a paymentGroup or a paymentGroupId, but not both. | Optional | 51.0 |
| paymentMethod | ConnectApi.​AuthApiPayment​MethodRequest | Payment method used in the payment gateway for the authorization transaction. | Required | 51.0 |

## Related Topics

- ConnectApi.BaseRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_gateway_callable_base.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​PaymentGroup​Request (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_payment_group.htm)
- ConnectApi.​AuthApiPayment​MethodRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_auth_api_payment_method.htm)
