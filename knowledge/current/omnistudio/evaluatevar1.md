---
title: "evaluate(var1)"
domain: omnistudio
topic: evaluatevar1
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.891Z
keywords: [evaluate, var1, Evaluates, compliance, ControlEvaluationInput, class., Signature, Parameters, Return, Value]
---

# evaluate(var1)

> Evaluates compliance by using ControlEvaluationInput class.

### evaluate(var1)

Evaluates compliance by using ControlEvaluationInput class.

#### Signature

public ComplianceMgmt.ComplianceEvaluationResponse evaluate(ComplianceMgmt.ControlEvaluationInput var1)

```

```

#### Parameters

var1

Type: [ComplianceMgmt.ControlEvaluationInput](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ControlEvaluationInput.htm#apex_class_ComplianceMgmt_ControlEvaluationInput "Represents the input object used by the ComplianceEvaluation interface's evaluate method. It contains a map of ControlInput class that stores the business context value required to evaluate compliance.")

The input class to perform an evaluation.

#### Return Value

Type: [ComplianceMgmt.ComplianceEvaluationResponse](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceEvaluationResponse.htm#apex_class_ComplianceMgmt_ComplianceEvaluationResponse "Represents the compliance evaluation response from a control evaluation. It's the output of the ComplianceEvaluation interface's evaluate method and includes two properties—evaluationResult and complianceControlLog.")

The output class that represents compliance evaluation response from a control evaluation.