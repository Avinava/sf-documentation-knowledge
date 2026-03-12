---
title: "RTRReportResult.FlatlistRow"
domain: retail-api
topic: rtrreportresultflatlistrow
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.444Z
estimatedTokens: 202
namespace: The
keywords: [RTRReportResult.FlatlistRow, row, RTR, Report, Flatlist, component, Implementation]
---

# RTRReportResult.FlatlistRow

> This class represents a single row in an RTR Report UI Flatlist component.

**Namespace:** `The`

# RTRReportResult.FlatlistRow

This class represents a single row in an RTR Report UI Flatlist component.

## Namespace

The supported modifiers are global and virtual.

```

```

## Supported Methods

| Method signature | Description | Version |
| --- | --- | --- |
| Object getColumnValue(String columnName) | Extracts the column value of the given column name for the current row.columnName: String. The name of the column to retrieve the value.The dimension attribute column values are returned in this format: <Dimension Name.Report Field>. For example, productdimension.id, promotiondimension.phase.The KPI column values are returned with the KPI names. For example, ProPlanIncrVolume. | 60.0 |
| String getRowType() | Returns the Type of the Flatlist row. | 60.0 |

## Example Implementation

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
