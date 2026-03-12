---
title: "evaluateComplianceProcedureAsync(procedureName,
      evaluationInputs)"
domain: omnistudio
topic: evaluatecomplianceprocedureasyncprocedurename-evaluationinputs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.425Z
estimatedTokens: 340
keywords: [evaluateComplianceProcedureAsync, procedureName, evaluationInputs, Asynchronously, evaluate, compliance, procedure, business, context., API, Version, Requires, Chatter, Usage, Example]
---

# evaluateComplianceProcedureAsync(procedureName,
      evaluationInputs)

> Asynchronously evaluate a compliance procedure with the business context.

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

## Code Examples

```apex
public class EvaluationAsync {
  public void evaluationAsync() {
    List<ConnectApi.ComplianceProcedureBusinessContext> bizContextList = 
      new List<ConnectApi.ComplianceProcedureBusinessContext>();
    
    ConnectApi.ComplianceProcedureBusinessContext bizContext = 
      new ConnectApi.ComplianceProcedureBusinessContext();
    bizContext.paramName = 'Acc';
    bizContext.paramValue = '001xx000003GYiCAAW';
    
    ConnectApi.ComplianceProcedureBusinessContext bizContext2 = 
      new ConnectApi.ComplianceProcedureBusinessContext();
    bizContext2.paramName = 'Con';
    bizContext2.paramValue = '003xx000004WhFqAAK';
    bizContextList.add(bizContext);
    bizContextList.add(bizContext2);
        
    String procedureAPIName = 'VP';
    ConnectApi.ComplianceProcedureEvaluationInfo procInputReq = 
      new ConnectApi.ComplianceProcedureEvaluationInfo();
    procInputReq.transactionKey = 'someKey';
    procInputReq.inContextOf = 'a00xx000000boXlAAI';
    procInputReq.businessContext = bizContextList;
        
    List<ConnectApi.ComplianceProcedureEvaluationInfo> inputList = 
      new List<ConnectApi.ComplianceProcedureEvaluationInfo>{procInputReq};
    ConnectApi.ComplianceProcedureEvaluationRequest input = 
      new ConnectApi.ComplianceProcedureEvaluationRequest();
    input.evaluations = inputList;

    // Call API
    ConnectApi.ComplianceProcedureAsyncEvaluationRepresentation response = 
     ConnectApi
       .IndustriesCompliance
       .evaluateComplianceProcedureAsync(procedureAPIName, input);
     System.debug('Response**********' + response);
  }
}

// Execute the method
EvaluationAsync evaluationAsync = new EvaluationAsync();
evaluationAsync.evaluationAsync();
```

## Related Topics

- ConnectApi.ComplianceProcedureEvaluationRequest (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_compliance_procedure_evaluation_request.htm)
- ConnectApi.ComplianceProcedureAsyncEvaluationRepresentation (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_compliance_procedure_async_evaluation.htm)
