---
title: "ComplianceEvaluationResponse Class"
domain: omnistudio
topic: complianceevaluationresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.470Z
estimatedTokens: 1209
namespace: ComplianceMgmt
keywords: [ComplianceEvaluationResponse, Represents, compliance, evaluation, response, control, evaluation., It's, output, ComplianceEvaluation, interface's, evaluate, includes, two, properties—evaluationResult, complianceControlLog., Example, evaluationResult, complianceControlLog, getComplianceControlLog]
---

# ComplianceEvaluationResponse Class

> Represents the compliance evaluation response from a control evaluation. It's the output
        of the ComplianceEvaluation interface's evaluate method and includes two
        properties—evaluationResult and complianceControlLog.

**Namespace:** `ComplianceMgmt`

# ComplianceEvaluationResponse Class

Represents the compliance evaluation response from a control evaluation. It's the output of the ComplianceEvaluation interface's evaluate method and includes two properties—evaluationResult and complianceControlLog.

## Namespace

[ComplianceMgmt](atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_ComplianceMgmt.htm "The ComplianceMgmt namespace provides classes and methods to implement rule processors for compliance control.")

## Example

```

```

-   **[ComplianceEvaluationResponse Constructors](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceEvaluationResponse.htm#apex_ComplianceMgmt_ComplianceEvaluationResponse_constructors)**
    Learn more about the constructors available with the ComplianceEvaluationResponse class.
-   **[ComplianceEvaluationResponse Methods](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceEvaluationResponse.htm#apex_ComplianceMgmt_ComplianceEvaluationResponse_methods)**
    Learn more about the methods available with the ComplianceEvaluationResponse class.

## ComplianceEvaluationResponse Constructors

Learn more about the constructors available with the ComplianceEvaluationResponse class.

The ComplianceEvaluationResponse class includes this constructor.

-   **[ComplianceEvaluationResponse(evaluationResult, complianceControlLog)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceEvaluationResponse.htm#apex_ComplianceMgmt_ComplianceEvaluationResponse_ctor)**
    Creates ComplianceEvaluationResponse object.

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

## ComplianceEvaluationResponse Methods

Learn more about the methods available with the ComplianceEvaluationResponse class.

The ComplianceEvaluationResponse class includes these methods.

-   **[getComplianceControlLog()](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceEvaluationResponse.htm#apex_ComplianceMgmt_ComplianceEvaluationResponse_getComplianceControlLog)**
    Gets the ComplianceControlLog object that contains the details of the compliance control logs.
-   **[getEvaluationResult()](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceEvaluationResponse.htm#apex_ComplianceMgmt_ComplianceEvaluationResponse_getEvaluationResult)**
    Gets the EvaluationResult object that contains the details of the compliance evaluation result.

### getComplianceControlLog()

Gets the ComplianceControlLog object that contains the details of the compliance control logs.

#### Signature

public ComplianceMgmt.ComplianceControlLog getComplianceControlLog()

```

```

#### Return Value

Type: [ComplianceMgmt.ComplianceControlLog](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceControlLog.htm#apex_class_ComplianceMgmt_ComplianceControlLog "Represents a map of business context and evidence that's logged to evaluate compliance for the control.")

### getEvaluationResult()

Gets the EvaluationResult object that contains the details of the compliance evaluation result.

#### Signature

public ComplianceMgmt.EvaluationResult getEvaluationResult()

```

```

#### Return Value

Type: [ComplianceMgmt.EvaluationResult](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_EvaluationResult.htm#apex_class_ComplianceMgmt_EvaluationResult "Represents the object that contains the details of the compliance evaluation result. It contains three properties—isCompliant, complianceMessage, and complianceLogMessage.")

## Code Examples

```apex
@VisibleApiVersion(minApiVersion='256')
global class ComplianceEvaluationResponse {
   EvaluationResult evaluationResult; // The compliance evaluation result.
   ComplianceControlLog complianceControlLog; // The business context and evidence attributes that need to be logged for compliance check.

   global ComplianceEvaluationResponse(EvaluationResult evaluationResult, ComplianceControlLog complianceControlLog) {
       this.evaluationResult = evaluationResult;
       this.complianceControlLog = complianceControlLog;
   }

   global EvaluationResult getEvaluationResult() {
       return this.evaluationResult;
   }

   global ComplianceControlLog getComplianceControlLog() {
       return this.complianceControlLog;
   }
}
```

```
ComplianceMgmt.ComplianceEvaluationResponse, newinstance, [ComplianceMgmt.EvaluationResult, ComplianceMgmt.ComplianceControlLog], ComplianceMgmt.ComplianceEvaluationResponse
```

```
ComplianceMgmt.ComplianceEvaluationResponse, getComplianceControlLog, [], ComplianceMgmt.ComplianceControlLog
```

```
ComplianceMgmt.ComplianceEvaluationResponse, getEvaluationResult, [], ComplianceMgmt.EvaluationResult
```

## Related Topics

- ComplianceMgmt (atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_ComplianceMgmt.htm)
- ComplianceEvaluationResponse Constructors (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceEvaluationResponse.htm)
- ComplianceEvaluationResponse Methods (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceEvaluationResponse.htm)
- ComplianceEvaluationResponse(evaluationResult, complianceControlLog) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceEvaluationResponse.htm)
- ComplianceMgmt.EvaluationResult (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_EvaluationResult.htm)
- ComplianceMgmt.ComplianceControlLog (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceControlLog.htm)
- getComplianceControlLog() (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceEvaluationResponse.htm)
- getEvaluationResult() (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceEvaluationResponse.htm)
