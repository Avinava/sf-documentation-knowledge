---
title: "DeployContainer Class"
domain: apex-reference
topic: deploycontainer-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.861Z
keywords: [DeployContainer, Class, Removes, metadata, component, container, component’s, full, name., removeMetadataByFullName, fullName, Signature, Parameters, Return, Value]
---

# DeployContainer Class

> Removes a metadata component from the container using the component’s
      full name.

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