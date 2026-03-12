---
title: "FlatListRowIterable Class"
domain: retail-api
topic: flatlistrowiterable-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.637Z
estimatedTokens: 494
namespace: CGCloud
keywords: [FlatListRowIterable, Real, Time, Reporting, RTR, report, Flatlist, component, rows, implements, Iterable, batch, processes, hasNext]
---

# FlatListRowIterable Class

> Represents a Real Time Reporting (RTR) report UI Flatlist component set
   of rows. This class implements the Iterable interface that
  allows it to be used in batch processes.

**Namespace:** `CGCloud`

# FlatListRowIterable Class

Represents a Real Time Reporting (RTR) report UI Flatlist component set of rows. This class implements the [Iterable](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_iterable.htm "HTML (New Window)") interface that allows it to be used in batch processes.

## Namespace

[CGCloud](atlas.en-us.retail_api.meta/retail_api/apex_namespace_CGCloud.htm "The CGCloud namespace provides classes that allow you to customise Real Time Reporting (RTR) data extraction from Apex.")

-   **[FlatlistRowIterable Methods](atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatListRowIterable.htm#apex_CGCloud_FlowListRowIterable_methods)**


## FlatlistRowIterable Methods

The following are methods for FlatlistRowIterable.

-   **[hasNext()](atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatListRowIterable.htm#apex_CGReporting_FlatlistRowIterable_hasNext)**
    Returns true if a record can be retrieved.
-   **[next()](atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatListRowIterable.htm#apex_CGReporting_FlatListRowIterable_next)**
    Returns the next record in the dataset.

### hasNext()

Returns true if a record can be retrieved.

#### Signature

public RTRReportResult.FlatlistRowIterable hasNext()

#### Return Value

Type:Boolean

### next()

Returns the next record in the dataset.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

If no more records are present in the dataset, this method returns an error.

#### Signature

public RTRReportResult.FlatlistRowIterable hasNext()

#### Return Value

Type:[FlatlistRow](atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatList.htm#apex_class_CGReporting_RTRReportResult_FlatList "Represents a Real Time Reporting (RTR) report UI Flatlist component. This class extends the ReportComponent class.")

## Related Topics

- CGCloud (atlas.en-us.retail_api.meta/retail_api/apex_namespace_CGCloud.htm)
- FlatlistRowIterable Methods (atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatListRowIterable.htm)
- hasNext() (atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatListRowIterable.htm)
- next() (atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatListRowIterable.htm)
- FlatlistRow (atlas.en-us.retail_api.meta/retail_api/apex_class_CGCloud_RTRReportResult_FlatList.htm)
