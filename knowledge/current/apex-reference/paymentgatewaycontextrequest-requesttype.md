---
title: "PaymentGatewayContext(request,
    requestType)"
domain: apex-reference
topic: paymentgatewaycontextrequest-requesttype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.039Z
keywords: [PaymentGatewayContext, request, requestType, Constructor, enable, instance, creation., constructor, intended, test, usage, throws, exception, used, outside, Apex, context., Signature, Parameters]
---

# PaymentGatewayContext(request,
    requestType)

> Constructor to enable instance creation. This constructor is intended
      for test usage and throws an exception if used outside of the Apex test
    context.

### PaymentGatewayContext(request, requestType)

Constructor to enable instance creation. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global PaymentGatewayContext(commercepayments.PaymentGatewayRequest request, String requestType)

#### Parameters

request

Type: commercepayments.PaymentGatewayRequest

Raw payload. Sensitive attributes are masked to ensure PCI compliance.

requestType

Type: [commercepayments.RequestType Enum](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_enum_commercepayments_RequestType.htm)

Defines the type of request made to the gateway