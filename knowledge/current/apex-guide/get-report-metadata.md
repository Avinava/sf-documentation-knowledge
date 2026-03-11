---
title: "Get Report Metadata"
domain: apex-guide
topic: get-report-metadata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.254Z
keywords: [Get, Report, Metadata, Example]
---

# Get Report Metadata

# Get Report Metadata

You can retrieve report metadata to get information about a report and its report type.

Metadata includes information about fields that are used in the report for filters, groupings, detailed data, and summaries. You can use the metadata to do several things:

-   Find out what fields and values you can filter on in the report type.
-   Build custom chart visualizations by using the metadata information on fields, groupings, detailed data, and summaries.
-   Change filters in the report metadata when you run a report.

Use the ReportResults.getReportMetadata method to retrieve report metadata. You can then use the “get” methods on the ReportMetadata class to access metadata values.

## Example

The following example retrieves metadata for a report.

```

```