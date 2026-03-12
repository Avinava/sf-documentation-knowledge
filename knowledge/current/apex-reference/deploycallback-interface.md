---
title: "DeployCallback Interface"
domain: apex-reference
topic: deploycallback-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.933Z
estimatedTokens: 592
namespace: Metadata
keywords: [DeployCallback, metadata, deployment, callback, classes, Usage, handleResult, var1, var2, Implementation]
---

# DeployCallback Interface

> An interface for metadata deployment callback
    classes.

**Namespace:** `Metadata`

# DeployCallback Interface

An interface for metadata deployment callback classes.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

You must provide a callback class for the asynchronous deployment of custom metadata through Apex. This class must implement the Metadata.DeployCallback interface.

Salesforce calls your DeployCallback.handleResult() method asynchronously once the queued deployment completes. Because the callback is called as asynchronous Apex after deployment, there may be a brief period where the deploy has completed, but your callback has not been called yet.

-   **[DeployCallback Methods](atlas.en-us.apexref.meta/apexref/apex_interface_Metadata_DeployCallback.htm#apex_Metadata_DeployCallback_methods)**

-   **[DeployCallback Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_Metadata_DeployCallback.htm#apex_interface_Metadata_DeployCallback_Example)**


## DeployCallback Methods

The following are methods for DeployCallback.

-   **[handleResult(var1, var2)](atlas.en-us.apexref.meta/apexref/apex_interface_Metadata_DeployCallback.htm#apex_Metadata_DeployCallback_handleResult)**
    Method that is called when the asynchronous deployment of custom metadata completes.

### handleResult(var1, var2)

Method that is called when the asynchronous deployment of custom metadata completes.

#### Signature

public void handleResult(Metadata.DeployResult var1, Metadata.DeployCallbackContext var2)

#### Parameters

var1

Type: [Metadata.DeployResult](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm#apex_class_Metadata_DeployResult "Represents the results of a metadata deployment.")

The results of the asynchronous deployment.

var2

Type: [Metadata.DeployCallbackContext](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployCallbackContext.htm#apex_class_Metadata_DeployCallbackContext "Represents context information for a deployment job.")

The context for the queued asynchronous deployment job.

#### Return Value

Type: void

## DeployCallback Example Implementation

This is an example implementation of the Metadata.DeployCallback interface.

```

```

The following example uses this implementation for a deployment.

```

```

## Code Examples

```apex
public class MyCallback implements Metadata.DeployCallback {
    public void handleResult(Metadata.DeployResult result,
                             Metadata.DeployCallbackContext context) {
        if (result.status == Metadata.DeployStatus.Succeeded) {
            // Deployment was successful
        } else {
            // Deployment was not successful
        }
    }
}
```

```
// Setup callback and deploy
MyCallback callback = new MyCallback();
Metadata.Operations.enqueueDeployment(mdContainer, callback);
```

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- DeployCallback Methods (atlas.en-us.apexref.meta/apexref/apex_interface_Metadata_DeployCallback.htm)
- DeployCallback Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_Metadata_DeployCallback.htm)
- handleResult(var1, var2) (atlas.en-us.apexref.meta/apexref/apex_interface_Metadata_DeployCallback.htm)
- Metadata.DeployResult (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployResult.htm)
- Metadata.DeployCallbackContext (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_DeployCallbackContext.htm)
