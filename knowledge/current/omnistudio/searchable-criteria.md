---
title: "Searchable Criteria"
domain: omnistudio
topic: searchable-criteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:40.441Z
estimatedTokens: 231
keywords: [Searchable, Criteria, filter, part, search, configuration, metadata]
---

> Output representation of the filter that is returned as part of the
      search configuration metadata.

# Searchable Criteria

Output representation of the filter that is returned as part of the search configuration metadata.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| options | String[] | Options for distance and other special fields. | Small, 58.0 | 58.0 |
| searchFieldLabel | String | Display name of the field on the UI. | Small, 58.0 | 58.0 |
| searchFieldName | String | API name of the field. | Small, 58.0 | 58.0 |
| searchFieldSourceObjectFieldName | String | API name of the source field. | Small, 58.0 | 58.0 |
| searchFieldSourceObjectName | String | Primary domain for lookup type field. | Small, 58.0 | 58.0 |
| searchFieldSourceObjectRecordType | String | Default record type ID of the source object. | Small, 58.0 | 58.0 |
| searchFieldType | String | Type of the filter.Possible values are:TextLookupPicklist | Small, 58.0 | 58.0 |
