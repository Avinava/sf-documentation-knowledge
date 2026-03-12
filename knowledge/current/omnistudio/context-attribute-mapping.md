---
title: "Context Attribute Mapping"
domain: omnistudio
topic: context-attribute-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:49.732Z
estimatedTokens: 263
keywords: [Context, Attribute, Mapping, Output, representation, context, attribute, mapping.]
---

# Context Attribute Mapping

> Output representation of the context attribute mapping.

# Context Attribute Mapping

Output representation of the context attribute mapping.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextAttr​ContextHydration​DetailList | Context Attribute Context Hydration Detail[] | List of the context attribute hydration records when context-to-context mappings exist. | Small, 61.0 | 61.0 |
| context​AttrHydration​DetailList | Context Attribute Hydration Detail[] | Details of the context attribute hydration. | Small, 59.0 | 59.0 |
| context​AttributeId | String | ID of the context attribute record. | Small, 59.0 | 59.0 |
| contextAttribute​MappingId | String | ID of the context attribute mapping record. | Small, 59.0 | 59.0 |
| contextInput​AttributeName | String | Input attribute name. | Small, 59.0 | 59.0 |
| isSuccess | Boolean | Indicates whether the operation is successful (true) or not (false). | Small, 59.0 | 59.0 |
| parentNode​MappingId | String | ID of the parent context node mapping record. | Small, 59.0 | 59.0 |

## Related Topics

- Context Attribute Hydration Detail (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_attr_hydration_detail.htm)
