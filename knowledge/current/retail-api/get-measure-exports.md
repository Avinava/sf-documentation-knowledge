---
title: "Get Measure Exports"
domain: retail-api
topic: get-measure-exports
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.660Z
estimatedTokens: 63
keywords: [Measure, Exports, Retrieves, scheduled, particular, period, identifies, aborted, Uses, retrieve]
---

# Get Measure Exports

> Uses the GET method to retrieve the list of the exports scheduled for a particular
  period.

# Get Measure Exports

Uses the GET method to retrieve the list of the exports scheduled for a particular period.

This list provides an overview of the scheduled exports and identifies the exports to be aborted. It takes Days and State as the query parameters.

Resource

/measures/exports?days=<days>&state=<states>

Available Version

65.0 and later

HTTP Method

GET

Query Parameters

| Parameter | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| days | String | Enter the number of days between 1 and 7 to retrieve the list of exports. The API request uses this input as a reference point to calculate start date and the day request is being sent as a reference point for end date. | Required | 65.0 |
| state | String | Enter the CSV export's state. For multiple states, provide the inputs in comma-separated values (CSV) format. The supported values are:QueuedInProgressAbortedReadyError | Required | 65.0 |

Response Body

```

```

-   **[Get Measure Exports Input](atlas.en-us.retail_api.meta/retail_api/connect_request_fetch_status_scheduled_exports.htm)**
    Query paramters for Get Measure Exports API.
-   **[Get Measure Exports Output](atlas.en-us.retail_api.meta/retail_api/connect_response_fetch_status_scheduled_exports.htm)**
    Response body for Get Measure Exports API.

## Code Examples

```apex
OffPlatformCallout request = new OffPlatformCallout('GET_MEASURE_EXPORTS','0001');
Map<String, String> data = new Map<String, String>();
data.put('days','1');
data.put('state', 'Aborted');
OffPlatformCalloutResponse response = request.execute(TransactionHandler.getTransactionIdentifier(), data, null);
System.debug(response);
```

```
[
    {
        "Status": "Ready",
        "RequestDate": "2025-03-19T06:35:04.000Z",
        "csvGuid": "25439edc-3b83-44ed-a15c-f122af21335c",
        "salesorg": "0001",
        "MetaName": "PromotionDataExportCustom",
        "BusinessYear": 2024,
        "Statistics": {
            "csvGuid": "25439edc-3b83-44ed-a15c-f122af21335c",
            "jobStartTime": "Wed, 19 Mar 2025 12:05:30 GMT",
            "hasDelta": false,
            "deltaToCsvGuid": null,
            "metaName": "PromotionDataExportCustom",
            "metaVersion": 3,
            "totalAccounts": 1,
            "totalCategories": 6,
            "dimDataRetrievalDuration": 557,
            "numRecords": 1554,
            "numAccountCategoryKeys": 6,
            "runDuration": 1016,
            "processedAccountCategories": 6,
            "jobCompletionTime": "Wed, 19 Mar 2025 12:05:32 GMT",
            "jobDuration": 2255
        },
        "FullExport": "full/25439edc-3b83-44ed-a15c-f122af21335c.csv.gz",
        "DeltaExport": "delta/25439edc-3b83-44ed-a15c-f122af21335c.csv.gz"
    },
    {
        "Status": "Queued",
        "RequestDate": "2025-03-19T09:01:50.000Z",
        "MetaName": "PromotionDataExportCustom",
        "csvGuid": "25439edc-3b83-44ed-a15c-f122af21335c",
        "salesorg": "0001",
        "BusinessYear": 2024,
        "Statistics": null
    }
]
```

## Related Topics

- Get Measure Exports Input (atlas.en-us.retail_api.meta/retail_api/connect_request_fetch_status_scheduled_exports.htm)
- Get Measure Exports Output (atlas.en-us.retail_api.meta/retail_api/connect_response_fetch_status_scheduled_exports.htm)
