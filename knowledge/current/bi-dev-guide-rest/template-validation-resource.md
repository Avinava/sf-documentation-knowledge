---
title: "Template Validation Resource"
domain: bi-dev-guide-rest
topic: template-validation-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.868Z
estimatedTokens: 256
keywords: [Template, Validation, Resource, Validates, Analytics, org, readiness, URL, Formats, Version, Components, HTTP, POST]
---

# Template Validation Resource

> Validates an Analytics
  template for org readiness.

# Template Validation Resource

Validates an Analytics template for org readiness.

## Resource URL

```

```

## Formats

JSON

## Available Version

58.0

## Available Components

-   LWC — [lightning/analyticsWaveApi validateWaveTemplate()](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/reference_analytics_validate_wave_template)

## HTTP Methods

POST

## Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| template​Id​Or​Api​Name | String | The ID of template to run org readiness validation for. | Required | 58.0 |

## Request body for POST

[Template Validate Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_template_validate_input.htm "The input to validate an Analytics template.")

## Response body for POST

[Template Validate](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template_validate.htm "The validation for an Analytics template.")

## Code Examples

```
/wave/templates/<templateIdOrApiName>/validate
```

## Related Topics

- Template Validate Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_template_validate_input.htm)
- Template Validate (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template_validate.htm)
