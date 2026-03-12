---
title: "Unified Object Search Data Input"
domain: omnistudio
topic: unified-object-search-data-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.837Z
estimatedTokens: 425
keywords: [Unified, Search, Data, Input, representation, perform, unified, data, search.]
---

# Unified Object Search Data Input

> Input representation to perform the unified object data
    search.

# Unified Object Search Data Input

Input representation to perform the unified object data search.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| aggregationCriteriaFieldset | String[] | Fields that you select in the search criteria configuration as the basis for querying data. | Optional | 58.0 |
| freeTextFieldName | String | Name of the search criteria field used by the user for the search. | Optional | 58.0 |
| globalSearchTerm | String | The keyword that you use to perform a comprehensive search across all text-indexed columns of the specified object. | Optional | 61.0 |
| latitude | Double | User's latitude that’s used to find search results within a certain distance from the user’s location. | Optional | 58.0 |
| longitude | Double | User's longitude that’s used to find search results within a certain distance from the user’s location. | Optional | 58.0 |
| offset | Integer | Number of records to skip before searching for records. The default value is 0. | Optional | 61.0 |
| pageNumber | Integer | Number of the page you want returned. If you don’t specify a value, the first page is returned by default. | Optional | 58.0 |
| pageSize | Integer | Number of search result records on each page. | Optional | 58.0 |
| searchCriteria | Unified Object Search Criteria[] | Name of the search criteria configuration. | Optional | 58.0 |
| searchCriteriaConfigurationName | String | Name of the search definition. | Optional | 58.0 |
| sortingCriteriaFieldset | Unified Object Search Sort By Field[] | Details of the fields that you use to sort the search results. | Required | 58.0 |

## Code Examples

```apex
{
  "searchCriteriaConfigurationName": "Config_Name",
  "pageNumber": 1,
  "pageSize": 50,
  "freeTextFieldName": "Field Name",
  "globalSearchTerm": "Keyword",
  "offset": 0,
  "aggregationCriteriaFieldset": [
    "ProviderType",
    "FacilityName"
  ],
  "sortingCriteriaFieldset": [
    {
      "isSortAscending": false,
      "sortFieldName": "FacilityName"
    }
  ],
  "searchCriteria": [
    {
      "searchCriteriaFieldName": "ProviderType",
      "searchCriteriaFieldOperator": "like",
      "searchFieldCriteriaValueList": [
        "Medical Doctor"
      ],
      "searchCriteriaFieldType": "text"
    }
  ]
}
```

## Related Topics

- Unified Object Search Criteria (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_unified_object_search_field_criteria.htm)
- Unified Object Search Sort By Field (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_unified_object_search_sort_by_field.htm)
