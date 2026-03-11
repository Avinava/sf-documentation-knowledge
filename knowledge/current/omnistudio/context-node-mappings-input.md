---
title: "Context Node Mappings Input"
domain: omnistudio
topic: context-node-mappings-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.130Z
keywords: [Context, Node, Mappings, Input]
---

# Context Node Mappings Input

# Context Node Mappings Input

Input representation of context node mapping.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributeMappings | Context Attribute Mappings Input[] | List of context attribute mappings. | Required | 59.0 |
| contextNodeId | String | Reference to context node. | Optional | 59.0 |
| contextNodeMappingId | String | ID of this context node mapping. Required for update. | Required | 59.0 |
| sObjectName | String | SObject name. | Optional | 59.0 |