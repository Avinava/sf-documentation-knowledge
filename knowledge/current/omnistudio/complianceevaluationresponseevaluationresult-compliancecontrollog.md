---
title: "ComplianceEvaluationResponse(evaluationResult, complianceControlLog)"
domain: omnistudio
topic: complianceevaluationresponseevaluationresult-compliancecontrollog
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.608Z
keywords: [ComplianceEvaluationResponse, evaluationResult, complianceControlLog, Creates, object., Signature, Parameters]
---

# ComplianceEvaluationResponse(evaluationResult, complianceControlLog)

> Creates ComplianceEvaluationResponse object.

### ComplianceEvaluationResponse(evaluationResult, complianceControlLog)

Creates ComplianceEvaluationResponse object.

#### Signature

public ComplianceEvaluationResponse(ComplianceMgmt.EvaluationResult evaluationResult, ComplianceMgmt.ComplianceControlLog complianceControlLog)

```

```

#### Parameters

evaluationResult

Type: [ComplianceMgmt.EvaluationResult](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_EvaluationResult.htm#apex_class_ComplianceMgmt_EvaluationResult "Represents the object that contains the details of the compliance evaluation result. It contains three properties—isCompliant, complianceMessage, and complianceLogMessage.")

The object that represents the compliance evaluation result from the control.

complianceControlLog

Type: [ComplianceMgmt.ComplianceControlLog](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceControlLog.htm#apex_class_ComplianceMgmt_ComplianceControlLog "Represents a map of business context and evidence that's logged to evaluate compliance for the control.")

The object that contains the key-value pair to specify the controls to be included in logs.