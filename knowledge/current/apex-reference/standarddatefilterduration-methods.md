---
title: "StandardDateFilterDuration Methods"
domain: apex-reference
topic: standarddatefilterduration-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.805Z
keywords: [StandardDateFilterDuration, Methods, Returns, end, date, filter., getEndDate, Signature, Return, Value, getLabel, getStartDate, getValue]
---

# StandardDateFilterDuration Methods

> Returns the end date of the date filter.

## StandardDateFilterDuration Methods

The following are methods for StandardDateFilterDuration.

-   **[getEndDate()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDuration.htm#apex_reports_StandardDateFilterDuration_getEndDate)**  
    Returns the end date of the date filter.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDuration.htm#apex_reports_StandardDateFilterDuration_getLabel)**  
    Returns the display name of the date filter. Possible values are relative date filters—like Current FY and Current FQ—and custom date filters.
-   **[getStartDate()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDuration.htm#apex_reports_StandardDateFilterDuration_getStartDate)**  
    Returns the start date of the date filter.
-   **[getValue()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDuration.htm#apex_reports_StandardDateFilterDuration_getValue)**  
    Returns the API name of the date filter. Possible values are relative date filters—like THIS\_FISCAL\_YEAR and NEXT\_FISCAL\_QUARTER—and custom date filters.

### getEndDate()

Returns the end date of the date filter.

#### Signature

public String getEndDate()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLabel()

Returns the display name of the date filter. Possible values are relative date filters—like Current FY and Current FQ—and custom date filters.

#### Signature

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getStartDate()

Returns the start date of the date filter.

#### Signature

public String getStartDate()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValue()

Returns the API name of the date filter. Possible values are relative date filters—like THIS\_FISCAL\_YEAR and NEXT\_FISCAL\_QUARTER—and custom date filters.

#### Signature

public String getValue()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")