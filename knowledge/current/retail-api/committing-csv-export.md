---
title: "Committing CSV Export"
domain: retail-api
topic: committing-csv-export
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.237Z
estimatedTokens: 356
keywords: [Committing, CSV, Export, Commit, API, specific, csvGuid, take, new, baseline, future, delta, exports, means, records, Apex, call, commits, full]
---

# Committing CSV Export

> Use the Commit CSV Export API to commit a specific csvGuid and take the related CSV as a
  new baseline for future delta exports. This means after this commit, the next delta export
  contains only those records in the KPIs that have been either added, changed, or deleted from the
  previous committed state.

# Committing CSV Export

Use the Commit CSV Export API to commit a specific csvGuid and take the related CSV as a new baseline for future delta exports. This means after this commit, the next delta export contains only those records in the KPIs that have been either added, changed, or deleted from the previous committed state.

The current version of a metadata configuration is available in the response of Checking Job Status. For example: "metaVersion": 8. If the underlying RTR Report Configuration record in a Salesforce org changes, then the previous commit is no longer valid for a delta export. A full export is scheduled next time.

Resource

/services/apexrest/cgcloud/measures/export/{{csvguid}}/commit

Method

POST

## Path Parameters

| URL Parameter | Sample Value | Description |
| --- | --- | --- |
| csvGuid | 3b549543-d420-401a-b424-29c7f3c75713 | Enter the csvGuid value of the scheduled CSV export. This value is received as a response to the API request sent to Triggering CSV Exports API. |

## Request Parameters

| Parameter | Mandatory | Type | Description |
| --- | --- | --- | --- |
| businessyear | Yes | Integer | Enter the business year for which the CSV export must be triggered. |
| metaname | Yes | String | Enter the Internal Name of the RTR Report Configuration. |
| salesorg | Yes | String | Enter the Salesorg ID. |

## Sample Request Body

```

```

## Sample Response Body

```

```

## Code Examples

```
{
    "salesorg": "0001",
    "metaname": "IntegrationExportPromotion",
    "businessyear": 2024
}
```

```
{"csvGuid":"5a2cb107-bc1f-4995-a782-291ec3d62d55","commitdate":"Fri, 01 Aug 2025 13:02:28 GMT"}
```

```apex
<namespace>OffPlatformCallout request = new <namespace>.OffPlatformCallout('COMMIT_RTR_EXPORT','<salesorg>');
Map<String, Object> data = new Map<String, Object>();
data.put('metaname','ReportData0001');
data.put('salesorg', '0001');
data.put('businessyear',2020);
String requestBodyContent = JSON.serialize(data, true);
Map<String, String> params = new Map<String, String>();
params.put('csvGuid', '<CSV Guid received as response from Triggering CSV Export>');
<namespace>.OffPlatformCalloutResponse response = request.execute(<namespace>.TransactionHandler.getTransactionIdentifier(), params, requestBodyContent);
System.debug(response);
```

```
{
  "csvGuid": "94f49a3f-37bc-4794-8051-123456789",
  "commitdate": "Thu, 16 Sep 2021 13:04:23 GMT"
}
```
