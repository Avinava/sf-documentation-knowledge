---
title: "setDetails(details)"
domain: apex-reference
topic: setdetailsdetails
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.053Z
keywords: [setDetails, details, Sets, updates, learning, item, record, evaluation, instance., Signature, Parameters, Return, Value]
---

# setDetails(details)

> Sets or updates the details of the learning item record for this learning evaluation
    instance.

### setDetails(details)

Sets or updates the details of the learning item record for this learning evaluation instance.

#### Signature

public void setDetails(Map<String,Object> details)

#### Parameters

details

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[Object](atlas.en-us.apexref.meta/apexref/apex_class_System_Object.htm#apex_class_System_Object "Contains methods that are implemented by all Apex types.")\>

The details of the learning item record that you get by calling [evaluateLearningItem API](https://developer.salesforce.com/docs/platform/lwc/guide/reference-evaluate-learning-item.html).

#### Return Value

Type: void