---
title: "ReportTypeMetadata Methods"
domain: apex-reference
topic: reporttypemetadata-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.791Z
keywords: [ReportTypeMetadata, Methods, Returns, fields, report, type., organized, section., getCategories, Syntax, Return, Value, getDivisionInfo, Signature, getScopeInfo, getStandardDateFilterDurationGroups, getStandardFilterInfos]
---

# ReportTypeMetadata Methods

> Returns all fields in the report type. The fields are organized
by section.

## ReportTypeMetadata Methods

The following are methods for ReportTypeMetadata. All are instance methods.

-   **[getCategories()](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportTypeMetadata.htm#apex_Reports_ReportTypeMetadata_getCategories)**  
    Returns all fields in the report type. The fields are organized by section.
-   **[getDivisionInfo()](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportTypeMetadata.htm#apex_reports_ReportTypeMetadata_getDivisionInfo)**  
    Returns the default division and a list of all possible divisions that can be applied to this type of report.
-   **[getScopeInfo()](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportTypeMetadata.htm#apex_reports_ReportTypeMetadata_getScopeInfo)**  
    Returns information about the scopes that can be applied to this type of report.
-   **[getStandardDateFilterDurationGroups()](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportTypeMetadata.htm#apex_reports_ReportTypeMetadata_getStandardDateFilterDurationGroups)**  
    Returns information about the standard date filter groupings that can be applied to this type of report. Standard date filter groupings include Calendar Year, Calendar Quarter, Calendar Month, Calendar Week, Fiscal Year, Fiscal Quarter, Day and a custom value based on a user-defined date range.
-   **[getStandardFilterInfos()](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportTypeMetadata.htm#apex_reports_ReportTypeMetadata_getStandardFilterInfos)**  
    Returns information about standard date filters that can be applied to this type of report.

### getCategories()

Returns all fields in the report type. The fields are organized by section.

#### Syntax

public LIST<Reports.ReportTypeColumnCategory> getCategories()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.ReportTypeColumnCategory](atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttypecolumncategory.htm#apex_class_reports_reporttypecolumncategory "Information about categories of fields in a report type.")\>

### getDivisionInfo()

Returns the default division and a list of all possible divisions that can be applied to this type of report.

#### Signature

public Reports.ReportDivisionInfo getDivisionInfo()

#### Return Value

Type: [Reports.ReportDivisionInfo](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportDivisionInfo.htm#apex_class_reports_ReportDivisionInfo "Contains information about the divisions that can be used to filter a report.")

### getScopeInfo()

Returns information about the scopes that can be applied to this type of report.

#### Signature

public Reports.ReportScopeInfo getScopeInfo()

#### Return Value

Type: [Reports.ReportScopeInfo](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportScopeInfo.htm#apex_class_reports_ReportScopeInfo "Contains information about possible scope values that you can choose. Scope values depend on the report type. For example, you can set the scope for opportunity reports to All opportunities, My team’s opportunities, or My opportunities.")

### getStandardDateFilterDurationGroups()

Returns information about the standard date filter groupings that can be applied to this type of report. Standard date filter groupings include Calendar Year, Calendar Quarter, Calendar Month, Calendar Week, Fiscal Year, Fiscal Quarter, Day and a custom value based on a user-defined date range.

#### Signature

public List<Reports.StandardDateFilterDurationGroup> getStandardDateFilterDurationGroups()

#### Return Value

Type: List<[Reports.StandardDateFilterDurationGroup](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDurationGroup.htm#apex_class_reports_StandardDateFilterDurationGroup "Contains information about the standard date filter groupings, such as the grouping display label and all standard date filters that fall under the grouping. Groupings include Calendar Year, Calendar Quarter, Calendar Month, Calendar Week, Fiscal Year, Fiscal Quarter, Day, and custom values based on user-defined date ranges.")\>

### getStandardFilterInfos()

Returns information about standard date filters that can be applied to this type of report.

#### Signature

public Map<String,Reports.StandardFilterInfo> getStandardFilterInfos()

#### Return Value

Type: Map<String,[Reports.StandardFilterInfo](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfo.htm#apex_class_reports_StandardFilterInfo "Is an abstract base class for an object that provides standard filter information.")\>