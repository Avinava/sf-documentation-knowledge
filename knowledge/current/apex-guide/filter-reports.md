---
title: "Filter Reports"
domain: apex-guide
topic: filter-reports
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.236Z
keywords: [Filter, Reports, Example]
---

# Filter Reports

# Filter Reports

To get specific results on the fly, you can filter reports through the API.

Changes to filters that are made through the API don’t affect the source report definition. Using the API, you can filter with up to 20 custom field filters and add filter logic (such as AND and OR). But standard filters (such as range), filtering by row limit, and cross filters are unavailable.

Before you filter a report, it’s helpful to check the following filter values in the metadata.

-   The ReportTypeColumn.getFilterable method tells you whether a field can be filtered.
-   The ReportTypeColumn.filterValues method returns all filter values for a field.
-   The ReportManager.dataTypeFilterOperatorMap method lists the field data types that you can use to filter the report.
-   The ReportMetadata.getReportFilters method lists all filters that exist in the report.

You can filter reports during synchronous or asynchronous report runs.

## Example

To filter a report, set filter values in the report metadata and then run the report. The following example retrieves the report metadata, overrides the filter value, and runs the report. The example:

1.  Retrieves the report filter object from the metadata by using the ReportMetadata.getReportFilters method.
2.  Sets the value in the filter to a specific date by using the ReportFilter.setValue method and runs the report.
3.  Overrides the filter value to a different date and runs the report again.

The output for the example shows the differing grand total values, based on the date filter that was applied.

```

```