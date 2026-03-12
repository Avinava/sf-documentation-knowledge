---
title: "Template Resources"
domain: bi-dev-guide-rest
topic: template-resources
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:03.865Z
estimatedTokens: 557
keywords: [Template, Resources, Manage, Analytics, templates, configuration, release, notes]
---

# Template Resources

> Manage Analytics templates, template configuration, and template release
  notes.

# Template Resources

Manage Analytics templates, template configuration, and template release notes.

## Available resources:

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Templates List Resource | Returns a collection of Analytics templates, or creates a template. | GET POST | /wave/templates |
| Template Resource | Returns, deletes, or updates an Analytics template. | GET PATCH DELETE | /wave​/templates​/​<templateIdOrApiName> |
| Template Configuration Resource | Returns the configuration of an Analytics template. | GET | /wave​/templates​/<templateIdOrApiName>​/configuration |
| Template Lint Resource | Returns the lint value of an Analytics template. | GET DELETE PUT | /wave​/templates​/<templateIdOrApiName>​/lint |
| Template Release Notes Resource | Resource for retrieving the release notes for a single Analytics Template. | GET | /wave/templates/<templateIdOrApiName>/​releasenotes |
| Template Validate Resource | Performs an org readiness check on an Analytics template. | POST | /wave​/templates​/<templateIdOrApiName>​/validate |

-   **[Templates List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates.htm)**
    Returns a list of Analytics templates, or creates a template.
-   **[Template Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_id.htm)**
    Returns, deletes, or updates an Analytics template.
-   **[Template Configuration Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_configuration.htm)**
    Returns the configuration of an Analytics template.
-   **[Template Lint Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_lint.htm)**
    Returns, deletes, or creates the lint value for an Analytics template.
-   **[Template Release Notes Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_id_releasenotes.htm)**
    Returns the release notes for a single Analytics Template.
-   **[Template Validation Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_validate.htm)**
    Validates an Analytics template for org readiness.

## Related Topics

- Templates List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates.htm)
- Template Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_id.htm)
- Template Configuration Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_configuration.htm)
- Template Lint Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_lint.htm)
- Template Release Notes Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_id_releasenotes.htm)
- Template Validate Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_validate.htm)
- Template Validation Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_validate.htm)
