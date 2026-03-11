---
title: "EvaluatedCondition Methods"
domain: apex-reference
topic: evaluatedcondition-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.754Z
keywords: [EvaluatedCondition, Methods, Returns, localized, display, name, aggregate., getAggregateLabel, Signature, Return, Value, getAggregateName, getCompareTo, getDisplayCompareTo, getDisplayValue, getOperator, getValue]
---

# EvaluatedCondition Methods

> Returns the localized display name of the aggregate.

## EvaluatedCondition Methods

The following are methods for EvaluatedCondition.

-   **[getAggregateLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_EvaluatedCondition.htm#apex_reports_EvaluatedCondition_getAggregateLabel)**  
    Returns the localized display name of the aggregate.
-   **[getAggregateName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_EvaluatedCondition.htm#apex_reports_EvaluatedCondition_getAggregateName)**  
    Returns the unique API name of the aggregate.
-   **[getCompareTo()](atlas.en-us.apexref.meta/apexref/apex_class_reports_EvaluatedCondition.htm#apex_reports_EvaluatedCondition_getCompareTo)**  
    Returns the value that the aggregate is compared to in the condition.
-   **[getDisplayCompareTo()](atlas.en-us.apexref.meta/apexref/apex_class_reports_EvaluatedCondition.htm#apex_reports_EvaluatedCondition_getDisplayCompareTo)**  
    Returns the value that the aggregate is compared to in the condition, formatted for display. For example, a display value for a currency is $20.00 or USD20.00 instead of 20.00.
-   **[getDisplayValue()](atlas.en-us.apexref.meta/apexref/apex_class_reports_EvaluatedCondition.htm#apex_reports_EvaluatedCondition_getDisplayValue)**  
    Returns the value of the aggregate when the report is run, formatted for display. For example, a display value for a currency is $20.00 or USD20.00 instead of 20.00.
-   **[getOperator()](atlas.en-us.apexref.meta/apexref/apex_class_reports_EvaluatedCondition.htm#apex_reports_EvaluatedCondition_getOperator)**  
    Returns the operator used in the condition.
-   **[getValue()](atlas.en-us.apexref.meta/apexref/apex_class_reports_EvaluatedCondition.htm#apex_reports_EvaluatedCondition_getValue)**  
    Returns the actual value of the aggregate when the report is run.

### getAggregateLabel()

Returns the localized display name of the aggregate.

#### Signature

public String getAggregateLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getAggregateName()

Returns the unique API name of the aggregate.

#### Signature

public String getAggregateName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getCompareTo()

Returns the value that the aggregate is compared to in the condition.

#### Signature

public Double getCompareTo()

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### getDisplayCompareTo()

Returns the value that the aggregate is compared to in the condition, formatted for display. For example, a display value for a currency is $20.00 or USD20.00 instead of 20.00.

#### Signature

public String getDisplayCompareTo()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getDisplayValue()

Returns the value of the aggregate when the report is run, formatted for display. For example, a display value for a currency is $20.00 or USD20.00 instead of 20.00.

#### Signature

public String getDisplayValue()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getOperator()

Returns the operator used in the condition.

#### Signature

public Reports.EvaluatedConditionOperator getOperator()

#### Return Value

Type: [Reports.EvaluatedConditionOperator](atlas.en-us.apexref.meta/apexref/apex_enum_reports_evaluatedconditionoperator.htm "The Reports.EvaluatedConditionOperator enum describes the type of operator used to compare an aggregate to a value. It is returned by the getOperator method.")

### getValue()

Returns the actual value of the aggregate when the report is run.

#### Signature

public Double getValue()

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")