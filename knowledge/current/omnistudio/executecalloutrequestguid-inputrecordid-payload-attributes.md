---
title: "executeCallout(requestGuid, inputRecordId, payload,
      attributes)"
domain: omnistudio
topic: executecalloutrequestguid-inputrecordid-payload-attributes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.903Z
keywords: [executeCallout, requestGuid, inputRecordId, payload, attributes, Invokes, API, call, SvcCatalogRequest, Integration, Definition, attributes., Signature, Parameters, Return, Value]
---

# executeCallout(requestGuid, inputRecordId, payload,
      attributes)

> Invokes an API call with a SvcCatalogRequest ID and Integration
      Definition attributes.

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