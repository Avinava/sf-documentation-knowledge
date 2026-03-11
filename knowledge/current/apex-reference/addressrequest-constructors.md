---
title: "AddressRequest Constructors"
domain: apex-reference
topic: addressrequest-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.809Z
keywords: [AddressRequest, Constructors, Constructs, sample, address., constructor, intended, test, usage, throws, exception, used, outside, Apex, context., street, city, state, country, postalCode]
---

# AddressRequest Constructors

> Constructs a sample address. This constructor is intended for test
      usage and throws an exception if used outside of the Apex test context.

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