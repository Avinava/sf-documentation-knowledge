---
title: "DescribeQuickActionParameter Class"
domain: apex-reference
topic: describequickactionparameter-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.233Z
estimatedTokens: 1222
namespace: QuickAction
keywords: [DescribeQuickActionParameter, corresponding, quick, action, parametername, parametertype, parametervalue, getParameterName, getParameterType, getParameterValue]
---

# DescribeQuickActionParameter Class

> Represents the parameters corresponding to a quick action.

**Namespace:** `QuickAction`

# DescribeQuickActionParameter Class

Represents the parameters corresponding to a quick action.

## Namespace

[QuickAction](atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm "The QuickAction namespace provides classes and methods for quick actions.")

-   **[DescribeQuickActionParameter Properties](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm#apex_QuickAction_DescribeQuickActionParameter_properties)**
    Learn more about the available properties with the CalculateTaxRequest class.
-   **[DescribeQuickActionParameter Methods](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm#apex_QuickAction_DescribeQuickActionParameter_methods)**


## DescribeQuickActionParameter Properties

Learn more about the available properties with the CalculateTaxRequest class.

The following are properties for DescribeQuickActionParameter.The following are properties for DescribeQuickActionParameter.

-   **[parametername](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm#apex_QuickAction_DescribeQuickActionParameter_parametername)**
    Describes the name of the parameter that can be associated with a specific quick action type. For example, User Utterance is a parameter that is associated with agent quick actions.
-   **[parametertype](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm#apex_QuickAction_DescribeQuickActionParameter_parametertype)**
    Describes the type of quick action. The type can either be Input or Output.
-   **[parametervalue](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm#apex_QuickAction_DescribeQuickActionParameter_parametervalue)**
    Describes the value of the parameter associated with the quick action.

### parametername

Describes the name of the parameter that can be associated with a specific quick action type. For example, User Utterance is a parameter that is associated with agent quick actions.

#### Signature

public String parametername {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### parametertype

Describes the type of quick action. The type can either be Input or Output.

#### Signature

public String parametertype {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### parametervalue

Describes the value of the parameter associated with the quick action.

#### Signature

public String parametervalue {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## DescribeQuickActionParameter Methods

The following are methods for DescribeQuickActionParameter.

-   **[getParameterName()](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm#apex_QuickAction_DescribeQuickActionParameter_getParameterName)**
    Returns the name of the parameter associated with the quick action.
-   **[getParameterType()](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm#apex_QuickAction_DescribeQuickActionParameter_getParameterType)**
    Returns the type of the parameter associated with the quick action. This can either be Input or Output.
-   **[getParameterValue()](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm#apex_QuickAction_DescribeQuickActionParameter_getParameterValue)**
    Returns the value of the parameter associated with the quick action.

### getParameterName()

Returns the name of the parameter associated with the quick action.

#### Signature

public String getParameterName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getParameterType()

Returns the type of the parameter associated with the quick action. This can either be Input or Output.

#### Signature

public String getParameterType()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getParameterValue()

Returns the value of the parameter associated with the quick action.

#### Signature

public String getParameterValue()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- QuickAction (atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm)
- DescribeQuickActionParameter Properties (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm)
- DescribeQuickActionParameter Methods (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm)
- parametername (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm)
- parametertype (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm)
- parametervalue (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- getParameterName() (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm)
- getParameterType() (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm)
- getParameterValue() (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm)
