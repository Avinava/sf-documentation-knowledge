---
title: "Process Refund"
domain: apex-guide
topic: process-refund
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.797Z
estimatedTokens: 350
keywords: [Process, Refund, refund, payment, gateway.]
---

# Process Refund

> Process a refund in the payment gateway.

# Process Refund

Process a refund in the payment gateway.

| Available in: Salesforce Spring ’20 |
| --- |


To access the commercepayments API, you need the PaymentPlatform org permission.

1.  Get the referenced refund request object from the [PaymentGatewayContext Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayContext.htm#apex_class_commerce_payments_PaymentGatewayContext).

    ```

    ```

2.  Set the HTTP request object.

    ```

    ```

3.  Read the parameters from the [ReferencedRefundRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundRequest.htm#apex_class_commerce_payments_ReferencedRefundRequest) object and prepare the HTTP request body.
4.  Make the HTTP call to the gateway using the[PaymentsHttp Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_commercepayments_PaymentsHttp.htm#apex_class_commerce_payments_PaymentsHttp).

    ```

    ```

5.  Parse the httpResponse and prepare the [ReferencedRefundResponse](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_class_commerce_payments_ReferencedRefundResponse) object.

    ```

    ```

6.  Return the referencedRefundResponse.

## Code Examples

```
commercepayments.ReferencedRefundRequest = (commercepayments.ReferencedRefundRequest)gatewayContext.getPaymentRequest();
```

```
HttpRequest req = new HttpRequest();
req.setHeader('Content-Type', 'application/json');
```

```
commercepayments.PaymentsHttp http = new commercepayments.PaymentsHttp();
HttpResponse res = http.send(req);
```

```
commercepayments.ReferencedRefundResponse referencedRefundResponse = new commercepayments.ReferencedRefundResponse();
referencedRefundResponse.setGatewayResultCode(“”);
referencedRefundResponse.setGatewayResultCodeDescription(“”);
referencedRefundResponse.setGatewayReferenceNumber(“”);
referencedRefundResponse.setSalesforceResultCodeInfo(getSalesforceResultCodeInfo(commercepayments.SalesforceResultCode.SUCCESS.name())); 
referencedRefundResponse.setGatewayReferenceDetails(“”);
referencedRefundResponse.setAmount(double.valueOf(100);
```
