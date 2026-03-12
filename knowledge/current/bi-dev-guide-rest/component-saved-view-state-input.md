---
title: "Component Saved View State Input"
domain: bi-dev-guide-rest
topic: component-saved-view-state-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.672Z
estimatedTokens: 195
keywords: [Component, Saved, View, State, Input, Analytics]
---

# Component Saved View State Input

> The state for an Analytics component saved view.

# Component Saved View State Input

The state for an Analytics component saved view.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cdp​Objects | Map<String, Dashboard​Saved​View​Data​Source​State​Input> | Map of fully qualified cdpObject names to cdpObject state. | Required | 55.0 |
| datasets | Map<String, Dashboard​Saved​View​Data​Source​State​Input> | Map of fully qualified dataset names to dataset state. | Required | 51.0 |
| s​Objects | Map<String, Dashboard​Saved​View​Data​Source​State​Input> | Map of fully qualified sObject names to sObject state. | Required | 55.0 |
| steps | Map<String, Dashboard​Saved​View​Step​State​Input> | Map of step ids to step state. | Required | 51.0 |

## Related Topics

- Dashboard​Saved​View​Data​Source​State​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_saved_view_data_source_state_input.htm)
- Dashboard​Saved​View​Step​State​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_saved_view_step_state_input.htm)
