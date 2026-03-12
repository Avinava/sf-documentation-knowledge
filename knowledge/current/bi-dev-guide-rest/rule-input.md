---
title: "Rule Input"
domain: bi-dev-guide-rest
topic: rule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.830Z
estimatedTokens: 106
keywords: [Rule, Input, JSON, Transformation, definition]
---

# Rule Input

> A rule for a JSON Transformation rule definition.

# Rule Input

A rule for a JSON Transformation rule definition.

Properties

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actions | Action​Input[] | A list of actions for the rule. | Required | 43.0 |
| condition | String | The condition to meet for the action to be run. | Optional | 43.0 |
| name | String | The name of the rule. | Required | 43.0 |

## Related Topics

- Action​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_action_input.htm)
