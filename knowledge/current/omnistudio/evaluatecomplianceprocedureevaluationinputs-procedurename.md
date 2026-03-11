---
title: "evaluateComplianceProcedure(evaluationInputs, procedureName)"
domain: omnistudio
topic: evaluatecomplianceprocedureevaluationinputs-procedurename
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.565Z
keywords: [evaluateComplianceProcedure, evaluationInputs, procedureName, API, Version, Signature, Parameters, Return, Value, Example]
---

# evaluateComplianceProcedure(evaluationInputs, procedureName)

# evaluateComplianceProcedure(evaluationInputs, procedureName)

Evaluate a compliance procedure with a business context.

## API Version

65.0

## Signature

public static ConnectApi.ComplianceProcedureEvaluationResponse evaluateComplianceProcedure(ConnectApi.ComplianceProcedureEvaluationRequest evaluationInputs, String procedureName)

## Parameters

evaluationInputs

Type: [ConnectApi.ComplianceProcedureEvaluationRequest](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_compliance_procedure_evaluation_request.htm "Input representation details of a compliance evaluation request.")

Details for the evaluation process.

procedureName

Type: String

Name of the compliance procedure that must be evaluated.

## Return Value

Type: [ConnectApi.ComplianceProcedureEvaluationResponse](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_compliance_procedure_evaluation_response.htm "Compliance procedure evaluation result.")

Evaluation result for a compliance procedure.

## Example

```

```