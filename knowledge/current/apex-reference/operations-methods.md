---
title: "Operations Methods"
domain: apex-reference
topic: operations-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.998Z
keywords: [Operations, Methods, Makes, duplicate, copy, Metadata.Operations., clone, Signature, Return, Value, enqueueDeployment, container, callback, Parameters, retrieve, type, fullNames]
---

# Operations Methods

> Makes a duplicate copy of the Metadata.Operations.

## Operations Methods

The following are methods for Operations.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Operations.htm#apex_Metadata_Operations_clone)**  
    Makes a duplicate copy of the Metadata.Operations.
-   **[enqueueDeployment(container, callback)](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Operations.htm#apex_Metadata_Operations_enqueueDeployment)**  
    Deploys custom metadata components asynchronously.
-   **[retrieve(type, fullNames)](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Operations.htm#apex_Metadata_Operations_retrieve)**  
    Retrieves a list of custom metadata components.

### clone()

Makes a duplicate copy of the Metadata.Operations.

#### Signature

public Object clone()

#### Return Value

Type: Object

### enqueueDeployment(container, callback)

Deploys custom metadata components asynchronously.

#### Signature

To preserve service function, we limit the number of Metadata API deployments originating from Apex that can be enqueued at a time. See Limit on Enqueued Deployments from Apex.

public static Id enqueueDeployment(Metadata.DeployContainer container, Metadata.DeployCallback callback)

#### Parameters

container

Type: [Metadata.DeployContainer](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployContainer.htm#apex_class_Metadata_DeployContainer "Represents a container for custom metadata components to be deployed.")

Container that contains the set of metadata components to deploy.

callback

Type: [Metadata.DeployCallback](atlas.en-us.apexref.meta/apexref/apex_interface_Metadata_DeployCallback.htm#apex_interface_Metadata_DeployCallback "An interface for metadata deployment callback classes.")

A class that implements the Metadata.DeployCallback interface. Used by Salesforce to return information about the deployment results.

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

ID of deployment request.

### retrieve(type, fullNames)

Retrieves a list of custom metadata components.

#### Signature

public static List<Metadata.Metadata> retrieve(Metadata.MetadataType type, List<String\> fullNames)

#### Parameters

type

Type: [Metadata.MetadataType](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_MetadataType.htm#apex_enum_Metadata_MetadataType "Represents the custom metadata components available in Apex.")

The metadata component type.

fullNames

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of component names to retrieve. For information on component name formats, see [Metadata.fullName()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Metadata.htm#apex_Metadata_Metadata_fullName "The full name of the custom metadata, which can include the namespace, type, and component name.").

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.Metadata](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Metadata.htm#apex_class_Metadata_Metadata "An abstract base class that represents a custom metadata component.")\>