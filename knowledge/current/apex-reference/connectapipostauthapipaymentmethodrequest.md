---
title: "ConnectApi.PostAuthApiPaymentMethodRequest"
domain: apex-reference
topic: connectapipostauthapipaymentmethodrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.438Z
keywords: [ConnectApi.PostAuthApiPaymentMethodRequest]
---

# ConnectApi.PostAuthApiPaymentMethodRequest

# ConnectApi.PostAuthApiPaymentMethodRequest

Payment method input for post authorization.

Subclass of [ConnectApi.BaseApiPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_base_api_payment_method.htm "Payment method API input representation.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| alternativePaymentMethod | ConnectApi.​AlternativePayment​Method | Alternative payment method. | Required | 54.0 |
| cardPaymentMethod | ConnectApi.​CardPayment​MethodRequest | Card payment method. | Required | 54.0 |