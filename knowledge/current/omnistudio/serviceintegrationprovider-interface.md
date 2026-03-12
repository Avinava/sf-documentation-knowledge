---
title: "ServiceIntegrationProvider Interface"
domain: omnistudio
topic: serviceintegrationprovider-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.891Z
estimatedTokens: 1047
keywords: [ServiceIntegrationProvider, Implement, integration, framework, Continuation, Usage, getCalloutRequest, requestId, params, attributes, getCalloutResponse, httpResponseList, state, getProviderAttributes]
---

# ServiceIntegrationProvider Interface

> Implement the ServiceIntegrationProvider interface to use the
      integration framework with Continuation.

# ServiceIntegrationProvider Interface

Implement the ServiceIntegrationProvider interface to use the integration framework with Continuation.

## Namespace

[industriesintegrationfwk](atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_industriesintegrationfwk.htm "The industriesintegrationfwk namespace provides interfaces for the Industries: Send Apex Async Request invocable action and for using the integration framework with Continuation.")

## Usage

The IntegrationHandler class calls a class that implements this interface. The ServiceExcellenceAlertCard and ServiceExcellenceGenericAlertCard have Integration Procedure data sources that call the IntegrationHandler class. These FlexCards display information about financial accounts.

-   **[ServiceIntegrationProvider Methods](atlas.en-us.industries_reference.meta/industries_reference/apex_interface_industriesintegrationfwk_ServiceIntegrationProvider.htm#apex_industriesintegrationfwk_ServiceIntegrationProvider_methods)**


## ServiceIntegrationProvider Methods

The following are methods for ServiceIntegrationProvider.

-   **[getCalloutRequest(requestId, params, attributes)](atlas.en-us.industries_reference.meta/industries_reference/apex_interface_industriesintegrationfwk_ServiceIntegrationProvider.htm#apex_industriesintegrationfwk_ServiceIntegrationProvider_getCalloutRequest)**
    Fetches the Continuation object, which stores the API call request and its attributes.
-   **[getCalloutResponse(httpResponseList, state, attributes)](atlas.en-us.industries_reference.meta/industries_reference/apex_interface_industriesintegrationfwk_ServiceIntegrationProvider.htm#apex_industriesintegrationfwk_ServiceIntegrationProvider_getCalloutResponse)**
    Fetches the response data from the API call and performs postprocessing.
-   **[getProviderAttributes()](atlas.en-us.industries_reference.meta/industries_reference/apex_interface_industriesintegrationfwk_ServiceIntegrationProvider.htm#apex_industriesintegrationfwk_ServiceIntegrationProvider_getProviderAttributes)**
    Tells the integration framework what attributes are expected and provides defaults for values that might be missing in the Integration Definition.

### getCalloutRequest(requestId, params, attributes)

Fetches the Continuation object, which stores the API call request and its attributes.

#### Signature

public IntegrationCalloutRequest getCalloutRequest(String requestId, Map<String, String\> params, Map<String, Object\> attributes)

#### Parameters

requestId

Type: String

Represents the Request GUID that uniquely identifies the API call.

params

Type: Map<String,String>

Represents the input data containing the payload for the API call.

attributes

Type: Map<String,Object>

Represents attribute data from the Integration Definition record.

#### Return Value

Type: IntegrationCalloutRequest object

#### Usage

Used by the IntegrationHandler class to retrieve the Continuation object.

### getCalloutResponse(httpResponseList, state, attributes)

Fetches the response data from the API call and performs postprocessing.

#### Signature

public IntegrationCalloutResponse getCalloutResponse(List<HttpResponse> httpResponseList, Object state, Map<String, Object\> attributes)

#### Parameters

httpResponseList

Type: List<HttpResponse>

Represents the response data from the API call.

state

Type: Object

Represents the value of the State property of the Continuation object created by the getCalloutRequest method.

attributes

Type: Map<String,Object>

Represents attribute data from the Integration Definition record.

#### Return Value

Type: IntegrationCalloutResponse object

#### Usage

Used by the IntegrationHandler class for postprocessing after the API call.

### getProviderAttributes()

Tells the integration framework what attributes are expected and provides defaults for values that might be missing in the Integration Definition.

#### Signature

public List<ApexProviderAttr> getProviderAttributes()

#### Parameters

None

#### Return Value

Type: List<ApexProviderAttr>

#### Usage

Used by the IntegrationHandler class to retrieve default values from the Integration Definition record.

## Related Topics

- industriesintegrationfwk (atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_industriesintegrationfwk.htm)
- ServiceIntegrationProvider Methods (atlas.en-us.industries_reference.meta/industries_reference/apex_interface_industriesintegrationfwk_ServiceIntegrationProvider.htm)
- getCalloutRequest(requestId, params, attributes) (atlas.en-us.industries_reference.meta/industries_reference/apex_interface_industriesintegrationfwk_ServiceIntegrationProvider.htm)
- getCalloutResponse(httpResponseList, state, attributes) (atlas.en-us.industries_reference.meta/industries_reference/apex_interface_industriesintegrationfwk_ServiceIntegrationProvider.htm)
- getProviderAttributes() (atlas.en-us.industries_reference.meta/industries_reference/apex_interface_industriesintegrationfwk_ServiceIntegrationProvider.htm)
