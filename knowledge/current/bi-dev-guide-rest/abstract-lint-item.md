---
title: "Abstract Lint Item"
domain: bi-dev-guide-rest
topic: abstract-lint-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:03.916Z
estimatedTokens: 212
keywords: [Abstract, Lint, Item, base, readiness, task, Analytics, template]
---

# Abstract Lint Item

> The base readiness task for an Analytics template.

# Abstract Lint Item

The base readiness task for an Analytics template.

## Properties

Inherited by [TemplateLintItem](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template_lint_item.htm "An individual linting task for an Analytics template.") and [TemplateReadinessItem](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template_readiness_item.htm "An individual validation task for an Analytics template.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| label | String | The label for the task. | Small, 58.0 | 58.0 |
| message | String | The message for the task. | Small, 58.0 | 58.0 |
| readiness​Status | Template​Readiness​Status​Enum | The status for the task. Valid values are:CompleteFailedWarning | Small, 58.0 | 58.0 |

## Related Topics

- TemplateLintItem (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template_lint_item.htm)
- TemplateReadinessItem (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template_readiness_item.htm)
