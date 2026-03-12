---
title: "StandardFilterInfoPicklist Class"
domain: apex-reference
topic: standardfilterinfopicklist-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.404Z
estimatedTokens: 760
namespace: Reports
keywords: [StandardFilterInfoPicklist, standard, filter, picklist, display, possible, getDefaultValue, getFilterValues, getLabel, getType]
---

# StandardFilterInfoPicklist Class

> Contains information about the standard filter picklist, such as the
      display name and type of the filter field, the default picklist value, and a list of all
      possible picklist values.

**Namespace:** `Reports`

# StandardFilterInfoPicklist Class

Contains information about the standard filter picklist, such as the display name and type of the filter field, the default picklist value, and a list of all possible picklist values.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

-   **[StandardFilterInfoPicklist Methods](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfoPicklist.htm#apex_reports_StandardFilterInfoPicklist_methods)**


## StandardFilterInfoPicklist Methods

The following are methods for StandardFilterInfoPicklist.

-   **[getDefaultValue()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfoPicklist.htm#apex_reports_StandardFilterInfoPicklist_getDefaultValue)**
    Returns the default value for the standard filter picklist.
-   **[getFilterValues()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfoPicklist.htm#apex_reports_StandardFilterInfoPicklist_getFilterValues)**
    Returns a list of standard filter picklist values.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfoPicklist.htm#apex_reports_StandardFilterInfoPicklist_getLabel)**
    Returns the display name of the standard filter picklist.
-   **[getType()](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfoPicklist.htm#apex_reports_StandardFilterInfoPicklist_getType)**
    Returns the type of the standard filter picklist.

### getDefaultValue()

Returns the default value for the standard filter picklist.

#### Signature

public String getDefaultValue()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getFilterValues()

Returns a list of standard filter picklist values.

#### Signature

public List<Reports.FilterValue> getFilterValues()

#### Return Value

Type: List<[Reports.FilterValue](atlas.en-us.apexref.meta/apexref/apex_class_reports_filtervalue.htm#apex_class_reports_filtervalue "Contains information about a filter value, such as the display name and API name.")\>

### getLabel()

Returns the display name of the standard filter picklist.

#### Signature

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getType()

Returns the type of the standard filter picklist.

#### Signature

public Reports.StandardFilterType getType()

#### Return Value

Type: [Reports.StandardFilterType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_StandardFilterType.htm#apex_enum_reports_StandardFilterType "The StandardFilterType enum describes the type of standard filters in a report. The getType() method returns a Reports.StandardFilterType enum value.")

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- StandardFilterInfoPicklist Methods (atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfoPicklist.htm)
- getDefaultValue() (atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfoPicklist.htm)
- getFilterValues() (atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfoPicklist.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfoPicklist.htm)
- getType() (atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfoPicklist.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Reports.FilterValue (atlas.en-us.apexref.meta/apexref/apex_class_reports_filtervalue.htm)
- Reports.StandardFilterType (atlas.en-us.apexref.meta/apexref/apex_enum_reports_StandardFilterType.htm)
