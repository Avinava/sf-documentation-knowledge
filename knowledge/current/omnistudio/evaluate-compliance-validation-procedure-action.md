---
title: "Evaluate Compliance Validation Procedure Action"
domain: omnistudio
topic: evaluate-compliance-validation-procedure-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.440Z
keywords: [Evaluate, Compliance, Validation, Procedure, Action, Special, Access, Rules, Supported, REST, HTTP, Methods, Inputs, Outputs, Example]
---

# Evaluate Compliance Validation Procedure Action

# Evaluate Compliance Validation Procedure Action

Evaluate a compliance validation procedure, and create a procedure evaluation API response.

This action is available in API version 63.0 and later.

## Special Access Rules

To use this action, you must have the Compliance User permission set.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/evalCmplValidationProcedure

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| businessOperations​ProcessApiName | TypestringDescriptionAPI name of the business operations process. |
| cmplValidation​ProcedureApiName | TypestringDescriptionRequired.API name of the compliance validation procedure. |
| cmplVldProcedure​EvaluationRequest | TypeApex-definedDescriptionRequired.An Apex ConnectApi.ComplianceProcedureEvaluationInfo record that contains the details for the procedure evaluation API request. |

## Outputs

| Output | Details |
| --- | --- |
| cmplVldProcedure​EvaluationResp | TypeApex-definedDescriptionAn Apex ConnectApi.ComplianceProcedureEvaluation record that contains the procedure evaluation API response created from the compliance procedure evaluation. |

## Example

POST

This example shows a sample request for the Evaluate Compliance Validation Procedure action.

```

```

This is a sample request to call this invocable action from Apex code.

```

```

This example shows a sample response for the Evaluate Compliance Validation Procedure action.

```

```