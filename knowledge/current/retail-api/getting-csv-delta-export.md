---
title: "Getting CSV Delta Export"
domain: retail-api
topic: getting-csv-delta-export
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.278Z
estimatedTokens: 71
keywords: [Getting, CSV, Delta, Export, Once, actual, file, requested, cURL]
---

# Getting CSV Delta Export

> Once the actual export file is requested, the CSV delta export file can be requested.

# Getting CSV Delta Export

Once the actual export file is requested, the CSV delta export file can be requested.

## cURL example:

```

```

The response is a binary file that must be stored. Its format is <filename>.csv. This archive can then be opened with a compression software.

## Code Examples

```
curl --location --request GET 'https://int-vir-us.consumergoodscloudprocessingservices.com/api/v1/files/getcsv/{{csvGuid}}?path=delta
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{access_token}}'
```
