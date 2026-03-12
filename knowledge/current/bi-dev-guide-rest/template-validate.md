---
title: "Template Validate"
domain: bi-dev-guide-rest
topic: template-validate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.656Z
estimatedTokens: 176
keywords: [Template, Validate, validation, Analytics]
---

# Template Validate

> The validation for an Analytics template.

# Template Validate

The validation for an Analytics template.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | The ID or qualified name of the template. | Small, 58.0 | 58.0 |
| state | Map<Object, Object> | A map of the context values containing the result from the validate call. | Small, 60.0 | 60.0 |
| tasks | Template​Readiness​Item[] | A list of the individual validation tasks for the template. | Small, 58.0 | 58.0 |

#### See Also

-   [Template Validate Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_validate.htm "Validates an Analytics template for org readiness.")

## Related Topics

- Template​Readiness​Item (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template_readiness_item.htm)
- Template Validate Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_validate.htm)
