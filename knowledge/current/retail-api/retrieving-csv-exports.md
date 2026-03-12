---
title: "Retrieving CSV Exports"
domain: retail-api
topic: retrieving-csv-exports
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.312Z
estimatedTokens: 199
keywords: [Retrieving, CSV, Exports, binary, file, saved, locally, ending, csv.gz, zipped, extracted, Endpoint, HTTP]
---

# Retrieving CSV Exports

> The response body is a binary file and can be saved locally. This file with the ending csv.gz is a zipped CSV file, so it must be extracted first.

# Retrieving CSV Exports

The response body is a binary file and can be saved locally. This file with the ending csv.gz is a zipped CSV file, so it must be extracted first.

## Endpoint

<CGCloud Processing Services Integration>/api/v1/files/getcsv/{{csvGuid}}?path={{full or delta}}

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

You can get the CGCloud Processing Services Integration value from the Processing Services Pairing App page in your Salesforce org.

## HTTP Method

GET

| URL Parameter | Mandatory | Sample Values |
| --- | --- | --- |
| csvGuid | Yes | 3b549543-d420-401a-b424-29c7f3c75713 |
| path | Yes | Must be either:tpm/long/export/full (to retrieve a full export)tpm/long/export/delta (to retrieve a delta export) |
