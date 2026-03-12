---
title: "ConnectApi.PostAuthRequest"
domain: apex-reference
topic: connectapipostauthrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:25.337Z
estimatedTokens: 344
keywords: [ConnectApi.PostAuthRequest, Payment, post, authorization, input, consumed, payment, service.]
---

# ConnectApi.PostAuthRequest

> Payment post authorization input consumed by the payment post
      authorization service.

# ConnectApi.PostAuthRequest

Payment post authorization input consumed by the payment post authorization service.

Subclass of [ConnectApi.BaseRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_gateway_callable_base.htm "Base parameters for making a request to the payment gateway.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account of the customer for the authorized payment. | Required | 54.0 |
| amount | Double | Amount of the post authorization. | Required | 54.0 |
| comments | String | Comments for payment post authorization. Maximum of 1000 characters. | Optional | 54.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the payment group record. | Optional | 54.0 |
| effectiveDate | Datetime | Date that the payment post authorization occurs. | Required | 54.0 |
| paymentGatewayId | String | Payment gateway that evaluates the post authorization. | Required | 54.0 |
| paymentGroup | ConnectApi.​PaymentGroup​Request | Payment group associated with or to be created for the request. Request must contain either a paymentGroupId or paymentGroup, but not both. | Optional | 54.0 |
| paymentMethod | ConnectApi.​PostAuthApi​PaymentMethod​Request | Payment method sent for the post authorization. | Required | 54.0 |

## Related Topics

- ConnectApi.BaseRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_gateway_callable_base.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​PaymentGroup​Request (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_payment_group.htm)
- ConnectApi.​PostAuthApi​PaymentMethod​Request (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_post_auth_api_payment_method.htm)
