---
title: "EvaluatedCondition Constructors"
domain: apex-reference
topic: evaluatedcondition-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.754Z
keywords: [EvaluatedCondition, Constructors, Creates, new, instance, Reports.EvaluatedConditions, class, specified, parameters., aggregateName, aggregateLabel, compareToValue, aggregateValue, displayCompareTo, displayValue, operator, Signature, Parameters]
---

# EvaluatedCondition Constructors

> Creates a new instance of the Reports.EvaluatedConditions class using the specified parameters.

## EvaluatedCondition Constructors

The following are constructors for EvaluatedCondition.

-   **[EvaluatedCondition(aggregateName, aggregateLabel, compareToValue, aggregateValue, displayCompareTo, displayValue, operator)](atlas.en-us.apexref.meta/apexref/apex_class_reports_EvaluatedCondition.htm#apex_reports_EvaluatedCondition_ctor)**  
    Creates a new instance of the Reports.EvaluatedConditions class using the specified parameters.

### EvaluatedCondition(aggregateName, aggregateLabel, compareToValue, aggregateValue, displayCompareTo, displayValue, operator)

Creates a new instance of the Reports.EvaluatedConditions class using the specified parameters.

#### Signature

public EvaluatedCondition(String aggregateName, String aggregateLabel, Double compareToValue, Double aggregateValue, String displayCompareTo, String displayValue, Reports.EvaluatedConditionOperator operator)

#### Parameters

aggregateName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The unique API name of the aggregate.

aggregateLabel

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The localized display name of the aggregate.

compareToValue

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The value that the aggregate is compared to in the condition.

aggregateValue

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The actual value of the aggregate when the report is run.

displayCompareTo

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The value that the aggregate is compared to in the condition, formatted for display. For example, a display value for a currency is $20.00 or USD20.00 instead of 20.00.

displayValue

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The value of the aggregate when the report is run, formatted for display. For example, a display value for a currency is $20.00 or USD20.00 instead of 20.00.

operator

Type: [Reports.EvaluatedConditionOperator](atlas.en-us.apexref.meta/apexref/apex_enum_reports_evaluatedconditionoperator.htm "The Reports.EvaluatedConditionOperator enum describes the type of operator used to compare an aggregate to a value. It is returned by the getOperator method.")

The operator used in the condition.