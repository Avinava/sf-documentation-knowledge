---
title: "Triggering CSV Exports"
domain: retail-api
topic: triggering-csv-exports
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.325Z
estimatedTokens: 335
keywords: [Triggering, CSV, Exports, API, trigger, simultaneously, generated, asynchronously, Sample]
---

# Triggering CSV Exports

> Use the Triggering CSV Exports API to trigger CSV exports simultaneously. The CSV exports
    are generated asynchronously.

# Triggering CSV Exports

Use the Triggering CSV Exports API to trigger CSV exports simultaneously. The CSV exports are generated asynchronously.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

Account Plan measure exports include data from weekly account and promotion writebacks. For promotion writebacks, if a product moves to a new category and promotions reference both the old and new categories, the export shows separate rows for each category for the same product and measure code.

Resource

/services/apexrest/cgcloud/measures/export/schedule

Method

POST

## Request Parameters

| Parameter | Mandatory | Type | Description |
| --- | --- | --- | --- |
| businessyear | Yes only if calendaryear is not provided as an input. | Integer | Enter the business year for which the CSV export must be triggered. It is used when the write-back datasource is exported. |
| calendaryear | Yes only if businessyear is not provided as an input. | Integer | Enter the calendar year for which the CSV export must be triggered. It is used for inbound integration data sources. |
| metaname | Yes | String | Enter the Internal Name of the RTR Report Configuration. |
| salesorg | Yes | String | Enter the Salesorg name. |

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
{
  "csvGuid": "94f49a3f-37bc-4794-8051-123456789"
}
```
