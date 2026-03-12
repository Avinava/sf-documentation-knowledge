---
title: "Getting CSV Full Export"
domain: retail-api
topic: getting-csv-full-export
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.280Z
estimatedTokens: 75
keywords: [Getting, CSV, Full, Export, you’ve, retrieved, access, token, actual, file, requested, cURL]
---

# Getting CSV Full Export

> After you’ve retrieved the access token, the actual full export file can be requested.

# Getting CSV Full Export

After you’ve retrieved the access token, the actual full export file can be requested.

## cURL example:

```

```

The response is a binary file that must be stored. The format of this file is <filename>.csv. This archive can then be opened with a compression software.

## Code Examples

```
curl --location --request GET 'https://int-vir-us.consumergoodscloudprocessingservices.com/api/v1/files/getcsv/{{csvGuid}}?path=full
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{access_token}}'
```
