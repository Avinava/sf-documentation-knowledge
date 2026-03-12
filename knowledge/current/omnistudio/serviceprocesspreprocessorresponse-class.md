---
title: "ServiceProcessPreProcessorResponse Class"
domain: omnistudio
topic: serviceprocesspreprocessorresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.656Z
estimatedTokens: 864
keywords: [ServiceProcessPreProcessorResponse, processServiceProcessRequest, ServiceProcessRequestPreProcessor, errorMessage, isSuccessful, errorType]
---

# ServiceProcessPreProcessorResponse Class

> The ServiceProcessPreProcessorResponse class defines the response type
      of the processServiceProcessRequest method in the ServiceProcessRequestPreProcessor
      interface.

# ServiceProcessPreProcessorResponse Class

The ServiceProcessPreProcessorResponse class defines the response type of the processServiceProcessRequest method in the ServiceProcessRequestPreProcessor interface.

## Namespace

[industriesserviceprocess](atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_industriesserviceprocess.htm "The industriesserviceprocess namespace provides an interface for a preprocessor class that transforms and validates data for custom attributes in the Service Catalog Connect REST API.")

-   **[ServiceProcessPreProcessorResponse Methods](atlas.en-us.industries_reference.meta/industries_reference/apex_class_industriesserviceprocess_ServiceProcessPreProcessorResponse.htm#apex_industriesserviceprocess_ServiceProcessRequestPreProcessor_methods)**


## ServiceProcessPreProcessorResponse Methods

The following are constructors for ServiceProcessRequestPreProcessor.

-   **[ServiceProcessPreProcessorResponse(errorMessage, isSuccessful, errorType)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_industriesserviceprocess_ServiceProcessPreProcessorResponse.htm#apex_industriesserviceprocess_ServiceProcessPreProcessorResponse_ServiceProcessPreProcessorResponse_error)**
    The return type of the processServiceProcessRequest method in the ServiceProcessRequestPreProcessor interface, which can set a custom error message.
-   **[ServiceProcessPreProcessorResponse(isSuccessful)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_industriesserviceprocess_ServiceProcessPreProcessorResponse.htm#apex_industriesserviceprocess_ServiceProcessPreProcessorResponse_ServiceProcessPreProcessorResponse)**
    The return type of the processServiceProcessRequest method in the ServiceProcessRequestPreProcessor interface if there are no error messages.

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

## Related Topics

- industriesserviceprocess (atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_industriesserviceprocess.htm)
- ServiceProcessPreProcessorResponse Methods (atlas.en-us.industries_reference.meta/industries_reference/apex_class_industriesserviceprocess_ServiceProcessPreProcessorResponse.htm)
- ServiceProcessPreProcessorResponse(errorMessage, isSuccessful, errorType) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_industriesserviceprocess_ServiceProcessPreProcessorResponse.htm)
- ServiceProcessPreProcessorResponse(isSuccessful) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_industriesserviceprocess_ServiceProcessPreProcessorResponse.htm)
