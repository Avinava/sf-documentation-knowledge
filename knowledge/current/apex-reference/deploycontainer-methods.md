---
title: "DeployContainer Methods"
domain: apex-reference
topic: deploycontainer-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.861Z
keywords: [DeployContainer, Methods, Add, custom, metadata, component, container., addMetadata, Signature, Parameters, Return, Value, clone, getMetadata, removeMetadata, removeMetadataByFullName, fullName]
---

# DeployContainer Methods

> Add a custom metadata component to the container.

## DeployContainer Methods

The following are methods for DeployContainer.

-   **[addMetadata(md)](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployContainer.htm#apex_Metadata_DeployContainer_addMetadata)**  
    Add a custom metadata component to the container.
-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployContainer.htm#apex_Metadata_DeployContainer_clone)**  
    Makes a duplicate copy of the Metadata.DeployContainer.
-   **[getMetadata()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployContainer.htm#apex_Metadata_DeployContainer_getMetadata)**  
    Retrieves a list of custom metadata components from the container.
-   **[removeMetadata(md)](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployContainer.htm#apex_Metadata_DeployContainer_removeMetadata)**  
    Removes a metadata component from the container.
-   **[removeMetadataByFullName(fullName)](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployContainer.htm#apex_Metadata_DeployContainer_removeMetadataByFullName)**  
    Removes a metadata component from the container using the component’s full name.

### addMetadata(md)

Add a custom metadata component to the container.

#### Signature

public void addMetadata(Metadata.Metadata md)

#### Parameters

md

Type: [Metadata.Metadata](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Metadata.htm#apex_class_Metadata_Metadata "An abstract base class that represents a custom metadata component.")

A custom metadata component class that derives from Metadata.Metadata. Avoid adding components to a Metadata.DeployContainerthat have the same Metadata.Metadata.fullName because it causes deployment errors.

#### Return Value

Type: void

### clone()

Makes a duplicate copy of the Metadata.DeployContainer.

#### Signature

public Object clone()

#### Return Value

Type: Object

### getMetadata()

Retrieves a list of custom metadata components from the container.

#### Signature

public List<Metadata.Metadata> getMetadata()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.Metadata](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Metadata.htm#apex_class_Metadata_Metadata "An abstract base class that represents a custom metadata component.")\>

### removeMetadata(md)

Removes a metadata component from the container.

#### Signature

public Boolean removeMetadata(Metadata.Metadata md)

#### Parameters

md

Type: [Metadata.Metadata](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Metadata.htm#apex_class_Metadata_Metadata "An abstract base class that represents a custom metadata component.")

Metadata component to remove.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Returns true if the container changed as a result of the call.

### removeMetadataByFullName(fullName)

Removes a metadata component from the container using the component’s full name.

#### Signature

public Boolean removeMetadataByFullName(String fullName)

#### Parameters

fullName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Full name of the component to remove.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Returns true if the container changed as a result of the call.