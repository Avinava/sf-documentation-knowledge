---
title: "FlatListRow Class"
domain: retail-api
topic: flatlistrow-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.633Z
estimatedTokens: 374
namespace: CGCloud
keywords: [FlatListRow, Real, Time, Reporting, RTR, report, Flatlist, component, rows, getColumnValue, columnName]
---

# FlatListRow Class

> Represents a Real Time Reporting (RTR) report UI Flatlist component
      single rows.

**Namespace:** `CGCloud`

# FlatListRow Class

Represents a Real Time Reporting (RTR) report UI Flatlist component single rows.

## Namespace

[CGCloud](atlas.en-us.retail_api.meta/retail_api/apex_namespace_CGCloud.htm "The CGCloud namespace provides classes that allow you to customise Real Time Reporting (RTR) data extraction from Apex.")

-   **[FlatListRow Methods](atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatListRow.htm#apex_CGCloud_FlatListRow_methods)**


## FlatListRow Methods

The following are methods for FlatListRow.

-   **[getColumnValue(String columnName)](atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatListRow.htm#apex_CGReporting_FlatListRow_getColumnValue)**
    Extracts the column value specified for the column name Row type filters can be used to filter the dataset.

### getColumnValue(String columnName)

Extracts the column value specified for the column name Row type filters can be used to filter the dataset.

#### Signature

public RTRReportResult.FlatListRow getColumnValue(String columnName)

#### Parameters

columnName

Type:String

The name of the column whose value is to be retrieved.

The column name has the following format:

-   Dimension attributes—Include the name of the dimension and a report field separated by a dot. For example, productdimension.id, promotiondimension.id, and promotiondimension.phase.
-   KPI columns—Include the KPI name. For example, ProPlanIncrVolume.

#### Return Value

Type:Object

## Related Topics

- CGCloud (atlas.en-us.retail_api.meta/retail_api/apex_namespace_CGCloud.htm)
- FlatListRow Methods (atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatListRow.htm)
- getColumnValue(String columnName) (atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatListRow.htm)
