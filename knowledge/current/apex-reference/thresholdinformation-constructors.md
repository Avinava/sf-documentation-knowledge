---
title: "ThresholdInformation Constructors"
domain: apex-reference
topic: thresholdinformation-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.822Z
keywords: [ThresholdInformation, Constructors, Creates, new, instance, Reports.EvaluatedCondition, class., evaluatedConditions, Signature, Parameters]
---

# ThresholdInformation Constructors

> Creates a new instance of the Reports.EvaluatedCondition class.

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