---
title: "ThresholdInformation Class"
domain: apex-reference
topic: thresholdinformation-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.408Z
estimatedTokens: 695
namespace: Reports
keywords: [ThresholdInformation, evaluated, conditions, report, notification, evaluatedConditions, getEvaluatedConditions]
---

# ThresholdInformation Class

> Contains a list of evaluated conditions for a report
      notification.

**Namespace:** `Reports`

# ThresholdInformation Class

Contains a list of evaluated conditions for a report notification.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

-   **[ThresholdInformation Constructors](atlas.en-us.apexref.meta/apexref/apex_class_reports_ThresholdInformation.htm#apex_reports_ThresholdInformation_constructors)**

-   **[ThresholdInformation Methods](atlas.en-us.apexref.meta/apexref/apex_class_reports_ThresholdInformation.htm#apex_reports_ThresholdInformation_methods)**


## ThresholdInformation Constructors

The following are constructors for ThresholdInformation.

-   **[ThresholdInformation(evaluatedConditions)](atlas.en-us.apexref.meta/apexref/apex_class_reports_ThresholdInformation.htm#apex_reports_ThresholdInformation_ctor)**
    Creates a new instance of the Reports.EvaluatedCondition class.

### ThresholdInformation(evaluatedConditions)

Creates a new instance of the Reports.EvaluatedCondition class.

#### Signature

public ThresholdInformation(List<Reports.EvaluatedCondition> evaluatedConditions)

#### Parameters

evaluatedConditions

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.EvaluatedCondition](atlas.en-us.apexref.meta/apexref/apex_class_reports_EvaluatedCondition.htm#apex_class_reports_EvaluatedCondition "Contains the individual components of an evaluated condition for a report notification, such as the aggregate name and label, the operator, and the value that the aggregate is compared to.")\>

A list of Reports.EvaluatedCondition objects.

## ThresholdInformation Methods

The following are methods for ThresholdInformation.

-   **[getEvaluatedConditions()](atlas.en-us.apexref.meta/apexref/apex_class_reports_ThresholdInformation.htm#apex_reports_ThresholdInformation_getEvaluatedConditions)**
    Returns a list of evaluated conditions for a report notification.

### getEvaluatedConditions()

Returns a list of evaluated conditions for a report notification.

#### Signature

public List<Reports.EvaluatedCondition> getEvaluatedConditions()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.EvaluatedCondition](atlas.en-us.apexref.meta/apexref/apex_class_reports_EvaluatedCondition.htm#apex_class_reports_EvaluatedCondition "Contains the individual components of an evaluated condition for a report notification, such as the aggregate name and label, the operator, and the value that the aggregate is compared to.")\>

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- ThresholdInformation Constructors (atlas.en-us.apexref.meta/apexref/apex_class_reports_ThresholdInformation.htm)
- ThresholdInformation Methods (atlas.en-us.apexref.meta/apexref/apex_class_reports_ThresholdInformation.htm)
- ThresholdInformation(evaluatedConditions) (atlas.en-us.apexref.meta/apexref/apex_class_reports_ThresholdInformation.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Reports.EvaluatedCondition (atlas.en-us.apexref.meta/apexref/apex_class_reports_EvaluatedCondition.htm)
- getEvaluatedConditions() (atlas.en-us.apexref.meta/apexref/apex_class_reports_ThresholdInformation.htm)
