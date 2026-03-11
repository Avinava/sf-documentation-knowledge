---
title: "Unified Object Search Config Metadata"
domain: omnistudio
topic: unified-object-search-config-metadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.894Z
keywords: [Unified, Object, Search, Config, Metadata]
---

# Unified Object Search Config Metadata

# Unified Object Search Config Metadata

Output representation of the unified search configuration metadata.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionList | Action | List of actions the end user can launch for a search result. | Small, 59.0 | 59.0 |
| aggregateFields | Field Representation | Fields the end user can use to group the results. | Small, 58.0 | 58.0 |
| description | String | Description of the search configuration metadata. | Small, 58.0 | 58.0 |
| filterType | String | Type of the filter criteria to use for criteria-based search and filter. Possible values are:GroupingAndAggregationMultipleFields | Small, 60.0 | 60.0 |
| objectName | String | Name of the SearchConfig object on which the search is performed and data is verified. | Small, 58.0 | 58.0 |
| resultDisplayFormat | String | Display format of search results. Possible values are:CardList | Small, 60.0 | 60.0 |
| resultFlexCard | String | Name of the OmniStudio FlexCard used to display search results as cards. | Small, 60.0 | 60.0 |
| searchAndFilterFields | Searchable Criteria | Filters that are retrieved as part of the search criteria configuration. | Small, 58.0 | 58.0 |
| searchCriteriaConfigurationIsActive | Boolean | Indicates whether the search criteria configuration is active (true) or not (false). | Small, 58.0 | 58.0 |
| searchCriteriaConfigurationLabel | String | User-friendly name for the SearchConfig object, which is defined when the search configuration is created. | Small, 58.0 | 58.0 |
| searchCriteriaConfigurationName | String | Name of the search criteria configuration. | Small, 58.0 | 58.0 |
| sortFields | Field Representation | Set of fields within SearchConfig that can be used to sort search results. | Small, 58.0 | 58.0 |