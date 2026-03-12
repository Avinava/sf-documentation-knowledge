---
title: "StandardFilterInfo Class"
domain: apex-reference
topic: standardfilterinfo-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.997Z
estimatedTokens: 416
namespace: Reports
keywords: [StandardFilterInfo, abstract, base, provides, standard, filter, information., getLabel, getType]
---

# StandardFilterInfo Class

> Is an abstract base class for an object that provides standard filter
      information.

**Namespace:** `Reports`

# StandardFilterInfo Class

Is an abstract base class for an object that provides standard filter information.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

-   **[StandardFilterInfo Methods](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfo.htm#apex_reports_StandardFilterInfo_methods)**


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

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- StandardFilterInfo Methods (atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfo.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfo.htm)
- getType() (atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfo.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Reports.StandardFilterType (atlas.en-us.apexref.meta/apexref/apex_enum_reports_StandardFilterType.htm)
