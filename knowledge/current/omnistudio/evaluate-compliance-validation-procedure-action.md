---
title: "Evaluate Compliance Validation Procedure Action"
domain: omnistudio
topic: evaluate-compliance-validation-procedure-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.286Z
estimatedTokens: 385
keywords: [Evaluate, Compliance, Validation, Procedure, Action, compliance, validation, procedure, create, evaluation, API, response., Special, Access, Rules, Supported, REST, HTTP, Inputs, Outputs]
---

# Evaluate Compliance Validation Procedure Action

> Evaluate a compliance validation procedure, and create a procedure
			evaluation API response.

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

## Code Examples

```
{
  "inputs": [
    {
      "cmplValidationProcedureApiName": "VP",
      "cmplVldProcedureEvaluationRequest": {
        "inContextOf": "inContextOf",
        "transactionKey": "transactionKey",
        "businessContext": [
          {
            "paramName": "accountId",
            "paramValue": "12345"
          }
        ]
      },
      "businessOperationsProcess": "BOP1"
 
   }
  ]
}
```

```apex
public class TestSyncApi {

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

```
{
      "actionName": "evalCmplValidationProcedure",
      "errors": null,
      "invocationId": null,
      "isSuccess": true,
      "outcome": null,
      "outputValues": {
         "cmplVldProcedureEvaluationResp": {
            "controls": [
               {
                  "complianceControlId": "18Qxx0000004C92EAE",
                  "complianceControlVersionId": "18txx0000004C92AAE",
                  "complianceMessage": "This message indicates result is compliant",
                  "errorId": null,
                  "errorMessage": null,
                  "isCompliant": true,
                  "status": "Success"
               }
            ],
            "errorId": null,
            "errorMessage": null,
            "isCompliant": true,
            "status": "Success",
            "transactionId": "48aaccbe-5349-4d32-af34-9d4121f7f30c",
            "transactionKey": "anyKey"
         }
      },
      "sortOrder": -1,
      "version": 1
   }
```
