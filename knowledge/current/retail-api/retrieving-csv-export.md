---
title: "Retrieving
    CSV Export"
domain: retail-api
topic: retrieving-csv-export
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.282Z
estimatedTokens: 38
keywords: [Retrieving, CSV, Export, fetch, history, making, Apex, call]
---

# Retrieving
    CSV Export

> You can fetch the history of the CSV export by making an Apex
   call.

# Retrieving CSV Export

You can fetch the history of the CSV export by making an Apex call.

Sample Apex Request

```

```

Sample Response

```

```

## Code Examples

```apex
<namespace>.OffPlatformCallout request = new <namespace>.OffPlatformCallout('GET_RTR_EXPORT_HISTORY','0001');
Map<String, String> params = new Map<String, String>();
params.put('metaname', 'ReportData0001');
<namespace>.OffPlatformCalloutResponse response = request.execute(<namespace>.TransactionHandler.getTransactionIdentifier(), params, null);

System.debug(response);
```

```
[
  {
    "csvGuid": "e9b73d84-2a08-4815-a6ff-88a787dc007a",
    "metaname": "ReportData0001",
    "metaversion": 1,
    "businessyear": 2022,
    "salesorg": "0001",
    "status": "Ready",
    "fullExportFile": "full/e9b73d84-2a08-4815-a6ff-88a787dc007a.csv.gz",
    "deltaExportFile": "delta/e9b73d84-2a08-4815-a6ff-88a787dc007a.csv.gz",
    "fileexpiry": "2022-06-15T08:20:35.000Z",
    "commitdate": "2022-05-16T08:24:53.000Z",
    "deltaAgainst": "c32a1252-ee4d-457d-98b2-3f72029c1722",
    "statistics": {
      "csvGuid": "e9b73d84-2a08-4815-a6ff-88a787dc007a",
      "jobStartTime": "Mon, 16 May 2022 08:21:24 GMT",
      "hasDelta": true,
      "deltaToCsvGuid": "c32a1252-ee4d-457d-98b2-3f72029c1722",
      "metaName": "ReportData0001",
      "metaVersion": 1,
      "totalAccounts": 1,
      "totalCategories": 6,
      "dimDataRetrievalDuration": 1401,
      "numRecords": 1392,
      "numAccountCategoryKeys": 6,
      "runDuration": 2032,
      "processedAccountCategories": 6,
      "jobCompletionTime": "Mon, 16 May 2022 08:21:27 GMT",
      "jobDuration": 2441
    }
  }
]
```
