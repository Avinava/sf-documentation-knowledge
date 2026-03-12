---
title: "Context Definition Filter List"
domain: omnistudio
topic: context-definition-filter-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:49.779Z
estimatedTokens: 169
keywords: [Context, Definition, Filter, List, Output, representation, details, context, definition, filter, list.]
---

# Context Definition Filter List

> Output representation details of context definition filter list.

# Context Definition Filter List

Output representation details of context definition filter list.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextDefinitionFilterList | Context Definition Filter[] | List of context definition filters. | Small, 65.0 | 65.0 |
| contextDefinitionFilterListId | String | ID of the context definition filter list. | Small, 65.0 | 65.0 |
| contextDefinitionId | String | ID of the context definition. | Small, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "contextDefinitionFilterList": [
    {
      "contextDefinitionFilterId": "1Tlxx0000004DRgCAM",
      "contextDefinitionVersionId": "11pxx0000004VmmAAE",
      "filterApiName": "FilterAccount"
      "filterName": "FilterAccount",
      "filtersPerNode": "{
    &quot;Account&quot;: {
      &quot;filterCondition&quot;: {
        &quot;attribute&quot;: &quot;Name&quot;,
        &quot;operator&quot;: &quot;EQUALS&quot;,
        &quot;operands&quot;: [
          {
            &quot;value&quot;: &quot;Acme&quot;,&quot;type&quot;: &quot;STRING&quot;
          }
        ]
      },
      &quot;orderByConditions&quot;: [
        {
          &quot;orderByAttribute&quot;: &quot;Name&quot;,
          &quot;ascending&quot;: false,
          &quot;nullsFirst&quot;: false
        }
      ],
      &quot;limit&quot;: 10
    }
  }"
    },
    {
      "contextDefinitionFilterId": "1Tlxx0000004DTICA2",
      "contextDefinitionVersionId": "11pxx0000004VmmAAE",
      "filterName": "FilterContact",
      "filterApiName": "FilterContact",
      "filtersPerNode": "{
    &quot;Contact&quot;: {
      &quot;filterCondition&quot;: {
        &quot;attribute&quot;: &quot;FirstName&quot;,
        &quot;operator&quot;: &quot;EQUALS&quot;,
        &quot;operands&quot;: [
          {
            &quot;value&quot;: &quot;Howard&quot;,&quot;type&quot;: &quot;STRING&quot;
          }
        ]
      }
  }
  }"
    }
  ],
  "contextDefinitionFilterListId": "4dd6fda2-3fa0-4075-8f03-33a1288ef009",
  "contextDefinitionId": "SimpleDef",
  "isSuccess": true
}
```

## Related Topics

- Context Definition Filter (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_definition_filter.htm)
