---
title: "ThresholdInformation Methods"
domain: apex-reference
topic: thresholdinformation-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.822Z
keywords: [ThresholdInformation, Methods, Returns, list, evaluated, conditions, report, notification., getEvaluatedConditions, Signature, Return, Value]
---

# ThresholdInformation Methods

> Returns a list of evaluated conditions for a report
    notification.

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