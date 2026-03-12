---
title: "JurisdictionResponse Class"
domain: apex-reference
topic: jurisdictionresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.623Z
estimatedTokens: 1414
namespace: CommerceTax
keywords: [JurisdictionResponse, Stores, external, tax, engine, jurisdiction, calculation, process, government, entity, collects, setCountry, country, setId, setLevel]
---

# JurisdictionResponse Class

> Stores details from the external tax engine about the tax
      jurisdiction used in the tax calculation process. A tax jurisdiction represents a government
      entity that collects tax.

**Namespace:** `CommerceTax`

# JurisdictionResponse Class

Stores details from the external tax engine about the tax jurisdiction used in the tax calculation process. A tax jurisdiction represents a government entity that collects tax.

## Namespace

[CommerceTax](atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

## Example

In this mock adapter example, the adapter sets the TaxDetailsResponse.setJurisdiction() method parameter to null if the request's document code indicates that the tax calculation didn't require any exceptions. Otherwise, it creates an instance of JurisdictionResponse and sets its address values. Because this code represents a mock adapter, the example defines the address parameters directly. In a standard implementation, the jurisdiction's setters receive values passed from the eternal tax engine.

if(request.DocumentCode == 'SetsNullForResponseWithoutException'){ taxDetailsResponse.setJurisdiction(null); }else{ commercetax.JurisdictionResponse jurisdiction = new commercetax.JurisdictionResponse(); jurisdiction.setCountry('country'); jurisdiction.setRegion('region'); jurisdiction.setName('name'); jurisdiction.setStateAssignedNumber('stateAssignedNo'); jurisdiction.setId('id'); jurisdiction.setLevel('level'); taxDetailsResponse.setJurisdiction(jurisdiction); }

-   **[JurisdictionResponse Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_JurisdictionResponse.htm#apex_commercetax_JurisdictionResponse_methods)**
    Learn more about the available methods with the JurisdictionResponse class.

## JurisdictionResponse Methods

Learn more about the available methods with the JurisdictionResponse class.

The JurisdictionResponse class includes these methods.

-   **[setCountry(country)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_JurisdictionResponse.htm#apex_commercetax_JurisdictionResponse_setCountry)**
    Sets the Country field of the JurisdictionResponse class.
-   **[setId(id)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_JurisdictionResponse.htm#apex_commercetax_JurisdictionResponse_setId)**
    Sets the ID field of the JurisdictionResponse class.
-   **[setLevel(level)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_JurisdictionResponse.htm#apex_commercetax_JurisdictionResponse_setLevel)**
    Sets the Level field of the JurisdictionResponse class.
-   **[setName(name)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_JurisdictionResponse.htm#apex_commercetax_JurisdictionResponse_setName)**
    Sets the Name field of the JurisdictionResponse class.
-   **[setRegion(region)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_JurisdictionResponse.htm#apex_commercetax_JurisdictionResponse_setRegion)**
    Sets the Region value of the JurisdictionResponse class.
-   **[setStateAssignedNumber(stateAssignedNo)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_JurisdictionResponse.htm#apex_commercetax_JurisdictionResponse_setStateAssignedNumber)**
    Sets the StateAssignedNumber field of the JurisdictionResponse class.

### setCountry(country)

Sets the Country field of the JurisdictionResponse class.

#### Signature

global void setCountry(String country)

#### Parameters

country

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The country of the tax jurisdiction entity's address.

#### Return Value

Type: void

### setId(id)

Sets the ID field of the JurisdictionResponse class.

#### Signature

global void setId(String id)

#### Parameters

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

User-defined Id value used to reference the jurisdiction response.

#### Return Value

Type: void

### setLevel(level)

Sets the Level field of the JurisdictionResponse class.

#### Signature

global void setLevel(String level)

#### Parameters

level

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Level value used in the jurisdiction entity's address.

#### Return Value

Type: void

### setName(name)

Sets the Name field of the JurisdictionResponse class.

#### Signature

global void setName(String name)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Optional user-defined name field for referencing the jurisdiction response.

#### Return Value

Type: void

### setRegion(region)

Sets the Region value of the JurisdictionResponse class.

#### Signature

global void setRegion(String region)

#### Parameters

region

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Region value used in the tax jurisdiction entity's address.

#### Return Value

Type: void

### setStateAssignedNumber(stateAssignedNo)

Sets the StateAssignedNumber field of the JurisdictionResponse class.

#### Signature

global void setStateAssignedNumber(String stateAssignedNo)

#### Parameters

stateAssignedNo

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

State assigned number value of the tax jurisdiction entity's address.

#### Return Value

Type: void

## Related Topics

- CommerceTax (atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm)
- JurisdictionResponse Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_JurisdictionResponse.htm)
- setCountry(country) (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_JurisdictionResponse.htm)
- setId(id) (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_JurisdictionResponse.htm)
- setLevel(level) (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_JurisdictionResponse.htm)
- setName(name) (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_JurisdictionResponse.htm)
- setRegion(region) (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_JurisdictionResponse.htm)
- setStateAssignedNumber(stateAssignedNo) (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_JurisdictionResponse.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
