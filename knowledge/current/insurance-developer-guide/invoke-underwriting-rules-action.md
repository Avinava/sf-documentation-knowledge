---
title: "Invoke Underwriting Rules Action"
domain: insurance-developer-guide
topic: invoke-underwriting-rules-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.653Z
estimatedTokens: 260
keywords: [Invoke, Underwriting, Rules, Action, different, insurance, records, run, time, REST, HTTP, Inputs, Outputs]
---

# Invoke Underwriting Rules Action

> Invoke the underwriting rules for different insurance records during the run
  time.

# Invoke Underwriting Rules Action

Invoke the underwriting rules for different insurance records during the run time.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/invokeUnderwritingRules

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| invokeUnderwritingRuleInputRep | TypeApex-definedDescriptionRequired.An Apex ConnectApi.InvokeUnderwritingRuleInputRep record that contains the details of the object records to which the underwriting rules are to be applied. |

## Outputs

| Output | Details |
| --- | --- |
| invokeUnderwritingRuleOputRep | TypeApex-definedDescriptionAn Apex ConnectApi.InvokeUnderwritingRuleOputRep record that contains the details of the object records to which the underwriting rules were applied. |

## Example

Sample Request

```

```

This is a sample request to call this invocable action from Apex code.

```

```

Sample Response

```

```

## Code Examples

```
{
    "inputs": [
        {
            "invokeUnderwritingRuleInputRep": {
                "objectId": "0Zkxx000000001qCAA",
                "toStage": "Open"
            }
        }
    ]
}
```

```apex
public class InsuranceUnderwritingRuleApexService implements Callable {
    
    private static final String METHOD_INVOKE_UW_RULE = 'invokeUnderwritingRule';
    private static final String OUTPUT_NAME = 'invokeUnderwritingRuleOputRep';
    
    /**
     * @description Implementation of Callable interface for OmniStudio
     * @param action Method name to invoke
     * @param args Map containing input, output, and options
     * @return Object result of the method invocation
     */
    public Object call(String action, Map<String, Object> args) {
        System.debug('InsuranceQuoteApexService: call ' + action);
        Boolean response = false;
        Map<String, Object> input = (Map<String, Object>) args.get('input');
        Map<String, Object> output = (Map<String, Object>) args.get('output');
        Map<String, Object> options = (Map<String, Object>) args.get('options');

         if (METHOD_INVOKE_UW_RULE.equals(action)) {
             if (!input.containsKey('objectId') || input.get('objectId') == null) {
                 throw new IllegalArgumentException('objectId is missing or null');
             }
             if (!input.containsKey('toStage') || input.get('toStage') == null) {
                 throw new IllegalArgumentException('toStage is missing or null');
             }
             String objectId = (String)input.get('objectId');
             String toStage = (String)input.get('toStage');
             Object ruleResult = invokeUWRules(objectId, toStage);
             output.put('ruleResult', ruleResult);
             response = true;
         }
        return response;
    }     
    
    public static Object invokeUWRules(String objectId, String toStage) {
        System.debug('InsuranceUnderwritingRuleApexService: objectId:' +  objectId + ', toStage : ' + toStage);
 
            Object outputRep;
            
            try {
          
                
                System.debug('Calling Invocable Action: invokeUnderwritingRules');
            
                // Create and configure the invocable action
                Invocable.Action action = Invocable.Action.createStandardAction('invokeUnderwritingRules');
                
                // Set required invocation parameters
                ConnectApi.invokeUnderwritingRuleInputRep inputRep = new ConnectApi.invokeUnderwritingRuleInputRep();
                inputRep.objectId = objectId;
                inputRep.toStage = toStage;
                action.setInvocationParameter('invokeUnderwritingRuleInputRep', inputRep);
                
                // Execute the action
                List<Invocable.Action.Result> results = action.invoke();
                
                if (results != null && !results.isEmpty()) {
                    Invocable.Action.Result result = results[0];
                    
                    if (result.isSuccess()) {
                        System.debug('Invoke UW Rule successfully from Invocable Action'); 
                        // Extract key information from the result
                        Map<String, Object> outputParams = result.getOutputParameters();
                        if (outputParams != null) {
                            outputRep = outputParams.get(OUTPUT_NAME);
                             System.debug('output: ' + JSON.serialize(outputRep));

                            return outputRep; 
                        }
                    } else {
                         System.debug('invoke UW Rule fail: ' + result);
                         return result.getErrors();
                    }
                }
                
            } catch (Exception e) {
                throw e;
            }
        return outputRep;
    }
}
```

```
[
  {
    "actionName": "invokeUnderwritingRules",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "invokeUnderwritingRuleOputRep": {
        "objectId": "0Zkxx000000001qCAA",
        "objectName": "Claim",
        "fromStage": "Draft",
        "toStage": "Open",
        "stageTransitionName": "Draft to Open",
        "stageTransitionUnderwritingEvaluationId": "1Mjxx00000004C0CA2",
        "isSuccess": true,
        "rulesetResults": [
          {
            "productId": "01tSM000005OFyGYAW",
            "evaluationCriteria": "1 OR 2",
            "isSuccess": true,
            "ruleResults": [
              {
                "ruleApiName": "CollisionRule",
                "isSuccess": true
              },
              {
                "ruleApiName": "AutoSilverRule",
                "isSuccess": true
              }
            ]
          },
          {
            "productId": "01tSM000005OFyJYAW",
            "evaluationCriteria": "1",
            "isSuccess": true,
            "ruleResults": [
              {
                "ruleApiName": "MedicalRule1",
                "isSuccess": true
              }
            ]
          }
        ]
      }
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
