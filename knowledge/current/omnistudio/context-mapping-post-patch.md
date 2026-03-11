---
title: "Context Mapping (POST, PATCH)"
domain: omnistudio
topic: context-mapping-post-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.667Z
keywords: [Context, Mapping, POST, PATCH]
---

# Context Mapping (POST, PATCH)

# Context Mapping (POST, PATCH)

Create and update context mappings.

Resource

```

```

Example for POST

```

```

Example for PATCH

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

POST, PATCH

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextMappingId | String | ID of this context mapping. Required for update. | Required | 59.0 |
| contextNodeMappings | Context Node Mappings Input[] | List of context node mappings. | Optional | 59.0 |
| description | String | Description of context mapping. | Optional | 59.0 |
| isDefault | Boolean | Indicates whether to make a default mapping for the context definition (true) or not (false). | Optional | 59.0 |
| intents | List<String> | Purpose that's used to identify the type of required context mapping.Valid values are:HYDRATION—To load cache from a data source.PERSISTENCE—To load the sink objects from cache. Sink objects are the final destinations for the processed data.ASSOCIATION—To create a mapping without validating database relationships, attaching context structure nodes and their attributes with data source nodes and their attributes.TRANSLATION—To transform the data loaded in the cache to another representation defined by the mapping. | Optional | 61.0 |
| name | String | Name of the context mapping. | Required | 59.0 |

Response body for POST

[Context Mapping List Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_mapping_list.htm "Output representation of a list of context mappings.")

Request body for PATCH

JSON example

```

```

Response body for PATCH

[Context Mapping List Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_mapping_list.htm "Output representation of a list of context mappings.")