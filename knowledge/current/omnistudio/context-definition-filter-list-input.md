---
title: "Context Definition Filter List Input"
domain: omnistudio
topic: context-definition-filter-list-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.162Z
estimatedTokens: 89
keywords: [Context, Definition, Filter, Input, representation, Filters]
---

# Context Definition Filter List Input

> Input representation for a list of Context Definition Filters

# Context Definition Filter List Input

Input representation for a list of Context Definition Filters

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filters | Context Definition Filter Input[] | List of context definition filter inputs. | Required | 65.0 |

## Code Examples

```
{
  "filters": [
    {
      "filterApiName": "FilterAccount",
      "filterName":"FilterAccount",
      "filtersPerNode": "{"Account":{"filterCondition":{"attribute":"City","operator":"EQUALS","operands":[{"value":"Bengaluru","type":"STRING"}],"composite":false},"orderByConditions":[{"orderByAttribute":"Name","ascending":false,"nullsFirst":false}],"limit":5}}",
      "contextDefinitionVersionId": "11pxx0000004VmmAAE"
    }
  ]
}
```

## Related Topics

- Context Definition Filter Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_context_definition_filter_input.htm)
