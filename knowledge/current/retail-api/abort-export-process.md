---
title: "Abort Export Process"
domain: retail-api
topic: abort-export-process
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.658Z
estimatedTokens: 91
keywords: [Abort, Export, Process, state, CSV, Aborted, running, longer, duration, expected, consumes, resources, blocks, scheduling, new, Uses, POST]
---

# Abort Export Process

> Uses the POST method to set the state of a CSV export process to Aborted.

# Abort Export Process

Uses the POST method to set the state of a CSV export process to Aborted.

When a CSV export process is running for a longer duration than expected, it consumes resources and blocks the scheduling of new exports. Abort Export API unblocks the scheduling by aborting the export process. It takes csvGuid as the path parameter and IntegrationMetaName as the query parameter.

Resource

/measures/export/abort/{{csvGuid}}?integrationmetaname=<integration\_meta\_name>

-   csvGuid: Enter the ID of the CSV export that needs to be aborted.

Resource Example

[https://pumpkinspice.salesforce.com/services/apexrest/cgcloud/measures/export/abort/ad95ce25-365b-43c0-8c79-e0e01ab0505a?integrationmetaname=integrationExportPromotion](https://pumpkinspice.salesforce.com/services/apexrest/cgcloud/measures/export/abort/ad95ce25-365b-43c0-8c79-e0e01ab0505a?integrationmetaname=integrationExportPromotion)

Available Version

65.0 and later

HTTP Method

POST

Query Parameters

| Parameter | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| integrationmetaname | String | Enter the name of the export configuration. | Required | 65.0 |

Response

```

```

-   **[Abort Export Process Input](atlas.en-us.retail_api.meta/retail_api/connect_requests_abort_export.htm)**
    Query parameters for Abort Export Process API.
-   **[Abort Export Process Output](atlas.en-us.retail_api.meta/retail_api/connect_response_abort_export.htm)**
    Response body for Abort Export Process API.

## Code Examples

```apex
OffPlatformCallout request = new OffPlatformCallout('ABORT_EXPORT_PROCESS','0001');
Map<String, String> data = new Map<String, String>();
data.put('csvGuid','11b19630-08f0-4f57-8e14-1778c0d3abde');
data.put('metaname', 'IntegrationExportPromotion');
OffPlatformCalloutResponse response = request.execute(TransactionHandler.getTransactionIdentifier(), data, null);
System.debug(response);
```

```
{
"message":"Abort Export is scheduled successfully."
}
```

## Related Topics

- Abort Export Process Input (atlas.en-us.retail_api.meta/retail_api/connect_requests_abort_export.htm)
- Abort Export Process Output (atlas.en-us.retail_api.meta/retail_api/connect_response_abort_export.htm)
