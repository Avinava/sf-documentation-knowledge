---
title: "Dashboard Saved View State Input"
domain: bi-dev-guide-rest
topic: dashboard-saved-view-state-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.701Z
estimatedTokens: 236
keywords: [Dashboard, Saved, View, State, Input, Analytics]
---

# Dashboard Saved View State Input

> The state for an Analytics dashboard saved view.

# Dashboard Saved View State Input

The state for an Analytics dashboard saved view.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cdp​Objects | Map<String, Dashboard​Saved​View​Data​Source​State​Input> | A map of the fully qualified cdpObject name to cdpObject state. | Required | 55.0 |
| components | Map<String, Component​Saved​View​Input> | A map of the fully qualified component names to component state. | Required | 51.0 |
| datasets | Map<String, Dashboard​Saved​View​Data​Source​State​Input> | A map of the fully qualified dataset names to dataset state. | Required | 42.0 |
| sObjects | Map<String, Dashboard​Saved​View​Data​Source​State​Input> | A map of the fully qualified sObject name to sObject state. | Required | 55.0 |
| steps | Map<String, Dashboard​Saved​View​Step​State​Input> | Map of the step ids to step state. | Required | 42.0 |

## Related Topics

- Dashboard​Saved​View​Data​Source​State​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_saved_view_data_source_state_input.htm)
- Component​Saved​View​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_component_saved_view_input.htm)
- Dashboard​Saved​View​Step​State​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_saved_view_step_state_input.htm)
