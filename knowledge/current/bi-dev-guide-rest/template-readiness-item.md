---
title: "Template Readiness Item"
domain: bi-dev-guide-rest
topic: template-readiness-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.645Z
estimatedTokens: 213
keywords: [Template, Readiness, Item, individual, validation, task, Analytics]
---

# Template Readiness Item

> An individual validation task for an Analytics template.

# Template Readiness Item

An individual validation task for an Analytics template.

TemplateReadinessItem inherits properties from the abstract [AbstractLintItem](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_abstract_lint_item.htm "The base readiness task for an Analytics template."). These base properties appear in TemplateReadinessItem alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| image | Asset​Reference | The icon associated with the validation task. | Small, 58.0 | 58.0 |
| tags | String[] | A list of tags describing the purpose of the validation. | Small, 58.0 | 58.0 |
| type | String | A task specific type, associated with the readiness check type. | Small, 58.0 | 58.0 |

## Related Topics

- AbstractLintItem (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_abstract_lint_item.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
