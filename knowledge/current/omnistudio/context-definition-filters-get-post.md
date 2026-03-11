---
title: "Context Definition Filters (GET, POST)"
domain: omnistudio
topic: context-definition-filters-get-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.657Z
keywords: [Context, Definition, Filters, GET, POST]
---

# Context Definition Filters (GET, POST)

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