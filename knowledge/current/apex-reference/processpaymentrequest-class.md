---
title: "ProcessPaymentRequest Class"
domain: apex-reference
topic: processpaymentrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.320Z
estimatedTokens: 1913
namespace: RichMessaging
keywords: [ProcessPaymentRequest, process, payment, transactionIdentifier, paymentData, billingContact, shippingContact, paymentMethod, shippingMethod, contextRecordId]
---

# ProcessPaymentRequest Class

> Represents a request to process a payment.

**Namespace:** `RichMessaging`

# ProcessPaymentRequest Class

Represents a request to process a payment.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

-   **[ProcessPaymentRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentRequest.htm#apex_RichMessaging_ProcessPaymentRequest_constructors)**

-   **[ProcessPaymentRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentRequest.htm#apex_RichMessaging_ProcessPaymentRequest_properties)**


## ProcessPaymentRequest Constructors

The following are constructors for ProcessPaymentRequest.

-   **[ProcessPaymentRequest(transactionIdentifier, paymentData, billingContact, shippingContact, paymentMethod, shippingMethod, contextRecordId)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentRequest.htm#apex_RichMessaging_ProcessPaymentRequest_ctor)**
    Creates a new instance of the RichMessaging.ProcessPaymentRequest class.

### ProcessPaymentRequest(transactionIdentifier, paymentData, billingContact, shippingContact, paymentMethod, shippingMethod, contextRecordId)

Creates a new instance of the RichMessaging.ProcessPaymentRequest class.

#### Signature

public ProcessPaymentRequest(String transactionIdentifier, String paymentData, RichMessaging.AddressableContact billingContact, RichMessaging.AddressableContact shippingContact, RichMessaging.PaymentMethod paymentMethod, RichMessaging.ShippingMethod shippingMethod, String contextRecordId)

#### Parameters

transactionIdentifier

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The transaction identifier associated with the payment request.

paymentData

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The encrypted payment data for the payment request.

billingContact

Type: [RichMessaging.AddressableContact](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AddressableContact.htm#apex_class_RichMessaging_AddressableContact "Represents an addressable contact.")

The billing contact information for the payment request.

shippingContact

Type: [RichMessaging.AddressableContact](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AddressableContact.htm#apex_class_RichMessaging_AddressableContact "Represents an addressable contact.")

The shipping contact information for the payment request.

paymentMethod

Type: [RichMessaging.PaymentMethod](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm#apex_class_RichMessaging_PaymentMethod "Represents a payment method.")

The payment method for the payment request.

shippingMethod

Type: [RichMessaging.ShippingMethod](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_class_RichMessaging_ShippingMethod "Represents a shipping method listed in payment requests sent in enhanced Messaging channels.")

The shipping method for the payment request.

contextRecordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The context record ID associated with the payment request.

## ProcessPaymentRequest Properties

The following are properties for ProcessPaymentRequest.

-   **[billingContact](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentRequest.htm#apex_RichMessaging_ProcessPaymentRequest_billingContact)**
    The billing contact information for the payment request.
-   **[contextRecordId](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentRequest.htm#apex_RichMessaging_ProcessPaymentRequest_contextRecordId)**
    The context record ID associated with the payment request.
-   **[paymentData](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentRequest.htm#apex_RichMessaging_ProcessPaymentRequest_paymentData)**
    The encrypted payment data for the payment request.
-   **[paymentMethod](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentRequest.htm#apex_RichMessaging_ProcessPaymentRequest_paymentMethod)**
    The payment method for the payment request.
-   **[shippingContact](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentRequest.htm#apex_RichMessaging_ProcessPaymentRequest_shippingContact)**
    The shipping contact information for the payment request.
-   **[shippingMethod](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentRequest.htm#apex_RichMessaging_ProcessPaymentRequest_shippingMethod)**
    The shipping method for the payment request.
-   **[transactionIdentifier](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentRequest.htm#apex_RichMessaging_ProcessPaymentRequest_transactionIdentifier)**
    The transaction identifier associated with the payment request.

### billingContact

The billing contact information for the payment request.

#### Signature

public RichMessaging.AddressableContact billingContact {get; set;}

#### Property Value

Type: [RichMessaging.AddressableContact](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AddressableContact.htm#apex_class_RichMessaging_AddressableContact "Represents an addressable contact.")

### contextRecordId

The context record ID associated with the payment request.

#### Signature

public String contextRecordId {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### paymentData

The encrypted payment data for the payment request.

#### Signature

public String paymentData {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### paymentMethod

The payment method for the payment request.

#### Signature

public RichMessaging.PaymentMethod paymentMethod {get; set;}

#### Property Value

Type: [RichMessaging.PaymentMethod](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm#apex_class_RichMessaging_PaymentMethod "Represents a payment method.")

### shippingContact

The shipping contact information for the payment request.

#### Signature

public RichMessaging.AddressableContact shippingContact {get; set;}

#### Property Value

Type: [RichMessaging.AddressableContact](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AddressableContact.htm#apex_class_RichMessaging_AddressableContact "Represents an addressable contact.")

### shippingMethod

The shipping method for the payment request.

#### Signature

public RichMessaging.ShippingMethod shippingMethod {get; set;}

#### Property Value

Type: [RichMessaging.ShippingMethod](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_class_RichMessaging_ShippingMethod "Represents a shipping method listed in payment requests sent in enhanced Messaging channels.")

### transactionIdentifier

The transaction identifier associated with the payment request.

#### Signature

public String transactionIdentifier {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- RichMessaging (atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm)
- ProcessPaymentRequest Constructors (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentRequest.htm)
- ProcessPaymentRequest Properties (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentRequest.htm)
- ProcessPaymentRequest(transactionIdentifier, paymentData, billingContact, shippingContact, paymentMethod, shippingMethod, contextRecordId) (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentRequest.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- RichMessaging.AddressableContact (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AddressableContact.htm)
- RichMessaging.PaymentMethod (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm)
- RichMessaging.ShippingMethod (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm)
- billingContact (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentRequest.htm)
- contextRecordId (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentRequest.htm)
