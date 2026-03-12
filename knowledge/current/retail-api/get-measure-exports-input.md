---
title: "Get Measure Exports Input"
domain: retail-api
topic: get-measure-exports-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.909Z
estimatedTokens: 167
keywords: [Measure, Exports, Input, Query, paramters, API]
---

# Get Measure Exports Input

> Query paramters for Get Measure Exports API.

# Get Measure Exports Input

Query paramters for Get Measure Exports API.

Query Parameters

| Parameter | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| days | String | Enter the number of days between 1 and 7 to retrieve the list of exports. The API request uses this input as a reference point to calculate start date and the day request is being sent as a reference point for end date. | Required | 65.0 |
| state | String | Enter the CSV export's state. For multiple states, provide the inputs in comma-separated values (CSV) format. The supported values are:QueuedInProgressAbortedReadyError | Required | 65.0 |
