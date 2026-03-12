---
title: "IBusinessObjectivesAndRecsFamily Class"
domain: apex-reference
topic: ibusinessobjectivesandrecsfamily-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:18.872Z
estimatedTokens: 2536
namespace: ConnectApi
keywords: [IBusinessObjectivesAndRecsFamily, patch, business, objectives, goals, recommended, actions, createRecommendations, busObjRecommendationInput, API, Version, Requires, Chatter, getBusinessObjectives, webstoreId]
---

# IBusinessObjectivesAndRecsFamily Class

> Get and patch business objectives, or goals. Get, create, patch, and update recommended
  actions for business objectives.

**Namespace:** `ConnectApi`

# IBusinessObjectivesAndRecsFamily Class

Get and patch business objectives, or goals. Get, create, patch, and update recommended actions for business objectives.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## IBusinessObjectivesAndRecsFamily Methods

These methods are for IBusinessObjectivesAndRecsFamily. All methods are static.

-   **[createRecommendations(busObjRecommendationInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_IBusinessObjectivesAndRecsFamily_static_methods.htm#apex_ConnectAPI_IBusinessObjectivesAndRecsFamily_createRecommendations_3)**
    Create recommended actions for a business objective, or goal.
-   **[getBusinessObjectives(webstoreId, channelId, kpiName, includeRecSummary, includeInsightSummary)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_IBusinessObjectivesAndRecsFamily_static_methods.htm#apex_ConnectAPI_IBusinessObjectivesAndRecsFamily_getBusinessObjectives_1)**
    Get business objectives, or goals, for a webstore.
-   **[getRecommendations(businessObjectiveId, domain, channelId, externalName, state, secondaryState, tertiaryState, grouping)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_IBusinessObjectivesAndRecsFamily_static_methods.htm#apex_ConnectAPI_IBusinessObjectivesAndRecsFamily_getRecommendations_1)**
    Get recommended actions for a business objective, or goal.
-   **[patchBusinessObjective(busObjRecommendationInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_IBusinessObjectivesAndRecsFamily_static_methods.htm#apex_ConnectAPI_IBusinessObjectivesAndRecsFamily_patchBusinessObjective_2)**
    Partially update a business objective, or goal.
-   **[patchRecommendations(busObjRecommendationInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_IBusinessObjectivesAndRecsFamily_static_methods.htm#apex_ConnectAPI_IBusinessObjectivesAndRecsFamily_patchRecommendations_2)**
    Partially update a recommended action associated with a business objective, or goal.
-   **[updateRecommendations(busObjRecommendationInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_IBusinessObjectivesAndRecsFamily_static_methods.htm#apex_ConnectAPI_IBusinessObjectivesAndRecsFamily_updateRecommendations_4)**
    Update a recommended action for a business objective, or goal.

### createRecommendations(busObjRecommendationInput)

Create recommended actions for a business objective, or goal.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RecRepresentation createRecommendations(ConnectApi.BusObjRecommendationInputRepresentation busObjRecommendationInput)

#### Parameters

busObjRecommendationInput

Type: [ConnectApi.BusObjRecommendationInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_bus_obj_recommendation.htm "Recommended action for a business objective, or goal.")

A ConnectApi.BusObjRecommendationInputRepresentation object representing a recommended action for a business objective.

#### Return Value

Type: [ConnectApi.RecRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_rec.htm "Recommended action.")

### getBusinessObjectives(webstoreId, channelId, kpiName, includeRecSummary, includeInsightSummary)

Get business objectives, or goals, for a webstore.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BusinessObjectivesSummaryOutputRepresentation getBusinessObjectives(String webstoreId, String channelId, String kpiName, Boolean includeRecSummary, Boolean includeInsightSummary)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the channel.

kpiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the key performance indicator (KPI).

includeRecSummary

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include a summary of recommended actions in the response.

includeInsightSummary

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include insight summary information in the response.

#### Return Value

Type: [ConnectApi.BusinessObjectivesSummaryOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_business_objectives_summary_output.htm "List of summaries for business objectives, or goals.")

### getRecommendations(businessObjectiveId, domain, channelId, externalName, state, secondaryState, tertiaryState, grouping)

Get recommended actions for a business objective, or goal.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RecommendationsOutputRepresentation getRecommendations(String businessObjectiveId, String domain, String channelId, String externalName, String state, String secondaryState, String tertiaryState, String grouping)

#### Parameters

businessObjectiveId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the business objective.

domain

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Recommendation domain.

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the channel.

externalName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

External name of the recommended action.

state

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

State of the recommended action.

secondaryState

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Secondary state of the recommended action.

tertiaryState

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Tertiary state of the recommended action.

grouping

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Grouping associated with the recommended action. This is a free-form categorization field.

#### Return Value

Type: [ConnectApi.RecommendationsOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendations_output.htm "List of recommended actions.")

### patchBusinessObjective(busObjRecommendationInput)

Partially update a business objective, or goal.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BusObjSummaryOutputRepresentation patchBusinessObjective(ConnectApi.BusinessObjectivesInputRepresentation busObjRecommendationInput)

#### Parameters

busObjRecommendationInput

Type: [ConnectApi.BusinessObjectivesInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_business_objective.htm "A business objective, or goal, and insights associated with it.")

A ConnectApi.BusinessObjectivesInputRepresentation object representing the business objective or objectives to update.

#### Return Value

Type: [ConnectApi.BusObjSummaryOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_bus_obj_summary_output.htm "Summary of a business objective, or goal.")

### patchRecommendations(busObjRecommendationInput)

Partially update a recommended action associated with a business objective, or goal.

#### API Version

61.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RecRepresentation patchRecommendations(ConnectApi.BusObjRecommendationInputRepresentation busObjRecommendationInput)

#### Parameters

busObjRecommendationInput

Type: [ConnectApi.BusObjRecommendationInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_bus_obj_recommendation.htm "Recommended action for a business objective, or goal.")

A ConnectApi.BusObjRecommendationInputRepresentation object representing the recommended action to update.

#### Return Value

Type: [ConnectApi.RecRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_rec.htm "Recommended action.")

### updateRecommendations(busObjRecommendationInput)

Update a recommended action for a business objective, or goal.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RecRepresentation updateRecommendations(ConnectApi.BusObjRecommendationInputRepresentation busObjRecommendationInput)

#### Parameters

busObjRecommendationInput

Type: [ConnectApi.BusObjRecommendationInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_bus_obj_recommendation.htm "Recommended action for a business objective, or goal.")

A ConnectApi.BusObjRecommendationInputRepresentation object representing the recommended action to update.

#### Return Value

Type: [ConnectApi.RecRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_rec.htm "Recommended action.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- createRecommendations(busObjRecommendationInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_IBusinessObjectivesAndRecsFamily_static_methods.htm)
- getBusinessObjectives(webstoreId, channelId, kpiName, includeRecSummary, includeInsightSummary) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_IBusinessObjectivesAndRecsFamily_static_methods.htm)
- getRecommendations(businessObjectiveId, domain, channelId, externalName, state, secondaryState, tertiaryState, grouping) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_IBusinessObjectivesAndRecsFamily_static_methods.htm)
- patchBusinessObjective(busObjRecommendationInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_IBusinessObjectivesAndRecsFamily_static_methods.htm)
- patchRecommendations(busObjRecommendationInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_IBusinessObjectivesAndRecsFamily_static_methods.htm)
- updateRecommendations(busObjRecommendationInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_IBusinessObjectivesAndRecsFamily_static_methods.htm)
- ConnectApi.BusObjRecommendationInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_bus_obj_recommendation.htm)
- ConnectApi.RecRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_rec.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
