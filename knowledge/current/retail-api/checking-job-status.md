---
title: "Checking Job Status"
domain: retail-api
topic: checking-job-status
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.233Z
estimatedTokens: 229
keywords: [Checking, Job, Status, CSV, Export, API, scheduled, uses, csvGuid, input, Path, Query, Sample, Queued, Ready]
---

# Checking Job Status

> Use the CSV Export Job Status API to get the status of the scheduled export. The API uses
    the csvGuid of the scheduled export as an input parameter.

# Checking Job Status

Use the CSV Export Job Status API to get the status of the scheduled export. The API uses the csvGuid of the scheduled export as an input parameter.

The job status can have one of the following values:

-   Queued
-   InProgress
-   Ready
-   Error
-   Aborted

Resource

/services/apexrest/cgcloud/measures/export/<csvguid>/status?salesorg=<salesorgvalue>

Method

GET

## Path Parameters

| URL Parameter | Sample Value | Description |
| --- | --- | --- |
| csvGuid | 3b549543-d420-401a-b424-29c7f3c75713 | Enter the csvGuid value of the scheduled CSV export. This value is received as a response to the API request sent to Triggering CSV Exports API. |

## Query Parameters

| URL Parameter | Type | Description |
| --- | --- | --- |
| salesorg | String | Enter the Salesorg name. |

## Sample Response Body for Queued Status

```

```

## Sample Response Body for Ready Status

```

```

## Code Examples

```
{
"Status":"Queued",
"RequestDate":"2025-08-01T12:55:56.000Z",
"MetaName":"IntegrationExportPromotion",
"BusinessYear":2025,
"Statistics":null
}
```

```
{
"Status":"Ready",
"RequestDate":"2025-08-01T12:55:56.000Z",
"MetaName":"IntegrationExportPromotion",
"BusinessYear":2025,
"Statistics":
{
"csvGuid":"5a2cb107-bc1f-4995-a782-291ec3d62d55",
"jobStartTime":"Fri, 01 Aug 2025 12:56:47 GMT",
"hasDelta":false,
"deltaToCsvGuid":null,
"metaName":"IntegrationExportPromotion",
"metaVersion":1,
"totalAccounts":131,
"totalCategories":6,
"dimDataRetrievalDuration":480,
"numRecords":1908,"numAccountCategoryKeys":786,
"runDuration":31262,"processedAccountCategories":786,
"jobCompletionTime":"Fri, 01 Aug 2025 12:57:19 GMT",
"jobDuration":31975},
"FullExport":"full/5a2cb107-bc1f-4995-a782-291ec3d62d55.csv.gz",
"DeltaExport":"delta/5a2cb107-bc1f-4995-a782-291ec3d62d55.csv.gz"
}
```
