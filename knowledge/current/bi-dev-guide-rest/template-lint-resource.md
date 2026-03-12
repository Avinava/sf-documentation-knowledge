---
title: "Template Lint Resource"
domain: bi-dev-guide-rest
topic: template-lint-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.859Z
estimatedTokens: 166
keywords: [Template, Lint, Resource, deletes, creates, Analytics, URL, Formats, Version, HTTP, PUT]
---

# Template Lint Resource

> Returns, deletes, or creates the lint value for an Analytics
   template.

# Template Lint Resource

Returns, deletes, or creates the lint value for an Analytics template.

## Resource URL

```

```

## Formats

JSON

## Available Version

58.0

## HTTP Methods

DELETE GET PUT

## Request parameters for GET, DELETE, and PUT

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| template​Id​Or​Api​Name | String | The ID of template to retrieve or delete the lint value for. | Required | 58.0 |

## Response body for GET and PUT

[Template Lint](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template_lint.htm "The lint score for an Analytics template.")

## Code Examples

```
/wave/templates/<templateIdOrApiName>/lint
```

## Related Topics

- Template Lint (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template_lint.htm)
