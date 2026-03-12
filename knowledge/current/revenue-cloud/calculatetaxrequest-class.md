---
title: "CalculateTaxRequest Class"
domain: revenue-cloud
topic: calculatetaxrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.488Z
estimatedTokens: 2509
namespace: CommerceTax
keywords: [CalculateTaxRequest, external, tax, engine, calculate, Extends, TaxTransactionRequest, top-level, Usage, taxType, isCommit, isHeaderTaxRequested, shouldVoidTax, taxTransactionType, equals]
---

# CalculateTaxRequest Class

> Represents a request to an external tax engine to calculate tax.
      Extends the TaxTransactionRequest class and is the top-level request
      class.

**Namespace:** `CommerceTax`

# CalculateTaxRequest Class

Represents a request to an external tax engine to calculate tax. Extends the [TaxTransactionRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxTransactionRequest.htm#apex_class_commercetax_TaxTransactionRequest "Abstract class for storing customer details used in tax calculation and estimation requests.") class and is the top-level request class.

## Namespace

[CommerceTax](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

## Usage

Keep these considerations in mind when you use this class.

-   If the shouldVoidTax property value is set to true, then the operation returns a response with documentCode property value updated to referenceDocumentCode property value that was originally sent in the request payload. The response also includes the taxTransactionType property value as Void. This indicates that the document specified in the referenceDocumentCode property value is voided.
-   If document is locked or you can't void the tax transaction for any reason, then you can use the Tax Calculation request to perform another transaction such as a Credit Tax request. In this scenario, the response includes the documentCode property value that was sent in the request payload.
-   If the document that's mentioned in the referenceDocumentCode property value isn't available in the tax engine, then an error response occurs with [ResultCode](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_commercetax_ResultCode.htm "Code that represents the results of a tax request made to the tax engine.") value as ReferenceDocumentCodeMissing.

## Example

See [TaxEngineAdapter Example Implementation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_interface_commercetax_TaxEngineAdapter.htm#apex_interface_commercetax_TaxEngineAdapter_Example "Refer to the example implementation of the TaxEngineAdapter interface to accept information from a tax engine and evaluate the information to define tax details.") for more details on how to access information from the CalculateTaxRequest class.

-   **[CalculateTaxRequest Constructors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxRequest.htm#apex_commercetax_CalculateTaxRequest_constructors)**
    Learn more about the constructors that are available with the CalculateTaxRequest class. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.
-   **[CalculateTaxRequest Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxRequest.htm#apex_commercetax_CalculateTaxRequest_properties)**
    Learn more about the available properties with the CalculateTaxRequest class.
-   **[CalculateTaxRequest Methods](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxRequest.htm#apex_commercetax_CalculateTaxRequest_methods)**
    Learn more about the available methods with the CalculateTaxRequest class.

## CalculateTaxRequest Constructors

Learn more about the constructors that are available with the CalculateTaxRequest class. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

The CalculateTaxRequest class includes these constructors.

-   **[CalculateTaxRequest(taxType)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxRequest.htm#apex_commercetax_CalculateTaxRequest_ctor)**
    This constructor is intended for test usage only and throws an exception if used outside of the Apex test context.

### CalculateTaxRequest(taxType)

This constructor is intended for test usage only and throws an exception if used outside of the Apex test context.

#### Signature

global CalculateTaxRequest(commercetax.CalculateTaxType taxType)

#### Parameters

taxType

Type: [CalculateTaxType](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_commercetax_CalculateTaxType.htm "Shows whether a tax calculation request is for estimated or actual tax.")

Indicates whether the tax calculation is for estimated tax or actual tax.

## CalculateTaxRequest Properties

Learn more about the available properties with the CalculateTaxRequest class.

The CalculateTaxRequest class includes these properties.

-   **[isCommit](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxRequest.htm#apex_commercetax_CalculateTaxRequest_isCommit)**
    Indicates whether the tax calculation has to be committed or reported to government authorities.
-   **[isHeaderTaxRequested](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxRequest.htm#apex_commercetax_CalculateTaxRequest_isHeaderTaxRequested)**
    Indicates whether header tax is enabled in the tax engine (true) or not (false).
-   **[shouldVoidTax](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxRequest.htm#apex_commercetax_CalculateTaxRequest_shouldVoidTax)**
    Indicates whether to void the tax transaction associated with a document that's mentioned in the referenceDocumentCode property value with taxType property value set to Actual and isCommit property value set to true.
-   **[taxTransactionType](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxRequest.htm#apex_commercetax_CalculateTaxRequest_taxTransactionType)**
    Shows whether the tax transaction is for a credit or debit transaction.
-   **[taxType](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxRequest.htm#apex_commercetax_CalculateTaxRequest_taxType)**
    Shows whether the tax calculation is for estimated or actual tax wherein only actual tax can be submitted.

### isCommit

Indicates whether the tax calculation has to be committed or reported to government authorities.

#### Signature

global Boolean isCommit {get; set;}

#### Property Value

Type: Boolean

### isHeaderTaxRequested

Indicates whether header tax is enabled in the tax engine (true) or not (false).

#### Signature

global Boolean isHeaderTaxRequested {get; set;}

#### Property Value

Type: Boolean

### shouldVoidTax

Indicates whether to void the tax transaction associated with a document that's mentioned in the referenceDocumentCode property value with taxType property value set to Actual and isCommit property value set to true.

#### Signature

global commercetax.CalculateTaxType shouldVoidTax {get; set;}

#### Property Value

Type: Boolean

### taxTransactionType

Shows whether the tax transaction is for a credit or debit transaction.

#### Signature

global commercetax.TaxTransactionType taxTransactionType {get; set;}

#### Property Value

Type: [TaxTransactionType](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_commercetax_TaxTransactionType.htm "Shows whether the tax transaction is for a credit or debit transaction.")

### taxType

Shows whether the tax calculation is for estimated or actual tax wherein only actual tax can be submitted.

#### Signature

global commercetax.CalculateTaxType taxType {get; set;}

#### Property Value

Type: [CalculateTaxType](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_commercetax_CalculateTaxType.htm "Shows whether a tax calculation request is for estimated or actual tax.")

## CalculateTaxRequest Methods

Learn more about the available methods with the CalculateTaxRequest class.

The CalculateTaxRequest class includes these methods.

-   **[equals(obj)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxRequest.htm#apex_commercetax_CalculateTaxRequest_equals)**
    Maintains the integrity of lists of type CalculateTaxRequest by determining the equality of external objects in a list. This method is dynamic and is based on the equals() method in Java.
-   **[hashCode()](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxRequest.htm#apex_commercetax_CalculateTaxRequest_hashCode)**
    Maintains the integrity of lists of type CalculateTaxRequest by determining the uniqueness of the external object records in a list.
-   **[toString()](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxRequest.htm#apex_commercetax_CalculateTaxRequest_toString)**
    Converts a value to a string.

### equals(obj)

Maintains the integrity of lists of type CalculateTaxRequest by determining the equality of external objects in a list. This method is dynamic and is based on the equals() method in Java.

#### Signature

global Boolean equals(Object obj)

#### Parameters

obj

Type: Object

External object whose key is to be validated.

#### Return Value

Type: Boolean

### hashCode()

Maintains the integrity of lists of type CalculateTaxRequest by determining the uniqueness of the external object records in a list.

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

- TaxTransactionRequest (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxTransactionRequest.htm)
- CommerceTax (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_commercetax.htm)
- ResultCode (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_commercetax_ResultCode.htm)
- TaxEngineAdapter Example Implementation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_interface_commercetax_TaxEngineAdapter.htm)
- CalculateTaxRequest Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxRequest.htm)
- CalculateTaxRequest Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxRequest.htm)
- CalculateTaxRequest Methods (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxRequest.htm)
- CalculateTaxRequest(taxType) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxRequest.htm)
- CalculateTaxType (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_commercetax_CalculateTaxType.htm)
- isCommit (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxRequest.htm)
