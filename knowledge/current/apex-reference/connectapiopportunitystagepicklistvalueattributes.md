---
title: "ConnectApi.OpportunityStagePicklistValueAttributes"
domain: apex-reference
topic: connectapiopportunitystagepicklistvalueattributes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.197Z
estimatedTokens: 323
keywords: [ConnectApi.OpportunityStagePicklistValueAttributes, Opportunity, stage, picklist, attributes.]
---

# ConnectApi.OpportunityStagePicklistValueAttributes

> Opportunity stage picklist value attributes.

# ConnectApi.OpportunityStagePicklistValueAttributes

Opportunity stage picklist value attributes.

Subclass of [ConnectApi.AbstractPicklistValueAttributes](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_picklist_value_attributes.htm "Picklist value attributes.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| closed | Boolean | Specifies whether the opportunity has a stage of closed (true) or not (false). Multiple opportunity stage values can represent a closed opportunity. | 66.0 |
| forecastCategoryName | String | Default percentage estimate of the confidence in closing an opportunity for this opportunity stage value. Value is null if forecasting isn’t enabled for the org. | 66.0 |
| deafultProbability | Double | Default forecast category value for this opportunity stage value. Value is null if forecasting isn’t enabled for the org. | 66.0 |
| won | Boolean | Specifies whether the opportunity has a stage of won (true) or not (false). Multiple opportunity stage values can represent a won opportunity. | 66.0 |

For more information, see the [OpportunityStage object documentation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_opportunitystage.htm).

## Related Topics

- ConnectApi.AbstractPicklistValueAttributes (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_picklist_value_attributes.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
