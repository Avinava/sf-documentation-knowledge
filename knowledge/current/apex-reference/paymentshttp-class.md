---
title: "PaymentsHttp Class"
domain: apex-reference
topic: paymentshttp-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.419Z
estimatedTokens: 528
namespace: CommercePayments
keywords: [PaymentsHttp, HTTP, start, interaction, payment, gateway, Usage, send]
---

# PaymentsHttp Class

> Makes
      an HTTP request to start the interaction with the payment gateway.

**Namespace:** `CommercePayments`

# PaymentsHttp Class

Makes an HTTP request to start the interaction with the payment gateway.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

You must specify the CommercePayments namespace when creating an instance of this class. The constructor of this class takes no arguments. For example:

CommercePayments.PaymentsHttp payhttp = new CommercePayments.PaymentsHttp();

-   **[PaymentsHttp Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentsHttp.htm#apex_commerce_payments_PaymentsHttp_methods)**

-   **[PaymentsHttp Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentsHttp.htm#apex_commerce_payments_AuditParamsRequest_constructors)**


## PaymentsHttp Methods

The following are methods for PaymentsHttp. All methods are instance methods.

-   **[send(Request)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentsHttp.htm#apex_commerce_payments_PaymentsHttp_send)**
    Sends an HttpRequest and returns the response.

### send(Request)

Sends an HttpRequest and returns the response.

#### Signature

global HttpResponse send(HttpRequest request)

#### Parameters

request

Type: [System.HttpRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_classes_restful_http_httprequest)

#### Return Value

Type: [System.HttpResponse](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_classes_restful_http_httpresponse)

## PaymentsHttp Constructors

The following are constructors for PaymentsHttp.

-   **[PaymentsHttp()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentsHttp.htm#apex_commerce_payments_PaymentsHttp_ctor)**
    Initiates an HTTP request and response.

### PaymentsHttp()

Initiates an HTTP request and response.

#### Signature

global PaymentsHttp()

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- PaymentsHttp Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentsHttp.htm)
- PaymentsHttp Constructors (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentsHttp.htm)
- send(Request) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentsHttp.htm)
- PaymentsHttp() (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentsHttp.htm)
