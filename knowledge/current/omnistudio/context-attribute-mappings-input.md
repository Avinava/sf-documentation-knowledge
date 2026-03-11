---
title: "Context Attribute Mappings Input"
domain: omnistudio
topic: context-attribute-mappings-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.100Z
keywords: [Context, Attribute, Mappings, Input]
---

# Context Attribute Mappings Input

# Context Attribute Mappings Input

Input representation of context attribute mapping.

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