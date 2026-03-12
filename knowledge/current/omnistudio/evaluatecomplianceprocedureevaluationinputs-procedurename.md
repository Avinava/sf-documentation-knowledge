---
title: "evaluateComplianceProcedure(evaluationInputs, procedureName)"
domain: omnistudio
topic: evaluatecomplianceprocedureevaluationinputs-procedurename
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.421Z
estimatedTokens: 265
keywords: [evaluateComplianceProcedure, evaluationInputs, procedureName, Evaluate, compliance, procedure, business, context., API, Version, Example]
---

# evaluateComplianceProcedure(evaluationInputs, procedureName)

> Evaluate a compliance procedure with a business context.

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

## Code Examples

```apex
public class evaluate {

    public void evaluate() {
        
        List<ConnectApi.ComplianceProcedureBusinessContext> bizContextList = new List<ConnectApi.ComplianceProcedureBusinessContext>();
        ConnectApi.ComplianceProcedureBusinessContext bizContext = new ConnectApi.ComplianceProcedureBusinessContext();
                bizContext.paramName = 'Acc';
        bizContext.paramValue = '001xx000003GYiCAAW';
        ConnectApi.ComplianceProcedureBusinessContext bizContext2 = new ConnectApi.ComplianceProcedureBusinessContext();
                bizContext2.paramName = 'Con';
        bizContext2.paramValue = '003xx000004WhFqAAK';
        bizContextList.add(bizContext);
        bizContextList.add(bizContext2);
        
        String procedureAPIName = 'VP';
        ConnectApi.ComplianceProcedureEvaluationInfo procInputReq = new ConnectApi.ComplianceProcedureEvaluationInfo();
        procInputReq.transactionKey = 'someKey';
            procInputReq.inContextOf = 'a00xx000000boXlAAI';
        procInputReq.businessContext = bizContextList;
        
            List<ConnectApi.ComplianceProcedureEvaluationInfo> inputList = new List<ConnectApi.ComplianceProcedureEvaluationInfo>{procInputReq};
            ConnectApi.ComplianceProcedureEvaluationRequest input = new ConnectApi.ComplianceProcedureEvaluationRequest();
            input.evaluations = inputList;

            // Call API
            ConnectApi.ComplianceProcedureEvaluationResponse response = ConnectApi.IndustriesCompliance.evaluateComplianceProcedure(procedureAPIName, input);
        System.debug('Response**********' + response);
    }
}
```

## Related Topics

- ConnectApi.ComplianceProcedureEvaluationRequest (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_compliance_procedure_evaluation_request.htm)
- ConnectApi.ComplianceProcedureEvaluationResponse (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_compliance_procedure_evaluation_response.htm)
