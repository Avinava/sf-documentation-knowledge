---
title: "DeployCallbackContext Methods"
domain: apex-reference
topic: deploycallbackcontext-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.855Z
keywords: [DeployCallbackContext, Methods, Makes, duplicate, copy, Metadata.DeployCallbackContext., clone, Signature, Return, Value, getCallbackJobId]
---

# DeployCallbackContext Methods

> Makes a duplicate copy of the Metadata.DeployCallbackContext.

## DeployCallbackContext Methods

The following are methods for DeployCallbackContext.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployCallbackContext.htm#apex_Metadata_DeployCallbackContext_clone)**  
    Makes a duplicate copy of the Metadata.DeployCallbackContext.
-   **[getCallbackJobId()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployCallbackContext.htm#apex_Metadata_DeployCallbackContext_getCallbackJobId)**  
    Gets the asynchronous Apex job ID for the callback job.

### clone()

Makes a duplicate copy of the Metadata.DeployCallbackContext.

#### Signature

public Object clone()

#### Return Value

Type: Object

### getCallbackJobId()

Gets the asynchronous Apex job ID for the callback job.

#### Signature

public Id getCallbackJobId()

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")