---
title: "Context Definition Input"
domain: omnistudio
topic: context-definition-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.117Z
keywords: [Context, Definition, Input]
---

# Context Definition Input

# Context Definition Input

Input representation of the context definition.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextTtl | Integer | Time to live (TTL) of context. | Optional | 59.0 |
| description | String | Short description of context definition. | Optional | 59.0 |
| developerName | String | Developer name. | Required | 59.0 |
| endDate | String | End date till context definition is valid. | Optional | 59.0 |
| isActive | Boolean | Specifies whether context is active (true) or not (false). | Optional | 59.0 |
| name | String | Name of the context definition. | Required | 59.0 |
| payload | String | JSON payload containing all the definitions and mappings. | Optional | 59.0 |
| sourceDefinitionId | String | Source context definition ID. | Optional | 59.0 |
| startDate | String | Start date from when context definition is valid. | Required | 59.0 |