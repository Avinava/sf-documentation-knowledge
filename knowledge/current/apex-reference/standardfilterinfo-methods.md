---
title: "StandardFilterInfo Methods"
domain: apex-reference
topic: standardfilterinfo-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.815Z
keywords: [StandardFilterInfo, Methods, Returns, display, label, standard, filter., getLabel, Signature, Return, Value, getType]
---

# StandardFilterInfo Methods

> Returns the display label of the standard filter.

## StandardFilterInfo Methods

The following are methods for StandardFilterInfo.

-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfo.htm#apex_reports_StandardFilterInfo_getLabel)**  
    Returns the display label of the standard filter.
-   **[getType()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfo.htm#apex_reports_StandardFilterInfo_getType)**  
    Returns the type of standard filter.

### getLabel()

Returns the display label of the standard filter.

#### Signature

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getType()

Returns the type of standard filter.

#### Signature

public Reports.StandardFilterType getType()

#### Return Value

Type: [Reports.StandardFilterType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_StandardFilterType.htm#apex_enum_reports_StandardFilterType "The StandardFilterType enum describes the type of standard filters in a report. The getType() method returns a Reports.StandardFilterType enum value.")