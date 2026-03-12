---
title: "Template Lint"
domain: bi-dev-guide-rest
topic: template-lint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.637Z
estimatedTokens: 160
keywords: [Template, Lint, score, Analytics]
---

# Template Lint

> The lint score for an Analytics template.

# Template Lint

The lint score for an Analytics template.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| label | String | The template name | Small, 58.0 | 58.0 |
| score | Double | The lint score for the template, up to 100. | Small, 58.0 | 58.0 |
| tasks | Template​Lint​Item[] | A list of individual validation task for the template. | Small, 58.0 | 58.0 |

#### See Also

-   [Template Lint Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_lint.htm "Returns, deletes, or creates the lint value for an Analytics template.")

## Related Topics

- Template​Lint​Item (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template_lint_item.htm)
- Template Lint Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_lint.htm)
