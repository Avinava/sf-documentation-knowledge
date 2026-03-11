---
title: "Context Attribute Mapping (POST, PATCH)"
domain: omnistudio
topic: context-attribute-mapping-post-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.578Z
keywords: [Context, Attribute, Mapping, POST, PATCH]
---

# Context Attribute Mapping (POST, PATCH)

# Context Attribute Mapping (POST, PATCH)

Create context attribute mapping. Update context attribute mapping.

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

This example shows a JSON sample when context-to-context mappings exist.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextAttributeId | String | ID of the context attribute record. | Required | 59.0 |
| contextAttributeMappingId | String | ID of the context attribute mapping record. | Required | 59.0 |
| contextInputAttributeName | String | Context input attribute name. | Optional | 59.0 |
| hydrationDetails | Context Attribute Hydration Details Input[] | List of context attribute hydration detail. | Optional | 59.0 |

Response body for POST

[Context Attribute Mapping List Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_attribute_mapping_list.htm "Output representation of list of context attribute mappings.")

Request body for PATCH

JSON example

```

```

This example shows a JSON sample when context-to-context mappings exist.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextAttributeId | String | ID of the context attribute record. | Required | 59.0 |
| contextAttributeMappingId | String | ID of the context attribute mapping record. | Required | 59.0 |
| contextInputAttributeName | String | Context input attribute name. | Optional | 59.0 |
| hydrationDetails | Context Attribute Hydration Details Input[] | List of context attribute hydration detail. | Optional | 59.0 |

Response body for PATCH

[Context Attribute Mapping List](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_attribute_mapping_list.htm "Output representation of list of context attribute mappings.")