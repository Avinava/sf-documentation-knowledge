---
title: "ReportChartComponentLayoutItem Class"
domain: apex-reference
topic: reportchartcomponentlayoutitem-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.570Z
estimatedTokens: 1850
namespace: Metadata
keywords: [ReportChartComponentLayoutItem, Represents, settings, report, chart, standard, custom, page., Usage, cacheData, contextFilterableField, error, hideOnError, includeContext, reportName, showTitle, size, clone]
---

# ReportChartComponentLayoutItem Class

> Represents the settings for a report chart on a standard or custom
      page.

**Namespace:** `Metadata`

# ReportChartComponentLayoutItem Class

Represents the settings for a report chart on a standard or custom page.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [Metadata.Layout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “ReportChartComponentLayoutItem” in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm).

-   **[ReportChartComponentLayoutItem Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm#apex_Metadata_ReportChartComponentLayoutItem_properties)**

-   **[ReportChartComponentLayoutItem Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm#apex_Metadata_ReportChartComponentLayoutItem_methods)**


## ReportChartComponentLayoutItem Properties

The following are properties for ReportChartComponentLayoutItem.

-   **[cacheData](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm#apex_Metadata_ReportChartComponentLayoutItem_cacheData)**
    Indicates whether to use cached data when displaying the chart. When the attribute is set to true, data is cached for 24 hours. When the attribute is set to false, the report is run every time the page is refreshed.
-   **[contextFilterableField](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm#apex_Metadata_ReportChartComponentLayoutItem_contextFilterableField)**
    Unique development name of the field by which a report chart is filtered to return data relevant to the page. If set, the ID field for the parent object of the page or report type is the chart data filter. The parent object for the report type and the page must match for a chart to return relevant data.
-   **[error](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm#apex_Metadata_ReportChartComponentLayoutItem_error)**
    Error string that is populated only when an error occurs in the underlying report.
-   **[hideOnError](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm#apex_Metadata_ReportChartComponentLayoutItem_hideOnError)**
    Controls whether users see a chart that has an error. When an error occurs and this attribute is not set, the chart doesn’t show any data except the error. Set the attribute to true to hide the chart from a page on error.
-   **[includeContext](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm#apex_Metadata_ReportChartComponentLayoutItem_includeContext)**
    If true, filters the report chart to return data that’s relevant to the page.
-   **[reportName](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm#apex_Metadata_ReportChartComponentLayoutItem_reportName)**
    Unique development name of a report that includes a chart.
-   **[showTitle](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm#apex_Metadata_ReportChartComponentLayoutItem_showTitle)**
    If true, applies the title from the report to the chart.
-   **[size](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm#apex_Metadata_ReportChartComponentLayoutItem_size)**
    Size of the displayed chart. The default is medium.

### cacheData

Indicates whether to use cached data when displaying the chart. When the attribute is set to true, data is cached for 24 hours. When the attribute is set to false, the report is run every time the page is refreshed.

#### Signature

public Boolean cacheData {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### contextFilterableField

Unique development name of the field by which a report chart is filtered to return data relevant to the page. If set, the ID field for the parent object of the page or report type is the chart data filter. The parent object for the report type and the page must match for a chart to return relevant data.

#### Signature

public String contextFilterableField {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### error

Error string that is populated only when an error occurs in the underlying report.

#### Signature

public String error {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### hideOnError

Controls whether users see a chart that has an error. When an error occurs and this attribute is not set, the chart doesn’t show any data except the error. Set the attribute to true to hide the chart from a page on error.

#### Signature

public Boolean hideOnError {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### includeContext

If true, filters the report chart to return data that’s relevant to the page.

#### Signature

public Boolean includeContext {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### reportName

Unique development name of a report that includes a chart.

#### Signature

public String reportName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### showTitle

If true, applies the title from the report to the chart.

#### Signature

public Boolean showTitle {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### size

Size of the displayed chart. The default is medium.

#### Signature

public Metadata.ReportChartComponentSize size {get; set;}

#### Property Value

Type: [Metadata.ReportChartComponentSize](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_ReportChartComponentSize.htm#apex_enum_Metadata_ReportChartComponentSize "Describes the size of the displayed report chart component.")

## ReportChartComponentLayoutItem Methods

The following are methods for ReportChartComponentLayoutItem.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm#apex_Metadata_ReportChartComponentLayoutItem_clone)**
    Makes a duplicate copy of the Metadata.ReportChartComponentLayoutItem.

### clone()

Makes a duplicate copy of the Metadata.ReportChartComponentLayoutItem.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- Metadata.Layout (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- ReportChartComponentLayoutItem Properties (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm)
- ReportChartComponentLayoutItem Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm)
- cacheData (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm)
- contextFilterableField (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm)
- error (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm)
- hideOnError (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm)
- includeContext (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm)
- reportName (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm)
