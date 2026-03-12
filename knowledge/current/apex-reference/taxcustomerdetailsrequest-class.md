---
title: "TaxCustomerDetailsRequest Class"
domain: apex-reference
topic: taxcustomerdetailsrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.339Z
estimatedTokens: 2004
namespace: CommerceTax
keywords: [TaxCustomerDetailsRequest, Contains, customer, details, used, tax, calculation., accountId, code, exemptionNo, exemptionReason, taxCertificateId, equals, obj, hashCode, toString]
---

# TaxCustomerDetailsRequest Class

> Contains customer details used in tax calculation.

**Namespace:** `CommerceTax`

# TaxCustomerDetailsRequest Class

Contains customer details used in tax calculation.

## Namespace

[CommerceTax](atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

-   **[TaxCustomerDetailsRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_constructors)**
    Learn more about the available constructors with the TaxCustomerDetailsRequest class.
-   **[TaxCustomerDetailsRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_properties)**
    Learn more about the available properties with the TaxCustomerDetailsRequest class.
-   **[TaxCustomerDetailsRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_methods)**
    Learn more about the available methods with the TaxCustomerDetailsRequest class.

## TaxCustomerDetailsRequest Constructors

Learn more about the available constructors with the TaxCustomerDetailsRequest class.

The TaxCustomerDetailsRequest class includes these constructors.

-   **[TaxCustomerDetailsRequest(accountId, code, exemptionNo, exemptionReason)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_ctor)**
    Initializes the TaxCustomerDetailsRequest object. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

### TaxCustomerDetailsRequest(accountId, code, exemptionNo, exemptionReason)

Initializes the TaxCustomerDetailsRequest object. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global TaxCustomerDetailsRequest(String accountId, String code, String exemptionNo, String exemptionReason)

#### Parameters

accountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The customer account ID for the line items sent for tax calculation.

code

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The tax code used during tax calculation.

exemptionNo

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The exemption number applied to any tax exempt line items.

exemptionReason

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The reason that certain line items are tax exempt.

## TaxCustomerDetailsRequest Properties

Learn more about the available properties with the TaxCustomerDetailsRequest class.

The TaxCustomerDetailsRequest class includes these properties.

-   **[accountId](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_accountId)**
    Customer account that contains the line items sent for tax calculation.
-   **[code](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_code)**
    Tax code used during tax calculation.
-   **[exemptionNo](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_exemptionNo)**
    Number used to qualify a line item for tax exemption.
-   **[exemptionReason](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_exemptionReason)**
    Reason why a line item qualifies for tax exemption.
-   **[taxCertificateId](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_taxCertificateId)**
    ID of a tax certificate used for tax calculation.

### accountId

Customer account that contains the line items sent for tax calculation.

#### Signature

global String accountId {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### code

Tax code used during tax calculation.

#### Signature

global String code {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### exemptionNo

Number used to qualify a line item for tax exemption.

#### Signature

global String exemptionNo {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### exemptionReason

Reason why a line item qualifies for tax exemption.

#### Signature

global String exemptionReason {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### taxCertificateId

ID of a tax certificate used for tax calculation.

#### Signature

global String taxCertificateId {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## TaxCustomerDetailsRequest Methods

Learn more about the available methods with the TaxCustomerDetailsRequest class.

The TaxCustomerDetailsRequest class includes these methods.

-   **[equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_equals)**
    Maintains the integrity of lists of type TaxCustomerDetailsRequest by determining the equality of external objects in a list. This method is dynamic and based on the equals() method in Java.
-   **[hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_hashCode)**
    Maintains the integrity of lists of type TaxCustomerDetailsRequest by determining the uniqueness of the external objects in a list.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_commercetax_TaxCustomerDetailsRequest_toString)**
    Converts a value to a string.

### equals(obj)

Maintains the integrity of lists of type TaxCustomerDetailsRequest by determining the equality of external objects in a list. This method is dynamic and based on the equals() method in Java.

#### Signature

global Boolean equals(Object obj)

#### Parameters

obj

Type: Object

External object whose key is to be validated.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type TaxCustomerDetailsRequest by determining the uniqueness of the external objects in a list.

#### Signature

global Integer hashCode()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### toString()

Converts a value to a string.

#### Signature

global String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- CommerceTax (atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm)
- TaxCustomerDetailsRequest Constructors (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm)
- TaxCustomerDetailsRequest Properties (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm)
- TaxCustomerDetailsRequest Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm)
- TaxCustomerDetailsRequest(accountId, code, exemptionNo, exemptionReason) (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- accountId (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm)
- code (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm)
- exemptionNo (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm)
- exemptionReason (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm)
