---
title: "DeployCallbackContext Class"
domain: apex-reference
topic: deploycallbackcontext-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.326Z
estimatedTokens: 457
namespace: Metadata
keywords: [DeployCallbackContext, Represents, context, information, deployment, job., Usage, Example, clone, getCallbackJobId]
---

# DeployCallbackContext Class

> Represents context information for a deployment job.

**Namespace:** `Metadata`

# DeployCallbackContext Class

Represents context information for a deployment job.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

After an asynchronous metadata deployment finishes, Salesforce provides an instance ofMetadata.DeployCallbackContext in an asynchronous call to your implementation of handleResult() in your [Metadata.DeployCallback](atlas.en-us.apexref.meta/apexref/apex_interface_Metadata_DeployCallback.htm#apex_interface_Metadata_DeployCallback "An interface for metadata deployment callback classes.") class.

## Example

```

```

-   **[DeployCallbackContext Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployCallbackContext.htm#apex_Metadata_DeployCallbackContext_methods)**


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

## Code Examples

```apex
public void handleResult(Metadata.DeployResult result,
                         Metadata.DeployCallbackContext context) {
  // Check the callback job ID for the deployment
  Id jobId = context.getCallbackJobId();
  // ...process the results...
}
```

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- Metadata.DeployCallback (atlas.en-us.apexref.meta/apexref/apex_interface_Metadata_DeployCallback.htm)
- DeployCallbackContext Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployCallbackContext.htm)
- clone() (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployCallbackContext.htm)
- getCallbackJobId() (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployCallbackContext.htm)
