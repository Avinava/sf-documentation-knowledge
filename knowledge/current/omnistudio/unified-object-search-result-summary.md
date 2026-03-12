---
title: "Unified Object Search Result Summary"
domain: omnistudio
topic: unified-object-search-result-summary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.864Z
estimatedTokens: 190
keywords: [Unified, Search, Result, Summary, Output, representation, unified, search, result.]
---

# Unified Object Search Result Summary

> Output representation of the unified object search
    result.

# Unified Object Search Result Summary

Output representation of the unified object search result.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| aggregateRecordCount | Map<String, Integer> | Search summary map group that needs to be counted. | Small, 58.0 | 58.0 |
| aggregateRecordCountByCriteria | Map<String, Integer> | Search summary map grouped by criteria that needs to be counted. | Small, 60.0 | 60.0 |
| isMoreGroupsPresent | Boolean | Indicates whether there are more search groups present (true) or not (false). | Small, 58.0 | 58.0 |
| isMoreRecordsPresent | Boolean | Indicates whether there are more search records present (true) or not (false). | Small, 58.0 | 58.0 |
