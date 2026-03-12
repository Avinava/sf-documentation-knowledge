---
title: "BasePaymentMethodRequest Class"
domain: apex-reference
topic: basepaymentmethodrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.859Z
estimatedTokens: 749
namespace: CommercePayments
keywords: [BasePaymentMethodRequest, Abstract, storing, information, payment, methods., Usage, equals, obj, hashCode, toString]
---

# BasePaymentMethodRequest Class

> Abstract class for storing information about payment
    methods.

**Namespace:** `CommercePayments`

# BasePaymentMethodRequest Class

Abstract class for storing information about payment methods.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

The BasePaymentMethodRequest class contains fields common to [CardPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_class_commercepayments_CardPaymentMethodRequest "Sends data related to a card payment method to a gateway adapter during a service call.")

.

-   **[BasePaymentMethodRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BasePaymentMethodRequest.htm#apex_commercepayments_BasePaymentMethodRequest_methods)**


## BasePaymentMethodRequest Methods

The following are methods for BasePaymentMethodRequest.

-   **[equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BasePaymentMethodRequest.htm#apex_commercepayments_BasePaymentMethodRequest_equals)**
    Maintains the integrity of lists of type BasePaymentMethodRequest by determining the equality of external objects in a list. This method is dynamic and based on the equals method in Java.
-   **[hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BasePaymentMethodRequest.htm#apex_commercepayments_BasePaymentMethodRequest_hashCode)**
    Maintains the integrity of lists of type BasePaymentMethodRequest by determining the uniqueness of the external object records in a list.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BasePaymentMethodRequest.htm#apex_commercepayments_BasePaymentMethodRequest_toString)**
    Converts a date to a string.

### equals(obj)

Maintains the integrity of lists of type BasePaymentMethodRequest by determining the equality of external objects in a list. This method is dynamic and based on the equals method in Java.

#### Signature

global Boolean equals(Object obj)

#### Parameters

obj

Type: Object

External object whose key is to be validated.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type BasePaymentMethodRequest by determining the uniqueness of the external object records in a list.

#### Signature

global Integer hashCode()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### toString()

Converts a date to a string.

#### Signature

global String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- CardPaymentMethodRequest (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm)
- BasePaymentMethodRequest Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BasePaymentMethodRequest.htm)
- equals(obj) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BasePaymentMethodRequest.htm)
- hashCode() (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BasePaymentMethodRequest.htm)
- toString() (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BasePaymentMethodRequest.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
