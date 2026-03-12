---
title: "GatewayResponse Interface"
domain: apex-reference
topic: gatewayresponse-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.049Z
estimatedTokens: 520
namespace: CommercePayments
keywords: [GatewayResponse, Generic, payment, gateway, extends, CaptureResponse, AbstractTransactionResponse, AbstractResponse, classes, inherits, their, unique, Implementation]
---

# GatewayResponse Interface

> Generic payment gateway response interface. This class extends the
        CaptureResponse, AbstractTransactionResponse, and AbstractResponse classes and inherits all their
      properties. It has no unique methods or parameters.

**Namespace:** `CommercePayments`

# GatewayResponse Interface

Generic payment gateway response interface. This class extends the [CaptureResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm#apex_class_commerce_payments_CaptureResponse "The payment gateway adapter sends this response for the capture request type. This class extends AbstractResponse and inherits its methods."), [AbstractTransactionResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm#apex_class_commercepayments_AbstractTransactionResponse "Abstract class for storing normalized information sent from payment gateways about a payment transaction. Holds the common response fields sent from payment gateways for authorization, sale, capture, and refund transactions."), and [AbstractResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractResponse.htm#apex_class_commerce_payments_AbstractResponse "Contains the normalized response fields from payment gateways that are common to all the other gateway responses.") classes and inherits all their properties. It has no unique methods or parameters.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

-   **[GatewayResponse Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_commercepayments_GatewayResponse.htm#apex_interface_commerce_payments_GatewayResponse_Example)**


## GatewayResponse Example Implementation

This is an example implementation of the commercepayments.GatewayResponse interface.

```

```

For additional context, review the complete [Sample Gateway Adapter](https://github.com/forcedotcom/Core-Payments-Reference-Gateway-Integration-Adapters/blob/master/PayeezyGatewayAdapter/classes/AbstractTransactionService.apex) in the [CommercePayments Gateway Reference Implementation](https://github.com/forcedotcom/Core-Payments-Reference-Gateway-Integration-Adapters).

## Code Examples

```apex
/**
     * Abstract function to build gateway response for a Transaction
     * The input is the response from gateway
     * It creates and returns GatewayResponse from the HttpResponse
     */
    public abstract commercepayments.GatewayResponse buildResponse(HttpResponse response);

    /**
     * Function to process transaction requests
     * Steps involved are:
     * 1. Build HttpRequest with the input Request from gateway context
     * 2. Send request and get the response from gateway
     * 3. Parse the response from gateway and return GatewayResponse
     */
    public commercepayments.GatewayResponse execute(){
                HttpRequest req;
        try{
            //Building a new request
            req = buildRequest();
        } catch(PayeezeValidationException e) {
            return getValidationExceptionError(e);
        }
        commercepayments.PaymentsHttp http = new commercepayments.PaymentsHttp();
        HttpResponse res = null;
        try{
            //Sending the request
            res = http.send(req);
        } catch(CalloutException ce) {
            return getCalloutExceptionError(ce);
        }
        try{
            //Parsing the response from gateway
            return buildResponse(res);
        } catch(Exception e) {
            return getParseExceptionError(e);
        }
    }
```

## Related Topics

- CaptureResponse (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm)
- AbstractTransactionResponse (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm)
- AbstractResponse (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractResponse.htm)
- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- GatewayResponse Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_commercepayments_GatewayResponse.htm)
