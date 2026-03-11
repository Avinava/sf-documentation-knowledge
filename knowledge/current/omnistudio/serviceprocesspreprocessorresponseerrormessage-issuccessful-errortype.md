---
title: "ServiceProcessPreProcessorResponse(errorMessage, isSuccessful,
      errorType)"
domain: omnistudio
topic: serviceprocesspreprocessorresponseerrormessage-issuccessful-errortype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.731Z
keywords: [ServiceProcessPreProcessorResponse, errorMessage, isSuccessful, errorType, return, type, processServiceProcessRequest, method, ServiceProcessRequestPreProcessor, interface, which, set, custom, error, message., Signature, Parameters, Return, Value]
---

# ServiceProcessPreProcessorResponse(errorMessage, isSuccessful,
      errorType)

> The return type of the processServiceProcessRequest method in the
      ServiceProcessRequestPreProcessor interface, which can set a custom error
    message.

### ServiceProcessPreProcessorResponse(errorMessage, isSuccessful, errorType)

The return type of the processServiceProcessRequest method in the ServiceProcessRequestPreProcessor interface, which can set a custom error message.

#### Signature

global ServiceProcessPreProcessorResponse(String errorMessage, boolean isSuccessful, industriesserviceprocess.ServiceProcessPreProcessorErrorTypes errorType)

#### Parameters

errorMessage

Type: String

Represents a custom error message in case invocation of the ServiceProcessRequestPreProcessor.processServiceProcessRequest() method results in an error or exception.

isSuccessful

Type: Boolean

Indicates whether the ServiceProcessRequestPreProcessor.processServiceProcessRequest() method is successful. Set this parameter to false if the custom validation fails.

errorType

Type: ServiceProcessPreProcessorErrorTypes

ServiceProcessPreProcessorErrorTypes is an enum with attributes NO\_ERROR, GENERIC\_ERROR, or VALIDATION\_ERROR.

#### Return Value

Type: ServiceProcessPreProcessorResponse object