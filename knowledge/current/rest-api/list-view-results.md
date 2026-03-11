---
title: "List View Results"
domain: rest-api
topic: list-view-results
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.453Z
keywords: [List, View, Results, Syntax, Example]
---

# List View Results

# List View Results

Executes the SOQL query for the list view and returns the resulting data and presentation information. This resource is available in REST API version 32.0 and later.

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/listviews/listViewID/results

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| limit | The maximum number of records to return, between 1-2000. The default value is 25. |
| offset | The first record to return. Use this parameter to paginate the results. The default value is 0. |

## Example

Example Request

```

```

Example Response Body

```

```