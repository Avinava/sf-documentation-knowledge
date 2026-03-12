---
title: "Evaluate Compliance Validation Procedure Asynchronous Action"
domain: omnistudio
topic: evaluate-compliance-validation-procedure-asynchronous-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.291Z
estimatedTokens: 343
keywords: [Evaluate, Compliance, Validation, Procedure, Asynchronous, Action, Asynchronously, evaluate, compliance, validation, procedure, create, evaluation, job, ID., Special, Access, Rules, Supported, REST]
---

# Evaluate Compliance Validation Procedure Asynchronous Action

> Asynchronously evaluate a compliance validation procedure and create a procedure
        evaluation job ID.

# Evaluate Compliance Validation Procedure Asynchronous Action

Asynchronously evaluate a compliance validation procedure and create a procedure evaluation job ID.

This action is available in API version 65.0 and later.

## Special Access Rules

To use this action, you must have the Compliance User permission set.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/evalCmplVldProcedureAsync

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| cmplValidation​ProcedureApiName | TypestringDescriptionRequired. API name of the compliance validation procedure. |
| cmplVldProcedure​AsyncEvaluation​Request | TypeApex-definedDescriptionRequired. An Apex ConnectApi.ComplianceProcedureEvaluationRequest record that contains the procedure evaluation API request. |

## Outputs

| Output | Details |
| --- | --- |
| complianceAsync​EvaluationJobId | TypestringDescriptionID of the asynchronous compliance evaluation job that's created. |

## Example

POST

This example shows a sample request for the Evaluate Compliance Validation Procedure Asynchronous action.

```

```

This is a sample request to call this invocable action from Apex code.

```

```

This example shows a sample response for the Evaluate Compliance Validation Procedure Asynchronous action.

```

```

## Code Examples

```
{
    "inputs": [
        {
            "cmplValidationProcedureApiName": "SenthilApexValidation",
            "cmplVldProcedureAsyncEvaluationRequest": {
                "evaluations": [
                    {
                        "inContextOf": "inContextOf1",
                        "transactionKey": "transactionKey1",
                        "businessContext": [
                            {
                                "paramName": "Param",
                                "paramValue": "001SG00000kGZNWYA4"
                            }
                        ]
                    }
                ],
                "businessOperationsProcess": "SenthilBusinessProcess"
            }
        }
    ]
}
```

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

public class JobStatus {
  public void getJobStatus() {
    String jobId = '<JOB ID>';
    Integer pageSize = 10;
    Integer offset = 0;

    // Call API
    ConnectApi.ComplianceJobStatusRepresentation response = 
      ConnectApi.IndustriesCompliance.getComplianceJobResults(jobId, pageSize,
      offset);
    System.debug('Response**********' + response);
  }
}

// Execute the method
JobStatus jobStatus = new JobStatus();
jobStatus.getJobStatus();
```

```
{
  "actionName": "retrieveCmplAsyncEvalJobDtl",
  "errors": null,
  "invocationId": null,
  "isSuccess": true,
  "outcome": null,
  "outputValues": {
    "complianceAsyncEvaluationJobId": "1VUSG000000N4J3"
  },
  "sortOrder": -1,
  "version": 1
}
```
