---
title: "Page Layout"
domain: bi-dev-guide-rest
topic: page-layout
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:04.471Z
estimatedTokens: 343
keywords: [Layout, definition, Analytics, template]
---

# Page Layout

> The page layout definition for an Analytics template.

# Page Layout

The page layout definition for an Analytics template.

## Properties

Inherited by [Configuration Page Layout](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_configuration_page_layout.htm "The configuration page layout for a template configuration wizard page.") and [Validation Page Layout](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_validation_page_layout.htm "The validation page layout for a template configuration wizard page.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| background​Image | Asset​Reference | The optional background image for the page. | Small, 56.0 | 56.0 |
| condition | String | A optional condition to specify whether the page should be shown or not. Values must be in client-side EL notation. For example, {{Variables.selectedOption}}. | Small, 56.0 | 56.0 |
| guidance​Panel | Guidance​Panel | The guidance panel for the page. | Small, 59.0 | 59.0 |
| help​Url | String | The URL to help content for this page. | Small, 56.0 | 56.0 |
| navigation | Page​Navigation​Info | The navigation information for this page. | Small, 59.0 | 59.0 |
| title | String | The title for this page. | Small, 56.0 | 56.0 |
| type | Page​Type​Enum | The page type. Valid values are:ConfigurationValidation | Small, 59.0 | 59.0 |

## Related Topics

- Configuration Page Layout (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_configuration_page_layout.htm)
- Validation Page Layout (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_validation_page_layout.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
- Guidance​Panel (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_guidance_panel.htm)
- Page​Navigation​Info (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_page_navigation_info.htm)
