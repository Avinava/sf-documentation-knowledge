---
title: "GroupingInfo Class"
domain: apex-reference
topic: groupinginfo-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.445Z
estimatedTokens: 735
namespace: Reports
keywords: [GroupingInfo, describing, grouping, getName, getSortOrder, getDateGranularity, getSortAggregate]
---

# GroupingInfo Class

> Contains methods for describing fields that are used for
grouping.

**Namespace:** `Reports`

# GroupingInfo Class

Contains methods for describing fields that are used for grouping.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## GroupingInfo Methods

The following are methods for GroupingInfo. All are instance methods.

-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupinginfo.htm#apex_Reports_GroupingInfo_getName)**
    Returns the unique API name of the field or bucket field that is used for row or column grouping.
-   **[getSortOrder()](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupinginfo.htm#apex_Reports_GroupingInfo_getSortOrder)**
    Returns the order that is used to sort data in a row or column grouping (ASCENDING or DESCENDING).
-   **[getDateGranularity()](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupinginfo.htm#apex_Reports_GroupingInfo_getDateGranularity)**
    Returns the date interval that is used for row or column grouping.
-   **[getSortAggregate()](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupinginfo.htm#apex_Reports_GroupingInfo_getSortAggregate)**
    Returns the summary field that is used to sort data within a grouping in a summary report. The value is null when data within a grouping is not sorted by a summary field.

### getName()

Returns the unique API name of the field or bucket field that is used for row or column grouping.

#### Syntax

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSortOrder()

Returns the order that is used to sort data in a row or column grouping (ASCENDING or DESCENDING).

#### Syntax

public Reports.ColumnSortOrder getSortOrder()

#### Return Value

Type: [Reports.ColumnSortOrder](atlas.en-us.apexref.meta/apexref/apex_enum_reports_columnsortorder.htm "The Reports.ColumnSortOrder enum describes the order that the grouping column uses to sort data.")

### getDateGranularity()

Returns the date interval that is used for row or column grouping.

#### Syntax

public Reports.DateGranularity getDateGranularity()

#### Return Value

Type: [Reports.DateGranularity](atlas.en-us.apexref.meta/apexref/apex_enum_reports_dategranularity.htm "The Reports.DateGranularity enum describes the date interval that is used for grouping.")

### getSortAggregate()

Returns the summary field that is used to sort data within a grouping in a summary report. The value is null when data within a grouping is not sorted by a summary field.

#### Syntax

public String getSortAggregate()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- getName() (atlas.en-us.apexref.meta/apexref/apex_class_reports_groupinginfo.htm)
- getSortOrder() (atlas.en-us.apexref.meta/apexref/apex_class_reports_groupinginfo.htm)
- getDateGranularity() (atlas.en-us.apexref.meta/apexref/apex_class_reports_groupinginfo.htm)
- getSortAggregate() (atlas.en-us.apexref.meta/apexref/apex_class_reports_groupinginfo.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Reports.ColumnSortOrder (atlas.en-us.apexref.meta/apexref/apex_enum_reports_columnsortorder.htm)
- Reports.DateGranularity (atlas.en-us.apexref.meta/apexref/apex_enum_reports_dategranularity.htm)
