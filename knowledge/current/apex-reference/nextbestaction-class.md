---
title: "NextBestAction Class"
domain: apex-reference
topic: nextbestaction-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.535Z
estimatedTokens: 3003
namespace: ConnectApi
keywords: [NextBestAction, Delete, recommendation, reaction., Usage, deleteRecommendationReaction, reactionId, API, Version, Requires, Chatter, executeStrategy, strategyName, maxResults, contextRecordId, Guest, Users, debugTrace, strategyInput, getRecommendation]
---

# NextBestAction Class

> Delete a recommendation reaction.

**Namespace:** `ConnectApi`

# NextBestAction Class

Execute recommendation strategies, get recommendations, manage recommendation reactions.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Usage

Community users can't access this class. Portal and guest users can access strategies only through the Suggested Actions component.

## NextBestAction Methods

These methods are for NextBestAction. All methods are static.

-   **[deleteRecommendationReaction(reactionId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NextBestAction_static_methods.htm#apex_ConnectAPI_NextBestAction_deleteRecommendationReaction_1)**
    Delete a recommendation reaction.
-   **[executeStrategy(strategyName, maxResults, contextRecordId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NextBestAction_static_methods.htm#apex_ConnectAPI_NextBestAction_executeStrategy_1)**
    Execute a strategy.
-   **[executeStrategy(strategyName, maxResults, contextRecordId, debugTrace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NextBestAction_static_methods.htm#apex_ConnectAPI_NextBestAction_executeStrategy_1a)**
    Execute a strategy and request a trace.
-   **[executeStrategy(strategyName, strategyInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NextBestAction_static_methods.htm#apex_ConnectAPI_NextBestAction_executeStrategy_2)**
    Execute a strategy using an input class.
-   **[getRecommendation(recommendationId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NextBestAction_static_methods.htm#apex_ConnectAPI_NextBestAction_getProposition_1)**
    Get a recommendation.
-   **[getRecommendationReaction(reactionId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NextBestAction_static_methods.htm#apex_ConnectAPI_NextBestAction_getRecommendationReaction_1)**
    Get a recommendation reaction.
-   **[getRecommendationReactions(onBehalfOfId, createdById, targetId, contextRecordId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NextBestAction_static_methods.htm#apex_ConnectAPI_NextBestAction_getRecommendationReactions_1)**
    Get recommendation reactions.
-   **[setRecommendationReaction(reaction)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NextBestAction_static_methods.htm#apex_ConnectAPI_NextBestAction_setRecommendationReaction_1)**
    Record user reactions to recommendations.

### deleteRecommendationReaction(reactionId)

Delete a recommendation reaction.

#### API Version

45.0

#### Requires Chatter

No

#### Signature

public static Void deleteRecommendationReaction(String reactionId)

#### Parameters

reactionId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the recommendation reaction or other sObject that caused the user to react.

#### Return Value

Type: Void

#### Usage

Users with the Manage Next Best Action Recommendations or Modify All Data permission can delete recommendation reactions.

### executeStrategy(strategyName, maxResults, contextRecordId)

Execute a strategy.

#### API Version

45.0

#### Available to Guest Users

45.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.NBARecommendations executeStrategy(String strategyName, Integer maxResults, String contextRecordId)

#### Parameters

strategyName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the strategy.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of results. Valid values are from 1 to 25. The default is 3.

contextRecordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context record. For example, if the next best action is on a case detail page, the ID of the case.

#### Return Value

Type: [ConnectApi.NBARecommendations](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_recommendations.htm#apex_connectapi_output_n_b_a_recommendations "Recommendations returned by a recommendation strategy.")

### executeStrategy(strategyName, maxResults, contextRecordId, debugTrace)

Execute a strategy and request a trace.

#### API Version

45.0

#### Available to Guest Users

45.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.NBARecommendations executeStrategy(String strategyName, Integer maxResults, String contextRecordId, Boolean debugTrace)

#### Parameters

strategyName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the strategy.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of results. Valid values are from 1 to 25. The default is 3.

contextRecordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context record. For example, if the next best action is on a case detail page, the ID of the case.

debugTrace

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return trace and debug information in the response (true) or not (false).

#### Return Value

Type: [ConnectApi.NBARecommendations](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_recommendations.htm#apex_connectapi_output_n_b_a_recommendations "Recommendations returned by a recommendation strategy.")

### executeStrategy(strategyName, strategyInput)

Execute a strategy using an input class.

#### API Version

45.0

#### Available to Guest Users

45.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.NBARecommendations executeStrategy(String strategyName, ConnectApi.NBAStrategyInput strategyInput)

#### Parameters

strategyName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the strategy.

strategyInput

Type: [ConnectApi.NBAStrategyInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_n_b_a_strategy_execution.htm#apex_connectapi_input_n_b_a_strategy_execution "A recommendation strategy.")

A ConnectApi.NBAStrategyInput body.

#### Return Value

Type: [ConnectApi.NBARecommendations](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_recommendations.htm#apex_connectapi_output_n_b_a_recommendations "Recommendations returned by a recommendation strategy.")

### getRecommendation(recommendationId)

Get a recommendation.

#### API Version

45.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Recommendation getRecommendation(String recommendationId)

#### Parameters

recommendationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the recommendation.

#### Return Value

Type: [ConnectApi.Recommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_proposition.htm#apex_connectapi_output_proposition "A Next Best Action recommendation object.")

### getRecommendationReaction(reactionId)

Get a recommendation reaction.

#### API Version

45.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RecommendationReaction getRecommendationReaction(String reactionId)

#### Parameters

reactionId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the recommendation reaction or other sObject that caused the user to react.

#### Return Value

Type: [ConnectApi.RecommendationReaction](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_reaction.htm#apex_connectapi_output_n_b_a_reaction "A reaction to a recommendation produced by a recommendation strategy")

#### Usage

Users with the Manage Next Best Action Recommendations or Modify All Data permission can get recommendation reactions.

### getRecommendationReactions(onBehalfOfId, createdById, targetId, contextRecordId, pageParam, pageSize)

Get recommendation reactions.

#### API Version

45.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RecommendationReactions getRecommendationReactions(String onBehalfOfId, String createdById, String targetId, String contextRecordId, Integer pageParam, Integer pageSize)

#### Parameters

onBehalfOfId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Use the ID of the user who is indirectly reacting to the recommendation to filter the results.

createdById

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Use the ID of the user or record that created the recommendation reaction to filter the results.

targetId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Use the ID of the target to filter the results.

contextRecordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Use the ID of a context record to filter the results.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.RecommendationReactions](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_reaction_collection.htm "A list of recommendation reactions.")

#### Usage

Users with the Manage Next Best Action Recommendations or Modify All Data permission can get recommendation reactions.

### setRecommendationReaction(reaction)

Record user reactions to recommendations.

#### API Version

45.0

#### Available to Guest Users

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RecommendationReaction setRecommendationReaction(ConnectApi.RecommendationReactionInput reaction)

#### Parameters

reaction

Type: [ConnectApi.RecommendationReactionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_n_b_a_reaction.htm#apex_connectapi_input_n_b_a_reaction "A reaction to a recommendation produced by a recommendation strategy.")

A ConnectApi.RecommendationReactionInput object representing a reaction to a recommendation produced by a recommendation strategy.

#### Return Value

Type: [ConnectApi.RecommendationReaction](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_reaction.htm#apex_connectapi_output_n_b_a_reaction "A reaction to a recommendation produced by a recommendation strategy")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- deleteRecommendationReaction(reactionId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NextBestAction_static_methods.htm)
- executeStrategy(strategyName, maxResults, contextRecordId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NextBestAction_static_methods.htm)
- executeStrategy(strategyName, maxResults, contextRecordId, debugTrace) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NextBestAction_static_methods.htm)
- executeStrategy(strategyName, strategyInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NextBestAction_static_methods.htm)
- getRecommendation(recommendationId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NextBestAction_static_methods.htm)
- getRecommendationReaction(reactionId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NextBestAction_static_methods.htm)
- getRecommendationReactions(onBehalfOfId, createdById, targetId, contextRecordId, pageParam, pageSize) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NextBestAction_static_methods.htm)
- setRecommendationReaction(reaction) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NextBestAction_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
