---
title: "Component Saved View Input"
domain: bi-dev-guide-rest
topic: component-saved-view-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.669Z
estimatedTokens: 122
keywords: [Component, Saved, View, Input, Analytics]
---

# Component Saved View Input

> The saved view for an Analytics component.

# Component Saved View Input

The saved view for an Analytics component.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| page​Id | String | The id of the component page the saved view persists. | Required | 51.0 |
| state | Map<String, Component​Saved​View​State​Input> | The state of the component saved view, including selections and filters applied directly to the component. | Required | 51.0 |

## Related Topics

- Component​Saved​View​State​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_component_saved_view_state_input.htm)
