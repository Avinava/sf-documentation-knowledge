---
title: "List Asynchronous Runs of a Report"
domain: apex-guide
topic: list-asynchronous-runs-of-a-report
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.248Z
keywords: [List, Asynchronous, Runs, Report, Example]
---

# List Asynchronous Runs of a Report

# List Asynchronous Runs of a Report

You can retrieve up to 2,000 instances of a report that you ran asynchronously.

The instance list is sorted by the date and time when the report was run. Report results are stored for a rolling 24-hour period. During this time, based on your user access level, you can access results for each instance of the report that was run.

## Example

You can get the instance list by calling the ReportManager.getReportInstances method. For example:

```

```