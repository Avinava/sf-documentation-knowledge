---
title: "Triggering the CSV Export Process"
domain: retail-api
topic: triggering-the-csv-export-process
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.321Z
estimatedTokens: 542
keywords: [Triggering, CSV, Export, Process, configured, integration, metadata, report, triggered, endpoints, provided, RTR, gateway, finished, file]
---

# Triggering the CSV Export Process

> The CSV export for a configured integration metadata report is triggered with endpoints
  provided by the RTR gateway. When the CSV export process is finished, the CSV file can be
  downloaded through the integration API endpoints.

# Triggering the CSV Export Process

The CSV export for a configured integration metadata report is triggered with endpoints provided by the RTR gateway. When the CSV export process is finished, the CSV file can be downloaded through the integration API endpoints.

| Available in: Lightning Experience in Enterprise and Unlimited Editions that have Consumer Goods Cloud Trade Promotion Management enabled. |
| --- |


-   **[Abort Export Process](atlas.en-us.retail_api.meta/retail_api/apex_tpm_abort_export.htm)**
    Sets the state of a CSV export process to Aborted. When a CSV export process is running for a longer duration than expected, it consumes resources and blocks the scheduling of new exports. The following Abort Export code snippet unblocks the scheduling by aborting the export process.
-   **[Triggering CSV Export](atlas.en-us.retail_api.meta/retail_api/rtr_triggering_csv_export.htm)**
    This Apex call expects the mandatory values of the business year, the actual name of the RTR report config record, and the sales org that must be exported.
-   **[Checking CSV Export Status](atlas.en-us.retail_api.meta/retail_api/rtr_checking_csv_export_status.htm)**
    The next step is to check the status of this export.
-   **[Committing CSV Export](atlas.en-us.retail_api.meta/retail_api/rtr_commiting_csv_export.htm)**
    This Apex call commits a full or delta CSV export.
-   **[Retrieving CSV Export](atlas.en-us.retail_api.meta/retail_api/rtr_history_csv_export.htm)**
    You can fetch the history of the CSV export by making an Apex call.
-   **[Getting Access Token for the User](atlas.en-us.retail_api.meta/retail_api/rtr_getting_access_token.htm)**

-   **[Getting CSV Full Export](atlas.en-us.retail_api.meta/retail_api/rtr_getting_csv_full_export.htm)**

-   **[Getting CSV Delta Export](atlas.en-us.retail_api.meta/retail_api/rtr_getting_csv_delta_export.htm)**

-   **[Get Measure Exports](atlas.en-us.retail_api.meta/retail_api/apex_tpm_get_measure_export.htm)**
    Retrieves the list of the exports scheduled for a particular period. This list provides an overview of the scheduled exports and identifies the exports to be aborted.

## Related Topics

- Abort Export Process (atlas.en-us.retail_api.meta/retail_api/apex_tpm_abort_export.htm)
- Triggering CSV Export (atlas.en-us.retail_api.meta/retail_api/rtr_triggering_csv_export.htm)
- Checking CSV Export Status (atlas.en-us.retail_api.meta/retail_api/rtr_checking_csv_export_status.htm)
- Committing CSV Export (atlas.en-us.retail_api.meta/retail_api/rtr_commiting_csv_export.htm)
- Retrieving CSV Export (atlas.en-us.retail_api.meta/retail_api/rtr_history_csv_export.htm)
- Getting Access Token for the User (atlas.en-us.retail_api.meta/retail_api/rtr_getting_access_token.htm)
- Getting CSV Full Export (atlas.en-us.retail_api.meta/retail_api/rtr_getting_csv_full_export.htm)
- Getting CSV Delta Export (atlas.en-us.retail_api.meta/retail_api/rtr_getting_csv_delta_export.htm)
- Get Measure Exports (atlas.en-us.retail_api.meta/retail_api/apex_tpm_get_measure_export.htm)
