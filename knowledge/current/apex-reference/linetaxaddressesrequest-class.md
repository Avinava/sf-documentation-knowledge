---
title: "LineTaxAddressesRequest Class"
domain: apex-reference
topic: linetaxaddressesrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.646Z
estimatedTokens: 2046
namespace: CommerceTax
keywords: [LineTaxAddressesRequest, Stores, addresses, applied, per, line, item, tax, calculation, shipFrom, shipTo, soldTo, billTo, taxEngineAddress, equals]
---

# LineTaxAddressesRequest Class

> Stores details of the addresses applied per line item in a tax
      calculation request.

**Namespace:** `CommerceTax`

# LineTaxAddressesRequest Class

Stores details of the addresses applied per line item in a tax calculation request.

## Namespace

[CommerceTax](atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

-   **[LineTaxAddressesRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm#apex_commercetax_LineTaxAddressesRequest_constructors)**
    Learn more about the constructors available with the LineTaxAddressesRequest class.
-   **[LineTaxAddressesRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm#apex_commercetax_LineTaxAddressesRequest_properties)**
    Learn more about the available properties with the LineTaxAddressesRequest class.
-   **[LineTaxAddressesRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm#apex_commercetax_LineTaxAddressesRequest_methods)**
    Learn more about the available methods with the LineTaxAddressesRequest class.

## LineTaxAddressesRequest Constructors

Learn more about the constructors available with the LineTaxAddressesRequest class.

The LineTaxAddressesRequest class includes these constructors.

-   **[LineTaxAddressesRequest(shipFrom, shipTo, soldTo, billTo, taxEngineAddress)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm#apex_commercetax_LineTaxAddressesRequest_ctor)**
    Constructor for initializing the required addresses for a line item of the tax addresses request such as the ship to, ship from, and bill to addresses. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

### LineTaxAddressesRequest(shipFrom, shipTo, soldTo, billTo, taxEngineAddress)

Constructor for initializing the required addresses for a line item of the tax addresses request such as the ship to, ship from, and bill to addresses. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global LineTaxAddressesRequest(commercetax.TaxAddressRequest shipFrom, commercetax.TaxAddressRequest shipTo, commercetax.TaxAddressRequest soldTo, commercetax.TaxAddressRequest billTo, commercetax.TaxAddressRequest taxEngineAddress)

#### Parameters

shipFrom

[TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.")

Address where a line item was shipped from.

shipTo

[TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.")

Address where a line item is shipped to.

soldTo

[TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.")

Address of the line item's buyer.

billTo

[TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.")

Person or group who was billed for the line item.

taxEngineAddress

[TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.")

Address that the tax engine uses to calculate tax.

## LineTaxAddressesRequest Properties

Learn more about the available properties with the LineTaxAddressesRequest class.

The LineTaxAddressesRequest class includes these properties.

-   **[billTo](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm#apex_commercetax_LineTaxAddressesRequest_billTo)**
    The Bill To address for a line item.
-   **[shipFrom](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm#apex_commercetax_LineTaxAddressesRequest_shipFrom)**
    The Ship From address for a line item.
-   **[shipTo](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm#apex_commercetax_LineTaxAddressesRequest_shipTo)**
    The Ship To address for a line item.
-   **[soldTo](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm#apex_commercetax_LineTaxAddressesRequest_soldTo)**
    The Sold To address for a line item.

### billTo

The Bill To address for a line item.

#### Signature

global commercetax.TaxAddressRequest billTo {get; set;}

#### Property Value

Type: [TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.")

### shipFrom

The Ship From address for a line item.

#### Signature

global commercetax.TaxAddressRequest shipFrom {get; set;}

#### Property Value

Type: [TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

### shipTo

The Ship To address for a line item.

#### Signature

global commercetax.TaxAddressRequest shipTo {get; set;}

#### Property Value

Type: [TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

### soldTo

The Sold To address for a line item.

#### Signature

global commercetax.TaxAddressRequest soldTo {get; set;}

#### Property Value

Type: [TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

## LineTaxAddressesRequest Methods

Learn more about the available methods with the LineTaxAddressesRequest class.

The LineTaxAddressesRequest class includes these methods.

-   **[equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm#apex_commercetax_LineTaxAddressesRequest_equals)**
    Maintains the integrity of lists of type LineTaxAddressesRequest by determining the equality of external objects in a list. This method is dynamic and is based on the equals() method in Java.
-   **[hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm#apex_commercetax_LineTaxAddressesRequest_hashCode)**
    Maintains the integrity of lists of type LineTaxAddressesRequest by determining the uniquness of the external object records in a list.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm#apex_commercetax_LineTaxAddressesRequest_toString)**
    Converts a value to a string.

### equals(obj)

Maintains the integrity of lists of type LineTaxAddressesRequest by determining the equality of external objects in a list. This method is dynamic and is based on the equals() method in Java.

#### Signature

global Boolean equals(Object obj)

#### Parameters

obj

Type: Object

External object whose key is to be validated.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type LineTaxAddressesRequest by determining the uniquness of the external object records in a list.

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
- LineTaxAddressesRequest Constructors (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm)
- LineTaxAddressesRequest Properties (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm)
- LineTaxAddressesRequest Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm)
- LineTaxAddressesRequest(shipFrom, shipTo, soldTo, billTo, taxEngineAddress) (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm)
- TaxAddressRequest (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm)
- billTo (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm)
- shipFrom (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm)
- shipTo (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm)
- soldTo (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm)
