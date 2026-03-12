---
title: "ComplianceEvaluation Interface"
domain: omnistudio
topic: complianceevaluation-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.849Z
estimatedTokens: 777
namespace: ComplianceMgmt
keywords: [ComplianceEvaluation, Contains, evaluate, compliance, control., Add, logic, compute, var1, data, ControlEvaluationInput, class., Usage, Example, Implementation]
---

# ComplianceEvaluation Interface

> Contains a method to evaluate compliance control. Add logic to compute compliance in the
    evaluate(var1) method by using the data from ControlEvaluationInput class.

**Namespace:** `ComplianceMgmt`

# ComplianceEvaluation Interface

Contains a method to evaluate compliance control. Add logic to compute compliance in the evaluate(var1) method by using the data from ControlEvaluationInput class.

## Namespace

[ComplianceMgmt](atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_ComplianceMgmt.htm "The ComplianceMgmt namespace provides classes and methods to implement rule processors for compliance control.")

## Usage

Evaluates compliance by passing the parameter name and value.

-   **[ComplianceEvaluation Methods](atlas.en-us.industries_reference.meta/industries_reference/apex_interface_ComplianceMgmt_ComplianceEvaluation.htm#apex_ComplianceMgmt_ComplianceEvaluation_methods)**
    Learn more about the methods available with the ComplianceEvaluation interface.
-   **[ComplianceEvaluation Example Implementation](atlas.en-us.industries_reference.meta/industries_reference/apex_interface_ComplianceMgmt_ComplianceEvaluation.htm#apex_interface_ComplianceMgmt_ComplianceEvaluation_Example)**
    Refer to the example implementation of the ComplianceEvaluation interface to evaluate the compliance.

## ComplianceEvaluation Methods

Learn more about the methods available with the ComplianceEvaluation interface.

The ComplianceEvaluation interface includes these methods.

-   **[evaluate(var1)](atlas.en-us.industries_reference.meta/industries_reference/apex_interface_ComplianceMgmt_ComplianceEvaluation.htm#apex_ComplianceMgmt_ComplianceEvaluation_evaluate)**
    Evaluates compliance by using ControlEvaluationInput class.

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

## ComplianceEvaluation Example Implementation

Refer to the example implementation of the ComplianceEvaluation interface to evaluate the compliance.

This is an example implementation of the ComplianceMgmt.ComplianceEvaluation interface.

```

```

This example tests the implementation:

```

```

## Code Examples

```
ComplianceMgmt.ComplianceEvaluation, evaluate, [ComplianceMgmt.ControlEvaluationInput], ComplianceMgmt.ComplianceEvaluationResponse
```

```apex
@VisibleApiVersion(minApiVersion='256')
global interface ComplianceEvaluation {
// Evaluates compliance by passing the parameter name/value.
ComplianceEvaluationResponse evaluate(ControlEvaluationInput input);
}
```

```apex
global class TestImpl implements ComplianceMgmt.ComplianceEvaluation { 
        global ComplianceMgmt.ComplianceEvaluationResponse evaluate(ComplianceMgmt.ControlEvaluationInput input) {  
            ComplianceMgmt.ControlInput controlInput = new ComplianceMgmt.ControlInput('Param1', ComplianceMgmt.ControlInputType.RecordId);
            Account account = [SELECT Name,ShippingCountry FROM Account WHERE Id=:input.getControlInputValue(controlInput)];
            boolean iscompliant = false;
            String complianceMessage = String.format(System.Label.testLabelWithMergeFields , new List<String>{ account.Name });
            String complianceLogMessage = null;
            if (account.ShippingCountry != 'USA') {
                iscompliant = true;
                complianceLogMessage = 'Is compliant';
            } else {
                complianceLogMessage = 'Not compliant';
            }
            ComplianceMgmt.EvaluationResult result = new ComplianceMgmt.EvaluationResult(iscompliant, complianceMessage, complianceLogMessage);
            ComplianceMgmt.ComplianceControlLog logConfig = new ComplianceMgmt.ComplianceControlLog(); 
            logConfig.addLog('key1', 'value1'); 
            ComplianceMgmt.ComplianceEvaluationResponse response = new ComplianceMgmt.ComplianceEvaluationResponse(result, logConfig);
            return response;
        } 
    }
```

## Related Topics

- ComplianceMgmt (atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_ComplianceMgmt.htm)
- ComplianceEvaluation Methods (atlas.en-us.industries_reference.meta/industries_reference/apex_interface_ComplianceMgmt_ComplianceEvaluation.htm)
- ComplianceEvaluation Example Implementation (atlas.en-us.industries_reference.meta/industries_reference/apex_interface_ComplianceMgmt_ComplianceEvaluation.htm)
- evaluate(var1) (atlas.en-us.industries_reference.meta/industries_reference/apex_interface_ComplianceMgmt_ComplianceEvaluation.htm)
- ComplianceMgmt.ControlEvaluationInput (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ControlEvaluationInput.htm)
- ComplianceMgmt.ComplianceEvaluationResponse (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ComplianceEvaluationResponse.htm)
