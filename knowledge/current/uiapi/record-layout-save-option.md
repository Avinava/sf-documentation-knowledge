---
title: "Record Layout Save Option"
domain: uiapi
topic: record-layout-save-option
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.090Z
estimatedTokens: 256
keywords: [Record, Layout, Save, Option, options, define, behavior, occurs, objects, created, modified, Cases, Leads, “UseDefaultAssignmentRule”, exposed]
---

# Record Layout Save Option

> The save option for a record layout. Save options define behavior
      that occurs when objects are created or modified using the given layout. For example, for
      Cases and Leads, a “UseDefaultAssignmentRule” save option is exposed to control whether
      assignment rules are applied when Cases or Leads are created or edited.

# Record Layout Save Option

The save option for a record layout. Save options define behavior that occurs when objects are created or modified using the given layout. For example, for Cases and Leads, a “UseDefaultAssignmentRule” save option is exposed to control whether assignment rules are applied when Cases or Leads are created or edited.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| defaultValue | Boolean | Indicates whether the save option defaults to enabled (true) or not (false). | Small, 51.0 | 51.0 |
| isDisplayed | Boolean | Indicates whether the save option is displayed in the layout or not. | Small, 51.0 | 51.0 |
| label | String | Label for the save option. | Small, 51.0 | 51.0 |
| name | String | API name for the save option. | Small, 51.0 | 51.0 |
| restHeaderName | String | REST API header for the save option. | Small, 51.0 | 51.0 |
| soapHeaderName | String | SOAP API header for the save option. | Small, 51.0 | 51.0 |
