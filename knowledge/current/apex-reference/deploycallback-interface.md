---
title: "DeployCallback Interface"
domain: apex-reference
topic: deploycallback-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.654Z
keywords: [DeployCallback, Interface, Method, called, asynchronous, deployment, custom, metadata, completes., handleResult, var1, var2, Signature, Parameters, Return, Value]
---

# DeployCallback Interface

> Method that is called when the asynchronous deployment of custom
      metadata completes.

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