---
title: "PostAuthApiPaymentMethodRequest Class"
domain: apex-reference
topic: postauthapipaymentmethodrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.080Z
keywords: [PostAuthApiPaymentMethodRequest, Class, Namespace, Usage]
---

# PostAuthApiPaymentMethodRequest Class

# PostAuthApiPaymentMethodRequest Class

Sends information about a payment method to a gateway adapter during a postauthorization service call.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

Contains information about the payment method that is used for a postauthorization request. It contains all available payment methods as fields, but populates only one field for each request. The gateway adapter uses this class when constructing a postauthorization request. An object of this class is available through the paymentMethod field on the [PostAuthorizationRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm#apex_class_commercepayments_AuthorizationRequest "Sends information about an authorization request to a gateway adapter during a service call. This class extends the BaseRequest class and inherits all its methods.") object.

-   **[PostAuthApiPaymentMethodRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthApiPaymentMethodRequest_constructors.htm)**  
    Lists the constructors for the PostAuthApiPaymentMethodRequest.
-   **[PostAuthApiPaymentMethodRequest Properties](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthApiPaymentMethodRequest_properties.htm)**  
    Lists the properties for PostAuthApiPaymentMethodRequest.