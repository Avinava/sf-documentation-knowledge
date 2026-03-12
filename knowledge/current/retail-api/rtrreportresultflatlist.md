---
title: "RTRReportResult.Flatlist"
domain: retail-api
topic: rtrreportresultflatlist
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.447Z
estimatedTokens: 373
namespace: The
keywords: [RTRReportResult.Flatlist, RTR, Report, Flatlist, component, Implementation]
---

# RTRReportResult.Flatlist

> This class represents an RTR Report UI Flatlist component.

**Namespace:** `The`

# RTRReportResult.Flatlist

This class represents an RTR Report UI Flatlist component.

## Namespace

The RTRReportResult.Flatlist class extends RTRReportResult.ReportComponent.

The supported modifiers are global and virtual.

```

```

## Supported Methods

| Method signature | Description | Version |
| --- | --- | --- |
| FlatlistRowIterable getRows() | Returns an FlatlistRowIterable instance with all the Flatlist rows. | 60.0 |
| FlatlistRowIterable getRows(String rowTypeFilter) | Returns an FlatlistRowIterable instance with all the rows matching the specified row type filter.rowTypeFilter: String. The available values for the row type filter can be extracted with the getRowTypes method. If a non-existent row type filter is specified, the method throws an exception. | 60.0 |
| Set<String> getColumns() | Returns a set of all the available column names in the flat list.The dimension attribute column values are returned in this format: <Dimension Name.Report Field>. For example, productdimension.id, promotiondimension.phase.The KPI column values are returned with the KPI names. For example, ProPlanIncrVolume.Use these column names to request specific values for each row. | 60.0 |
| Set<String> getRowTypes() | Returns all the available row type filters present in the flat list. The wow type filters can be used to filter the dataset. | 60.0 |

## Example Implementation

After the report is executed, extract the Flatlist data from the RTRReportResult object.

```

```

## Code Examples

```
// Extract the Flatlist from the result
// - The component name must match its 'uimapping' name
// - The result must be casted to the correct type.
cgcloud.RTRReportResult.Flatlist flatlist = (cgcloud.RTRReportResult.Flatlist) reportResult.getComponent('FlatList');
    
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
