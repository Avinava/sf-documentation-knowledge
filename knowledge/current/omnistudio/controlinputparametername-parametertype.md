---
title: "ControlInput(parameterName, parameterType)"
domain: omnistudio
topic: controlinputparametername-parametertype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.616Z
keywords: [ControlInput, parameterName, parameterType, Initializes, object., Signature, Parameters]
---

# ControlInput(parameterName, parameterType)

> Initializes the ControlInput object.

### ControlInput(parameterName, parameterType)

Initializes the ControlInput object.

#### Signature

public ControlInput(String parameterName, ComplianceMgmt.ControlInputType parameterType)

```

```

#### Parameters

parameterName

Type: String

Name of the business context parameter that’s used to evaluate compliance.

parameterType

Type: [ComplianceMgmt.ControlInputType](atlas.en-us.industries_reference.meta/industries_reference/apex_enum_ComplianceMgmt_ControlInputType.htm "The type of the control input parameter that’s business context.")

The type of the business context parameter. Only RecordId is supported.