---
title: "List Org Limits"
domain: rest-api
topic: list-org-limits
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:34.888Z
estimatedTokens: 162
keywords: [Org, Limits, resource]
---

# List Org Limits

> Use the Limits resource to list your
            org limits.

# List Org Limits

Use the [Limits](atlas.en-us.api_rest.meta/api_rest/resources_limits.htm "List information about limits in your org. For each limit, this resource returns the maximum allocation and the remaining allocation based on usage. Tabulated limits returned by the API are accurate within five minutes of resource consumption. For consistent values from this resource, avoid concurrent or rapid requests.") resource to list your org limits.

-   Max is the limit for the org.
-   Remaining is the number of calls or events left for the org.

Example usage

```

```

Example request body

none required

Example response body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/limits/ -H "Authorization: Bearer token" -H "X-PrettyPrint:1"
```

```
{
    "ActiveScratchOrgs": {
        "Max": 3,
        "Remaining": 3
    },
    "AnalyticsExternalDataSizeMB": {
        "Max": 40960,
        "Remaining": 40960
    },
    "ConcurrentAsyncGetReportInstances": {
        "Max": 200,
        "Remaining": 200
    },
    "ConcurrentEinsteinDataInsightsStoryCreation": {
        "Max": 5,
        "Remaining": 5
    },
    "ConcurrentEinsteinDiscoveryStoryCreation": {
        "Max": 2,
        "Remaining": 2
    },
    "ConcurrentSyncReportRuns": {
        "Max": 20,
        "Remaining": 20
    },
    "DailyAnalyticsDataflowJobExecutions": {
        "Max": 60,
        "Remaining": 60
    },
    "DailyAnalyticsUploadedFilesSizeMB": {
        "Max": 51200,
        "Remaining": 51200
    },
    "DailyFunctionsApiCallLimit" : {
      "Max" : 235000,
      "Remaining" : 235000
    },
    "DailyApiRequests": {
        "Max": 5000,
        "Remaining": 4937
    },
    "DailyAsyncApexExecutions": {
        "Max": 250000,
        "Remaining": 250000
    },
    "DailyAsyncApexTests": {
        "Max": 500,
        "Remaining": 500
    },
    "DailyBulkApiBatches": {
        "Max": 15000,
        "Remaining": 15000
    },
    "DailyBulkV2QueryFileStorageMB": {
        "Max": 976562,
        "Remaining": 976562
    },
    "DailyBulkV2QueryJobs": {
        "Max": 10000,
        "Remaining": 10000
    },
    "DailyDeliveredPlatformEvents" : {
      "Max" : 10000,
      "Remaining" : 10000
    },
    "DailyDurableGenericStreamingApiEvents": {
        "Max": 10000,
        "Remaining": 10000
    },
    "DailyDurableStreamingApiEvents": {
        "Max": 10000,
        "Remaining": 10000
    },
    "DailyEinsteinDataInsightsStoryCreation": {
        "Max": 1000,
        "Remaining": 1000
    },
    "DailyEinsteinDiscoveryPredictAPICalls": {
        "Max": 50000,
        "Remaining": 50000
    },
    "DailyEinsteinDiscoveryPredictionsByCDC": {
        "Max": 5000000,
        "Remaining": 5000000
    },
    "DailyEinsteinDiscoveryStoryCreation": {
        "Max": 100,
        "Remaining": 100
    },
    "DailyGenericStreamingApiEvents": {
        "Max": 10000,
        "Remaining": 10000
    },
    "DailyScratchOrgs": {
        "Max": 6,
        "Remaining": 6
    },
    "DailyStandardVolumePlatformEvents": {
        "Max": 10000,
        "Remaining": 10000
    },
    "DailyStreamingApiEvents": {
        "Max": 10000,
        "Remaining": 10000
    },
    "DailyWorkflowEmails": {
        "Max": 100000,
        "Remaining": 100000
    },
    "DataStorageMB": {
        "Max": 1024,
        "Remaining": 1024
    },
    "DurableStreamingApiConcurrentClients": {
        "Max": 20,
        "Remaining": 20
    },
    "FileStorageMB": {
        "Max": 1024,
        "Remaining": 1024
    },
    "HourlyAsyncReportRuns": {
        "Max": 1200,
        "Remaining": 1200
    },
    "HourlyDashboardRefreshes": {
        "Max": 200,
        "Remaining": 200
    },
    "HourlyDashboardResults": {
        "Max": 5000,
        "Remaining": 5000
    },
    "HourlyDashboardStatuses": {
        "Max": 999999999,
        "Remaining": 999999999
    },
    "HourlyLongTermIdMapping": {
        "Max": 100000,
        "Remaining": 100000
    },
    "HourlyManagedContentPublicRequests": {
        "Max": 50000,
        "Remaining": 50000
    },
    "HourlyODataCallout": {
        "Max": 20000,
        "Remaining": 20000
    },
    "HourlyPublishedPlatformEvents": {
        "Max": 50000,
        "Remaining": 50000
    },
    "HourlyPublishedStandardVolumePlatformEvents": {
        "Max": 1000,
        "Remaining": 1000
    },
    "HourlyShortTermIdMapping": {
        "Max": 100000,
        "Remaining": 100000
    },
    "HourlySyncReportRuns": {
        "Max": 500,
        "Remaining": 500
    },
    "HourlyTimeBasedWorkflow": {
        "Max": 1000,
        "Remaining": 1000
    },
    "MassEmail": {
        "Max": 5000,
        "Remaining": 5000
    },
    "MonthlyEinsteinDiscoveryStoryCreation": {
        "Max": 500,
        "Remaining": 500
    },
    "Package2VersionCreates": {
        "Max": 6,
        "Remaining": 6
    },
    "Package2VersionCreatesWithoutValidation": {
        "Max": 500,
        "Remaining": 500
    },
    "PermissionSets": {
        "Max": 1500,
        "Remaining": 1499,
        "CreateCustom": {
            "Max": 1000,
            "Remaining": 999
        }
    },
    "PlatformEventTriggersWithParallelProcessing": {
      "Max": 5,
      "Remaining": 4
    },
    "PrivateConnectOutboundCalloutHourlyLimitMB": {
        "Max": 0,
        "Remaining": 0
    },
    "SingleEmail": {
        "Max": 5000,
        "Remaining": 5000
    },
    "StreamingApiConcurrentClients": {
        "Max": 20,
        "Remaining": 20
    }
}
```

## Related Topics

- Limits (atlas.en-us.api_rest.meta/api_rest/resources_limits.htm)
