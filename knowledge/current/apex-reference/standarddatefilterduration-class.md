---
title: "StandardDateFilterDuration Class"
domain: apex-reference
topic: standarddatefilterduration-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.384Z
estimatedTokens: 785
namespace: Reports
keywords: [StandardDateFilterDuration, standard, date, filter—also, referred, relative, filter, API, display, label, duration, well, start, end, dates]
---

# StandardDateFilterDuration Class

> Contains information about each standard date filter—also
      referred to as a relative date filter. It contains the API name and display label of the
      standard date filter duration as well as the start and end dates.

**Namespace:** `Reports`

# StandardDateFilterDuration Class

Contains information about each standard date filter—also referred to as a relative date filter. It contains the API name and display label of the standard date filter duration as well as the start and end dates.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

-   **[StandardDateFilterDuration Methods](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDuration.htm#apex_reports_StandardDateFilterDuration_methods)**


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

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- StandardDateFilterDuration Methods (atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDuration.htm)
- getEndDate() (atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDuration.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDuration.htm)
- getStartDate() (atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDuration.htm)
- getValue() (atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDuration.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
