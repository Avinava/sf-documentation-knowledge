---
title: "Rule Definition Input"
domain: bi-dev-guide-rest
topic: rule-definition-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.824Z
estimatedTokens: 104
keywords: [Rule, Definition, Input, JSON, transformation]
---

# Rule Definition Input

> A rule definition to use for a JSON transformation.

# Rule Definition Input

A rule definition to use for a JSON transformation.

Properties

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| constants | Constant​Input[] | A list of rule constants. | Optional | 43.0 |
| macros | Macro​Input[] | A list of rule macros. | Optional | 43.0 |
| rules | Rule​Input[] | A list of rules. | Required | 43.0 |

## Related Topics

- Constant​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_constant_input.htm)
- Macro​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_macro_input.htm)
- Rule​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_rule_input.htm)
