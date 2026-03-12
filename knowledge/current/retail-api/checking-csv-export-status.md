---
title: "Checking CSV Export Status"
domain: retail-api
topic: checking-csv-export-status
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.229Z
estimatedTokens: 63
keywords: [Checking, CSV, Export, Status, step, check]
---

# Checking CSV Export Status

> The next step is to check the status of this
        export.

# Checking CSV Export Status

The next step is to check the status of this export.

As soon as it's ready (that is, "Status" = "Ready"), you can continue with the actual download of the file.

Sample Apex Request:

```

```

Sample Response

```

```

## Code Examples

```apex
<namespace>.OffPlatformCallout request = new <namespace>.OffPlatformCallout('GET_RTR_EXPORT_STATUS','0001');
Map<String, String> params = new Map<String, String>();
params.put('csvGuid', '<CSV Guid received as response from Triggering CSV Export>');
<namespace>.OffPlatformCalloutResponse response = request.execute(<namespace>.TransactionHandler.getTransactionIdentifier(), params, null);
```

```
{
  "Status": "Ready",
  "RequestDate": "2021-09-14T13:33:29.000Z",
  "MetaName": "AccountAndPromotionMeasures",
  "BusinessYear": 2020,
  "Statistics": {
    "csvGuid": "94f49a3f-37bc-4794-8051-123456789",
    "jobStartTime": "Tue, 14 Sep 2021 13:34:02 GMT",
    "hasDelta": false,
    "deltaToCsvGuid": null,
    "metaName": "AccountAndPromotionMeasures",
    "metaVersion": 8,
    "totalAccounts": 1,
    "totalCategories": 6,
    "dimDataRetrievalDuration": 1188,
    "numRecords": 0,
    "numAccountCategoryKeys": 6,
    "runDuration": 1592,
    "processedAccountCategories": 6,
    "jobCompletionTime": "Tue, 14 Sep 2021 13:34:06 GMT",
    "jobDuration": 4734
  },
  "FullExport": "tpm/long/export/full/94f49a3f-37bc-4794-8051-396f545500eb.csv.gz",
  "DeltaExport": "tpm/long/export/delta/94f49a3f-37bc-4794-8051-396f545500eb.csv.gz"
}
```
