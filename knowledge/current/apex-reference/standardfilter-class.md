---
title: "StandardFilter Class"
domain: apex-reference
topic: standardfilter-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.993Z
estimatedTokens: 676
namespace: Reports
keywords: [StandardFilter, Contains, information, standard, filter, defined, report, such, field, API, name, value., Usage, getName, getValue, setName, setValue]
---

# StandardFilter Class

> Contains information about the standard filter defined in the report,
      such as the filter field API name and filter value.

**Namespace:** `Reports`

# StandardFilter Class

Contains information about the standard filter defined in the report, such as the filter field API name and filter value.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## Usage

Use to get or set standard filters on a report. Standard filters vary by report type. For example, standard filters for reports on the Opportunity object are Show, Opportunity Status, and Probability.

-   **[StandardFilter Methods](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilter.htm#apex_reports_StandardFilter_methods)**


## StandardFilter Methods

The following are methods for StandardFilter.

-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilter.htm#apex_reports_StandardFilter_getName)**
    Return the API name of the standard filter.
-   **[getValue()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilter.htm#apex_reports_StandardFilter_getValue)**
    Returns the standard filter value.
-   **[setName(name)](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilter.htm#apex_reports_StandardFilter_setName)**
    Sets the API name of the standard filter.
-   **[setValue(value)](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilter.htm#apex_reports_StandardFilter_setValue)**
    Sets the standard filter value.

### getName()

Return the API name of the standard filter.

#### Signature

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValue()

Returns the standard filter value.

#### Signature

public String getValue()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### setName(name)

Sets the API name of the standard filter.

#### Signature

public void setName(String name)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setValue(value)

Sets the standard filter value.

#### Signature

public void setValue(String value)

#### Parameters

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- StandardFilter Methods (atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilter.htm)
- getName() (atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilter.htm)
- getValue() (atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilter.htm)
- setName(name) (atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilter.htm)
- setValue(value) (atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilter.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
