---
title: "PaymentMethodDetailsResponse Class"
domain: apex-reference
topic: paymentmethoddetailsresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.385Z
estimatedTokens: 608
namespace: CommercePayments
keywords: [PaymentMethodDetailsResponse, payment, setAlternativePaymentMethod, alternativePaymentMethod, setCardPaymentMethod, cardPaymentMethod]
---

# PaymentMethodDetailsResponse Class

> This class contains the details about the payment method.

**Namespace:** `CommercePayments`

# PaymentMethodDetailsResponse Class

This class contains the details about the payment method.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Example

```

```

-   **[PaymentMethodDetailsResponse Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodDetailsResponse.htm#apex_commercepayments_PaymentMethodDetailsResponse_methods)**


## PaymentMethodDetailsResponse Methods

The following are methods for PaymentMethodDetailsResponse.

-   **[setAlternativePaymentMethod(alternativePaymentMethod)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodDetailsResponse.htm#apex_commercepayments_PaymentMethodDetailsResponse_setAlternativePaymentMethod)**
    Sets the alternative payment method details.
-   **[setCardPaymentMethod(cardPaymentMethod)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodDetailsResponse.htm#apex_commercepayments_PaymentMethodDetailsResponse_setCardPaymentMethod)**
    Sets the details about the card payment method.

### setAlternativePaymentMethod(alternativePaymentMethod)

Sets the alternative payment method details.

#### Signature

public void setAlternativePaymentMethod(commercepayments.AlternativePaymentMethodResponse alternativePaymentMethod)

#### Parameters

alternativePaymentMethod

Type: [CommercePayments.AlternativePaymentMethodResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodResponse.htm#apex_class_commercepayments_AlternativePaymentMethodResponse "The class contains the response details of the alternative payment method.")

Details of the alternative payment method.

#### Return Value

Type: void

### setCardPaymentMethod(cardPaymentMethod)

Sets the details about the card payment method.

#### Signature

public void setCardPaymentMethod(commercepayments.CardPaymentMethodResponse cardPaymentMethod)

#### Parameters

cardPaymentMethod

Type: [CommercePayments.CardPaymentMethodResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodResponse.htm#apex_class_commercepayments_CardPaymentMethodResponse "This class contains details about the card payment method.")

Details about the card payment method.

#### Return Value

Type: void

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- PaymentMethodDetailsResponse Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodDetailsResponse.htm)
- setAlternativePaymentMethod(alternativePaymentMethod) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodDetailsResponse.htm)
- setCardPaymentMethod(cardPaymentMethod) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodDetailsResponse.htm)
- CommercePayments.AlternativePaymentMethodResponse (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodResponse.htm)
- CommercePayments.CardPaymentMethodResponse (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodResponse.htm)
