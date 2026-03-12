---
title: "Opportunity Stage Picklist Value Attributes"
domain: uiapi
topic: opportunity-stage-picklist-value-attributes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.011Z
estimatedTokens: 368
keywords: [Opportunity, Stage, Picklist, Attributes, Additional, stages]
---

# Opportunity Stage Picklist Value Attributes

> Additional picklist value attributes for opportunity stages.

# Opportunity Stage Picklist Value Attributes

Additional picklist value attributes for opportunity stages.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| closed | Boolean | Indicates whether this opportunity stage value represents a closed opportunity. Multiple opportunity stage values can represent a closed opportunity. | Small, 41.0 | 41.0 |
| defaultProbability | Double | The default percentage estimate of the confidence in closing a specific opportunity for this opportunity stage value. May be null if forecasting is not enabled for the org. | Small, 41.0 | 41.0 |
| forecastCategory​Name | String | The default forecast category value for this opportunity stage value. May be null if forecasting is not enabled for the org. | Small, 41.0 | 41.0 |
| picklistAtrributes​ValueType | String | The value is OpportunityStage. Indicates that these value attributes are associated with the stage of an opportunity.For more information, see the OpportunityStage object documentation.The property picklistAtrributes​ValueType contains a typographical error. | Small, 41.0 | 41.0 |
| won | Boolean | Indicates whether this opportunity stage value represents a won opportunity. Multiple opportunity stage values can represent a won opportunity. | Small, 41.0 | 41.0 |

#### See Also

-   [Picklist Value](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_picklist_value.htm "A single picklist value.")

## Related Topics

- Picklist Value (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_picklist_value.htm)
