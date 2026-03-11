---
title: "processServiceProcessRequest(serviceProcessDefId, caseInfo,
      serviceProcessAttrs)"
domain: omnistudio
topic: processserviceprocessrequestserviceprocessdefid-caseinfo-serviceprocessattrs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.911Z
keywords: [processServiceProcessRequest, serviceProcessDefId, caseInfo, serviceProcessAttrs, Transforms, validates, Case, attributes, service, request, attributes., abstract, method., Signature, Parameters, Return, Value]
---

# processServiceProcessRequest(serviceProcessDefId, caseInfo,
      serviceProcessAttrs)

> Transforms and validates Case attributes or service request
      attributes. The processServiceProcessRequest is an abstract method.

### processServiceProcessRequest(serviceProcessDefId, caseInfo, serviceProcessAttrs)

Transforms and validates Case attributes or service request attributes. The processServiceProcessRequest is an abstract method.

#### Signature

ServiceProcessPreProcessorResponse processServiceProcessRequest(String serviceProcessDefId, Map<String, Object\> caseInfo, Map<String, Object\> serviceProcessAttrs)

#### Parameters

serviceProcessDefId

Type: String

Represents the Developer Name of the service request.

caseInfo

Type: Map<String,Object>

Represents Case attributes in the input payload in key-value pair format.

serviceProcessAttrs

Type: Map<String,Object>

Represents service request attributes in the input payload in key-value pair format.

#### Return Value

Type: ServiceProcessPreProcessorResponse object