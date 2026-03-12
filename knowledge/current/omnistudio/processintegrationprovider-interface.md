---
title: "ProcessIntegrationProvider Interface"
domain: omnistudio
topic: processintegrationprovider-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.885Z
estimatedTokens: 748
keywords: [ProcessIntegrationProvider, Implement, Industries, Send, Apex, Async, invocable, action, Usage, executeCallout, requestGuid, inputRecordId, payload, attributes, getProviderAttributes]
---

# ProcessIntegrationProvider Interface

> Implement the ProcessIntegrationProvider interface to create a class
      for use with the Industries: Send Apex Async Request invocable action.

# ProcessIntegrationProvider Interface

Implement the ProcessIntegrationProvider interface to create a class for use with the Industries: Send Apex Async Request invocable action.

## Namespace

[industriesintegrationfwk](atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_industriesintegrationfwk.htm "The industriesintegrationfwk namespace provides interfaces for the Industries: Send Apex Async Request invocable action and for using the integration framework with Continuation.")

## Usage

The Fee Reversal and Address Update service processes use classes that implement the ProcessIntegrationProvider interface to handle their attributes. This class fetches the svcCatalogRequestId after the Service Catalog Resource connect API has been invoked.

-   **[ProcessIntegrationProvider Methods](atlas.en-us.industries_reference.meta/industries_reference/apex_interface_industriesintegrationfwk_ProcessIntegrationProvider.htm#apex_industriesintegrationfwk_ProcessIntegrationProvider_methods)**


## ProcessIntegrationProvider Methods

The following are methods for ProcessIntegrationProvider.

-   **[executeCallout(requestGuid, inputRecordId, payload, attributes)](atlas.en-us.industries_reference.meta/industries_reference/apex_interface_industriesintegrationfwk_ProcessIntegrationProvider.htm#apex_industriesintegrationfwk_ProcessIntegrationProvider_executeCallout)**
    Invokes an API call with a SvcCatalogRequest ID and Integration Definition attributes.
-   **[getProviderAttributes()](atlas.en-us.industries_reference.meta/industries_reference/apex_interface_industriesintegrationfwk_ProcessIntegrationProvider.htm#apex_industriesintegrationfwk_ProcessIntegrationProvider_getProviderAttributes)**
    Tells the integration framework what attributes are expected and provides defaults for values that might be missing in the Integration Definition.

### executeCallout(requestGuid, inputRecordId, payload, attributes)

Invokes an API call with a SvcCatalogRequest ID and Integration Definition attributes.

#### Signature

public IntegrationCalloutResponse executeCallout(String requestGuid, String inputRecordId, String payload, Map<String, Object\> attributes)

#### Parameters

requestGuid

Type: String

Represents the Request GUID that uniquely identifies the API call.

inputRecordId

Type: String

Represents the input record that contains the payload for the API call.

payload

Type: String

Represents an additional payload provided outside of the inputRecordId.

attributes

Type: Map<String,Object>

Represents attribute data from the Integration Definition record.

#### Return Value

Type: IntegrationCalloutResponse object

### getProviderAttributes()

Tells the integration framework what attributes are expected and provides defaults for values that might be missing in the Integration Definition.

#### Signature

public List<ApexProviderAttr> getProviderAttributes()

#### Parameters

None

#### Return Value

Type: List<ApexProviderAttr>

## Related Topics

- industriesintegrationfwk (atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_industriesintegrationfwk.htm)
- ProcessIntegrationProvider Methods (atlas.en-us.industries_reference.meta/industries_reference/apex_interface_industriesintegrationfwk_ProcessIntegrationProvider.htm)
- executeCallout(requestGuid, inputRecordId, payload, attributes) (atlas.en-us.industries_reference.meta/industries_reference/apex_interface_industriesintegrationfwk_ProcessIntegrationProvider.htm)
- getProviderAttributes() (atlas.en-us.industries_reference.meta/industries_reference/apex_interface_industriesintegrationfwk_ProcessIntegrationProvider.htm)
