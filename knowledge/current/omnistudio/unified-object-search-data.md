---
title: "Unified Object Search Data"
domain: omnistudio
topic: unified-object-search-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.900Z
keywords: [Unified, Object, Search, Data]
---

# Unified Object Search Data

# Unified Object Search Data

Output representation of the unified object search data.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| data | Unified Object Search Result | Details of the criteria-based search and filter results. | Small, 58.0 | 58.0 |
| errors | Timeline Error[] | Details of the errors that were displayed. | Small, 58.0 | 58.0 |
| mapData | Unified Object Search Result Map Data[] | Map details of the records whose location is displayed in search results. | Small, 61.0 | 61.0 |
| offset | Integer | Number of records that are skipped before returning all records. | Small, 61.0 | 61.0 |
| pageNumber | Integer | Number of the page. | Small, 58.0 | 58.0 |
| pageSize | Integer | Number of search result records on each page. | Small, 58.0 | 58.0 |
| resultAggregationFields | String[] | The fields that are selected in the search criteria configuration and are used to group and aggregate search results. | Small, 58.0 | 58.0 |
| status | String | Indicates whether the request succeeded (SUCCESS) or failed (FAILURE). | Small, 58.0 | 58.0 |
| summary | Unified Object Search Result Summary | The summary of the count of records for each search result aggregation criteria field. | Small, 58.0 | 58.0 |