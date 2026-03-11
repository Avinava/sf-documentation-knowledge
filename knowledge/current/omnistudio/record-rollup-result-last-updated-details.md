---
title: "Record Rollup Result Last Updated Details"
domain: omnistudio
topic: record-rollup-result-last-updated-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.794Z
keywords: [Record, Rollup, Result, Last, Updated, Details]
---

# Record Rollup Result Last Updated Details

# Record Rollup Result Last Updated Details

Represents the last updated information of the record rollup results.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| epochTime | Long | The epoch timestamp in milliseconds when the record rollup results were last updated for the specified definition and anchor record ID. | Small, 64.0 | 64.0 |
| errorType | String | Type of error encountered while fetching the last updated record rollup definition details. | Small, 64.0 | 64.0 |
| processingMode | String | The record rollup mode used to generate the last updated details. Valid Values are:BatchOn-Demand | Small, 64.0 | 64.0 |