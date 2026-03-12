---
title: "TaxAddressesRequest Class"
domain: revenue-cloud
topic: taxaddressesrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.590Z
estimatedTokens: 2157
namespace: CommerceTax
keywords: [TaxAddressesRequest, tax, address, shipFrom, shipTo, soldTo, billTo, taxEngineAddress, equals, obj, hashCode, toString]
---

# TaxAddressesRequest Class

> Contains methods to get and set tax address values.

**Namespace:** `CommerceTax`

# TaxAddressesRequest Class

Contains methods to get and set tax address values.

## Namespace

[CommerceTax](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

-   **[TaxAddressesRequest Constructors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_constructors)**
    Learn more about the available constructors with the TaxAddressesRequest class.
-   **[TaxAddressesRequest Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_properties)**
    Learn more about the available properties with the TaxAddressesRequest class.
-   **[TaxAddressesRequest Methods](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_methods)**
    Learn more about the available methods with the TaxAddressesRequest class.

## TaxAddressesRequest Constructors

Learn more about the available constructors with the TaxAddressesRequest class.

The TaxAddressesRequest class includes these constructors.

-   **[TaxAddressesRequest(shipFrom, shipTo, soldTo, billTo, taxEngineAddress)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_ctor)**
    Constructor for defining addresses for the tax addresses request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

### TaxAddressesRequest(shipFrom, shipTo, soldTo, billTo, taxEngineAddress)

Constructor for defining addresses for the tax addresses request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global TaxAddressesRequest(commercetax.TaxAddressRequest shipFrom, commercetax.TaxAddressRequest shipTo, commercetax.TaxAddressRequest soldTo, commercetax.TaxAddressRequest billTo, commercetax.TaxAddressRequest taxEngineAddress)

#### Parameters

shipFrom

[TaxAddressRequest](#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.")

The address where a line item was shipped from.

shipTo

[TaxAddressRequest](#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.")

The address where a line item is shipped to.

soldTo

[TaxAddressRequest](#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.")

The address of the line item's buyer.

billTo

[TaxAddressRequest](#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.")

The person or group who was billed for the line item.

taxEngineAddress

[TaxAddressRequest](#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.")

The address that the tax engine uses to calculate tax.

## TaxAddressesRequest Properties

Learn more about the available properties with the TaxAddressesRequest class.

The TaxAddressesRequest class includes these properties.

-   **[billTo](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_billTo)**
    The Bill To address for a line item.
-   **[shipFrom](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_shipFrom)**
    The Ship From address for a line item.
-   **[shipTo](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_shipTo)**
    The Ship To address for a line item.
-   **[soldTo](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_soldTo)**
    The Sold To address for a line item.
-   **[taxEngineAddress](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_taxEngineAddress)**
    The Tax Engine Address for a line item.

### billTo

The Bill To address for a line item.

#### Signature

global commercetax.TaxAddressRequest billTo {get; set;}

#### Property Value

[TaxAddressRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

### shipFrom

The Ship From address for a line item.

#### Signature

global commercetax.TaxAddressRequest shipFrom {get; set;}

#### Property Value

[TaxAddressRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

### shipTo

The Ship To address for a line item.

#### Signature

public commercetax.TaxAddressRequest shipTo {get; set;}

#### Property Value

[TaxAddressRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

### soldTo

The Sold To address for a line item.

#### Signature

global commercetax.TaxAddressRequest soldTo {get; set;}

#### Property Value

[TaxAddressRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

### taxEngineAddress

The Tax Engine Address for a line item.

#### Signature

global commercetax.TaxAddressRequest taxEngineAddress {get; set;}

#### Property Value

[TaxAddressRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

## TaxAddressesRequest Methods

Learn more about the available methods with the TaxAddressesRequest class.

The TaxAddressesRequest class includes these methods.

-   **[equals(obj)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_equals)**
    Maintains the integrity of lists of type TaxAddressesRequest by determining the equality of external objects in a list. This method is dynamic and is based on the equals() method in Java.
-   **[hashCode()](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_hashCode)**
    Maintains the integrity of lists of type TaxAddressesRequest by determining the uniqueness of the external object records in a list.
-   **[toString()](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressesRequest.htm#apex_commercetax_TaxAddressesRequest_toString)**
    Converts a value to a string.

### equals(obj)

Maintains the integrity of lists of type TaxAddressesRequest by determining the equality of external objects in a list. This method is dynamic and is based on the equals() method in Java.

#### Signature

global Boolean equals(Object obj)

#### Parameters

obj

Type: Object

External object whose key is to be validated.

#### Return Value

Type: Boolean

### hashCode()

Maintains the integrity of lists of type TaxAddressesRequest by determining the uniqueness of the external object records in a list.

#### Signature

global Integer hashCode()

#### Return Value

Type: Integer

### toString()

Converts a value to a string.

#### Signature

global String toString()

#### Return Value

Type: String

## Related Topics

- CommerceTax (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_commercetax.htm)
- TaxAddressesRequest Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressesRequest.htm)
- TaxAddressesRequest Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressesRequest.htm)
- TaxAddressesRequest Methods (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressesRequest.htm)
- TaxAddressesRequest(shipFrom, shipTo, soldTo, billTo, taxEngineAddress) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressesRequest.htm)
- billTo (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressesRequest.htm)
- shipFrom (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressesRequest.htm)
- shipTo (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressesRequest.htm)
- soldTo (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressesRequest.htm)
- taxEngineAddress (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxAddressesRequest.htm)
