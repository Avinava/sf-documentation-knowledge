---
title: "evaluateComplianceProcedureAsync(procedureName,
      evaluationInputs)"
domain: omnistudio
topic: evaluatecomplianceprocedureasyncprocedurename-evaluationinputs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.569Z
keywords: [evaluateComplianceProcedureAsync, procedureName, evaluationInputs, API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, Example]
---

# evaluateComplianceProcedureAsync(procedureName,
      evaluationInputs)

# evaluateComplianceProcedureAsync(procedureName, evaluationInputs)

Asynchronously evaluate a compliance procedure with the business context.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.ComplianceProcedureAsyncEvaluationRepresentation evaluateComplianceProcedureAsync(String procedureName, ConnectApi.ComplianceProcedureEvaluationRequest evaluationInputs)

## Parameters

procedureName

Type: String

Name of the compliance procedure for which the evaluation is done asynchronously.

evaluationInputs

Type: [ConnectApi.ComplianceProcedureEvaluationRequest](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_compliance_procedure_evaluation_request.htm "Input representation details of a compliance evaluation request.")

Details for the evaluation process.

## Return Value

Type: [ConnectApi.ComplianceProcedureAsyncEvaluationRepresentation](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_compliance_procedure_async_evaluation.htm "Output representation for compliance procedure async evaluation responses.")

## Usage

You must have these Permission Set Licenses in your org to use the compliance procedure APIs.

-   Compliance User
-   Rule Engine Runtime
-   Context Service Runtime
-   Decision Explainer Service Access

## Example

```

```