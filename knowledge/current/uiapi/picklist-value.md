---
title: "Picklist Value"
domain: uiapi
topic: picklist-value
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.024Z
estimatedTokens: 355
keywords: [Picklist]
---

# Picklist Value

> A single picklist value.

# Picklist Value

A single picklist value.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attributes | Either null or one of these response bodies:Case Status Picklist Value AttributesLead Status Picklist Value AttributesOpportunity Stage Picklist Value AttributesWork Step Status Picklist Value Attributes | This property might contain a nested response body to help consumers understand the meaning of the picklist value. | Small, 41.0The Work Step Picklist Value Attributes type is available in API version 58.0 and later. | 41.0The Work Step Picklist Value Attributes type is available in API version 58.0 and later. |
| label | String | The displayable value of the picklist to use in a UI. | Small, 41.0 | 41.0 |
| validFor | Integer[] | If the picklist is a dependent picklist, the property contains a list of the controlling value indexes for which this value is valid. If the picklist is an independent picklist, the list is empty. | Small, 41.0 | 41.0 |
| value | String | The value of the picklist to use in the API. | Small, 41.0 | 41.0 |

#### See Also

-   [Picklist Values](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_picklist_values.htm "The picklist values for a field, scoped to a record type. If a picklist is dependent, this response includes the values of its immediate controlling field and how they map to the picklist.")

## Related Topics

- Case Status Picklist Value Attributes (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_case_status_picklist_values.htm)
- Lead Status Picklist Value Attributes (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_lead_status_picklist_values.htm)
- Opportunity Stage Picklist Value Attributes (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_opportunity_stage_picklist_values.htm)
- Work Step Status Picklist Value Attributes (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_workstep_picklist_values.htm)
- Picklist Values (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_picklist_values.htm)
