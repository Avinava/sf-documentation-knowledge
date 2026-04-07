---
title: "Data Extensions Async API"
domain: mc-apis
topic: data-extensions-async-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:16.362Z
estimatedTokens: 418
keywords: [Prerequisites, Extensions, Async, API, Marketing, Cloud, REST, supports, ability, persist, identified, extension, asynchronously, Specification]
---

> The Marketing Cloud REST API supports the ability to persist data into an identified data extension asynchronously.

# Data Extensions Async API

The Marketing Cloud REST API supports the ability to persist data into an identified data extension asynchronously.

## Prerequisites

To use the Data Extensions Async APIs, complete the Marketing Cloud API authentication process.

1.  To get a client ID and secret, create an installed package with an API Integration component.
2.  Using the above credentials, get an OAuth access token for authenticating your API calls.
3.  Use the access token in the header to authenticate each subsequent call.

## API Specification

| HTTP Method | Resource | Description |
| --- | --- | --- |
| POST | /data/v1/async/dataextensions/{id}/rows or /data/v1/async/dataextensions/key:{key}/rows | Asynchronously insert data into an identified data extension by id or key, where id is the unique identifier of the data extension and key is the external key (customer key) of the data extension. |
| PUT | /data/v1/async/dataextensions/{id}/rows or /data/v1/async/dataextensions/key:{key}/rows | Asynchronously upsert data into an identified data extension by id or key, where id is the unique identifier of the data extension and key is the external key (customer key) of the data extension. |
| GET | /data/v1/async/{requestid}/status | Retrieve the status of the originally posted asynchronous request. Use the status to determine if the request has completed and whether or not there were errors in processing. |
| GET | /data/v1/async/{requestid}/results | Once the request has been picked up by the asynchronous framework and passed off to the appropriate service for processing, use this resource to retrieve the results of that service operation. |

## Related Topics

- /data/v1/async/dataextensions/{id}/rows or /data/v1/async/dataextensions/key:{key}/rows (atlas.en-us.noversion.mc-apis.meta/mc-apis/insertDataExtensionIDAsync.htm)
- /data/v1/async/dataextensions/{id}/rows or /data/v1/async/dataextensions/key:{key}/rows (atlas.en-us.noversion.mc-apis.meta/mc-apis/updateDataExtensionIDAsync.htm)
- /data/v1/async/{requestid}/status (atlas.en-us.noversion.mc-apis.meta/mc-apis/getStatusDataExtensionAsync.htm)
- /data/v1/async/{requestid}/results (atlas.en-us.noversion.mc-apis.meta/mc-apis/getResultsDataExtensionAsync.htm)
