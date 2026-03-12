---
title: "Triggering CSV Export"
domain: retail-api
topic: triggering-csv-export
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.317Z
estimatedTokens: 217
keywords: [Triggering, CSV, Export, Apex, call, expects, mandatory, business, year, actual, RTR, report, config, record, sales]
---

# Triggering CSV Export

> This Apex call expects the mandatory values of the business year, the actual name of the
  RTR report config record, and the sales org that must be exported.

# Triggering CSV Export

This Apex call expects the mandatory values of the business year, the actual name of the RTR report config record, and the sales org that must be exported.

You can trigger the CSV export by making an Apex call. A maximum of 2000 exports can be triggered in a day.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

Account Plan measure exports include data from weekly account and promotion writebacks. For promotion writebacks, if a product moves to a new category and promotions reference both the old and new categories, the export shows separate rows for each category for the same product and measure code.

Sample Apex Request

```

```

Sample Response

The response contains a unique identifier for this export in JSON format. This GUID is needed in the subsequent calls.

```

```

## Code Examples

```apex
<namespace>.OffPlatformCallout request = new 
<namespace>.OffPlatformCallout('SCHEDULE_RTR_EXPORT','0001');
Map<String, Object> data = new Map<String, Object>();
data.put('metaname','ReportData0001');
data.put('salesorg', '0001');
data.put('businessyear',2022);

String requestBodyContent = JSON.serialize(data, true);
Map<String, String> params = new Map<String, String>();

<namespace>.OffPlatformCalloutResponse response = request.execute(<namespace>.TransactionHandler.getTransactionIdentifier(), params, requestBodyContent);
System.debug(response);
```

```
{
  "csvGuid": "94f49a3f-37bc-4794-8051-123456789"
}
```
