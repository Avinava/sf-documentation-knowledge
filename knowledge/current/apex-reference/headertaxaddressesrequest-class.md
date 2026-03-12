---
title: "HeaderTaxAddressesRequest Class"
domain: apex-reference
topic: headertaxaddressesrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.240Z
estimatedTokens: 2294
namespace: CommerceTax
keywords: [HeaderTaxAddressesRequest, Captures, address, values, applicable, quote, order, transaction., shipFrom, shipTo, soldTo, billTo, taxEngineAddress, equals, obj, hashCode, toString]
---

# HeaderTaxAddressesRequest Class

> Captures the address values that are applicable for the quote or
      order transaction.

**Namespace:** `CommerceTax`

# HeaderTaxAddressesRequest Class

Captures the address values that are applicable for the quote or order transaction.

## Namespace

[CommerceTax](atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

-   **[HeaderTaxAddressesRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm#apex_commercetax_HeaderTaxAddressesRequest_constructors)**
    Learn more about the constructors available with the HeaderTaxAddressesRequest class.
-   **[HeaderTaxAddressesRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm#apex_commercetax_HeaderTaxAddressesRequest_properties)**
    Learn more about the available properties with the HeaderTaxAddressesRequest class.
-   **[HeaderTaxAddressesRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm#apex_commercetax_HeaderTaxAddressesRequest_methods)**
    Learn more about the available methods with the HeaderTaxAddressesRequest class.

## HeaderTaxAddressesRequest Constructors

Learn more about the constructors available with the HeaderTaxAddressesRequest class.

The HeaderTaxAddressesRequest class includes these constructors.

-   **[HeaderTaxAddressesRequest(shipFrom, shipTo, soldTo, billTo, taxEngineAddress)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm#apex_commercetax_HeaderTaxAddressesRequest_ctor)**
    Constructor for initializing the required addresses of the tax addresses request such as the ship from, ship to, sold to, and bill to addresses. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

### HeaderTaxAddressesRequest(shipFrom, shipTo, soldTo, billTo, taxEngineAddress)

Constructor for initializing the required addresses of the tax addresses request such as the ship from, ship to, sold to, and bill to addresses. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global HeaderTaxAddressesRequest(commercetax.TaxAddressRequest shipFrom, commercetax.TaxAddressRequest shipTo, commercetax.TaxAddressRequest soldTo, commercetax.TaxAddressRequest billTo, commercetax.TaxAddressRequest taxEngineAddress)

#### Parameters

shipFrom

Type: [TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

Address where a line item was shipped from.

shipTo

Type: [TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

Address where a line item was shipped to.

soldTo

Type: [TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

Address of the line item's buyer.

billTo

Type: [TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

Person or group who was billed for the line item.

taxEngineAddress

Type: [TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

Address that the tax engine uses to calculate tax.

## HeaderTaxAddressesRequest Properties

Learn more about the available properties with the HeaderTaxAddressesRequest class.

The HeaderTaxAddressesRequest class includes these properties.

-   **[billTo](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm#apex_commercetax_HeaderTaxAddressesRequest_billTo)**
    Specifies the billTo address for a line item on which tax was calculated.
-   **[shipFrom](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm#apex_commercetax_HeaderTaxAddressesRequest_shipFrom)**
    Specifies the shipFrom address for a line item on which tax was calculated.
-   **[shipTo](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm#apex_commercetax_HeaderTaxAddressesRequest_shipTo)**
    Specifies the shipTo address for a line item on which tax was calculated.
-   **[soldTo](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm#apex_commercetax_HeaderTaxAddressesRequest_soldTo)**
    Specifies the soldTo address for a line item on which tax was calculated.
-   **[taxEngineAddress](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm#apex_commercetax_HeaderTaxAddressesRequest_taxEngineAddress)**
    Address used by the tax engine when calculating tax for a line item.

### billTo

Specifies the billTo address for a line item on which tax was calculated.

#### Signature

global commercetax.TaxAddressRequest billTo {get; set;}

#### Property Value

Type: [TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

### shipFrom

Specifies the shipFrom address for a line item on which tax was calculated.

#### Signature

global commercetax.TaxAddressRequest shipFrom {get; set;}

#### Property Value

Type: [TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

### shipTo

Specifies the shipTo address for a line item on which tax was calculated.

#### Signature

global commercetax.TaxAddressRequest shipTo {get; set;}

#### Property Value

Type: [TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

### soldTo

Specifies the soldTo address for a line item on which tax was calculated.

#### Signature

global commercetax.TaxAddressRequest soldTo {get; set;}

#### Property Value

Type: [TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

### taxEngineAddress

Address used by the tax engine when calculating tax for a line item.

#### Signature

global commercetax.TaxAddressRequest taxEngineAddress {get; set;}

#### Property Value

Type: [TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

## HeaderTaxAddressesRequest Methods

Learn more about the available methods with the HeaderTaxAddressesRequest class.

The HeaderTaxAddressesRequest class includes these methods.

-   **[equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm#apex_commercetax_HeaderTaxAddressesRequest_equals)**
    Maintains the integrity of lists of type HeaderTaxAddressesRequest by determining the equality of external objects in a list. This method is dynamic and is based on the equals() method in Java.
-   **[hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm#apex_commercetax_HeaderTaxAddressesRequest_hashCode)**
    Maintains the integrity of lists of type TaxAddressesRequest by determining the uniqueness of the external objects in a list.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm#apex_commercetax_HeaderTaxAddressesRequest_toString)**
    Converts a value to a string.

### equals(obj)

Maintains the integrity of lists of type HeaderTaxAddressesRequest by determining the equality of external objects in a list. This method is dynamic and is based on the equals() method in Java.

#### Signature

global Boolean equals(Object obj)

#### Parameters

obj

Type: Object

External object whose key is to be validated.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type TaxAddressesRequest by determining the uniqueness of the external objects in a list.

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
- HeaderTaxAddressesRequest Constructors (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm)
- HeaderTaxAddressesRequest Properties (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm)
- HeaderTaxAddressesRequest Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm)
- HeaderTaxAddressesRequest(shipFrom, shipTo, soldTo, billTo, taxEngineAddress) (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm)
- TaxAddressRequest (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm)
- billTo (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm)
- shipFrom (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm)
- shipTo (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm)
- soldTo (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm)
