---
title: "BaseApiPaymentMethodRequest Class"
domain: apex-reference
topic: baseapipaymentmethodrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.258Z
estimatedTokens: 1923
namespace: CommercePayments
keywords: [BaseApiPaymentMethodRequest, Abstract, send, payment, gateway, adapter, service, call, Usage, address, saveForFuture, idType, equals, obj, hashCode]
---

# BaseApiPaymentMethodRequest Class

> Abstract class used to send information about a payment method to a
      gateway adapter during a service call.

**Namespace:** `CommercePayments`

# BaseApiPaymentMethodRequest Class

Abstract class used to send information about a payment method to a gateway adapter during a service call.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

BaseApiPaymentMethodRequest is the base class for [SaleApiPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleApiPaymentMethodRequest.htm#apex_class_commercepayments_SaleApiPaymentMethodRequest "Sends data related to a card payment method to a gateway adapter during a sale service call.") and [AuthApiPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm#apex_class_commercepayments_AuthApiPaymentMethodRequest "Sends information about a payment method to a gateway adapter during an authorization service call.").

-   **[BaseApiPaymentMethodRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseApiPaymentMethodRequest.htm#apex_commercepayments_BaseApiPaymentMethodRequest_constructors)**

-   **[BaseApiPaymentMethodRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseApiPaymentMethodRequest.htm#apex_commercepayments_BaseApiPaymentMethodRequest_properties)**

-   **[BaseApiPaymentMethodRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseApiPaymentMethodRequest.htm#apex_commercepayments_BaseApiPaymentMethodRequest_methods)**


## BaseApiPaymentMethodRequest Constructors

The following are constructors for BaseApiPaymentMethodRequest.

-   **[BaseApiPaymentMethodRequest(address, id, saveForFuture)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseApiPaymentMethodRequest.htm#apex_commercepayments_BaseApiPaymentMethodRequest_ctor)**
    Constructs a payment method. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

### BaseApiPaymentMethodRequest(address, id, saveForFuture)

Constructs a payment method. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global BaseApiPaymentMethodRequest(commercepayments.AddressRequest address, String id, Boolean saveForFuture)

#### Parameters

address

Type: [commercepayments.AddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_class_commercepayments_AddressRequest "Contains address request data that is sent to a gateway adapter during a service call.")

Sends data related on address request to a gateway adapter during a service call.

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

saveForFuture

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether Salesforce saves the payment method for future use.

## BaseApiPaymentMethodRequest Properties

The following are properties for BaseApiPaymentMethodRequest.

-   **[address](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseApiPaymentMethodRequest.htm#apex_commercepayments_BaseApiPaymentMethodRequest_address)**
    The payment method’s address.
-   **[id](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseApiPaymentMethodRequest.htm#apex_commercepayments_BaseApiPaymentMethodRequest_id)**
    ID of the payment method request.
-   **[idType](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseApiPaymentMethodRequest.htm#apex_commercepayments_BaseApiPaymentMethodRequest_idType)**
    ID of the payment method type.
-   **[saveForFuture](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseApiPaymentMethodRequest.htm#apex_commercepayments_BaseApiPaymentMethodRequest_saveForFuture)**
    Indicates whether the payment method is saved as a record in Salesforce for future use.

### address

The payment method’s address.

#### Signature

global commercepayments.AddressRequest address {get; set;}

#### Property Value

Type: [AddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_class_commercepayments_AddressRequest "Contains address request data that is sent to a gateway adapter during a service call.")

### id

ID of the payment method request.

#### Signature

global String id {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### idType

ID of the payment method type.

#### Signature

public commercepayments.PaymentMethodIdType idType {get; set;}

#### Property Value

Type: commercepayments.[PaymentMethodIdType](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_PaymentMethodIdType.htm "Specifies the ID of the payment method type.")

### saveForFuture

Indicates whether the payment method is saved as a record in Salesforce for future use.

#### Signature

global Boolean saveForFuture {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## BaseApiPaymentMethodRequest Methods

The following are methods for BaseApiPaymentMethodRequest.

-   **[equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseApiPaymentMethodRequest.htm#apex_commercepayments_BaseApiPaymentMethodRequest_equals)**
    Maintains the integrity of lists of type BaseApiPaymentMethodRequest by determining the equality of external objects in a list. This method is dynamic and is based on the equals method in Java.
-   **[hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseApiPaymentMethodRequest.htm#apex_commercepayments_BaseApiPaymentMethodRequest_hashCode)**
    Maintains the integrity of lists of type BaseApiPaymentMethodRequest by determining the uniqueness of the external object records in a list.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseApiPaymentMethodRequest.htm#apex_commercepayments_BaseApiPaymentMethodRequest_toString)**
    Converts a date to a string.

### equals(obj)

Maintains the integrity of lists of type BaseApiPaymentMethodRequest by determining the equality of external objects in a list. This method is dynamic and is based on the equals method in Java.

#### Signature

global Boolean equals(Object obj)

#### Parameters

obj

Type: Object

External object whose key is to be validated.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type BaseApiPaymentMethodRequest by determining the uniqueness of the external object records in a list.

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
- SaleApiPaymentMethodRequest (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleApiPaymentMethodRequest.htm)
- AuthApiPaymentMethodRequest (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm)
- BaseApiPaymentMethodRequest Constructors (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseApiPaymentMethodRequest.htm)
- BaseApiPaymentMethodRequest Properties (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseApiPaymentMethodRequest.htm)
- BaseApiPaymentMethodRequest Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseApiPaymentMethodRequest.htm)
- BaseApiPaymentMethodRequest(address, id, saveForFuture) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseApiPaymentMethodRequest.htm)
- commercepayments.AddressRequest (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
