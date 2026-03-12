---
title: "REST API Endpoints"
domain: retail-api
topic: rest-api-endpoints
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.227Z
estimatedTokens: 405
keywords: [REST, API, Endpoints, different]
---

# REST API Endpoints

> This section describes the different REST API endpoints.

# REST API Endpoints

This section describes the different REST API endpoints.

| Available in: Lightning Experience in Enterprise and Unlimited Editions that have Consumer Goods Cloud Trade Promotion Management enabled. |
| --- |


-   **[Abort Export Process](atlas.en-us.retail_api.meta/retail_api/connect_resources_abort_export.htm)**
    Uses the POST method to set the state of a CSV export process to Aborted.
-   **[Get Measure Exports](atlas.en-us.retail_api.meta/retail_api/connect_resources_fetch_status_scheduled_exports.htm)**
    Uses the GET method to retrieve the list of the exports scheduled for a particular period.
-   **[Triggering CSV Exports](atlas.en-us.retail_api.meta/retail_api/rtr_triggering_csv_exports.htm)**
    Use the Triggering CSV Exports API to trigger CSV exports simultaneously. The CSV exports are generated asynchronously.
-   **[Checking Job Status](atlas.en-us.retail_api.meta/retail_api/rtr_checking_job_status.htm)**
    Use the CSV Export Job Status API to get the status of the scheduled export. The API uses the csvGuid of the scheduled export as an input parameter.
-   **[Committing CSV Export](atlas.en-us.retail_api.meta/retail_api/rtr_commiting_csv.htm)**
    Use the Commit CSV Export API to commit a specific csvGuid and take the related CSV as a new baseline for future delta exports. This means after this commit, the next delta export contains only those records in the KPIs that have been either added, changed, or deleted from the previous committed state.
-   **[Retrieving CSV Exports](atlas.en-us.retail_api.meta/retail_api/rtr_retrieving_csv_exports.htm)**

## Related Topics

- Abort Export Process (atlas.en-us.retail_api.meta/retail_api/connect_resources_abort_export.htm)
- Get Measure Exports (atlas.en-us.retail_api.meta/retail_api/connect_resources_fetch_status_scheduled_exports.htm)
- Triggering CSV Exports (atlas.en-us.retail_api.meta/retail_api/rtr_triggering_csv_exports.htm)
- Checking Job Status (atlas.en-us.retail_api.meta/retail_api/rtr_checking_job_status.htm)
- Committing CSV Export (atlas.en-us.retail_api.meta/retail_api/rtr_commiting_csv.htm)
- Retrieving CSV Exports (atlas.en-us.retail_api.meta/retail_api/rtr_retrieving_csv_exports.htm)
