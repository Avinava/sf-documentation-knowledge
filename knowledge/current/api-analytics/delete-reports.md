---
title: "Delete Reports"
domain: api-analytics
topic: delete-reports
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.758Z
estimatedTokens: 136
keywords: [Reports, report, sending, resource, Deleted, moved, Recycle, Bin]
---

# Delete Reports

> Delete a report by sending a DELETE request to the Report resource. Deleted reports
        are moved to the Recycle Bin.

# Delete Reports

Delete a report by sending a DELETE request to the Report resource. Deleted reports are moved to the Recycle Bin.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_analytics)

#### Note

Deleting a report also cancels any running async report jobs and deletes all scheduled notifications.

## Example

This DELETE request /services/data/v34.0/analytics/reports/00OD0000001cxIE to the Report resource deletes the report and returns a 204 HTTP response code with no content in the response body.
