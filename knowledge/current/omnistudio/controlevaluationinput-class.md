---
title: "ControlEvaluationInput Class"
domain: omnistudio
topic: controlevaluationinput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.476Z
estimatedTokens: 734
namespace: ComplianceMgmt
keywords: [ControlEvaluationInput, Represents, input, used, ComplianceEvaluation, interface's, evaluate, method., contains, map, ControlInput, stores, business, context, required, compliance., Example, getControlInputValue, controlInput, setControlInputValue]
---

# ControlEvaluationInput Class

> Represents the input object used by the ComplianceEvaluation interface's evaluate method.
        It contains a map of ControlInput class that stores the business context value required to
        evaluate compliance.

**Namespace:** `ComplianceMgmt`

# ControlEvaluationInput Class

Represents the input object used by the ComplianceEvaluation interface's evaluate method. It contains a map of ControlInput class that stores the business context value required to evaluate compliance.

## Namespace

[ComplianceMgmt](atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_ComplianceMgmt.htm "The ComplianceMgmt namespace provides classes and methods to implement rule processors for compliance control.")

## Example

```

```

-   **[ControlEvaluationInput Methods](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ControlEvaluationInput.htm#apex_ComplianceMgmt_ControlEvaluationInput_methods)**
    Learn more about the methods available with the ComplianceEvaluationInput class.

## ControlEvaluationInput Methods

Learn more about the methods available with the ComplianceEvaluationInput class.

The ControlEvaluationInput class includes these methods.

-   **[getControlInputValue(controlInput)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ControlEvaluationInput.htm#apex_ComplianceMgmt_ControlEvaluationInput_getControlInputValue)**
    Gets the value associated with the ControlInput class.
-   **[setControlInputValue(controlInput, value)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ControlEvaluationInput.htm#apex_ComplianceMgmt_ControlEvaluationInput_setControlInputValue)**
    Sets the values for ControlInputValue object, such as parameterName and parameterType.

### getControlInputValue(controlInput)

Gets the value associated with the ControlInput class.

#### Signature

public String getControlInputValue(ComplianceMgmt.ControlInput controlInput)

```

```

#### Parameters

controlInput

Type: [ComplianceMgmt.ControlInput](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ControlInput.htm#apex_class_ComplianceMgmt_ControlInput "Represents a control input that's used in the evaluation of compliance. It includes two main properties: parameterName and parameterType.")

The ControlInput class object you must get the value for.

#### Return Value

Type: String

### setControlInputValue(controlInput, value)

Sets the values for ControlInputValue object, such as parameterName and parameterType.

#### Signature

public void setControlInputValue(ComplianceMgmt.ControlInput controlInput, String value)

```

```

#### Parameters

controlInput

Type: [ComplianceMgmt.ControlInput](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ControlInput.htm#apex_class_ComplianceMgmt_ControlInput "Represents a control input that's used in the evaluation of compliance. It includes two main properties: parameterName and parameterType.")

Input details of the ControlInput class object.

value

Type: String

Value of the control input.

#### Return Value

Type: void

## Code Examples

```apex
@VisibleApiVersion(minApiVersion='256')
global class ControlEvaluationInput {
    Map<ControlInput, String> controlInputMap; // Map of ControlInput class and value (business context) that is needed for evaluating compliance

    global ControlEvaluationInput() {
        this.controlInputMapRecordIdType = new Map<ControlInput, String>();
    }

    global void setControlInputValue(ControlInput controlInput, String value) {
       this.controlInputMapRecordIdType.put(controlInput, value);
    }

    global String getControlInputValue(ControlInput controlInput) {
       return this.controlInputMapRecordIdType.get(controlInput);
    }
}
```

```
ComplianceMgmt.ControlEvaluationInput, getControlInputValue, [ComplianceMgmt.ControlInput], String
```

```
ComplianceMgmt.ControlEvaluationInput, setControlInputValue, [ComplianceMgmt.ControlInput, String], void
```

## Related Topics

- ComplianceMgmt (atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_ComplianceMgmt.htm)
- ControlEvaluationInput Methods (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ControlEvaluationInput.htm)
- getControlInputValue(controlInput) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ControlEvaluationInput.htm)
- setControlInputValue(controlInput, value) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ControlEvaluationInput.htm)
- ComplianceMgmt.ControlInput (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ControlInput.htm)
