---
title: "Extracting Data from the API"
domain: salesforce-large-data-volumes-bp
topic: extracting-data-from-the-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.948Z
estimatedTokens: 114
keywords: [Extracting, Data, API]
---

# Extracting Data from the API

# Extracting Data from the API

| Goal | Best Practice |
| --- | --- |
| Using the most efficient operations | Use the getUpdated() and getDeleted() SOAP API to sync an external system with Salesforce at intervals greater than 5 minutes. Use the outbound messaging feature for more frequent syncing.When using a query that can return more than one million results, consider using the query capability of the Bulk API 2.0, which might be more suitable. |
