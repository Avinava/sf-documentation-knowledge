---
title: "Refresh Metric Actions"
domain: api-action
topic: refresh-metric-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.186Z
estimatedTokens: 183
keywords: [Refresh, Metric, Actions, metric’s, Current, it’s, linked, summary, Salesforce, report, runs, owner, REST, HTTP, Inputs]
---

# Refresh Metric Actions

> Update a metric’s Current Value field if it’s linked to a summary field
   in a Salesforce report. The refresh runs as the metric owner.

# Refresh Metric Actions

Update a metric’s Current Value field if it’s linked to a summary field in a Salesforce report. The refresh runs as the metric owner.

This object is available in API version 34.0 and later.

## Supported REST HTTP Methods

URI

Get a list of metric refresh actions:

/services/data/vXX.X/actions/standard/metricRefresh

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| metricId | TypestringDescriptionRequired. The metric linked to a Salesforce report. |

## Outputs

| Output | Details |
| --- | --- |
| resultingMessage | TypestringDescriptionThe message that indicates the results of the metric refresh. |
