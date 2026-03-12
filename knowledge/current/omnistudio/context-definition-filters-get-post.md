---
title: "Context Definition Filters (GET, POST)"
domain: omnistudio
topic: context-definition-filters-get-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:48.974Z
estimatedTokens: 301
keywords: [Context, Definition, Filters, GET, POST, Create, get, context, filters, associated, specific, definition., criteria, conditions, refine, limit, data, operations, based, parameters.]
---

# Context Definition Filters (GET, POST)

> Create or get context filters associated with a specific context definition. Context
    filters are criteria or conditions that refine or limit data operations based on specific
    parameters.

# Context Definition Filters (GET, POST)

Create or get context filters associated with a specific context definition. Context filters are criteria or conditions that refine or limit data operations based on specific parameters.

Resource

```

```

The contextDefinitionId property value is the unique identifier for the context definition whose filters you want to retrieve.

Resource example

```

```

Available version

65.0

HTTP methods

GET, POST

Response body for GET

[Context Definition Filter List](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_definition_filter_list.htm "Output representation details of context definition filter list.")

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filters | Context Definition Filter Input[] | List of context definition filter inputs. | Required | 65.0 |

Response body for POST

[Context Definition Filter List](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_definition_filter_list.htm "Output representation details of context definition filter list.")

## Code Examples

```
/connect/context-definitions/${contextDefinitionId}/context-filters
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/context-definitions/SimpleDef/context-filters
```

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

- Context Definition Filter List (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_definition_filter_list.htm)
- Context Definition Filter Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_context_definition_filter_input.htm)
