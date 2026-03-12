---
title: "RTRReportResult.FlatlistRowIterable"
domain: retail-api
topic: rtrreportresultflatlistrowiterable
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.440Z
estimatedTokens: 163
namespace: The
keywords: [RTRReportResult.FlatlistRowIterable, rows, RTR, Report, Flatlist, component, Implementation]
---

# RTRReportResult.FlatlistRowIterable

> This class represents a set of rows in an RTR Report UI Flatlist component.

**Namespace:** `The`

# RTRReportResult.FlatlistRowIterable

This class represents a set of rows in an RTR Report UI Flatlist component.

## Namespace

The RTRReportResult.FlatlistRowIterable class implements the Iterator<FlatlistRow> interface. You can use this class in batch processes.

The supported modifiers are global and virtual.

```

```

## Supported Methods

| Method signature | Description | Version |
| --- | --- | --- |
| boolean hasNext() | Returns true if a record is retrievable. | 60.0 |
| FlatlistRow next() | Returns the next record in the dataset. If no more records are present, it throws an exception. | 60.0 |

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
