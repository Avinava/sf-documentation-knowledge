---
title: "getProviderAttributes()"
domain: omnistudio
topic: getproviderattributes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.907Z
keywords: [getProviderAttributes, Tells, integration, framework, attributes, expected, provides, defaults, values, might, missing, Integration, Definition., Signature, Parameters, Return, Value, Usage]
---

# getProviderAttributes()

> Tells the integration framework what attributes are expected and
      provides defaults for values that might be missing in the Integration
    Definition.

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