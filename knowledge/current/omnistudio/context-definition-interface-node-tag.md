---
title: "Context Definition Interface Node Tag"
domain: omnistudio
topic: context-definition-interface-node-tag
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.199Z
keywords: [Context, Definition, Interface, Node, Tag]
---

# Context Definition Interface Node Tag

# Context Definition Interface Node Tag

Output representation of the tags associated with the context definition interface.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attributeTags | Context Definition Interface Attribute Tag[] | List of attribute tags associated with the context definition interface. | Small, 62.0 | 62.0 |
| childNodeTags | Context Definition Interface Node Tag[] | List of child node tags associated with the context definition interface. | Small, 62.0 | 62.0 |
| isMappingRequired | Boolean | Indicates whether the context tags must be mapped in the context definition (true) or not (false). | Small, 62.0 | 62.0 |
| isNodeTag | Boolean | Indicates whether the context tag is a node tag (true) or not (false). | Small, 62.0 | 62.0 |
| isOptional | Boolean | Indicates whether validation must be done for the context tag (true) or not (false). | Small, 62.0 | 62.0 |
| tagName | String | Name of the context tag. | Small, 62.0 | 62.0 |