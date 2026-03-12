---
title: "Criteria-Based Search Filter Configurations"
domain: omnistudio
topic: criteria-based-search-filter-configurations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:47.968Z
estimatedTokens: 205
keywords: [Criteria-Based, Search, Filter, Configurations, Retrieve, unified, data, input, criteria, configuration, defined, administrator]
---

# Criteria-Based Search Filter Configurations

> Retrieve the unified object search data based on the input criteria
      and the search configuration defined by the administrator.

# Criteria-Based Search Filter Configurations

Retrieve the unified object search data based on the input criteria and the search configuration defined by the administrator.

Resource

```

```

Resource example

```

```

```

```

Available version

58.0

Requires Chatter

No

HTTP methods

GET

Query parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fullNames | String[] | List of search criteria configuration record names. | Optional | 58.0 |

Response body for GET

[Unified Object Search Config Metadata Result](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_unified_object_search_config_metadata_result.htm "Output representation for the unified object search configuration metadata result.")

## Code Examples

```
/connect/criteria-based-search/configurations
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/criteria-based-search/configurations
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/criteria-based-search/configurations?fullNames=Provider_Search
```

## Related Topics

- Unified Object Search Config Metadata Result (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_unified_object_search_config_metadata_result.htm)
