---
title: "Component Saved View State"
domain: bi-dev-guide-rest
topic: component-saved-view-state
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:10.302Z
estimatedTokens: 197
keywords: [Component, Saved, View, State, Analytics]
---

# Component Saved View State

> A state for the saved view of an Analytics component.

# Component Saved View State

A state for the saved view of an Analytics component.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cdp​Objects | Map<String, Dashboard​Saved​View​Data​Source​State> | Map of the fully qualified cdpObject names to cdpObject state. | Small, 55.0 | 55.0 |
| datasets | Map<String, Dashboard​Saved​View​Data​Source​State> | Map of the fully qualified dataset names to dataset state. | Small, 42.0 | 42.0 |
| s​Objects | Map<String, Dashboard​Saved​View​Data​Source​State> | Map of the fully qualified sObject names to sObject state. | Small, 55.0 | 55.0 |
| steps | Map<String, Dashboard​Saved​View​Step​State> | Map of the step ids to step state. | Small, 42.0 | 42.0 |

## Related Topics

- Dashboard​Saved​View​Data​Source​State (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_saved_view_data_source_state.htm)
- Dashboard​Saved​View​Step​State (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_saved_view_step_state.htm)
