---
title: "AddressRequest Class"
domain: apex-reference
topic: addressrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.716Z
estimatedTokens: 1978
namespace: CommercePayments
keywords: [AddressRequest, Contains, address, request, data, sent, gateway, adapter, during, service, call., Usage, street, city, state, country, postalCode, companyName, equals, obj]
---

# AddressRequest Class

> Contains address request data that is sent to a gateway adapter during
      a service call.

**Namespace:** `CommercePayments`

# AddressRequest Class

Contains address request data that is sent to a gateway adapter during a service call.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

Contains information about the payment method’s address. Use this information in authorization, sale, and tokenization requests. The payment gateway adapter uses information in an AddressRequest object to construct a JSON request to send to the payment gateway.

The constructor of this class takes no arguments. For example:

CommercePayments.AddressRequest adr = new CommercePayments.AddressRequest();

-   **[AddressRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_constructors)**

-   **[AddressRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_properties)**

-   **[AddressRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_methods)**


## AddressRequest Constructors

The following are constructors for AddressRequest.

-   **[AddressRequest(street, city, state, country, postalCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_ctor)**
    Constructs a sample address. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

### AddressRequest(street, city, state, country, postalCode)

Constructs a sample address. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global AddressRequest(String street, String city, String state, String country, String postalCode)

#### Parameters

street

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Street for the payment method's address.

city

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

City for the payment method's address.

state

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

State for the payment method's address.

country

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Country for the payment method's address.

postalCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Postal code for the payment method's address.

## AddressRequest Properties

The following are properties for AddressRequest.

-   **[city](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_city)**
    City of the payment method address.
-   **[companyName](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_companyName)**
    Company name of the payment method address.
-   **[country](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_country)**
    Country for the payment method address.
-   **[postalCode](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_postalCode)**
    Postal code for the payment method address.
-   **[state](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_state)**
    State for the payment method address.
-   **[street](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_street)**
    Street for the payment method address.

### city

City of the payment method address.

#### Signature

global String city {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### companyName

Company name of the payment method address.

#### Signature

global String companyName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### country

Country for the payment method address.

#### Signature

global String country {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### postalCode

Postal code for the payment method address.

#### Signature

global String postalCode {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### state

State for the payment method address.

#### Signature

global String state {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### street

Street for the payment method address.

#### Signature

global String street {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## AddressRequest Methods

The following are methods for AddressRequest.

-   **[equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_equals)**
    Maintains the integrity of lists of type AddressRequest by determining the equality of external objects in a list. This method is dynamic and is based on the equals method in Java.
-   **[hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_hashCode)**
    Maintains the integrity of lists of type AddressRequest.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_commercepayments_AddressRequest_toString)**
    Converts a date to a string.

### equals(obj)

Maintains the integrity of lists of type AddressRequest by determining the equality of external objects in a list. This method is dynamic and is based on the equals method in Java.

#### Signature

global Boolean equals(Object obj)

#### Parameters

obj

Type: Object

External object whose key is to be validated.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type AddressRequest.

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
- AddressRequest Constructors (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm)
- AddressRequest Properties (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm)
- AddressRequest Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm)
- AddressRequest(street, city, state, country, postalCode) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- city (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm)
- companyName (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm)
- country (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm)
- postalCode (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm)
