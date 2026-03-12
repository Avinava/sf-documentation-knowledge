---
title: "ImpositionResponse Class"
domain: apex-reference
topic: impositionresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.250Z
estimatedTokens: 1005
namespace: CommerceTax
keywords: [ImpositionResponse, Stores, details, tax, impositions, external, engine., Example, setId, setName, name, setSubType, subType, setType]
---

# ImpositionResponse Class

> Stores details of tax impositions from the external tax
    engine.

**Namespace:** `CommerceTax`

# ImpositionResponse Class

Stores details of tax impositions from the external tax engine.

## Namespace

[CommerceTax](atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

## Example

In this mock adapter example, the adapter sets the TaxDetailsResponse.setImposition() method parameter to null if the request's document code indicates that the tax calculation didn't require any exceptions. Otherwise, it creates an instance of ImpositionResponse and sets its SubType and Type values, and then assigns it to TaxDetailsResponse.

if(request.DocumentCode == 'SetsNullForResponseWithoutException'){ taxDetailsResponse.setImposition(null); }else{ commercetax.ImpositionResponse imposition = new commercetax.ImpositionResponse(); imposition.setSubType('subtype'); imposition.setType('type'); taxDetailsResponse.setImposition(imposition); }

-   **[ImpositionResponse Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_ImpositionResponse.htm#apex_commercetax_ImpositionResponse_methods)**
    Learn more about the available methods with the ImpositionResponse class.

## ImpositionResponse Methods

Learn more about the available methods with the ImpositionResponse class.

The ImpositionResponse class includes these methods.

-   **[setId(id)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_ImpositionResponse.htm#apex_commercetax_ImpositionResponse_setId)**
    Sets the ID field of the ImpositionResponse class.
-   **[setName(name)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_ImpositionResponse.htm#apex_commercetax_ImpositionResponse_setName)**
    Sets the Name field of the ImpositionResponse class.
-   **[setSubType(subType)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_ImpositionResponse.htm#apex_commercetax_ImpositionResponse_setSubType)**
    Sets the SubType field of the ImpositionResponse class.
-   **[setType(type)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_ImpositionResponse.htm#apex_commercetax_ImpositionResponse_setType)**
    Sets the Type field of the ImpositionResponse class.

### setId(id)

Sets the ID field of the ImpositionResponse class.

#### Signature

global void setId(String id)

#### Parameters

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

User-defined ID value used for referencing the tax imposition.

#### Return Value

Type: void

### setName(name)

Sets the Name field of the ImpositionResponse class.

#### Signature

global void setName(String name)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Optional user-defined name for the tax imposition response.

#### Return Value

Type: void

### setSubType(subType)

Sets the SubType field of the ImpositionResponse class.

#### Signature

global void setSubType(String subType)

#### Parameters

subType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Many tax calculation organizations use types and subtypes to categorize their tax imposition procedures. If the tax engine you use follows this process, set the subtype with this parameter.

#### Return Value

Type: void

### setType(type)

Sets the Type field of the ImpositionResponse class.

#### Signature

public void setType(String type)

#### Parameters

type

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Many tax calculation organizations use types and subtypes to categorize their tax imposition procedures. If the tax engine you use follows this process, set the type with this parameter.

#### Return Value

Type: void

## Related Topics

- CommerceTax (atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm)
- ImpositionResponse Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_ImpositionResponse.htm)
- setId(id) (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_ImpositionResponse.htm)
- setName(name) (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_ImpositionResponse.htm)
- setSubType(subType) (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_ImpositionResponse.htm)
- setType(type) (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_ImpositionResponse.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
