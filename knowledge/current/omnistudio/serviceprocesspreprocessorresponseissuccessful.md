---
title: "ServiceProcessPreProcessorResponse(isSuccessful)"
domain: omnistudio
topic: serviceprocesspreprocessorresponseissuccessful
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.731Z
keywords: [ServiceProcessPreProcessorResponse, isSuccessful, return, type, processServiceProcessRequest, method, ServiceProcessRequestPreProcessor, interface, there, error, messages., Signature, Parameters, Return, Value]
---

# ServiceProcessPreProcessorResponse(isSuccessful)

> The return type of the processServiceProcessRequest method in the
      ServiceProcessRequestPreProcessor interface if there are no error messages.

### ServiceProcessPreProcessorResponse(isSuccessful)

The return type of the processServiceProcessRequest method in the ServiceProcessRequestPreProcessor interface if there are no error messages.

#### Signature

global ServiceProcessPreProcessorResponse(boolean isSuccessful)

#### Parameters

isSuccessful

Type: Boolean

Indicates whether the ServiceProcessRequestPreProcessor.processServiceProcessRequest() method is successful. Set this parameter to true if the custom validation succeeds.

#### Return Value

Type: ServiceProcessPreProcessorResponse object