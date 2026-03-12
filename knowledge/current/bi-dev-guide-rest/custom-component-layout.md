---
title: "Custom Component Layout"
domain: bi-dev-guide-rest
topic: custom-component-layout
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.104Z
estimatedTokens: 176
keywords: [Custom, Component, Layout, Analytics, template, wizard]
---

# Custom Component Layout

> A custom component layout for an Analytics template wizard page.

# Custom Component Layout

A custom component layout for an Analytics template wizard page.

## Properties

Inherits properties from [Layout](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_layout.htm "The base layout for an Analytics template wizard page.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| module | String | A name of the custom LWC module. | Small, 59.0 | 59.0 |
| properties | Map<Object, Object> | A map of properties to pass to the custom LWC. | Small, 59.0 | 59.0 |
| variables | CustomComponentLayoutVariable[] | A list of the variables for the custom LWC to use. | Small, 59.0 | 59.0 |

## Related Topics

- Layout (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_layout.htm)
- CustomComponentLayoutVariable (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_custom_component_layout_variable.htm)
