---
title: "PaymentMethod Class"
domain: apex-reference
topic: paymentmethod-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.303Z
estimatedTokens: 825
namespace: RichMessaging
keywords: [PaymentMethod, payment, network, paymentType, displayName]
---

# PaymentMethod Class

> Represents a payment method.

**Namespace:** `RichMessaging`

# PaymentMethod Class

Represents a payment method.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

-   **[PaymentMethod Constructors](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm#apex_RichMessaging_PaymentMethod_constructors)**

-   **[PaymentMethod Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm#apex_RichMessaging_PaymentMethod_properties)**


## PaymentMethod Constructors

The following are constructors for PaymentMethod.

-   **[PaymentMethod(network, paymentType, displayName)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm#apex_RichMessaging_PaymentMethod_ctor)**
    Creates a new instance of the RichMessaging.PaymentMethod class.

### PaymentMethod(network, paymentType, displayName)

Creates a new instance of the RichMessaging.PaymentMethod class.

#### Signature

public PaymentMethod(String network, String paymentType, String displayName)

#### Parameters

network

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The network associated with the payment method.

paymentType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The payment type of the payment method.

displayName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The display name of the payment method.

## PaymentMethod Properties

The following are properties for PaymentMethod.

-   **[displayName](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm#apex_RichMessaging_PaymentMethod_displayName)**
    The display name of the payment method.
-   **[network](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm#apex_RichMessaging_PaymentMethod_network)**
    The network associated with the payment method.
-   **[paymentType](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm#apex_RichMessaging_PaymentMethod_paymentType)**
    The payment type of the payment method.

### displayName

The display name of the payment method.

#### Signature

public String displayName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### network

The network associated with the payment method.

#### Signature

public String network {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### paymentType

The payment type of the payment method.

#### Signature

public String paymentType {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- RichMessaging (atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm)
- PaymentMethod Constructors (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm)
- PaymentMethod Properties (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm)
- PaymentMethod(network, paymentType, displayName) (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- displayName (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm)
- network (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm)
- paymentType (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm)
