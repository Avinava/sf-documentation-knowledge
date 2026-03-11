---
title: "StandardDateFilterDurationGroup Methods"
domain: apex-reference
topic: standarddatefilterdurationgroup-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.809Z
keywords: [StandardDateFilterDurationGroup, Methods, Returns, display, label, standard, date, filter, grouping., getLabel, Signature, Return, Value, getStandardDateFilterDurations]
---

# StandardDateFilterDurationGroup Methods

> Returns the display label for the standard date filter
    grouping.

## StandardDateFilterDurationGroup Methods

The following are methods for StandardDateFilterDurationGroup.

-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDurationGroup.htm#apex_reports_StandardDateFilterDurationGroup_getLabel)**  
    Returns the display label for the standard date filter grouping.
-   **[getStandardDateFilterDurations()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDurationGroup.htm#apex_reports_StandardDateFilterDurationGroup_getStandardDateFilterDurations)**  
    Returns the standard date filter groupings.

### getLabel()

Returns the display label for the standard date filter grouping.

#### Signature

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getStandardDateFilterDurations()

Returns the standard date filter groupings.

#### Signature

public List<Reports.StandardDateFilterDuration> getStandardDateFilterDurations()

#### Return Value

Type: List<[Reports.StandardDateFilterDuration](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDuration.htm#apex_class_reports_StandardDateFilterDuration "Contains information about each standard date filter—also referred to as a relative date filter. It contains the API name and display label of the standard date filter duration as well as the start and end dates.")\>

For example, a standard filter date grouping might look like this:

```

```