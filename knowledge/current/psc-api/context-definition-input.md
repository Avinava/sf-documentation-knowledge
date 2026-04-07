---
title: "Context Definition Input"
domain: psc-api
topic: context-definition-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:39:00.967Z
estimatedTokens: 107
keywords: [Context, Definition, definitions, expression]
---

> Input representation of the context definitions in an expression
      set.

# Context Definition Input

Input representation of the context definitions in an expression set.

Root XML tag

<ContextDefinitionInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the context definition. | Required | 58.0 |
| name | String | Developer name of the context definition. | Optional | 58.0 |

## Code Examples

```
"contextDefinitionList": {
      "contextDefinitions":[{
      "id":"11Oxx0000006PcLEAU"
      }]
  }
```
