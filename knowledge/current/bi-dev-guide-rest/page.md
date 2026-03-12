---
title: "Page"
domain: bi-dev-guide-rest
topic: page
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:04.467Z
estimatedTokens: 195
keywords: [Analytics, template]
---

# Page

> A UI page for an Analytics template.

# Page

A UI page for an Analytics template.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| condition | String | The optional condition to determine if the page is visible or not. Values are client-side EL notation (such as {{Variables.selectedOption}}). | Small, 36.0 | 36.0 |
| help​Url | String | A URL to this page's help webpage. | Small, 36.0 | 36.0 |
| title | String | The title for the page. | Small, 36.0 | 36.0 |
| variables | Page​Variable[] | The collection of variables for this template configuration. | Small, 36.0 | 36.0 |
| vfPage | Asset​Reference | The Visualforce page to be used as the wizard user interface instead of the standard wizard interface. | Small, 40.0 | 40.0 |

## Related Topics

- Page​Variable (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_page_variable.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
