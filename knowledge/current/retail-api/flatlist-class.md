---
title: "FlatList Class"
domain: retail-api
topic: flatlist-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.630Z
estimatedTokens: 981
namespace: CGCloud
keywords: [FlatList, Real, Time, Reporting, RTR, report, component, extends, ReportComponent, Usage, getRows, rowTypeFilter, getColumns, getRowTypes]
---

# FlatList Class

> Represents a Real Time Reporting (RTR) report UI Flatlist
   component. This class extends the ReportComponent
  class.

**Namespace:** `CGCloud`

# FlatList Class

Represents a Real Time Reporting (RTR) report UI Flatlist component. This class extends the ReportComponent class.

## Namespace

[CGCloud](atlas.en-us.retail_api.meta/retail_api/apex_namespace_CGCloud.htm "The CGCloud namespace provides classes that allow you to customise Real Time Reporting (RTR) data extraction from Apex.")

## Usage

The RTRReportResult.FlatList class is used to access Flatlist information from RTR reports.

## Example

Here’s an example of how to extract the Flatlist data from the RTRReportResult object.

```

```

-   **[FlatList Methods](atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatList.htm#apex_CGCloud_FlatList_methods)**


## FlatList Methods

The following are methods for FlatList.

-   **[getRows()](atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatList.htm#apex_CGReporting_getRows)**
    Returns an instance of a FlatlistRowIterable object with all the rows contained in the Flatlist.
-   **[getRows(String rowTypeFilter)](atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatList.htm#apex_CGReporting_getRows_1)**
    Returns an instance of a FlatlistRowIterable object with all the rows that match the specified row type filter. The available values for the row type filter can be extracted with the getRowTypes method.
-   **[getColumns()](atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatList.htm#apex_CGReporting_getColumns)**
    Returns a set that includes all the available column names in the Flatlist.
-   **[getRowTypes()](atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatList.htm#apex_CGReporting_getRowTypes)**
    Returns all the available row type filters present in the Flatlist. The row type filters can be used to filter the dataset.

### getRows()

Returns an instance of a FlatlistRowIterable object with all the rows contained in the Flatlist.

#### Signature

static RTRReportResult.FlatList getRows()

#### Return Value

Type:[FlatlistRowIterable](atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatListRowIterable.htm#apex_class_CGReporting_RTRReportResult_FlatListRowIterable "Represents a Real Time Reporting (RTR) report UI Flatlist component set of rows. This class implements the Iterable interface that allows it to be used in batch processes.")

### getRows(String rowTypeFilter)

Returns an instance of a FlatlistRowIterable object with all the rows that match the specified row type filter. The available values for the row type filter can be extracted with the getRowTypes method.

#### Signature

static RTRReportResult.FlatList getRows(String rowTypeFilter)

#### Parameters

rowTypeFilter

Type:String

The value of the row type to filter the rows.

#### Return Value

Type:[FlatlistRowIterable](atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatListRowIterable.htm#apex_class_CGReporting_RTRReportResult_FlatListRowIterable "Represents a Real Time Reporting (RTR) report UI Flatlist component set of rows. This class implements the Iterable interface that allows it to be used in batch processes.")

### getColumns()

Returns a set that includes all the available column names in the Flatlist.

The method returns the following:

-   Dimension attributes—Include the name of the dimension and a report field separated by a dot. For example, productdimension.id, promotiondimension.id, and promotiondimension.phase.
-   KPI columns—Include the KPI name. For example, ProPlanIncrVolume.

#### Signature

static RTRReportResult.FlatList getColumns()

#### Return Value

Type:Set<String>

### getRowTypes()

Returns all the available row type filters present in the Flatlist. The row type filters can be used to filter the dataset.

#### Signature

static RTRReportResult.FlatList getRowTypes()

#### Return Value

Type:Set<String>

## Code Examples

```
// Extract the Flatlist from the result
// - The component name must match its 'uimapping' name
// - The result must be casted to the correct type.
cgcloud.RTRReportResult.Flatlist flatlist = (cgcloud.RTRReportResult.Flatlist) 
    reportResult.getComponent('FlatList');
    
// Retrieve the rows Iterable object
// All rows can be retrieved with the parameter-less "getRows"
cgcloud.RTRReportResult.FlatlistRowIterable iterator = flatlist.getRows('Promo-Product');

// Iterate over all the rows
while (iterator.hasNext()) {
    cgcloud.RTRReportResult.FlatlistRow row = iterator.next();
    
    // Extract column data. We assume the specified columns are in the report
    
    // Dimension information can be extracted with <dimension name>.<field>
    String promotionId = String.valueOf(row.getColumnValue('promotiondimension.id'));
    // KPI Value information can be extracted by querying the KPI Name
    Decimal kpiValue = (Decimal) row.getColumnValue('ProPlanIncrVolume');
    
    system.debug('Values: ' + promotionId + ' ' + kpiValue);
}
```

## Related Topics

- CGCloud (atlas.en-us.retail_api.meta/retail_api/apex_namespace_CGCloud.htm)
- FlatList Methods (atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatList.htm)
- getRows() (atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatList.htm)
- getRows(String rowTypeFilter) (atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatList.htm)
- getColumns() (atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatList.htm)
- getRowTypes() (atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatList.htm)
- FlatlistRowIterable (atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatListRowIterable.htm)
