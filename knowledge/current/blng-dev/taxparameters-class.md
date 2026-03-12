---
title: "TaxParameters Class"
domain: blng-dev
topic: taxparameters-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.082Z
estimatedTokens: 1662
keywords: [TaxParameters, setters, populate, data, needed, tax, calculation, passed, callout, getIsCommitOnGetTax, getLegalEntityReferences, getSObjectID, getSObjectListofIds, getSObjectType, getTaxMethod]
---

# TaxParameters Class

> Contains a list of setters to populate the data needed for a tax
      calculation. The data is passed in the tax callout.

# TaxParameters Class

Contains a list of setters to populate the data needed for a tax calculation. The data is passed in the tax callout.

## Namespace

blng

-   **[TaxParameters Methods](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm#apex_blng_TaxParameters_methods)**
    Learn more about the methods available with the TaxParameters class.

## TaxParameters Methods

Learn more about the methods available with the TaxParameters class.

The TaxParameters class includes these methods.

-   **[getIsCommitOnGetTax()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm#apex_blng_TaxParameters_getIsCommitOnGetTax)**
    Returns the value of the isCommitOnGetTax parameter.
-   **[getLegalEntityReferences()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm#apex_blng_TaxParameters_getLegalEntityReferences)**
    Returns the legal entity references.
-   **[getSObjectID()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm#apex_blng_TaxParameters_getSObjectID)**
    Returns the ID of a single object that requires tax calculation, if any.
-   **[getSObjectListofIds()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm#apex_blng_TaxParameters_getSObjectListofIds)**
    Returns the list of IDs for objects that require tax calculation.
-   **[getSObjectType()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm#apex_blng_TaxParameters_getSObjectType)**
    Returns the object type, which can be InvoiceLine, DebitNoteLine, CreditNoteLine, and OrderProduct object.
-   **[getTaxMethod()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm#apex_blng_TaxParameters_getTaxMethod)**
    Returns the type of tax method, which is POST or GET.
-   **[setSObjectListofIds(listOfSobjectIds)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm#apex_blng_TaxParameters_setSObjectListofIds)**
    Sets the list of IDs for objects that require tax calculation.
-   **[setSObjectID(sObjectId)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm#apex_blng_TaxParameters_setSObjectID)**
    Sets the ID of a single object that requires tax calculation., if any.
-   **[setLegalEntityReferences(legalEntityReference)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm#apex_blng_TaxParameters_setLegalEntityReferences)**
    Sets the legal entity for the tax treatment. For example, a company can create legal entities to represent their different branches.
-   **[setSObjectType(sObjectTypeInstance)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm#apex_blng_TaxParameters_setSObjectType)**
    Sets the object type to InvoiceLine, DebitNoteLine, CreditNoteLine, or OrderProduct object.
-   **[setTaxMethod(taxMethod)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm#apex_blng_TaxParameters_setTaxMethod)**
    Sets the method to POST or GET.
-   **[setIsCommitOnGetTax(isCommitOnGetTax)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm#apex_blng_TaxParameters_setIsCommitOnGetTax)**
    Indicates to external tax providers whether to commit tax.

### getIsCommitOnGetTax()

Returns the value of the isCommitOnGetTax parameter.

#### Signature

global Boolean getIsCommitOnGetTax()

#### Parameters

isCommitOnGetTax

Type: Boolean

#### Return Value

Type: Void

### getLegalEntityReferences()

Returns the legal entity references.

#### Signature

global static void getLegalEntityReferences()

#### Parameters

legalEntityReference

Type: String

#### Return Value

Type: void

### getSObjectID()

Returns the ID of a single object that requires tax calculation, if any.

#### Signature

global static void getSObjectID()

#### Parameters

sObjectId

Type: Id

#### Return Value

Type: void

### getSObjectListofIds()

Returns the list of IDs for objects that require tax calculation.

#### Signature

global List<Id> getSObjectListOfIds()

#### Parameters

listOfSobjectIds

Type: List<Id>

#### Return Value

Type: Void

### getSObjectType()

Returns the object type, which can be InvoiceLine, DebitNoteLine, CreditNoteLine, and OrderProduct object.

#### Signature

global static void getSObjectType()

#### Parameters

sObjectTypeInstance

Type: SObjectType

#### Return Value

Type: void

### getTaxMethod()

Returns the type of tax method, which is POST or GET.

#### Signature

global static void setTaxMethod()

#### Parameters

taxMethod

Type: String

#### Return Value

Type: void

### setSObjectListofIds(listOfSobjectIds)

Sets the list of IDs for objects that require tax calculation.

#### Signature

global static Void setSObjectListofIds(List<Id> listOfSobjectIds)

#### Parameters

listOfSobjectIds

Type: List<Id>

#### Return Value

Type: Void

### setSObjectID(sObjectId)

Sets the ID of a single object that requires tax calculation., if any.

#### Signature

global static void setSObjectID(Id sObjectId)

#### Parameters

sObjectId

Type: Id

#### Return Value

Type: void

### setLegalEntityReferences(legalEntityReference)

Sets the legal entity for the tax treatment. For example, a company can create legal entities to represent their different branches.

#### Signature

global static void setLegalEntityReferences(String legalEntityReference)

#### Parameters

legalEntityReference

Type: String

Unique identification number of the legal entity.

#### Return Value

Type: void

### setSObjectType(sObjectTypeInstance)

Sets the object type to InvoiceLine, DebitNoteLine, CreditNoteLine, or OrderProduct object.

#### Signature

global static void setSObjectType(SObjectType sObjectTypeInstance)

#### Parameters

sObjectTypeInstance

Type: SObjectType

#### Return Value

Type: void

### setTaxMethod(taxMethod)

Sets the method to POST or GET.

#### Signature

global static void setTaxMethod(String taxMethod)

#### Parameters

taxMethod

Type: String

#### Return Value

Type: void

### setIsCommitOnGetTax(isCommitOnGetTax)

Indicates to external tax providers whether to commit tax.

#### Usage

If the **Automatically Post Invoices** checkbox is selected on the Invoice Scheduler, tax providers examine the isCommitOnGetTax parameter to commit the tax.

The isCommitOnGetTax parameter value is configured within the Taxparameter instance and transmitted to the external tax provider implementation.

#### Signature

global static Void setIsCommitOnGetTax(Boolean isCommitOnGetTax)

#### Parameters

isCommitOnGetTax

Type: Boolean

Indicates to external tax providers whether to commit tax on the Get Tax method (true) or not (false).

#### Return Value

Type: Void

## Related Topics

- TaxParameters Methods (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm)
- getIsCommitOnGetTax() (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm)
- getLegalEntityReferences() (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm)
- getSObjectID() (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm)
- getSObjectListofIds() (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm)
- getSObjectType() (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm)
- getTaxMethod() (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm)
- setSObjectListofIds(listOfSobjectIds) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm)
- setSObjectID(sObjectId) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm)
- setLegalEntityReferences(legalEntityReference) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm)
