---
title: "Macro Definition"
domain: bi-dev-guide-rest
topic: macro-definition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:04.419Z
estimatedTokens: 163
keywords: [Macro, Definition, part, larger, JSON, transformation, rule]
---

# Macro Definition

> A macro definition that is part of a larger macro for a JSON transformation
  rule.

# Macro Definition

A macro definition that is part of a larger macro for a JSON transformation rule.

Properties

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actions | Action​Inpu[] | A list of actions for the macro. | Required | 43.0 |
| description | String | The description of the macro. | Optional | 43.0 |
| name | String | The name of the macro. | Required | 43.0 |
| parameters | String[] | A list of parameters for the macro. | Required | 43.0 |
| returns | Object | The returns of evaluated expression results of the macro when the action is eval. | Optional | 43.0 |

## Related Topics

- Action​Inpu (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_action_input.htm)
